/* REVEX site behaviour: theme, menu, search, progress, quizzes,
   scenarios, filters, hero claim animation, certificate. No libraries. */
(function () {
  "use strict";

  var body = document.body;
  var ROOT = body.getAttribute("data-root") || "./";
  var PREVIEW = body.getAttribute("data-preview") === "1";
  var PAGE = body.getAttribute("data-page") || "";
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };

  function href(u) {
    var path = u, frag = "";
    var i = u.indexOf("#");
    if (i >= 0) { path = u.slice(0, i); frag = u.slice(i); }
    if (PREVIEW && (path === "" || path.slice(-1) === "/")) path += "index.html";
    return ROOT + path + frag;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ------------------------------------------------ storage */
  var KEY = "revex-progress-v1";
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { done: {}, quiz: {} }; }
    catch (e) { return { done: {}, quiz: {} }; }
  }
  function save(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  var state = load();
  state.done = state.done || {}; state.quiz = state.quiz || {};

  /* ------------------------------------------------ theme */
  var themeBtn = $("[data-theme-toggle]");
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-mode") === "dark" ? "light" : "dark";
    if (next === "dark") document.documentElement.setAttribute("data-mode", "dark");
    else document.documentElement.removeAttribute("data-mode");
    try { localStorage.setItem("revex-theme", next); } catch (e) {}
  });

  /* ------------------------------------------------ course menu (sidebar drawer) */
  var topicsBtn = $("[data-topics]"), sidebar = $("[data-sidebar]"), scrim = $(".sb-scrim");
  function setTopics(open) {
    if (!topicsBtn || !sidebar) return;
    body.classList.toggle("sb-open", open);
    topicsBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (scrim) scrim.hidden = !open;
    body.style.overflow = open ? "hidden" : "";
    if (open) { var cur = $(".sb-nav .is-current", sidebar) || $("a", sidebar); if (cur) cur.focus({ preventScroll: true }); }
  }
  if (topicsBtn) {
    topicsBtn.addEventListener("click", function () { setTopics(!body.classList.contains("sb-open")); });
    $$("[data-topics-close]").forEach(function (b) { b.addEventListener("click", function () { setTopics(false); topicsBtn.focus(); }); });
  }
  var topicsPanel = { hidden: true };
  // keep the current lesson visible in the sidebar
  (function () {
    var cur = sidebar && $(".sb-nav a.is-current", sidebar);
    if (cur && cur.scrollIntoView && innerWidth > 1100) { var nav = $(".sb-nav", sidebar); if (nav) nav.scrollTop = Math.max(0, cur.offsetTop - nav.clientHeight / 3); }
  })();
  // remember the last lesson for "continue learning"
  try {
    if ($("[data-complete]") || $("[data-scenario]")) {
      localStorage.setItem("revex-last", JSON.stringify({ u: PAGE, t: (body.getAttribute("data-title") || document.title).replace(/ \| REVEX$/, ""), d: Date.now() }));
    }
  } catch (e) {}

  /* ------------------------------------------------ search */
  var modal = $("[data-search-modal]"), input = $("[data-search-input]"),
      results = $("[data-search-results]"), hint = $("[data-search-hint]");
  var index = null, active = -1, lastFocus = null;

  function loadIndex() {
    if (index) return Promise.resolve(index);
    return fetch(ROOT + "static/search-index.json").then(function (r) { return r.json(); })
      .then(function (d) { index = d; return d; })
      .catch(function () { index = []; return index; });
  }
  function norm(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim(); }
  function score(item, q, words) {
    var t = norm(item.t), k = norm(item.k), d = norm(item.d), s = 0;
    var qn = norm(q);
    if (t === qn) s += 100;
    if (t.indexOf(qn) === 0) s += 50;
    if (t.indexOf(qn) >= 0) s += 30;
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (t.indexOf(w) >= 0) s += 10; else if (k.indexOf(w) >= 0) s += 6; else if (d.indexOf(w) >= 0) s += 3; else return 0;
    }
    if (item.y === "lesson") s += 2;
    if (item.y === "code") s += 1;
    return s;
  }
  function runSearch() {
    var q = input.value.trim();
    if (!q) { results.innerHTML = ""; hint.hidden = false; return; }
    loadIndex().then(function (idx) {
      var words = norm(q).split(" ").filter(Boolean);
      var hits = idx.map(function (it) { return { it: it, s: score(it, q, words) }; })
        .filter(function (h) { return h.s > 0; })
        .sort(function (a, b) { return b.s - a.s; }).slice(0, 12);
      active = hits.length ? 0 : -1;
      hint.hidden = hits.length > 0;
      if (!hits.length) { hint.textContent = "No results for “" + q + "”. Try a shorter word, or a code number like 197."; }
      results.innerHTML = hits.map(function (h, i) {
        var it = h.it;
        return '<li><a href="' + esc(href(it.u)) + '"' + (i === 0 ? ' class="is-active"' : "") + '>' +
          (it.s ? '<span class="sr-sec">' + esc(it.y === "term" ? "Glossary" : it.s) + "</span>" : "") +
          "<strong>" + esc(it.t) + "</strong>" + (it.d ? "<small>" + esc(it.d) + "</small>" : "") + "</a></li>";
      }).join("");
    });
  }
  function openSearch() {
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.hidden = false; body.style.overflow = "hidden";
    input.value = ""; results.innerHTML = ""; hint.hidden = false;
    hint.textContent = "Try “timely filing”, “CO-45”, “spend down” or “modifier 25”.";
    setTimeout(function () { input.focus(); }, 10);
    loadIndex();
  }
  function closeSearch() {
    if (!modal || modal.hidden) return;
    modal.hidden = true; body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $$("[data-search-open]").forEach(function (b) { b.addEventListener("click", openSearch); });
  $$("[data-search-close]").forEach(function (b) { b.addEventListener("click", closeSearch); });
  if (input) {
    input.addEventListener("input", runSearch);
    input.addEventListener("keydown", function (e) {
      var links = $$("a", results);
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!links.length) return;
        active = (active + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links.forEach(function (l, i) { l.classList.toggle("is-active", i === active); });
        links[active].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && links[active]) {
        e.preventDefault(); location.href = links[active].href;
      }
    });
  }
  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    var typing = tag === "input" || tag === "textarea" || e.target.isContentEditable;
    if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
      e.preventDefault(); openSearch();
    } else if (e.key === "Escape") {
      closeSearch(); if (body.classList.contains("sb-open")) { setTopics(false); topicsBtn.focus(); }
    }
  });
  // ?q= support so Google sitelinks search works
  try {
    var q0 = new URLSearchParams(location.search).get("q");
    if (q0 && input) { openSearch(); input.value = q0; runSearch(); }
  } catch (e) {}

  /* ------------------------------------------------ completion */
  function markUI() {
    $$("[data-topic]").forEach(function (a) {
      var li = a.closest("li") || a;
      li.classList.toggle("is-complete", !!state.done[a.getAttribute("data-topic")]);
    });
    $$("[data-done-flag]").forEach(function (el) { el.hidden = !state.done[el.getAttribute("data-done-flag")]; });
    $$("[data-complete]").forEach(function (b) {
      var done = !!state.done[b.getAttribute("data-complete")];
      b.classList.toggle("is-done", done);
      var lbl = $("[data-complete-label]", b);
      if (lbl) lbl.textContent = done ? "Completed" : "Mark as complete";
      b.setAttribute("aria-pressed", done ? "true" : "false");
    });
    var total = 0, doneAll = 0;
    $$("[data-sb-sec]").forEach(function (sec) {
      var links = $$("a[data-topic]", sec), d = links.filter(function (a) { return state.done[a.getAttribute("data-topic")]; }).length;
      total += links.length; doneAll += d;
      var c = $("[data-sb-count]", sec); if (c) { c.textContent = links.length ? d + "/" + links.length : ""; c.classList.toggle("is-full", links.length > 0 && d === links.length); }
    });
    var ov = $("[data-sb-overall]"); if (ov && total) ov.textContent = Math.round(doneAll / total * 100) + "%";
    $$("[data-section-progress]").forEach(function (el) {
      var id = el.getAttribute("data-section-progress");
      var n = Object.keys(state.done).filter(function (u) { return u.indexOf(id + "/") === 0 && u !== "denials/codes/"; }).length;
      if (!n) { el.textContent = ""; return; }
      el.textContent = el.hasAttribute("data-verbose") ? "You've completed " + n + " in this section." : n + " done";
    });
  }
  $$("[data-complete]").forEach(function (b) {
    b.addEventListener("click", function () {
      var u = b.getAttribute("data-complete");
      if (state.done[u]) delete state.done[u]; else { state.done[u] = Date.now(); celebrate(b); }
      save(state); markUI();
    });
  });
  markUI();

  /* ------------------------------------------------ small celebrations and motion */
  var REDUCE = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function celebrate(btn) {
    if (REDUCE) return;
    btn.classList.remove("is-burst"); void btn.offsetWidth; btn.classList.add("is-burst");
    var burst = document.createElement("span"); burst.className = "burst"; burst.setAttribute("aria-hidden", "true");
    var colours = ["var(--green)", "var(--teal)", "var(--red)", "var(--amber)"];
    for (var k = 0; k < 10; k++) {
      var dot = document.createElement("i"), ang = (k / 10) * Math.PI * 2, dist = 26 + (k % 3) * 8;
      dot.style.setProperty("--x", Math.round(Math.cos(ang) * dist) + "px");
      dot.style.setProperty("--y", Math.round(Math.sin(ang) * dist) + "px");
      dot.style.setProperty("--c", colours[k % 4]);
      burst.appendChild(dot);
    }
    btn.appendChild(burst);
    setTimeout(function () { burst.remove(); }, 800);
  }

  // Header shadow once the page scrolls.
  var onScroll = function () { document.documentElement.classList.toggle("is-scrolled", scrollY > 8); };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Home: heartbeat claim track plays once, then the PAID stamp lands.
  var ecg = $("[data-ecg]"), heroArt = $(".hero-art");
  if (ecg && heroArt) {
    var playEcg = function () {
      ecg.classList.remove("is-on"); heroArt.classList.remove("is-played"); void ecg.offsetWidth;
      ecg.classList.add("is-on");
      setTimeout(function () { heroArt.classList.add("is-played"); }, REDUCE ? 0 : 2700);
    };
    playEcg();
    var replay = $("[data-ecg-replay]"); if (replay) replay.addEventListener("click", playEcg);
  }

  // Home: sections fade in once as they come into view.
  var reveals = $$("[data-reveal]");
  if (reveals.length && !REDUCE) {
    document.documentElement.classList.add("js-reveal");
    var checkReveal = function () {
      var limit = innerHeight * 0.92;
      reveals = reveals.filter(function (el) {
        if (el.getBoundingClientRect().top < limit) { el.classList.add("is-in"); return false; }
        return true;
      });
      if (!reveals.length) removeEventListener("scroll", checkReveal);
    };
    addEventListener("scroll", checkReveal, { passive: true });
    requestAnimationFrame(checkReveal);
  }

  /* ------------------------------------------------ home dashboard */
  if ($("[data-dash-pct]")) {
    var all = 0, doneN = 0, secTotals = {};
    $$("[data-sb-sec]").forEach(function (sec) {
      var id = sec.getAttribute("data-sb-sec"), links = $$("a[data-topic]", sec);
      var d = links.filter(function (a) { return state.done[a.getAttribute("data-topic")]; }).length;
      secTotals[id] = [d, links.length]; all += links.length; doneN += d;
    });
    var p = all ? Math.round(doneN / all * 100) : 0;
    $("[data-dash-pct]").textContent = p + "%";
    $("[data-dash-bar]").style.width = p + "%";
    $("[data-dash-meta]").textContent = doneN + " of " + all + " lessons, guides and scenarios completed.";
    $$("[data-mc-bar]").forEach(function (b) { var t = secTotals[b.getAttribute("data-mc-bar")]; if (t && t[1]) b.style.width = Math.round(t[0] / t[1] * 100) + "%"; });
    try {
      var last = JSON.parse(localStorage.getItem("revex-last"));
      if (last && last.u) {
        $("[data-continue-title]").textContent = last.t;
        $("[data-continue-meta]").textContent = "Pick up where you left off.";
        var cl = $("[data-continue-link]"); cl.href = href(last.u); cl.textContent = "Continue";
      }
      var cert = JSON.parse(localStorage.getItem("revex-cert"));
      if (cert && cert.id && $("[data-dash-cert]")) {
        $("[data-dash-cert]").textContent = "Certified";
        $("[data-dash-cert-meta]").textContent = "Certificate " + cert.id + ", score " + cert.percent + "%.";
        var dl = $("[data-dash-cert-link]"); dl.textContent = "View certificate"; dl.href = href("verify/") + "?id=" + encodeURIComponent(cert.id);
      }
    } catch (e) {}
  }

  /* ------------------------------------------------ TOC highlight */
  var tocLinks = $$(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var heads = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove("is-active"); });
          map[en.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    heads.forEach(function (h) { io.observe(h); });
    if (innerWidth <= 1000) $$("[data-toc]").forEach(function (d) { d.open = false; });
  }

  /* ------------------------------------------------ quizzes */
  $$("[data-quiz]").forEach(function (quiz) {
    var id = quiz.getAttribute("data-quiz-id");
    var qs = $$(".quiz-q", quiz), answered = 0, right = 0;
    var scoreEl = $("[data-quiz-score]", quiz);
    qs.forEach(function (q) {
      var ans = parseInt(q.getAttribute("data-answer"), 10);
      var opts = $$(".quiz-opt", q);
      opts.forEach(function (o) {
        o.addEventListener("click", function () {
          var pick = parseInt(o.getAttribute("data-i"), 10);
          opts.forEach(function (x) { x.disabled = true; });
          opts[ans].classList.add("is-right");
          if (pick !== ans) o.classList.add("is-wrong"); else right++;
          $(".quiz-why", q).hidden = false;
          answered++;
          if (answered === qs.length) {
            var pass = right / qs.length >= 0.7;
            scoreEl.hidden = false;
            scoreEl.classList.toggle("is-pass", pass);
            scoreEl.textContent = "You scored " + right + " out of " + qs.length + ". " +
              (pass ? "Well done. This topic is marked complete." : "Reread the sections you missed, then reload the page to try again.");
            var prev = state.quiz[id];
            if (!prev || right >= prev.s) state.quiz[id] = { s: right, t: qs.length, d: Date.now() };
            if (pass) state.done[id] = state.done[id] || Date.now();
            save(state); markUI();
          }
        });
      });
    });
  });

  /* ------------------------------------------------ filters (codes, glossary) */
  function setupFilter(inputSel, itemSel, groupSel, emptySel) {
    var inp = $(inputSel);
    if (!inp) return;
    inp.addEventListener("input", function () {
      var q = norm(inp.value), any = false;
      $$(itemSel).forEach(function (el) {
        var hit = !q || norm(el.getAttribute("data-text")).indexOf(q) >= 0;
        el.hidden = !hit; if (hit) any = true;
      });
      $$(groupSel).forEach(function (g) { g.hidden = !$$(itemSel, g).some(function (el) { return !el.hidden; }); });
      $(emptySel).hidden = any;
    });
  }
  (function codeFilter() {
    var inp = $("[data-code-filter]"), cat = $("[data-code-cat]");
    if (!inp || !cat) return;
    function run() {
      var q = norm(inp.value), c = cat.value, n = 0;
      $$("[data-code-row]").forEach(function (el) {
        var hit = (!q || norm(el.getAttribute("data-text")).indexOf(q) >= 0) && (!c || el.getAttribute("data-cat") === c);
        el.hidden = !hit; if (hit) n++;
      });
      $$("[data-code-group]").forEach(function (g) { g.hidden = !$$("[data-code-row]", g).some(function (el) { return !el.hidden; }); });
      $("[data-code-empty]").hidden = n > 0;
      $("[data-code-count]").textContent = n + (n === 1 ? " code" : " codes") + (q || c ? " match" : "");
      var nav = $(".jump"); if (nav) nav.hidden = !!(q || c);
    }
    inp.addEventListener("input", run); cat.addEventListener("change", run);
    $$("[data-code-clear]").forEach(function (b) { b.addEventListener("click", function () { inp.value = ""; cat.value = ""; run(); inp.focus(); }); });
    var q0 = new URLSearchParams(location.search).get("q"); if (q0) { inp.value = q0; }
    run();
  })();
  setupFilter("[data-gloss-filter]", "[data-gloss-item]", "[data-gloss-letter]", "[data-gloss-empty]");

  /* ------------------------------------------------ scenarios */
  var scWrap = $("[data-scenario]"), scData = $("[data-scenario-data]");
  if (scWrap && scData) {
    var data = JSON.parse(scData.textContent);
    var stages = data.stages, idx = 0, best = 0;
    var VERDICT = { best: "Best move", ok: "Works, but not the best", wrong: "That would cause a problem" };
    function md(s) {
      return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/`(.+?)`/g, "<code>$1</code>");
    }
    function renderStage(i) {
      var st = stages[i];
      var el = document.createElement("section");
      el.className = "sc-stage";
      el.innerHTML = '<p class="sc-stage-n">Decision ' + (i + 1) + " of " + stages.length + "</p>" +
        "<h2>" + md(st.q) + "</h2>" + (st.context ? '<p class="sc-situation">' + md(st.context) + "</p>" : "") +
        '<div class="sc-choices"></div><div class="sc-feedback" hidden></div>';
      var box = $(".sc-choices", el), fb = $(".sc-feedback", el);
      st.choices.forEach(function (c) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "sc-choice"; b.innerHTML = md(c.text);
        b.addEventListener("click", function () {
          var btns = $$(".sc-choice", box);
          btns.forEach(function (x) { x.disabled = true; });
          b.classList.add("is-picked", "v-" + c.v);
          if (c.v !== "best") {
            st.choices.forEach(function (o, j) { if (o.v === "best") btns[j].classList.add("v-best"); });
          } else best++;
          fb.hidden = false; fb.className = "sc-feedback v-" + c.v;
          fb.innerHTML = "<strong>" + VERDICT[c.v] + "</strong>" + md(c.why);
          var nb = document.createElement("button");
          nb.type = "button"; nb.className = "btn btn-primary sc-next";
          nb.textContent = i + 1 < stages.length ? "Next decision" : "See the outcome";
          nb.addEventListener("click", function () {
            nb.remove();
            if (i + 1 < stages.length) { var n = renderStage(i + 1); n.scrollIntoView({ behavior: "smooth", block: "start" }); $("button", n).focus(); }
            else finish();
          });
          fb.after(nb);
        });
        box.appendChild(b);
      });
      scWrap.appendChild(el);
      return el;
    }
    function finish() {
      var el = document.createElement("section");
      el.className = "sc-summary";
      el.innerHTML = "<h2>You made the best call " + best + " of " + stages.length + " times</h2>" +
        (data.takeaways.length ? "<p><strong>Takeaways</strong></p><ul>" + data.takeaways.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("") + "</ul>" : "");
      scWrap.appendChild(el);
      $("[data-scenario-end]").hidden = false;
      var u = PAGE; state.done[u] = state.done[u] || Date.now();
      state.quiz[u] = { s: best, t: stages.length, d: Date.now() };
      save(state); markUI();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    renderStage(0);
  }

  /* ------------------------------------------------ progress page */
  var trackEl = $("[data-track]");
  if (trackEl) {
    var track = JSON.parse(trackEl.textContent);
    var titles = JSON.parse($("[data-sections]").textContent);
    var ids = JSON.parse($("[data-section-ids]").textContent);
    function drawProgress() {
      var done = track.filter(function (t) { return state.done[t.u]; }).length;
      var quizzes = Object.keys(state.quiz).map(function (k) { return state.quiz[k]; });
      var qs = quizzes.reduce(function (a, q) { return a + q.s; }, 0), qt = quizzes.reduce(function (a, q) { return a + q.t; }, 0);
      var pct = track.length ? Math.round(done / track.length * 100) : 0;
      $("[data-prog-summary]").innerHTML =
        '<div class="prog-stat"><b>' + pct + '%</b><span>of REVEX completed</span></div>' +
        '<div class="prog-stat"><b>' + done + " / " + track.length + '</b><span>lessons, guides and scenarios</span></div>' +
        '<div class="prog-stat"><b>' + (qt ? Math.round(qs / qt * 100) + "%" : "–") + '</b><span>average quiz score' + (qt ? " (" + quizzes.length + " taken)" : "") + "</span></div>";
      $("[data-prog-sections]").innerHTML = ids.map(function (id, i) {
        var items = track.filter(function (t) { return t.s === id; });
        if (!items.length) return "";
        var d = items.filter(function (t) { return state.done[t.u]; }).length;
        var p = Math.round(d / items.length * 100);
        return '<div class="prog-row"><a href="' + esc(href(id + "/")) + '">' + esc(titles[i]) + '</a><div class="prog-bar" role="img" aria-label="' + p + '% complete"><i style="width:' + p + '%"></i></div><span class="mono">' + d + "/" + items.length + "</span></div>";
      }).join("");
      try {
        var cert = JSON.parse(localStorage.getItem("revex-cert"));
        if (cert && cert.id) {
          $("[data-cert-none]").hidden = true; $("[data-cert-have]").hidden = false;
          $("[data-cert-have-id]").textContent = cert.id;
          $("[data-cert-have-link]").href = href("verify/") + "?id=" + encodeURIComponent(cert.id);
        }
      } catch (e) {}
    }
    drawProgress();
    $("[data-prog-reset]").addEventListener("click", function () {
      var b = $("[data-prog-reset]");
      if (!b.classList.contains("is-confirm")) { b.classList.add("is-confirm"); b.lastChild.textContent = " Click again to clear lessons and quiz scores"; return; }
      state = { done: {}, quiz: {} }; save(state); drawProgress(); markUI();
      b.classList.remove("is-confirm"); b.lastChild.textContent = " Progress cleared";
    });
  }

  /* ------------------------------------------------ learning paths */
  $$("[data-path-progress]").forEach(function (el) {
    var urls = (el.getAttribute("data-urls") || "").split(" ").filter(Boolean);
    var d = urls.filter(function (u) { return state.done[u]; }).length;
    var pct = urls.length ? Math.round(d / urls.length * 100) : 0;
    el.textContent = el.hasAttribute("data-verbose")
      ? (d ? d + " of " + urls.length + " lessons and cases completed (" + pct + "%) on this device." : "Not started on this device.")
      : (d ? pct + "% complete" : "");
  });
  var nextBtn = $("[data-path-next]");
  if (nextBtn) {
    var items = $$("[data-path-item]");
    var next = items.filter(function (a) { return !state.done[a.getAttribute("data-topic")]; })[0];
    if (next) { nextBtn.href = next.getAttribute("href"); nextBtn.textContent = $(".topic-title", next).textContent.trim(); }
    else if (items.length) { $("[data-path-next-wrap]").innerHTML = "<strong>Path complete on this device.</strong> Try the practice cases again, or move on to the next path."; }
  }
  $$("[data-done-sr]").forEach(function (sp) { var a = sp.closest("a"); sp.textContent = a && state.done[a.getAttribute("data-topic")] ? " (completed)" : ""; });

  /* ------------------------------------------------ suggested practice (home) */
  var sugg = $("[data-suggest]");
  if (sugg) {
    try {
      var urls = JSON.parse(sugg.textContent), pick = urls.filter(function (u) { return !state.done[u]; })[0];
      if (pick) {
        var a = $('.case-list a[href$="' + pick.split("/").slice(-2).join("/") + '"]');
        if (a) { $("[data-suggest-title]").textContent = a.textContent.replace(/^\s*SC-\d+\s*/, ""); $("[data-suggest-link]").href = a.getAttribute("href"); $("[data-suggest-meta]").textContent = "A practice case you haven't finished yet."; }
      } else if (urls.length) { $("[data-suggest-title]").textContent = "All featured cases done"; $("[data-suggest-meta]").textContent = "More cases are waiting in the practice lab."; $("[data-suggest-link]").href = href("practice/"); $("[data-suggest-link]").textContent = "Open the practice lab"; }
    } catch (e) {}
  }

  /* ------------------------------------------------ practice lab filters */
  var lvlSel = $("[data-case-level]"), tagSel = $("[data-case-tag]");
  if (lvlSel && tagSel) {
    var runCases = function () {
      var n = 0;
      $$("[data-case]").forEach(function (li) {
        var hit = (!lvlSel.value || li.getAttribute("data-level") === lvlSel.value) && (!tagSel.value || li.getAttribute("data-tag") === tagSel.value);
        li.hidden = !hit; if (hit) n++;
      });
      $("[data-case-count]").textContent = n + (n === 1 ? " case" : " cases");
      $("[data-case-empty]").hidden = n > 0;
    };
    lvlSel.addEventListener("change", runCases); tagSel.addEventListener("change", runCases);
    $$("[data-case-clear]").forEach(function (b) { b.addEventListener("click", function () { lvlSel.value = ""; tagSel.value = ""; runCases(); lvlSel.focus(); }); });
    runCases();
  }

  /* ------------------------------------------------ competency self-check */
  var COMP_KEY = "revex-competency-v1";
  if ($("[data-comp]")) {
    var comp = {};
    try { comp = JSON.parse(localStorage.getItem(COMP_KEY)) || {}; } catch (e) { comp = {}; }
    var drawComp = function () {
      $$("[data-role]").forEach(function (card) {
        var boxes = $$("[data-comp]", card), n = boxes.filter(function (b) { return b.checked; }).length;
        $("[data-role-count]", card).textContent = n + "/" + boxes.length;
      });
    };
    $$("[data-comp]").forEach(function (b) {
      b.checked = !!comp[b.getAttribute("data-comp")];
      b.addEventListener("change", function () {
        if (b.checked) comp[b.getAttribute("data-comp")] = 1; else delete comp[b.getAttribute("data-comp")];
        try { localStorage.setItem(COMP_KEY, JSON.stringify(comp)); } catch (e) {}
        drawComp();
      });
    });
    var cr = $("[data-comp-reset]");
    if (cr) cr.addEventListener("click", function () {
      if (!cr.classList.contains("is-confirm")) { cr.classList.add("is-confirm"); cr.lastChild.textContent = " Click again to clear your ticks"; return; }
      comp = {}; try { localStorage.removeItem(COMP_KEY); } catch (e) {}
      $$("[data-comp]").forEach(function (b) { b.checked = false; }); drawComp();
      cr.classList.remove("is-confirm"); cr.lastChild.textContent = " Ticks cleared";
    });
    drawComp();
  }

  /* ------------------------------------------------ hero claim ticket */
  var ticket = $("[data-claim]");
  if (ticket) {
    var steps = $$("[data-ct-track] li", ticket), status = $("[data-ct-status]", ticket),
        result = $("[data-ct-result]", ticket), resultText = $("[data-ct-result-text]", ticket),
        caption = $("[data-ct-caption]", ticket), timers = [];
    var captions = [
      "The visit is coded and the charge is entered.",
      "The scrubber checks the claim before it leaves.",
      "The clearinghouse and payer accept the claim (277CA).",
      "Medicare allows $140.50. $39.50 is a CO-45 contractual write-off, and 20% coinsurance ($28.10) is the patient's share (PR-2).",
      "Payment posts from the ERA. The claim is closed."
    ];
    function setStep(i) {
      steps.forEach(function (s, j) { s.classList.toggle("is-done", j <= i); });
      status.textContent = steps[i].getAttribute("data-msg");
      caption.textContent = captions[i];
      var paid = i >= 3;
      result.classList.toggle("is-paid", i === 4);
      status.classList.toggle("is-paid", i === 4);
      resultText.textContent = paid ? "Paid $112.40, CO-45 $39.50, PR-2 $28.10" : "Pending";
    }
    function play() {
      timers.forEach(clearTimeout); timers = [];
      var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { setStep(4); return; }
      setStep(0);
      for (var i = 1; i < steps.length; i++) (function (k) { timers.push(setTimeout(function () { setStep(k); }, k * 1500)); })(i);
    }
    $("[data-ct-replay]", ticket).addEventListener("click", play);
    play();
  }
})();
