/* REVEX certification exam. Questions come from the public bank; scoring and
   certificate IDs come from the REVEX Apps Script service. */
(function () {
  "use strict";
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var cfgEl = $("[data-exam-config]");
  if (!cfgEl) return;
  var CFG = JSON.parse(cfgEl.textContent);
  var ROOT = document.body.getAttribute("data-root") || "./";
  var SESSION_KEY = "revex-exam-session", LOCK_KEY = "revex-exam-lock", CERT_KEY = "revex-cert";
  var bank = null, byId = {}, S = null, timerId = null;

  function store(k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function load(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function show(name) { $$("[data-screen]").forEach(function (s) { s.hidden = s.getAttribute("data-screen") !== name; }); window.scrollTo(0, 0); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function verifyUrl(id) { return CFG.siteUrl.replace(/\/$/, "") + "/verify/?id=" + encodeURIComponent(id); }

  function loadBank() {
    if (bank) return Promise.resolve(bank);
    return fetch(ROOT + "static/exam/bank.json", { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (d) {
      bank = d; d.questions.forEach(function (q) { byId[q.id] = q; }); return d;
    });
  }

  /* ---------- pick a balanced random set */
  function pick(n) {
    var groups = {};
    bank.questions.forEach(function (q) { (groups[q.s] = groups[q.s] || []).push(q); });
    var keys = Object.keys(groups), total = bank.questions.length;
    var quota = {}, sum = 0;
    var cap = Math.ceil(n * 0.24);
    keys.forEach(function (k) { quota[k] = Math.max(1, Math.round(n * groups[k].length / total)); quota[k] = Math.min(quota[k], groups[k].length, cap); sum += quota[k]; });
    var order = keys.slice().sort(function (a, b) { return groups[b].length - groups[a].length; });
    var i = 0;
    while (sum !== n && i < 1000) {
      var k = order[i % order.length];
      if (sum > n && quota[k] > 1) { quota[k]--; sum--; }
      else if (sum < n && quota[k] < groups[k].length && quota[k] < cap) { quota[k]++; sum++; }
      i++;
    }
    var chosen = [];
    keys.forEach(function (k) { chosen = chosen.concat(shuffle(groups[k].slice()).slice(0, quota[k])); });
    return shuffle(chosen).map(function (q) { return q.id; });
  }

  /* ---------- intro */
  var form = $("[data-start-form]"), errEl = $("[data-start-error]");
  function startError(msg) { errEl.textContent = msg; errEl.hidden = !msg; }

  function init() {
    if (!CFG.api) { $("[data-api-missing]").hidden = false; form.hidden = true; return; }
    var lock = load(LOCK_KEY);
    if (lock && lock.until > Date.now()) {
      var hrs = Math.ceil((lock.until - Date.now()) / 3600000);
      startError("You can retake the exam in about " + hrs + " hour" + (hrs === 1 ? "" : "s") + ". Use the time to revisit the sections where you lost marks.");
      $("[data-start-btn]").disabled = true;
    }
    var saved = load(SESSION_KEY);
    if (saved && saved.endsAt > Date.now() && saved.v) {
      $("[data-resume]").hidden = false; form.hidden = true;
    } else if (saved) store(SESSION_KEY, null);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = $("#cand-name").value.replace(/\s+/g, " ").trim();
    if (name.length < 2 || name.split(" ").length < 2) { startError("Enter your full name (first and last) as it should appear on the certificate."); return; }
    if (!$("#cand-agree").checked) { startError("Tick the box to confirm before you start."); return; }
    startError("");
    $("[data-start-btn]").disabled = true; $("[data-start-btn]").textContent = "Loading questions…";
    loadBank().then(function () {
      var ids = pick(CFG.questions);
      S = { v: bank.v, name: name, ids: ids, answers: ids.map(function () { return null; }), flags: {}, idx: 0, startedAt: Date.now(), endsAt: Date.now() + CFG.minutes * 60000 };
      store(SESSION_KEY, S); begin();
    }).catch(function () {
      startError("The questions couldn't be loaded. Check your connection and try again.");
      $("[data-start-btn]").disabled = false; $("[data-start-btn]").textContent = "Start the exam";
    });
  });
  $("[data-resume-btn]").addEventListener("click", function () {
    loadBank().then(function () {
      S = load(SESSION_KEY);
      if (!S || S.v !== bank.v || S.ids.some(function (id) { return !byId[id]; })) {
        store(SESSION_KEY, null); location.reload(); return;
      }
      begin();
    });
  });
  $("[data-discard-btn]").addEventListener("click", function () { store(SESSION_KEY, null); location.reload(); });

  /* ---------- exam */
  var nav = $("[data-q-nav]");
  function begin() {
    show("exam");
    nav.innerHTML = S.ids.map(function (_, i) { return '<button type="button" data-go="' + i + '" aria-label="Question ' + (i + 1) + '">' + (i + 1) + "</button>"; }).join("");
    renderQ(); tick(); timerId = setInterval(tick, 1000);
    window.addEventListener("beforeunload", warn);
  }
  function warn(e) { if (S && !S.done) { e.preventDefault(); e.returnValue = ""; } }
  function save() { store(SESSION_KEY, S); }

  function renderQ() {
    var q = byId[S.ids[S.idx]];
    $("[data-q-count]").textContent = "Question " + (S.idx + 1) + " of " + S.ids.length;
    $("[data-q-section]").textContent = CFG.sections[q.s] || "";
    $("[data-q-text]").innerHTML = q.q;
    var box = $("[data-q-options]");
    box.innerHTML = q.o.map(function (o, i) {
      var sel = S.answers[S.idx] === i;
      return '<button type="button" role="radio" aria-checked="' + sel + '" class="opt' + (sel ? " is-sel" : "") + '" data-i="' + i + '"><span class="opt-key">' + "ABCD".charAt(i) + '</span><span class="opt-text">' + o + "</span></button>";
    }).join("");
    $$(".opt", box).forEach(function (b) {
      b.addEventListener("click", function () {
        S.answers[S.idx] = parseInt(b.getAttribute("data-i"), 10); save(); renderQ();
      });
    });
    $("[data-prev]").disabled = S.idx === 0;
    $("[data-next]").textContent = S.idx === S.ids.length - 1 ? "Review and submit" : "Next";
    var f = !!S.flags[S.idx];
    $("[data-flag]").setAttribute("aria-pressed", f); $("[data-flag]").textContent = f ? "Flagged" : "Flag for review";
    $("[data-flag]").classList.toggle("is-on", f);
    var answered = S.answers.filter(function (a) { return a !== null; }).length;
    $("[data-answered-bar]").style.width = (answered / S.ids.length * 100) + "%";
    $("[data-answered-text]").textContent = answered + " answered";
    $$("button", nav).forEach(function (b, i) {
      b.classList.toggle("is-a", S.answers[i] !== null); b.classList.toggle("is-f", !!S.flags[i]); b.classList.toggle("is-cur", i === S.idx);
    });
  }
  $("[data-prev]").addEventListener("click", function () { if (S.idx > 0) { S.idx--; save(); renderQ(); } });
  $("[data-next]").addEventListener("click", function () { if (S.idx < S.ids.length - 1) { S.idx++; save(); renderQ(); } else openSubmit(); });
  $("[data-flag]").addEventListener("click", function () { if (S.flags[S.idx]) delete S.flags[S.idx]; else S.flags[S.idx] = 1; save(); renderQ(); });
  nav.addEventListener("click", function (e) { var b = e.target.closest("[data-go]"); if (b) { S.idx = parseInt(b.getAttribute("data-go"), 10); save(); renderQ(); } });
  $("[data-review]").addEventListener("click", openSubmit);
  document.addEventListener("keydown", function (e) {
    if (!S || S.done || $("[data-screen=exam]").hidden || !$("[data-submit-sheet]").hidden) return;
    var t = (e.target.tagName || "").toLowerCase(); if (t === "input" || t === "textarea") return;
    var k = e.key.toLowerCase();
    if ("abcd".indexOf(k) >= 0 && k.length === 1) { var i = "abcd".indexOf(k); if (byId[S.ids[S.idx]].o[i] !== undefined) { S.answers[S.idx] = i; save(); renderQ(); } }
    else if (e.key === "ArrowRight") $("[data-next]").click(); else if (e.key === "ArrowLeft") $("[data-prev]").click();
  });

  function tick() {
    var left = Math.max(0, S.endsAt - Date.now());
    var m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000);
    $("[data-timer-text]").textContent = m + ":" + (s < 10 ? "0" : "") + s;
    $("[data-timer]").classList.toggle("is-low", left < 5 * 60000);
    if (left <= 0) { clearInterval(timerId); submit(true); }
  }

  var sheet = $("[data-submit-sheet]");
  function openSubmit() {
    var un = S.answers.filter(function (a) { return a === null; }).length, fl = Object.keys(S.flags).length;
    $("[data-submit-summary]").textContent = (un ? un + " question" + (un === 1 ? " is" : "s are") + " unanswered and will be marked wrong. " : "All questions are answered. ") +
      (fl ? fl + " flagged for review. " : "") + "You can't change answers after you submit.";
    $("[data-submit-error]").hidden = true;
    sheet.hidden = false; $("[data-submit-confirm]").focus();
  }
  $("[data-submit-cancel]").addEventListener("click", function () { sheet.hidden = true; });
  $("[data-submit-confirm]").addEventListener("click", function () { submit(false); });

  function submit(auto) {
    if (S.submitting) return;
    S.submitting = true;
    var btn = $("[data-submit-confirm]"); btn.disabled = true; btn.textContent = "Submitting…";
    if (auto) { sheet.hidden = false; $("[data-submit-summary]").textContent = "Time's up. Submitting your answers…"; }
    fetch(CFG.api, {
      method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "submit", name: S.name, ids: S.ids, answers: S.answers.map(function (a) { return a === null ? -1 : a; }) })
    }).then(function (r) { return r.json(); }).then(function (res) {
      if (!res.ok) throw new Error(res.error || "The exam service returned an error.");
      S.done = true; store(SESSION_KEY, null); clearInterval(timerId);
      window.removeEventListener("beforeunload", warn);
      sheet.hidden = true; showResult(res);
    }).catch(function (err) {
      S.submitting = false; btn.disabled = false; btn.textContent = "Try submitting again";
      var el = $("[data-submit-error]"); el.hidden = false;
      el.textContent = (err && err.message && err.message.indexOf("fetch") < 0 ? err.message : "Your answers couldn't be sent. Check your connection and try again; your answers are saved on this device.");
    });
  }

  /* ---------- results */
  function showResult(res) {
    show("result");
    var head = $("[data-result-head]");
    var passMark = CFG.pass;
    if (res.passed) {
      head.className = "result-head is-pass";
      head.innerHTML = '<p class="result-kicker">Passed</p><h1>Congratulations, ' + esc(res.name.split(" ")[0]) + "</h1>" +
        '<p class="lede">You scored <strong>' + res.percent + "%</strong> (" + res.correct + " of " + res.total + "). Your certificate ID is <strong class=\"mono\">" + esc(res.certId) + "</strong>.</p>";
      var data = { name: res.name, certName: res.certName || CFG.name, percent: res.percent, id: res.certId, issued: res.issued, verifyUrl: verifyUrl(res.certId), signatory: CFG.signatory, signatoryTitle: CFG.signatoryTitle };
      store(CERT_KEY, data);
      $("[data-cert-area]").hidden = false;
      var canvas = $("[data-cert-canvas]");
      window.REVEXCert.draw(canvas, data);
      $("[data-dl-pdf]").onclick = function () { window.REVEXCert.downloadPDF(canvas, data); };
      $("[data-dl-png]").onclick = function () { window.REVEXCert.downloadPNG(canvas, data); };
      $("[data-linkedin]").href = window.REVEXCert.linkedInUrl(data);
      $("[data-verify-link]").href = data.verifyUrl;
      $("[data-cert-id-note]").textContent = "Anyone can confirm this certificate at " + data.verifyUrl.replace(/^https?:\/\//, "") + ". Keep your certificate ID safe.";
    } else {
      store(LOCK_KEY, { until: Date.now() + CFG.retake * 3600000 });
      head.className = "result-head is-fail";
      head.innerHTML = '<p class="result-kicker">Not passed this time</p><h1>You scored ' + res.percent + "%</h1>" +
        '<p class="lede">You needed ' + passMark + "% (" + Math.ceil(res.total * passMark / 100) + " of " + res.total + "). You can retake the exam in " + CFG.retake + " hours. The breakdown below shows where to focus.</p>";
    }
    // section breakdown
    var by = {};
    res.results.forEach(function (r) { var s = (byId[r.id] || {}).s || "other"; by[s] = by[s] || { c: 0, t: 0 }; by[s].t++; if (r.correct) by[s].c++; });
    var rows = Object.keys(by).sort(function (a, b) { return by[a].c / by[a].t - by[b].c / by[b].t; }).map(function (s) {
      var p = Math.round(by[s].c / by[s].t * 100);
      return '<div class="bd-row"><a href="' + ROOT + s + '/">' + esc(CFG.sections[s] || s) + '</a><div class="prog-bar"><i style="width:' + p + '%"></i></div><span class="mono">' + by[s].c + "/" + by[s].t + "</span></div>";
    }).join("");
    $("[data-breakdown]").innerHTML = "<h2>Score by section</h2>" + rows;
    // answer review
    var list = res.results.map(function (r, i) {
      var q = byId[r.id]; if (!q) return "";
      var given = S.answers[i];
      return '<details class="rv ' + (r.correct ? "rv-ok" : "rv-bad") + '"><summary><span class="rv-n">' + (i + 1) + "</span><span>" + q.q + '</span><span class="rv-tag">' + (r.correct ? "Correct" : "Incorrect") + "</span></summary>" +
        '<ul class="rv-opts">' + q.o.map(function (o, j) { return '<li class="' + (j === r.answer ? "is-right" : (j === given ? "is-given" : "")) + '">' + o + (j === r.answer ? " <b>(correct)</b>" : (j === given ? " <b>(your answer)</b>" : "")) + "</li>"; }).join("") +
        "</ul>" + (r.why ? '<p class="rv-why">' + esc(r.why) + "</p>" : "") + "</details>";
    }).join("");
    $("[data-review-list]").innerHTML = "<h2>Review your answers</h2>" + list;
  }

  init();
})();
