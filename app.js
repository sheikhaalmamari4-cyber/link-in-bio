/* ريّــد — link in bio
   Builds the link list from config.js. */

(function () {
  'use strict';

  var cfg = window.REID_CONFIG || {};
  var links = cfg.links || {};

  var ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="3"/><path d="m3.5 7 7.34 5.3a2 2 0 0 0 2.32 0L20.5 7"/></svg>',
    website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.2"/><path d="M2.8 12h18.4M12 2.8a15 15 0 0 1 0 18.4 15 15 0 0 1 0-18.4Z"/></svg>'
  };

  var CHEVRON = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5.5 8.5 12l6.5 6.5"/></svg>';
  var COPY_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M15 5.5A2.5 2.5 0 0 0 12.5 3h-6A3.5 3.5 0 0 0 3 6.5v6A2.5 2.5 0 0 0 5.5 15"/></svg>';

  /* ---------- helpers ---------- */

  function digits(v) { return String(v || '').replace(/\D/g, ''); }

  /* تنسيق الرقم للعرض فقط — الرابط نفسه يستخدم الأرقام كما هي */
  var PHONE_FORMATS = [
    { cc: '966', groups: [2, 3, 4] },   /* السعودية */
    { cc: '971', groups: [2, 3, 4] },   /* الإمارات */
    { cc: '968', groups: [4, 4] },      /* عُمان */
    { cc: '965', groups: [4, 4] },      /* الكويت */
    { cc: '974', groups: [4, 4] },      /* قطر */
    { cc: '973', groups: [4, 4] },      /* البحرين */
    { cc: '962', groups: [1, 4, 4] },   /* الأردن */
    { cc: '20',  groups: [3, 3, 4] },   /* مصر */
    { cc: '44',  groups: [4, 3, 3] },   /* بريطانيا */
    { cc: '1',   groups: [3, 3, 4] }    /* أمريكا وكندا */
  ];

  function prettyPhone(raw) {
    var d = digits(raw);
    if (!d) return '';

    for (var i = 0; i < PHONE_FORMATS.length; i++) {
      var f = PHONE_FORMATS[i];
      if (d.indexOf(f.cc) !== 0) continue;

      var rest = d.slice(f.cc.length);
      var expected = f.groups.reduce(function (a, b) { return a + b; }, 0);
      if (rest.length !== expected) continue;

      var parts = [];
      var pos = 0;
      f.groups.forEach(function (g) { parts.push(rest.substr(pos, g)); pos += g; });
      return '+' + f.cc + ' ' + parts.join(' ');
    }

    return '+' + d;   /* رقم بصيغة غير معروفة — يُعرض كما هو */
  }

  function withProtocol(url) {
    var u = String(url || '').trim();
    if (!u) return '';
    return /^https?:\/\//i.test(u) ? u : 'https://' + u;
  }

  function prettyUrl(url) {
    var u = withProtocol(url);
    if (!u) return '';
    try {
      var p = new URL(u);
      return (p.host + p.pathname).replace(/^www\./, '').replace(/\/$/, '');
    } catch (e) {
      return u.replace(/^https?:\/\//i, '').replace(/\/$/, '');
    }
  }

  /* ---------- build the entries ---------- */

  var entries = [];

  if (links.linkedin) {
    entries.push({
      key: 'linkedin',
      label: 'لينكدإن',
      value: prettyUrl(links.linkedin),
      href: withProtocol(links.linkedin),
      external: true
    });
  }

  if (links.whatsapp) {
    var wa = digits(links.whatsapp);
    var msg = cfg.whatsappMessage ? '?text=' + encodeURIComponent(cfg.whatsappMessage) : '';
    entries.push({
      key: 'whatsapp',
      label: 'واتساب',
      value: prettyPhone(wa),
      href: 'https://wa.me/' + wa + msg,
      external: true,
      copy: '+' + wa,
      copyLabel: 'نسخ رقم الواتساب'
    });
  }

  if (links.email) {
    entries.push({
      key: 'email',
      label: 'البريد الإلكتروني',
      value: links.email,
      href: 'mailto:' + links.email,
      copy: links.email,
      copyLabel: 'نسخ البريد الإلكتروني'
    });
  }

  if (links.instagram) {
    var handle = String(links.instagram).trim().replace(/^@/, '').replace(/^https?:\/\/(www\.)?instagram\.com\//i, '').replace(/\/$/, '');
    entries.push({
      key: 'instagram',
      label: 'انستقرام',
      value: '@' + handle,
      href: 'https://instagram.com/' + handle,
      external: true
    });
  }

  if (links.website) {
    entries.push({
      key: 'website',
      label: 'الموقع الإلكتروني',
      value: prettyUrl(links.website),
      href: withProtocol(links.website),
      external: true
    });
  }

  /* ---------- render ---------- */

  var list = document.getElementById('links');

  entries.forEach(function (item, i) {
    var a = document.createElement('a');
    a.className = 'link';
    a.href = item.href;
    a.dataset.key = item.key;
    a.style.setProperty('--delay', (90 + i * 70) + 'ms');
    if (item.external) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.setAttribute('aria-label', item.label + ': ' + item.value);

    a.innerHTML =
      '<span class="icon">' + ICONS[item.key] + '</span>' +
      '<span class="text">' +
        '<span class="label">' + item.label + '</span>' +
        '<span class="value">' + item.value + '</span>' +
      '</span>' +
      (item.copy
        ? '<button class="copy" type="button" title="' + item.copyLabel + '" aria-label="' + item.copyLabel + '">' + COPY_ICON + '</button>'
        : CHEVRON);

    var btn = a.querySelector('.copy');
    if (btn) {
      btn.addEventListener('click', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        copy(item.copy, 'تم نسخ ' + item.label);
      });
    }

    list.appendChild(a);
  });

  /* ---------- head text ---------- */

  if (cfg.name) {
    document.getElementById('wordmark').alt = cfg.name;
    document.title = cfg.name + ' — روابط التواصل';
  }
  if (cfg.tagline) document.getElementById('tagline').textContent = cfg.tagline;
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- toast ---------- */

  var toast = document.getElementById('toast');
  var toastTimer;

  function say(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }

  function copy(text, message) {
    var done = function () { say(message); };
    var fail = function () { say('تعذّر النسخ'); };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }

    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy') ? done() : fail(); } catch (e) { fail(); }
      document.body.removeChild(ta);
    }
  }

  /* ---------- share ---------- */

  document.getElementById('share').addEventListener('click', function () {
    var data = {
      title: (cfg.name || 'ريّــد') + ' — روابط التواصل',
      text: cfg.tagline || '',
      url: location.href
    };
    if (navigator.share) {
      navigator.share(data).catch(function () { /* المستخدم ألغى المشاركة */ });
    } else {
      copy(location.href, 'تم نسخ رابط الصفحة');
    }
  });
})();
