/* Unit tests for the REVEX calculators. Run: node tests/calc.test.js
   Expected values were worked out by hand and are written as literals. */
"use strict";
global.window = {};
require("../static/js/tools.js");
var C = window.REVEXCalc;
var results = [], failed = 0;
function t(id, name, fn) {
  try { fn(); results.push(["PASS", id, name]); }
  catch (e) { failed++; results.push(["FAIL", id, name + " -> " + e.message]); }
}
function eq(a, b, msg) { if (a !== b) throw new Error((msg || "") + " expected " + JSON.stringify(b) + ", got " + JSON.stringify(a)); }
function near(a, b, msg) { if (Math.abs(a - b) > 1e-6) throw new Error((msg || "") + " expected " + b + ", got " + a); }
var D = C.parseDate;

/* ---------------- dates */
t("TF-01", "parseDate rejects impossible dates", function () { eq(D("2026-02-30"), null); eq(D("2025-02-29"), null); eq(D(""), null); eq(D("abc"), null); eq(D("1800-01-01"), null); });
t("TF-02", "parseDate accepts leap day", function () { eq(C.iso(D("2024-02-29")), "2024-02-29"); });
t("TF-03", "90 days from 2026-01-01 is 2026-04-01", function () { eq(C.iso(C.timelyFiling({ start: D("2026-01-01"), rule: "days", days: 90 }).deadline), "2026-04-01"); });
t("TF-04", "180 days across US DST change (2026-03-01 + 180 = 2026-08-28)", function () { eq(C.iso(C.timelyFiling({ start: D("2026-03-01"), rule: "days", days: 180 }).deadline), "2026-08-28"); });
t("TF-05", "365 days across a leap year (2023-03-01 + 365 = 2024-02-29)", function () { eq(C.iso(C.timelyFiling({ start: D("2023-03-01"), rule: "days", days: 365 }).deadline), "2024-02-29"); });
t("TF-06", "1 calendar year from 2026-03-15 is 2027-03-15", function () { eq(C.iso(C.timelyFiling({ start: D("2026-03-15"), rule: "year" }).deadline), "2027-03-15"); });
t("TF-07", "1 calendar year from leap day 2024-02-29 clamps to 2025-02-28", function () { var r = C.timelyFiling({ start: D("2024-02-29"), rule: "year" }); eq(C.iso(r.deadline), "2025-02-28"); eq(r.notes.length, 1); });
t("TF-08", "Month-end: 30 days from 2026-01-31 is 2026-03-02", function () { eq(C.iso(C.timelyFiling({ start: D("2026-01-31"), rule: "days", days: 30 }).deadline), "2026-03-02"); });
t("TF-09", "Workday roll: 2026-01-03 + 1 year = Sun 2027-01-03 -> Mon 2027-01-04", function () { eq(C.iso(C.timelyFiling({ start: D("2026-01-03"), rule: "year", roll: true }).deadline), "2027-01-04"); });
t("TF-10", "Workday roll over a holiday: Sat 2026-07-04 + 1 year = Sun 2027-07-04 -> Mon 07-05 is observed holiday -> Tue 2027-07-06", function () { eq(C.iso(C.timelyFiling({ start: D("2026-07-04"), rule: "year", roll: true }).deadline), "2027-07-06"); });
t("TF-11", "No roll when the option is off", function () { eq(C.iso(C.timelyFiling({ start: D("2026-01-03"), rule: "year", roll: false }).deadline), "2027-01-03"); });
t("TF-12", "Presumed receipt adds 5 days before counting (Medicare redetermination 120 days)", function () { eq(C.iso(C.timelyFiling({ start: D("2026-01-01"), rule: "days", days: 120, presume5: true }).deadline), "2026-05-06"); });
t("TF-13", "Days left and passed deadlines", function () { var r = C.timelyFiling({ start: D("2026-01-01"), rule: "days", days: 90, asOf: D("2026-04-03") }); eq(r.daysLeft, -2); r = C.timelyFiling({ start: D("2026-01-01"), rule: "days", days: 90, asOf: D("2026-04-01") }); eq(r.daysLeft, 0); });
t("TF-14", "Invalid inputs return errors, not dates", function () { eq(!!C.timelyFiling({ start: null, rule: "days", days: 90 }).error, true); eq(!!C.timelyFiling({ start: D("2026-01-01"), rule: "days", days: 0 }).error, true); eq(!!C.timelyFiling({ start: D("2026-01-01"), rule: "days", days: 1.5 }).error, true); eq(!!C.timelyFiling({ start: D("2026-01-01"), rule: "days", days: null }).error, true); });
t("TF-15", "Federal holidays 2026 (observed)", function () {
  var h = C.federalHolidays(2026).map(function (x) { return x[0] + " " + C.iso(x[1]); }).sort().join("|");
  var want = ["Christmas Day 2026-12-25", "Columbus Day 2026-10-12", "Independence Day 2026-07-03", "Juneteenth 2026-06-19", "Labor Day 2026-09-07", "Martin Luther King Jr. Day 2026-01-19", "Memorial Day 2026-05-25", "New Year's Day 2026-01-01", "Thanksgiving Day 2026-11-26", "Veterans Day 2026-11-11", "Washington's Birthday 2026-02-16"].sort().join("|");
  eq(h, want);
});
t("TF-16", "New Year's Day 2022 (Saturday) is observed Fri 2021-12-31", function () { var h = C.federalHolidays(2021).map(function (x) { return C.iso(x[1]); }); eq(h.indexOf("2021-12-31") >= 0, true); });

/* ---------------- KPIs */
function k(inp) { var o = {}; C.kpis(inp).forEach(function (r) { o[r.id] = r; }); return o; }
var base = { ar: 640000, ar90: 96000, charges90: 1800000, periodDays: 90, pay: 540000, charges: 1200000, contract: 640000, claims: 4000, clean: 3840, denied: 280, adjudicated: 3700 };
t("KPI-01", "Known values for the example data", function () {
  var r = k(base);
  near(r.dar.value, 32); near(r.ar90.value, 15); near(r.ncr.value, 540000 / 560000 * 100); near(r.gcr.value, 45); near(r.ccr.value, 96); near(r.dr.value, 280 / 3700 * 100);
});
t("KPI-02", "Zero denominators give an error, never NaN or Infinity", function () {
  var r = k(Object.assign({}, base, { charges90: 0, ar: 0, claims: 0, adjudicated: 0, charges: 0, contract: 0 }));
  ["dar", "ar90", "ccr", "dr", "gcr", "ncr"].forEach(function (id) { eq(r[id].value, null, id); eq(!!r[id].error, true, id); });
});
t("KPI-03", "Blank inputs ask for the missing field", function () { var r = k(Object.assign({}, base, { ar: null })); eq(r.dar.value, null); eq(/total AR/.test(r.dar.error), true); });
t("KPI-04", "Negative values are rejected", function () { var r = k(Object.assign({}, base, { pay: -5 })); eq(r.ncr.value, null); eq(/negative/.test(r.ncr.error), true); });
t("KPI-05", "Impossible values are rejected", function () {
  var r = k(Object.assign({}, base, { ar90: 700000, clean: 4100, denied: 3800, contract: 1300000 }));
  ["ar90", "ccr", "dr", "ncr"].forEach(function (id) { eq(r[id].value, null, id); });
});

/* ---------------- payment */
t("PAY-01", "Deductible then coinsurance: billed 250, allowed 150, ded 50, 20%", function () {
  var r = C.payment({ billed: 250, allowed: 150, design: "ded-coins", dedLeft: 50, coinsPct: 20 });
  eq(r.co45, 100); eq(r.ded, 50); eq(r.coins, 20); eq(r.pr, 70); eq(r.paid, 80); eq(r.paid + r.co45 + r.pr, 250);
});
t("PAY-02", "Copay only: allowed 150, copay 30", function () { var r = C.payment({ billed: 250, allowed: 150, design: "copay-only", copay: 30, dedLeft: 50, coinsPct: 20 }); eq(r.copay, 30); eq(r.ded, 0); eq(r.coins, 0); eq(r.paid, 120); });
t("PAY-03", "Copay then deductible and coinsurance", function () { var r = C.payment({ billed: 300, allowed: 200, design: "copay-then-ded", copay: 20, dedLeft: 100, coinsPct: 10 }); eq(r.copay, 20); eq(r.ded, 100); eq(r.coins, 8); eq(r.pr, 128); eq(r.paid, 72); });
t("PAY-04", "Out-of-pocket cap limits patient share", function () { var r = C.payment({ billed: 1000, allowed: 800, design: "ded-coins", dedLeft: 400, coinsPct: 20, oopLeft: 450 }); eq(r.pr, 450); eq(r.ded, 400); eq(r.coins, 50); eq(r.paid, 350); eq(r.capped, true); });
t("PAY-05", "Deductible larger than allowed: plan pays 0, no negatives", function () { var r = C.payment({ billed: 200, allowed: 100, design: "ded-coins", dedLeft: 500, coinsPct: 20 }); eq(r.ded, 100); eq(r.coins, 0); eq(r.paid, 0); });
t("PAY-06", "Secondary non-duplication estimate", function () { var r = C.payment({ billed: 250, allowed: 150, design: "ded-coins", dedLeft: 50, coinsPct: 20, secAllowed: 120 }); eq(r.secPays, 40); eq(r.afterSec, 30); r = C.payment({ billed: 250, allowed: 150, design: "ded-coins", dedLeft: 0, coinsPct: 20, secAllowed: 100 }); eq(r.secPays, 0); });
t("PAY-07", "Invalid inputs", function () {
  eq(!!C.payment({ billed: null, allowed: 100, design: "ded-coins" }).error, true);
  eq(!!C.payment({ billed: 100, allowed: -1, design: "ded-coins" }).error, true);
  eq(!!C.payment({ billed: 100, allowed: 80, design: "ded-coins", coinsPct: 120 }).error, true);
});
t("PAY-08", "Allowed above billed warns and never shows a negative contractual adjustment", function () { var r = C.payment({ billed: 100, allowed: 120, design: "ded-coins", dedLeft: 0, coinsPct: 0 }); eq(r.warn.length, 1); eq(r.co45, 0); });

results.forEach(function (r) { console.log(r.join("\t")); });
console.log((results.length - failed) + "/" + results.length + " passed");
process.exit(failed ? 1 : 0);
