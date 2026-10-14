/**
 * REVEX certification backend (Google Apps Script).
 *
 * DO NOT EDIT Code.gs BY HAND. It is generated from Code.template.gs by
 * build.py so the answer key always matches the questions on the site.
 * Answer key version: __KEY_VERSION__
 *
 * What it does
 *   POST  { action: "submit", name, ids: [...], answers: [...] }
 *         -> scores the exam on the server, records the attempt, and
 *            issues a certificate ID if the score passes.
 *   GET   ?action=verify&id=RVX-...   -> confirms a certificate
 *   GET   ?action=ping                -> health check
 *
 * Data is stored in the spreadsheet this script is attached to:
 *   "Certificates" sheet: one row per issued certificate
 *   "Attempts" sheet:     one row per exam attempt (name, score, time)
 */

var CONFIG = {
  QUESTIONS: 50,
  PASS_PERCENT: 75,
  CERT_NAME: "REVEX Certified RCM Associate",
  CERT_SHEET: "Certificates",
  ATTEMPT_SHEET: "Attempts",
  KEY_VERSION: "__KEY_VERSION__",
  // The site publishes the current answer key here on every build, so this
  // script stays in sync without being re-pasted when questions change.
  KEY_URL: "__KEY_URL__"
};

var ANSWER_KEY = /*__ANSWER_KEY__*/{};

/* Returns the latest answer key from the site (cached for 30 minutes),
   falling back to the copy embedded above. */
function getKey_() {
  if (!CONFIG.KEY_URL) return ANSWER_KEY;
  var cache = CacheService.getScriptCache();
  var cached = cache.get("key-v2");
  if (cached) { try { return JSON.parse(cached); } catch (e) {} }
  try {
    var res = UrlFetchApp.fetch(CONFIG.KEY_URL, { muteHttpExceptions: true });
    if (res.getResponseCode() === 200) {
      var text = res.getContentText();
      var parsed = JSON.parse(text);
      if (parsed && Object.keys(parsed).length > 50) {
        if (text.length < 95000) cache.put("key-v2", text, 1800);
        return parsed;
      }
    }
  } catch (e) {}
  return ANSWER_KEY;
}

/* ------------------------------------------------------------ web entry points */

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.action === "verify") return json_(verifyCertificate_(String(p.id || "")));
  if (p.action === "ping") return json_({ ok: true, keyVersion: CONFIG.KEY_VERSION, questions: Object.keys(getKey_()).length });
  return json_({ ok: false, error: "Unknown action." });
}

function doPost(e) {
  var body;
  try { body = JSON.parse(e.postData.contents); } catch (err) { return json_({ ok: false, error: "The request could not be read." }); }
  if (body.action !== "submit") return json_({ ok: false, error: "Unknown action." });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    return json_(submitExam_(body, new Date()));
  } finally {
    lock.releaseLock();
  }
}

/* ------------------------------------------------------------ core logic (pure, testable) */

function cleanName_(name) {
  // Keep letters, combining marks, spaces, full stops, apostrophes and hyphens only.
  return String(name || "").replace(/[^\p{L}\p{M} .'\u2019-]/gu, "").replace(/\s+/g, " ").trim().slice(0, 80);
}

function scoreAttempt_(ids, answers) {
  if (!Array.isArray(ids) || !Array.isArray(answers)) return { error: "Answers are missing." };
  if (ids.length !== CONFIG.QUESTIONS || answers.length !== ids.length) return { error: "The exam must have " + CONFIG.QUESTIONS + " questions." };
  var KEY = getKey_();
  var seen = {};
  var results = [];
  var correct = 0;
  for (var i = 0; i < ids.length; i++) {
    var id = String(ids[i]);
    if (seen[id]) return { error: "Duplicate question in the exam." };
    seen[id] = true;
    var k = KEY[id];
    if (!k) return { error: "The exam questions are out of date. Reload the page and start again.", stale: true };
    var given = answers[i] === null || answers[i] === undefined ? -1 : Number(answers[i]);
    var ok = given === k.a;
    if (ok) correct++;
    results.push({ id: id, correct: ok, answer: k.a, why: k.w });
  }
  var percent = Math.round(correct / ids.length * 1000) / 10;
  return { correct: correct, total: ids.length, percent: percent, passed: percent >= CONFIG.PASS_PERCENT, results: results };
}

function makeCertId_(date) {
  var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  var s = "";
  for (var i = 0; i < 8; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
  var ym = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2);
  return "RVX-" + ym + "-" + s;
}

function submitExam_(body, now) {
  var name = cleanName_(body.name);
  if (name.length < 2) return { ok: false, error: "Enter your full name as it should appear on the certificate." };
  var score = scoreAttempt_(body.ids, body.answers);
  if (score.error) return { ok: false, error: score.error, stale: !!score.stale };
  var store = store_();
  store.addAttempt([now.toISOString(), name, score.correct, score.total, score.percent, score.passed ? "Passed" : "Not passed"]);
  var out = { ok: true, name: name, correct: score.correct, total: score.total, percent: score.percent, passed: score.passed, results: score.results };
  if (score.passed) {
    var id = makeCertId_(now);
    while (store.findCert(id)) id = makeCertId_(now);
    store.addCert([id, name, score.percent, score.correct + "/" + score.total, now.toISOString(), CONFIG.CERT_NAME, "Valid"]);
    out.certId = id;
    out.issued = now.toISOString();
    out.certName = CONFIG.CERT_NAME;
  }
  return out;
}

function verifyCertificate_(id) {
  id = String(id || "").toUpperCase().trim();
  if (!/^RVX-\d{6}-[A-Z0-9]{8}$/.test(id)) return { ok: true, valid: false, reason: "That isn't a valid certificate ID format." };
  var row = store_().findCert(id);
  if (!row) return { ok: true, valid: false, reason: "No certificate with this ID was found." };
  if (row[6] && row[6] !== "Valid") return { ok: true, valid: false, reason: "This certificate has been revoked." };
  // Only what's needed to confirm the certificate; the score stays private.
  return { ok: true, valid: true, id: row[0], name: row[1], issued: row[4], certName: row[5] };
}

/* ------------------------------------------------------------ storage (Google Sheets) */

function store_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  function sheet(name, header) {
    var sh = ss.getSheetByName(name);
    if (!sh) { sh = ss.insertSheet(name); sh.appendRow(header); sh.setFrozenRows(1); }
    return sh;
  }
  var certs = sheet(CONFIG.CERT_SHEET, ["Certificate ID", "Name", "Percent", "Score", "Issued (UTC)", "Certificate", "Status"]);
  var attempts = sheet(CONFIG.ATTEMPT_SHEET, ["Time (UTC)", "Name", "Correct", "Total", "Percent", "Result"]);
  return {
    addAttempt: function (r) { attempts.appendRow(r); },
    addCert: function (r) { certs.appendRow(r); },
    findCert: function (id) {
      var found = certs.getRange("A:A").createTextFinder(id).matchEntireCell(true).findNext();
      if (!found || found.getRow() === 1) return null;
      return certs.getRange(found.getRow(), 1, 1, 7).getValues()[0];
    }
  };
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* Run this once from the editor to create the sheets and approve permissions. */
function setup() {
  store_();
  Logger.log("REVEX certification is ready. Questions in key: " + Object.keys(ANSWER_KEY).length);
}
