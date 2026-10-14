/* REVEX AR tools. Everything runs in the browser; nothing is sent or stored.
   The calculation functions are pure and exposed as window.REVEXCalc so the
   QA tests can check them against known values. */
(function () {
  "use strict";

  /* ================================================================ pure helpers */
  var DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function parseDate(v) {
    if (!v || !/^\d{4}-\d{2}-\d{2}$/.test(v)) return null;
    var p = v.split("-"), y = +p[0], m = +p[1] - 1, d = +p[2];
    if (y < 1900 || y > 2100) return null;
    var dt = new Date(y, m, d);
    return (dt.getFullYear() === y && dt.getMonth() === m && dt.getDate() === d) ? dt : null;
  }
  // Calendar arithmetic on local dates (never milliseconds, so daylight-saving changes can't shift a day).
  function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function daysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }
  function addYearsClamped(d, n) {
    var y = d.getFullYear() + n, m = d.getMonth();
    return new Date(y, m, Math.min(d.getDate(), daysInMonth(y, m)));
  }
  function diffDays(a, b) { // whole calendar days from a to b
    return Math.round((Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) - Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) / 86400000);
  }
  function sameDay(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function nthWeekday(y, m, weekday, n) { // n = 1..4, or -1 for last
    if (n > 0) { var first = new Date(y, m, 1); var off = (weekday - first.getDay() + 7) % 7; return new Date(y, m, 1 + off + (n - 1) * 7); }
    var last = new Date(y, m + 1, 0); var back = (last.getDay() - weekday + 7) % 7; return new Date(y, m, last.getDate() - back);
  }
  function observed(d) { // Saturday holiday -> Friday, Sunday holiday -> Monday (OPM rule)
    if (d.getDay() === 6) return addDays(d, -1);
    if (d.getDay() === 0) return addDays(d, 1);
    return d;
  }
  // US federal holidays (observed dates) under 5 U.S.C. 6103.
  function federalHolidays(y) {
    var list = [
      ["New Year's Day", observed(new Date(y, 0, 1))],
      ["Martin Luther King Jr. Day", nthWeekday(y, 0, 1, 3)],
      ["Washington's Birthday", nthWeekday(y, 1, 1, 3)],
      ["Memorial Day", nthWeekday(y, 4, 1, -1)],
      ["Independence Day", observed(new Date(y, 6, 4))],
      ["Labor Day", nthWeekday(y, 8, 1, 1)],
      ["Columbus Day", nthWeekday(y, 9, 1, 2)],
      ["Veterans Day", observed(new Date(y, 10, 11))],
      ["Thanksgiving Day", nthWeekday(y, 10, 4, 4)],
      ["Christmas Day", observed(new Date(y, 11, 25))]
    ];
    if (y >= 2021) list.push(["Juneteenth", observed(new Date(y, 5, 19))]);
    // New Year's Day of the next year can be observed on Dec 31 of this year.
    var ny = observed(new Date(y + 1, 0, 1));
    if (ny.getFullYear() === y) list.push(["New Year's Day (observed)", ny]);
    return list;
  }
  function holidayName(d) {
    var hs = federalHolidays(d.getFullYear());
    for (var i = 0; i < hs.length; i++) if (sameDay(hs[i][1], d)) return hs[i][0];
    return null;
  }
  function rollToWorkday(d) {
    var reasons = [];
    while (d.getDay() === 0 || d.getDay() === 6 || holidayName(d)) {
      reasons.push(fmt(d) + " is " + (holidayName(d) || "a " + DAY_NAMES[d.getDay()]));
      d = addDays(d, 1);
    }
    return { date: d, reasons: reasons };
  }

  /**
   * Timely filing / appeal deadline.
   * opts: { start: Date, rule: "days" | "year", days: number, presume5: bool, roll: bool, asOf: Date }
   * Day counting: the start date is day 0, so a 90-day limit from 01/01 ends 04/01 (non-leap year).
   */
  function timelyFiling(opts) {
    if (!(opts.start instanceof Date)) return { error: "Enter a valid start date." };
    if (opts.rule === "days" && !(opts.days >= 1 && opts.days <= 3650 && Math.floor(opts.days) === opts.days)) return { error: "Enter the filing limit as a whole number of days between 1 and 3650." };
    var notes = [];
    var start = opts.start;
    if (opts.presume5) { start = addDays(start, 5); notes.push("Counted from the presumed receipt date, " + fmt(start) + " (notice date + 5 days)."); }
    var raw = opts.rule === "year" ? addYearsClamped(start, 1) : addDays(start, opts.days);
    if (opts.rule === "year" && start.getMonth() === 1 && start.getDate() === 29) notes.push("February 29 has no match next year, so the deadline is taken as February 28.");
    var deadline = raw;
    if (opts.roll) {
      var r = rollToWorkday(raw);
      deadline = r.date;
      if (r.reasons.length) notes.push(r.reasons.join("; ") + ", so the deadline moves to the next workday.");
    }
    var asOf = opts.asOf || today();
    return { deadline: deadline, raw: raw, daysLeft: diffDays(asOf, deadline), asOf: asOf, notes: notes };
  }

  function isNum(v) { return typeof v === "number" && isFinite(v); }

  /**
   * KPI calculator. Every input is a number or null (blank).
   * Returns [{ id, name, value, unit, error, formula }]
   */
  function kpis(i) {
    var out = [];
    function bad(v) { return isNum(v) && v < 0; }
    function add(id, name, unit, formula, needs, check, compute) {
      var missing = needs.filter(function (k) { return !isNum(i[k]); });
      var neg = needs.filter(function (k) { return bad(i[k]); });
      var r = { id: id, name: name, unit: unit, formula: formula, value: null, error: null };
      if (missing.length) r.error = "Enter " + missing.map(label).join(" and ") + ".";
      else if (neg.length) r.error = label(neg[0]) + " can't be negative.";
      else { var c = check && check(); if (c) r.error = c; else r.value = compute(); }
      out.push(r);
    }
    add("dar", "Days in AR", "days", "Total AR ÷ (gross charges in the period ÷ days in the period)", ["ar", "charges90", "periodDays"],
      function () { if (i.periodDays < 1) return "The period must be at least 1 day."; if (i.charges90 === 0) return "Charges in the period are $0, so average daily charges are $0 and days in AR can't be calculated."; },
      function () { return i.ar / (i.charges90 / i.periodDays); });
    add("ar90", "AR over 90 days", "%", "AR older than 90 days ÷ total AR × 100", ["ar90", "ar"],
      function () { if (i.ar === 0) return "Total AR is $0, so the share can't be calculated."; if (i.ar90 > i.ar) return "AR over 90 days can't be more than total AR."; },
      function () { return i.ar90 / i.ar * 100; });
    add("ncr", "Net collection rate", "%", "Payments ÷ (charges − contractual adjustments) × 100", ["pay", "charges", "contract"],
      function () { if (i.contract > i.charges) return "Contractual adjustments can't be more than charges."; if (i.charges - i.contract === 0) return "Charges minus contractual adjustments is $0, so the rate can't be calculated."; },
      function () { return i.pay / (i.charges - i.contract) * 100; });
    add("gcr", "Gross collection rate", "%", "Payments ÷ charges × 100", ["pay", "charges"],
      function () { if (i.charges === 0) return "Charges are $0, so the rate can't be calculated."; },
      function () { return i.pay / i.charges * 100; });
    add("ccr", "Clean claim rate", "%", "Claims accepted first time with no edits or rejections ÷ claims submitted × 100", ["clean", "claims"],
      function () { if (i.claims === 0) return "Claims submitted is 0."; if (i.clean > i.claims) return "Clean claims can't be more than claims submitted."; },
      function () { return i.clean / i.claims * 100; });
    add("dr", "Denial rate (claim count)", "%", "Claims denied ÷ claims adjudicated × 100", ["denied", "adjudicated"],
      function () { if (i.adjudicated === 0) return "Claims adjudicated is 0."; if (i.denied > i.adjudicated) return "Denied claims can't be more than claims adjudicated."; },
      function () { return i.denied / i.adjudicated * 100; });
    return out;
  }
  var LABELS = { ar: "total AR", ar90: "AR over 90 days", charges90: "charges for the AR period", periodDays: "days in that period", pay: "payments", charges: "charges", contract: "contractual adjustments", claims: "claims submitted", clean: "clean claims", denied: "claims denied", adjudicated: "claims adjudicated" };
  function label(k) { return LABELS[k] || k; }

  /**
   * Illustrative payment split for one service line.
   * i: { billed, allowed, design: "ded-coins" | "copay-only" | "copay-then-ded", copay, dedLeft, coinsPct, oopLeft (or null), secAllowed (or null) }
   */
  function payment(i) {
    var errs = [];
    ["billed", "allowed"].forEach(function (k) { if (!isNum(i[k])) errs.push("Enter the " + (k === "billed" ? "billed charge" : "allowed amount") + "."); });
    ["billed", "allowed", "copay", "dedLeft", "coinsPct", "oopLeft", "secAllowed"].forEach(function (k) { if (isNum(i[k]) && i[k] < 0) errs.push("Amounts can't be negative."); });
    if (isNum(i.coinsPct) && i.coinsPct > 100) errs.push("Coinsurance can't be more than 100%.");
    if (errs.length) return { error: errs.filter(function (e, n) { return errs.indexOf(e) === n; }).join(" ") };
    var warn = [];
    if (i.allowed > i.billed) warn.push("The allowed amount is higher than the billed charge. Medicare and many contracts pay the lesser of the billed charge and the fee schedule, so check the contract and the ERA before posting.");
    var allowed = i.allowed;
    var copay = 0, ded = 0, coins = 0;
    var cp = isNum(i.copay) ? i.copay : 0, dl = isNum(i.dedLeft) ? i.dedLeft : 0, pct = isNum(i.coinsPct) ? i.coinsPct : 0;
    if (i.design === "copay-only") { copay = Math.min(cp, allowed); }
    else if (i.design === "copay-then-ded") { copay = Math.min(cp, allowed); ded = Math.min(dl, allowed - copay); coins = (allowed - copay - ded) * pct / 100; }
    else { ded = Math.min(dl, allowed); coins = (allowed - ded) * pct / 100; }
    var pr = copay + ded + coins;
    var capped = false;
    if (isNum(i.oopLeft) && pr > i.oopLeft) {
      // Out-of-pocket maximum reached: reduce coinsurance first, then deductible, then copay (illustrative ordering).
      var over = pr - i.oopLeft; capped = true;
      var cut = Math.min(coins, over); coins -= cut; over -= cut;
      cut = Math.min(ded, over); ded -= cut; over -= cut;
      cut = Math.min(copay, over); copay -= cut; over -= cut;
      pr = copay + ded + coins;
    }
    var co45 = Math.max(0, i.billed - allowed);
    var paid = allowed - pr;
    var res = { co45: r2(co45), copay: r2(copay), ded: r2(ded), coins: r2(coins), pr: r2(pr), paid: r2(paid), capped: capped, warn: warn };
    if (isNum(i.secAllowed)) {
      var room = i.secAllowed - paid;
      res.secRoom = r2(room);
      res.secPays = r2(Math.max(0, Math.min(pr, room)));
      res.afterSec = r2(pr - res.secPays);
    }
    return res;
  }
  function r2(n) { return Math.round(n * 100) / 100; }

  /* ================================================================ formatting */
  function money(n) { var neg = n < 0; return (neg ? "−$" : "$") + Math.abs(r2(n)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function pct(n) { return (Math.round(n * 10) / 10).toFixed(1) + "%"; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(d) { return d.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" }); }
  function us(d) { return String(d.getMonth() + 1).padStart(2, "0") + "/" + String(d.getDate()).padStart(2, "0") + "/" + d.getFullYear(); }
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function today() { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }

  window.REVEXCalc = { parseDate: parseDate, addDays: addDays, addYearsClamped: addYearsClamped, federalHolidays: federalHolidays,
    rollToWorkday: rollToWorkday, timelyFiling: timelyFiling, kpis: kpis, payment: payment, diffDays: diffDays, iso: iso };

  if (typeof document === "undefined") return;

  /* ================================================================ UI */
  var $ = function (id) { return document.getElementById(id); };
  function val(id) { var el = $(id); if (!el) return null; var s = String(el.value).trim(); if (s === "") return null; var v = Number(s); return isFinite(v) ? v : NaN; }
  function bind(ids, fn) { ids.forEach(function (id) { var el = $(id); if (el) { el.addEventListener("input", fn); el.addEventListener("change", fn); } }); fn(); }
  function row(label, value, cls) { return '<div class="out-row' + (cls ? " " + cls : "") + '"><span>' + label + "</span><b>" + value + "</b></div>"; }
  function status(cls, icon, text) { return '<p class="out-status"><span class="st-tag st-' + cls + '">' + icon + "</span> " + text + "</p>"; }

  /* ---------------- timely filing */
  if ($("tfl-date")) {
    var labels = { tfl: "Date of service (or 'through' date for institutional claims)", appeal: "Date of the denial or remittance notice", corrected: "Date of the original remittance" };
    bind(["tfl-mode", "tfl-date", "tfl-window", "tfl-custom", "tfl-asof", "tfl-presume", "tfl-roll"], function () {
      var mode = $("tfl-mode").value;
      $("tfl-date-label").textContent = labels[mode];
      $("tfl-presume-wrap").hidden = mode !== "appeal";
      var w = $("tfl-window").value;
      $("tfl-custom-wrap").hidden = w !== "custom";
      var out = $("tfl-out");
      out.className = "tool-out";
      if (!w) { out.innerHTML = "Choose the filing or appeal limit from the payer's contract, provider manual or the program rule."; return; }
      var start = parseDate($("tfl-date").value);
      if (!start) { out.innerHTML = $("tfl-date").value ? status("bad", "Error", "Enter a valid date between 1900 and 2100.") : "Enter a date to see the deadline."; return; }
      var asRaw = $("tfl-asof").value, asOf = asRaw ? parseDate(asRaw) : today();
      if (!asOf) { out.innerHTML = status("bad", "Error", "The 'check against' date isn't valid."); return; }
      var days = w === "custom" ? val("tfl-custom") : (w === "m12" ? null : parseInt(w.slice(1), 10));
      var r = timelyFiling({ start: start, rule: w === "m12" ? "year" : "days", days: days, presume5: mode === "appeal" && $("tfl-presume").checked, roll: $("tfl-roll").checked, asOf: asOf });
      if (r.error) { out.innerHTML = status("bad", "Error", esc(r.error)); return; }
      var left = r.daysLeft, msg, cls;
      if (left < 0) { cls = "is-bad"; msg = status("bad", "Passed", "The deadline appears to have passed " + (-left) + " day" + (left === -1 ? "" : "s") + " ago. Before deciding the claim is lost, look for proof of timely filing (an accepted 277CA or payer acknowledgment, an earlier claim or call reference) and any exception the payer or program allows, then follow your client's adjustment policy."); }
      else if (left <= 30) { cls = "is-warn"; msg = status("warn", "Urgent", left + " day" + (left === 1 ? "" : "s") + " left. Act now and keep proof of submission."); }
      else { cls = "is-good"; msg = status("good", "Open", left + " days left."); }
      out.className = "tool-out " + cls;
      out.innerHTML = row("Deadline", fmt(r.deadline) + " (" + us(r.deadline) + ")") + row("Checked against", fmt(r.asOf)) + msg +
        (r.notes.length ? '<ul class="out-notes">' + r.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" : "") +
        '<p class="out-assume">Assumptions: day 0 is the start date; the limit you chose applies to this payer, plan and claim type. Contracts, state law and program rules can change the start point, the limit and the exceptions, so verify before relying on this date.</p>';
    });
  }

  /* ---------------- payment */
  if ($("pay-billed")) {
    bind(["pay-billed", "pay-allowed", "pay-design", "pay-copay", "pay-ded", "pay-coins", "pay-oop", "pay-sec"], function () {
      var design = $("pay-design").value;
      $("pay-copay-wrap").hidden = design === "ded-coins";
      $("pay-ded-wrap").hidden = $("pay-coins-wrap").hidden = design === "copay-only";
      var inp = { billed: val("pay-billed"), allowed: val("pay-allowed"), design: design, copay: val("pay-copay"), dedLeft: val("pay-ded"), coinsPct: val("pay-coins"), oopLeft: val("pay-oop"), secAllowed: val("pay-sec") };
      for (var k in inp) if (typeof inp[k] === "number" && isNaN(inp[k])) { $("pay-out").className = "tool-out is-bad"; $("pay-out").innerHTML = status("bad", "Error", "Enter numbers only."); return; }
      var r = payment(inp), out = $("pay-out");
      if (r.error) { out.className = "tool-out is-bad"; out.innerHTML = status("bad", "Error", esc(r.error)); return; }
      var html = r.warn.map(function (w) { return status("warn", "Check", esc(w)); }).join("") +
        row("Contractual adjustment (usually CO-45)", money(r.co45));
      if (design !== "ded-coins") html += row("Copay (PR-3)", money(r.copay));
      if (design !== "copay-only") html += row("Deductible (PR-1)", money(r.ded)) + row("Coinsurance (PR-2)", money(r.coins));
      html += row("Primary pays (estimate)", money(r.paid), "strong") + row("Patient responsibility after primary (estimate)", money(r.pr), "strong") +
        '<p class="out-check">Check: ' + money(r.paid) + " paid + " + money(r.co45) + " contractual + " + money(r.pr) + " patient = " + money(r.paid + r.co45 + r.pr) + (inp.allowed > inp.billed ? "" : " = billed") + "</p>";
      if (r.capped) html += status("warn", "Note", "The out-of-pocket amount you entered capped the patient's share.");
      if ("secPays" in r) {
        html += '<div class="out-sep"></div>';
        if (r.secRoom <= 0) html += row("Secondary pays (estimate)", money(0), "strong") + '<p class="out-status">The primary paid ' + money(r.paid) + ", at or above the secondary's allowed amount. Many secondaries then pay $0 (often shown as OA-23). Follow both plans' rules for the remaining " + money(r.pr) + ".</p>";
        else html += row("Secondary pays (estimate)", money(r.secPays), "strong") + row("Patient owes after secondary (estimate)", money(r.afterSec));
      }
      html += '<p class="out-assume">Illustrative only. The plan design, network status, accumulators and payer rules decide the real split, and the ERA is what you post from.</p>';
      out.className = "tool-out"; out.innerHTML = html;
    });
  }

  /* ---------------- KPIs */
  if ($("kpi-ar")) {
    var KPI_IDS = { ar: "kpi-ar", ar90: "kpi-ar90", charges90: "kpi-charges90", periodDays: "kpi-days", pay: "kpi-pay", charges: "kpi-charges", contract: "kpi-contract", claims: "kpi-claims", clean: "kpi-clean", denied: "kpi-denied", adjudicated: "kpi-adj" };
    var BANDS = { dar: [40, 50, true, "Common target: under 35–45 days"], ar90: [15, 25, true, "Common target: under 15–20%"], ncr: [95, 90, false, "Common target: 95% or higher"], gcr: null, ccr: [95, 90, false, "Common target: 95% or higher"], dr: [5, 10, true, "Common target: under 5–10%"] };
    bind(Object.keys(KPI_IDS).map(function (k) { return KPI_IDS[k]; }), function () {
      var inp = {}, nonnum = [];
      Object.keys(KPI_IDS).forEach(function (k) { var v = val(KPI_IDS[k]); if (typeof v === "number" && isNaN(v)) nonnum.push(label(k)); inp[k] = (typeof v === "number" && isNaN(v)) ? null : v; });
      var res = kpis(inp);
      $("kpi-out").className = "tool-out kpi-grid";
      $("kpi-out").innerHTML = res.map(function (r) {
        var b = BANDS[r.id], cls = "", tag = "";
        if (r.value !== null && b) {
          var good = b[2] ? r.value <= b[0] : r.value >= b[0], ok = b[2] ? r.value <= b[1] : r.value >= b[1];
          cls = good ? "k-good" : ok ? "k-warn" : "k-bad"; tag = good ? "Within common range" : ok ? "Borderline" : "Outside common range";
        }
        var shown = r.value === null ? "–" : (r.unit === "days" ? Math.round(r.value) + " days" : pct(r.value));
        return '<div class="kpi ' + cls + '"><span>' + r.name + "</span><b>" + shown + "</b>" + (tag ? '<em class="k-tag">' + tag + "</em>" : "") +
          (r.error ? '<small class="k-err">' + esc(r.error) + "</small>" : "<small>" + (b ? b[3] : "Context only: reflects the fee schedule more than performance") + "</small>") + "</div>";
      }).join("") + (nonnum.length ? '<p class="k-err">Not a number: ' + esc(nonnum.join(", ")) + ".</p>" : "");
    });
  }

  /* ---------------- therapy units (Medicare 8-minute rule) */
  if ($("unit-rows")) {
    var inputs = Array.prototype.slice.call(document.querySelectorAll("#unit-rows input"));
    inputs.forEach(function (i) { i.addEventListener("input", calcUnits); });
    function calcUnits() {
      var rows = Array.prototype.slice.call(document.querySelectorAll(".unit-row")).map(function (r) {
        var m = parseFloat(r.querySelector(".u-min").value); return { code: r.querySelector(".u-code").value.trim() || "(code)", min: isNaN(m) ? 0 : Math.max(0, m) };
      }).filter(function (r) { return r.min > 0; });
      var total = rows.reduce(function (a, r) { return a + r.min; }, 0), out = $("units-out");
      if (!rows.length) { out.className = "tool-out"; out.innerHTML = "Enter minutes for at least one timed code."; return; }
      var units = total < 8 ? 0 : Math.floor((total + 7) / 15);
      rows.forEach(function (r) { r.units = Math.floor(r.min / 15); r.left = r.min - r.units * 15; });
      var extra = units - rows.reduce(function (a, r) { return a + r.units; }, 0);
      var order = rows.slice().sort(function (a, b) { return b.left - a.left; });
      for (var i = 0; i < extra && order.length; i++) order[i % order.length].units++;
      var html = row("Total timed minutes", total + " min") + row("Total billable units (Medicare)", units + (units === 1 ? " unit" : " units"), "strong") + '<div class="out-sep"></div>';
      rows.forEach(function (r) { html += row(esc(r.code) + " (" + r.min + " min)", r.units + (r.units === 1 ? " unit" : " units")); });
      if (units === 0) html += '<p class="out-status">Under 8 total timed minutes, no timed units can be billed.</p>';
      out.className = "tool-out"; out.innerHTML = html;
    }
    calcUnits();
  }

  /* ---------------- AR note */
  if ($("note-text")) {
    var ids = ["n-date", "n-method", "n-payer", "n-rep", "n-ref", "n-claim", "n-dos", "n-status", "n-paidamt", "n-paiddate", "n-check", "n-code", "n-denydate", "n-reason", "n-recv", "n-pending", "n-findings", "n-action", "n-next", "n-fu", "n-owner"];
    var v = function (id) { return ($(id).value || "").trim(); };
    var d = function (id) { var x = parseDate($(id).value); return x ? us(x) : ""; };
    function buildNote() {
      var st = $("n-status").value;
      document.querySelectorAll("[data-n-group]").forEach(function (g) { g.hidden = g.getAttribute("data-n-group") !== st; });
      var lines = [];
      var how = v("n-method") + (v("n-payer") ? " (" + v("n-payer") + ")" : "");
      lines.push("Date: " + (d("n-date") || "[date]") + " | Source: " + (how || "[payer / portal]") + (v("n-rep") ? " | Rep: " + v("n-rep") : "") + " | Ref #: " + (v("n-ref") || "[enter the reference number you were given]"));
      var claim = "Claim #" + (v("n-claim") || "[payer claim #]") + (d("n-dos") ? ", DOS " + d("n-dos") : "");
      var stat = { paid: "Paid", denied: "Denied", process: "In process / pending", nof: "Not on file with payer" }[st];
      var detail = "";
      if (st === "paid") detail = (d("n-paiddate") ? " " + d("n-paiddate") : "") + (v("n-paidamt") && isFinite(+v("n-paidamt")) ? ", " + money(+v("n-paidamt")) : "") + (v("n-check") ? ", check/EFT #" + v("n-check") : "");
      if (st === "denied") detail = (d("n-denydate") ? " " + d("n-denydate") : "") + (v("n-code") ? " " + v("n-code").toUpperCase() : "") + (v("n-reason") ? ", " + v("n-reason") : "");
      if (st === "process") detail = (d("n-recv") ? ", received " + d("n-recv") : "") + (v("n-pending") ? ", pending: " + v("n-pending") : "");
      lines.push("Status: " + claim + " | " + stat + detail);
      if (v("n-findings")) lines.push("Findings: " + v("n-findings"));
      lines.push("Action taken: " + (v("n-action") || "[what you did]"));
      lines.push("Next action: " + (v("n-next") || "[what happens next]") + " | F/U: " + (d("n-fu") || "[date]") + " | Owner: " + (v("n-owner") || "[who]"));
      $("note-text").textContent = lines.join("\n");
      var gaps = [];
      if (!v("n-ref")) gaps.push("reference number");
      if (!v("n-action")) gaps.push("action taken");
      if (!d("n-fu")) gaps.push("follow-up date");
      $("note-gaps").textContent = gaps.length ? "Still missing: " + gaps.join(", ") + "." : "All core fields are filled. Review the note before saving it.";
    }
    if (!$("n-date").value) $("n-date").value = iso(today());
    bind(ids, buildNote);
    $("note-copy").addEventListener("click", function () {
      var text = $("note-text").textContent, msg = $("note-copied");
      function fallback() {
        var r = document.createRange(); r.selectNodeContents($("note-text"));
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        msg.textContent = "Selected. Press Ctrl+C (or Cmd+C) to copy.";
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { msg.textContent = "Copied. Review it before saving it in your billing system."; }, fallback);
      } else fallback();
    });
    $("note-reset").addEventListener("click", function () {
      ids.forEach(function (id) { var el = $(id); if (el.tagName === "SELECT") el.selectedIndex = id === "n-status" ? 1 : 0; else el.value = ""; });
      $("n-date").value = iso(today());
      $("note-copied").textContent = "Cleared.";
      buildNote();
    });
  }
})();
