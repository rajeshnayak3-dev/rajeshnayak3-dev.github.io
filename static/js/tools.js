/* REVEX AR tools. Everything runs locally; nothing is sent or stored. */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var num = function (id) { var v = parseFloat(($(id) || {}).value); return isNaN(v) ? 0 : v; };
  var money = function (n) { return "$" + (Math.round(n * 100) / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
  var pct = function (n) { return (Math.round(n * 10) / 10).toFixed(1) + "%"; };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function parseDate(v) { if (!v) return null; var p = v.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function fmt(d) { return d.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" }); }
  function us(d) { return String(d.getMonth() + 1).padStart(2, "0") + "/" + String(d.getDate()).padStart(2, "0") + "/" + d.getFullYear(); }
  function today() { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }
  var DAY = 86400000;
  function bind(ids, fn) { ids.forEach(function (id) { var el = $(id); if (el) { el.addEventListener("input", fn); el.addEventListener("change", fn); } }); fn(); }
  function row(label, value, cls) { return '<div class="out-row' + (cls ? " " + cls : "") + '"><span>' + label + "</span><b>" + value + "</b></div>"; }

  /* ---------------- timely filing */
  if ($("tfl-date")) {
    var labels = { tfl: "Date of service", appeal: "Denial or EOB date", corrected: "Original payment date" };
    bind(["tfl-mode", "tfl-date", "tfl-window", "tfl-custom", "tfl-asof"], function () {
      var mode = $("tfl-mode").value;
      $("tfl-date-label").textContent = labels[mode];
      var w = $("tfl-window").value;
      $("tfl-custom-wrap").hidden = w !== "custom";
      var start = parseDate($("tfl-date").value), out = $("tfl-out");
      if (!start) { out.innerHTML = "Enter a date to see the deadline."; out.className = "tool-out"; return; }
      var deadline;
      if (w === "m12") { deadline = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()); }
      else { var days = w === "custom" ? Math.max(1, Math.round(num("tfl-custom"))) : parseInt(w.slice(1), 10); deadline = new Date(start.getTime() + days * DAY); }
      var asof = parseDate($("tfl-asof").value) || today();
      var left = Math.round((deadline - asof) / DAY);
      var status, cls;
      if (left < 0) { status = "Deadline passed " + (-left) + " day" + (left === -1 ? "" : "s") + " ago. You'll need proof of timely filing, or the claim is a write-off."; cls = "is-bad"; }
      else if (left <= 30) { status = left + " day" + (left === 1 ? "" : "s") + " left. Act now and keep proof of submission."; cls = "is-warn"; }
      else { status = left + " days left."; cls = "is-good"; }
      out.className = "tool-out " + cls;
      out.innerHTML = row("Deadline", fmt(deadline) + " (" + us(deadline) + ")") + row("Checked against", fmt(asof)) + '<p class="out-status">' + status + "</p>";
    });
  }

  /* ---------------- payment */
  if ($("pay-billed")) {
    bind(["pay-billed", "pay-allowed", "pay-copay", "pay-ded", "pay-coins", "pay-sec"], function () {
      var billed = num("pay-billed"), allowed = num("pay-allowed"), out = $("pay-out");
      if (allowed > billed && billed > 0) { out.className = "tool-out is-warn"; out.innerHTML = '<p class="out-status">The allowed amount is higher than the billed charge. Payers allow the lesser of the two, so check the numbers.</p>'; return; }
      var copay = Math.min(num("pay-copay"), allowed);
      var rest = allowed - copay;
      var ded = Math.min(num("pay-ded"), rest);
      var coins = (rest - ded) * Math.min(100, num("pay-coins")) / 100;
      var paid = allowed - copay - ded - coins;
      var co45 = billed - allowed, pr = copay + ded + coins;
      var html = row("Contractual adjustment (CO-45)", money(co45)) +
        row("Copay (PR-3)", money(copay)) + row("Deductible (PR-1)", money(ded)) + row("Coinsurance (PR-2)", money(coins)) +
        row("Primary pays", money(paid), "strong") + row("Patient responsibility after primary", money(pr), "strong") +
        '<p class="out-check">Check: ' + money(paid) + " + " + money(co45) + " + " + money(pr) + " = " + money(paid + co45 + pr) + " billed</p>";
      var secRaw = ($("pay-sec") || {}).value;
      if (secRaw !== "" && secRaw != null) {
        var secAllowed = num("pay-sec");
        var room = secAllowed - paid;
        var secPays = Math.max(0, Math.min(pr, room));
        html += '<div class="out-sep"></div>';
        if (room <= 0) {
          html += row("Secondary pays", money(0), "strong") + '<p class="out-status">The primary paid ' + money(paid) + ", which is at or above the secondary's allowed amount (" + money(secAllowed) + "). Expect $0 with OA-23. Follow the plans' rules for the remaining " + money(pr) + ".</p>";
        } else {
          html += row("Secondary pays (estimate)", money(secPays), "strong") + row("Patient owes after secondary", money(pr - secPays)) +
            '<p class="out-status">The secondary can pay up to ' + money(room) + " (its allowed amount minus the primary payment), limited to the patient's remaining " + money(pr) + ".</p>";
        }
      }
      out.className = "tool-out"; out.innerHTML = html;
    });
  }

  /* ---------------- KPIs */
  if ($("kpi-ar")) {
    bind(["kpi-ar", "kpi-ar90", "kpi-charges90", "kpi-pay", "kpi-charges", "kpi-contract", "kpi-claims", "kpi-clean", "kpi-denied"], function () {
      var res = [];
      function add(name, val, display, good, warn, lowerBetter, target) {
        var cls = "";
        if (isFinite(val)) cls = lowerBetter ? (val <= good ? "k-good" : val <= warn ? "k-warn" : "k-bad") : (val >= good ? "k-good" : val >= warn ? "k-warn" : "k-bad");
        res.push('<div class="kpi ' + cls + '"><span>' + name + "</span><b>" + (isFinite(val) ? display : "–") + "</b><small>" + target + "</small></div>");
      }
      var adc = num("kpi-charges90") / 90;
      add("Days in AR", num("kpi-ar") / adc, Math.round(num("kpi-ar") / adc) + " days", 40, 50, true, "Target under 35–45");
      add("AR over 90 days", num("kpi-ar90") / num("kpi-ar") * 100, pct(num("kpi-ar90") / num("kpi-ar") * 100), 15, 25, true, "Target under 15–20%");
      var ncr = num("kpi-pay") / (num("kpi-charges") - num("kpi-contract")) * 100;
      add("Net collection rate", ncr, pct(ncr), 95, 90, false, "Target 95% or higher");
      add("Gross collection rate", num("kpi-pay") / num("kpi-charges") * 100, pct(num("kpi-pay") / num("kpi-charges") * 100), -1, -1, false, "Context only");
      add("Clean claim rate", num("kpi-clean") / num("kpi-claims") * 100, pct(num("kpi-clean") / num("kpi-claims") * 100), 95, 90, false, "Target 95% or higher");
      add("Denial rate", num("kpi-denied") / num("kpi-claims") * 100, pct(num("kpi-denied") / num("kpi-claims") * 100), 5, 10, true, "Target under 5–10%");
      $("kpi-out").className = "tool-out kpi-grid";
      $("kpi-out").innerHTML = res.join("").replace('class="kpi k-good"><span>Gross', 'class="kpi"><span>Gross');
    });
  }

  /* ---------------- therapy units */
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
    if (!$("n-date").value) $("n-date").value = iso(today());
    var ids = ["n-date", "n-method", "n-payer", "n-rep", "n-ref", "n-claim", "n-dos", "n-status", "n-paidamt", "n-paiddate", "n-check", "n-code", "n-denydate", "n-reason", "n-recv", "n-pending", "n-action", "n-fu"];
    var v = function (id) { return ($(id).value || "").trim(); };
    var d = function (id) { var x = parseDate($(id).value); return x ? us(x) : ""; };
    bind(ids, function () {
      var st = $("n-status").value;
      document.querySelectorAll("[data-n-group]").forEach(function (g) { g.hidden = g.getAttribute("data-n-group") !== st; });
      var parts = [];
      var who = v("n-method") + (v("n-payer") ? " " + v("n-payer").replace(/^payer /i, "") : "");
      if (v("n-method") === "Called payer" && v("n-payer")) who = "Called " + v("n-payer");
      parts.push((d("n-date") || "[date]") + " " + who + (v("n-rep") ? ", spoke to " + v("n-rep") : "") + (v("n-ref") ? ", ref " + v("n-ref") : ", ref [ref #]") + ".");
      var claim = (v("n-claim") ? "Claim #" + v("n-claim") + " " : "Claim ") + (d("n-dos") ? "for DOS " + d("n-dos") : "");
      if (st === "paid") parts.push(claim + " paid" + (d("n-paiddate") ? " " + d("n-paiddate") : "") + (v("n-paidamt") ? ", " + money(parseFloat(v("n-paidamt"))) : "") + (v("n-check") ? ", check/EFT #" + v("n-check") : "") + ".");
      if (st === "denied") parts.push(claim + " denied" + (d("n-denydate") ? " " + d("n-denydate") : "") + (v("n-code") ? " " + v("n-code").toUpperCase() : "") + (v("n-reason") ? ", " + v("n-reason") : "") + ".");
      if (st === "process") parts.push(claim + " in process" + (d("n-recv") ? ", received " + d("n-recv") : "") + (v("n-pending") ? ". Pending: " + v("n-pending") : "") + ".");
      if (st === "nof") parts.push(claim + " not on file with payer.");
      parts.push(v("n-action") ? "Action: " + v("n-action").replace(/\.$/, "") + "." : "Action: [what you did].");
      parts.push("F/U " + (d("n-fu") || "[date]") + ".");
      $("note-text").textContent = parts.join(" ").replace(/\s+/g, " ");
    });
    $("note-copy").addEventListener("click", function () {
      var text = $("note-text").textContent, msg = $("note-copied");
      function fallback() {
        var r = document.createRange(); r.selectNodeContents($("note-text"));
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        msg.textContent = "Selected. Press Ctrl+C (or Cmd+C) to copy.";
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { msg.textContent = "Copied."; }, fallback);
      } else fallback();
    });
  }
})();
