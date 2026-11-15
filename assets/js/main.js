/* Portfolio interactions. Rules: AGENTS.md §8.
   Hooks are data attributes, so new HTML can reuse them without new JS:
   data-theme-toggle, data-theme-label, data-clock, data-filter-list, data-copy, data-reveal. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Light / dark toggle. Light is the default; the choice is saved per visitor. */
  function theme() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function syncLabels() {
    document.querySelectorAll('[data-theme-label]').forEach(function (el) {
      el.textContent = theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    });
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = theme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncLabels();
    });
  });
  syncLabels();

  /* 2. Live clock (weekday + HH:MM in the owner's time zone). */
  document.querySelectorAll('[data-clock]').forEach(function (el) {
    var tz = el.getAttribute('data-tz') || 'Asia/Taipei';
    var day = el.querySelector('.clock-day');
    var time = el.querySelector('.clock-time');
    function tick() {
      var now = new Date();
      try {
        day.textContent = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: tz });
        time.textContent = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz });
      } catch (e) { time.textContent = now.toTimeString().slice(0, 5); }
    }
    tick();
    setInterval(tick, 15000);
  });

  /* 3. Filter chips: a .filters group filters the [data-filter-list] in the same tile. */
  document.querySelectorAll('.filters').forEach(function (group) {
    var scope = group.closest('.tile') || document;
    var list = scope.querySelector('[data-filter-list]');
    if (!list) return;
    group.addEventListener('click', function (ev) {
      var btn = ev.target.closest('.chip');
      if (!btn) return;
      var f = btn.getAttribute('data-filter');
      group.querySelectorAll('.chip').forEach(function (c) {
        var on = c === btn;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      list.querySelectorAll('[data-kind]').forEach(function (row) {
        row.hidden = !(f === 'all' || row.getAttribute('data-kind') === f);
      });
    });
  });

  /* 4. Copy buttons */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      function done(msg) { var old = btn.textContent; btn.textContent = msg; setTimeout(function () { btn.textContent = old; }, 1500); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done('Copied'); }, function () { done('Copy failed'); });
      }
    });
  });

  /* 5. Scroll reveal */
  var items = document.querySelectorAll('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }
})();
