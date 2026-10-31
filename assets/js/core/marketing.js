(function () {
  "use strict";

  if (window.__JJ_MARKETING_INIT__) return;
  window.__JJ_MARKETING_INIT__ = true;

  var config = window.JJ && window.JJ.institution ? window.JJ.institution.marketing : null;
  var storageKey = "jj-cookie-consent";
  var analyticsId = config && typeof config.googleAnalyticsId === "string" ? config.googleAnalyticsId.trim() : "";
  var pixelId = config && typeof config.metaPixelId === "string" ? config.metaPixelId.trim() : "";
  var consentVersion = config && config.consentVersion ? String(config.consentVersion) : "1";

  function readConsent() {
    try {
      var value = JSON.parse(localStorage.getItem(storageKey) || "null");
      return value && value.version === consentVersion ? value : null;
    } catch (_) {
      return null;
    }
  }

  function saveConsent(accepted) {
    var value = { version: consentVersion, analytics: Boolean(accepted), marketing: Boolean(accepted), updatedAt: new Date().toISOString() };
    try { localStorage.setItem(storageKey, JSON.stringify(value)); } catch (_) { /* almacenamiento no disponible */ }
    return value;
  }

  function addScript(src, id) {
    if (document.getElementById(id)) return;
    var script = document.createElement("script");
    script.id = id;
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function loadGoogleAnalytics() {
    if (!/^G-[A-Z0-9]+$/i.test(analyticsId)) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", analyticsId, { anonymize_ip: true });
    addScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(analyticsId), "jj-ga4");
  }

  function loadMetaPixel() {
    if (!/^\d{6,20}$/.test(pixelId) || typeof window.fbq === "function") return;
    var fbq = window.fbq = function () {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    addScript("https://connect.facebook.net/en_US/fbevents.js", "jj-meta-pixel");
    fbq("init", pixelId);
    fbq("track", "PageView");
  }

  function enable(consent) {
    if (!consent || !consent.analytics) return;
    loadGoogleAnalytics();
    if (consent.marketing) loadMetaPixel();
  }

  function eventName(link) {
    if (link.dataset.analytics) return link.dataset.analytics;
    var href = (link.getAttribute("href") || "").toLowerCase();
    if (href.indexOf("wa.me/") !== -1) return "whatsapp_click";
    if (href.indexOf("tel:") === 0) return "phone_click";
    if (href.indexOf("mailto:") === 0) return "email_click";
    if (href.indexOf("maps") !== -1) return "maps_click";
    return "";
  }

  function track(name, link) {
    if (!name) return;
    var params = {
      page_path: window.location.pathname,
      placement: link.dataset.analytics || "link"
    };
    if (typeof window.gtag === "function") window.gtag("event", name, params);
    if (typeof window.fbq === "function" && /whatsapp|phone|email|contact/.test(name)) {
      window.fbq("trackCustom", name, params);
    }
  }

  function bindTracking() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest("a[href]");
      if (link) track(eventName(link), link);
    }, { passive: true });
  }

  function renderConsent() {
    if ((!analyticsId && !pixelId) || readConsent() || document.getElementById("jj-consent")) return;
    var banner = document.createElement("section");
    banner.id = "jj-consent";
    banner.className = "jj-consent";
    banner.setAttribute("aria-label", "Preferencias de privacidad");
    banner.innerHTML = '<div><strong>Privacidad y medición</strong><p>Usamos medición opcional para entender el uso del sitio. Puedes aceptar o continuar únicamente con funciones necesarias. Consulta el <a href="' + (window.JJ.rootUrl || "/") + 'pages/legal/aviso-privacidad.html">aviso de privacidad</a>.</p></div><div class="jj-consent__actions"><button type="button" class="btn btn--outline-dark" data-consent="reject">Solo necesarias</button><button type="button" class="btn btn--gold" data-consent="accept">Aceptar medición</button></div>';
    document.body.appendChild(banner);
    banner.addEventListener("click", function (event) {
      var button = event.target.closest("[data-consent]");
      if (!button) return;
      var consent = saveConsent(button.dataset.consent === "accept");
      banner.remove();
      enable(consent);
    });
  }

  bindTracking();
  enable(readConsent());
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderConsent, { once: true });
  else renderConsent();
})();
