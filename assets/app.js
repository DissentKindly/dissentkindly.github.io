/* ============================================================
   Patch Shelf — page logic.
   You should not need to edit this file. Edit data/mods.js.
   ============================================================ */

(function () {
  "use strict";

  var list = (typeof MODS !== "undefined" && Array.isArray(MODS)) ? MODS : [];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- front page ---------- */

  function cardHTML(m) {
    var shot = m.cover
      ? '<img src="' + esc(m.cover) + '" alt="" loading="lazy">'
      : "";
    var meta = [];
    if (m.version) meta.push("v" + esc(m.version));
    if (m.patchFormat) meta.push(esc(m.patchFormat));
    if (m.status) meta.push(esc(m.status));

    return '' +
      '<a class="card" href="mod.html?id=' + encodeURIComponent(m.id) + '">' +
        '<div class="spine"><span>' + esc(m.platform || "") + '</span></div>' +
        '<div class="card-body">' +
          '<div class="card-shot">' + shot + '</div>' +
          '<div class="card-text">' +
            '<h2 class="card-title">' + esc(m.title) + '</h2>' +
            (m.subtitle ? '<p class="card-sub">' + esc(m.subtitle) + '</p>' : '') +
            (m.blurb ? '<p class="card-blurb">' + esc(m.blurb) + '</p>' : '') +
            (meta.length ? '<div class="card-meta"><span>' +
              meta.join('</span><span>') + '</span></div>' : '') +
          '</div>' +
        '</div>' +
      '</a>';
  }

  function renderIndex() {
    var grid = document.getElementById("grid");
    if (!grid) return false;

    var filters = document.getElementById("filters");
    var count = document.getElementById("count");
    var active = "All";

    var platforms = ["All"];
    list.forEach(function (m) {
      if (m.platform && platforms.indexOf(m.platform) === -1) platforms.push(m.platform);
    });

    function draw() {
      var shown = active === "All"
        ? list
        : list.filter(function (m) { return m.platform === active; });

      grid.innerHTML = shown.length
        ? shown.map(cardHTML).join("")
        : '<p class="empty">Nothing here yet. Add an entry to data/mods.js.</p>';

      if (count) {
        count.textContent = shown.length + (shown.length === 1 ? " patch" : " patches");
      }
    }

    if (filters && platforms.length > 2) {
      filters.innerHTML = platforms.map(function (p) {
        return '<button class="filter" type="button" aria-pressed="' +
          (p === active) + '" data-p="' + esc(p) + '">' + esc(p) + '</button>';
      }).join("");

      filters.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter");
        if (!btn) return;
        active = btn.getAttribute("data-p");
        Array.prototype.forEach.call(filters.children, function (b) {
          b.setAttribute("aria-pressed", b === btn);
        });
        draw();
      });
    }

    draw();
    return true;
  }

  /* ---------- detail page ---------- */

  function rec(label, value, wide) {
    if (!value) return "";
    return '<div class="rec' + (wide ? " rec-wide" : "") + '"><dt>' + esc(label) +
           '</dt><dd>' + esc(value) + '</dd></div>';
  }

  function renderDetail() {
    var root = document.getElementById("detail");
    if (!root) return false;

    var id = new URLSearchParams(location.search).get("id");
    var m = list.filter(function (x) { return x.id === id; })[0];

    if (!m) {
      root.innerHTML =
        '<div class="wrap detail-head detail-end">' +
          '<h1 class="detail-title">Not found</h1>' +
          '<p class="detail-sub">That patch isn\'t on the shelf. ' +
          '<a href="index.html">See everything</a>.</p>' +
        '</div>';
      return true;
    }

    document.title = m.title + " — Patch Shelf";

    var records =
      rec("Version", m.version) +
      rec("Released", m.released) +
      rec("Status", m.status) +
      rec("Applies to", m.target) +
      rec("Patch format", m.patchFormat) +
      rec("Source checksum", m.sourceHash, true);

    var dl = m.download && m.download.url
      ? '<a class="dl" href="' + esc(m.download.url) + '" download>' +
          esc(m.download.label || "Download patch") +
          (m.download.size ? ' <small>' + esc(m.download.size) + '</small>' : '') +
        '</a>'
      : '';

    var gallery = (m.screenshots && m.screenshots.length)
      ? '<div class="gallery">' + m.screenshots.map(function (s, i) {
          return '<figure class="shot" role="button" tabindex="0" data-i="' + i + '">' +
            '<img src="' + esc(s.src) + '" alt="' + esc(s.caption || m.title) + '" loading="lazy">' +
            (s.caption ? '<figcaption>' + esc(s.caption) + '</figcaption>' : '') +
          '</figure>';
        }).join("") + '</div>'
      : '';

    function section(title, inner) {
      if (!inner) return "";
      return '<section class="section"><h2>' + title + '</h2>' +
             '<div class="prose">' + inner + '</div></section>';
    }

    var changes = (m.changes && m.changes.length)
      ? '<ul>' + m.changes.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join("") + '</ul>'
      : '';

    var install = (m.install && m.install.length)
      ? '<ol>' + m.install.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join("") + '</ol>'
      : '';

    root.innerHTML =
      '<div class="wrap detail-head">' +
        '<a class="crumb" href="index.html">&larr; All patches</a>' +
        '<div class="tag-row">' +
          (m.platform ? '<span class="tag">' + esc(m.platform) + '</span>' : '') +
          (m.status ? '<span class="tag ghost">' + esc(m.status) + '</span>' : '') +
        '</div>' +
        '<h1 class="detail-title">' + esc(m.title) + '</h1>' +
        (m.subtitle ? '<p class="detail-sub">' + esc(m.subtitle) + '</p>' : '') +
        (records ? '<dl class="record">' + records + '</dl>' : '') +
        dl +
        gallery +
      '</div>' +
      '<div class="wrap detail-end">' +
        section("About this patch", m.about) +
        section("What's changed", changes) +
        section("How to apply it", install) +
        section("Notes", m.notes) +
      '</div>';

    setupLightbox(m);
    return true;
  }

  /* ---------- lightbox ---------- */

  function setupLightbox(m) {
    var box = document.getElementById("lightbox");
    if (!box || !m.screenshots) return;

    var img = document.getElementById("lbImg");
    var cap = document.getElementById("lbCap");
    var closeBtn = document.getElementById("lbClose");
    var at = 0;

    function open(i) {
      at = i;
      var s = m.screenshots[i];
      img.src = s.src;
      cap.textContent = s.caption || "";
      box.hidden = false;
      closeBtn.focus();
    }
    function close() { box.hidden = true; img.src = ""; }
    function step(d) {
      open((at + d + m.screenshots.length) % m.screenshots.length);
    }

    document.querySelectorAll(".shot").forEach(function (el) {
      el.addEventListener("click", function () { open(+el.dataset.i); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(+el.dataset.i); }
      });
    });

    closeBtn.addEventListener("click", close);
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  renderIndex();
  renderDetail();
})();
