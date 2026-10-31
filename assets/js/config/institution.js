(function () {
  "use strict";

  var institution = Object.freeze({
    brand: Object.freeze({
      name: "Despacho Jurídico y Trámites Migratorios",
      shortName: "J&J TRÁMITES MIGRATORIOS",
      professionalName: "Lic. Juan José Cárdenas Solorio",
      slogan: "Compromiso, ética y resultados"
    }),
    professional: Object.freeze({
      name: "Juan José Cárdenas Solorio",
      title: "Licenciado",
      profession: "Abogado",
      experienceYears: 18
    }),
    contact: Object.freeze({
      email: "lic.j.j.tramites.mig@gmail.com",
      phones: Object.freeze([
        Object.freeze({ label: "Teléfono principal", display: "425 103 9697", e164: "+524251039697", tel: "tel:+524251039697", whatsapp: "https://wa.me/524251039697", whatsappAnnounced: true }),
        Object.freeze({ label: "Teléfono secundario", display: "425 103 1294", e164: "+524251031294", tel: "tel:+524251031294", whatsapp: "https://wa.me/524251031294", whatsappAnnounced: true })
      ])
    }),
    location: Object.freeze({
      country: "México",
      mapsUrl: "https://maps.app.goo.gl/RT4tmzjG8fqX5W6o7?g_st=atm",
      mapsEmbedUrl: "https://www.google.com/maps?q=DESPACHO%20JURIDICO%20J%26J%2C%20Hidalgo%20Ote.%20271%2C%20Centro%2C%2061853%20La%20Huacana%2C%20Michoac%C3%A1n&output=embed",
      displayAddress: "Hidalgo Ote. 271, Centro, 61853 La Huacana, Michoacán",
      streetAddress: "Hidalgo Ote. 271",
      locality: "La Huacana",
      region: "Michoacán",
      postalCode: "61853",
      addressVerified: true
    }),
    social: Object.freeze({
      facebook: Object.freeze([
        "https://www.facebook.com/share/1C5XV5uBvW/",
        "https://www.facebook.com/share/1KRgi5VjQN/"
      ]),
      ownershipVerified: false
    }),
    serviceRegions: Object.freeze(["México", "Estados Unidos", "Cuba", "Colombia"]),
    schedule: Object.freeze({
      display: "De 9:00 a 18:00 horas",
      full: "Lunes a Viernes de 9:00 a 18:00 horas",
      hours: "09:00 - 18:00"
    }),
    language: "es-MX",
    website: "https://jjtramitesmigratorios.com/",
    marketing: Object.freeze({
      googleAnalyticsId: "",
      metaPixelId: "",
      consentVersion: "2026-10-24"
    })
  });

  function read(path) {
    return path.split(".").reduce(function (value, key) {
      return value == null ? undefined : value[key];
    }, institution);
  }

  function hydrate(root) {
    var scope = root || document;
    scope.querySelectorAll("[data-config-text]").forEach(function (node) {
      var value = read(node.dataset.configText);
      if (value !== undefined) node.textContent = String(value);
    });
    scope.querySelectorAll("[data-config-href]").forEach(function (node) {
      var value = read(node.dataset.configHref);
      if (value) node.setAttribute("href", (node.dataset.prefix || "") + String(value));
    });
    scope.querySelectorAll("[data-current-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  function getRootUrl() {
    var script = document.currentScript || document.querySelector('script[src*="institution.js"]');
    if (script && script.src) {
      try {
        return new URL("../../../", script.src);
      } catch (_) {}
    }
    var path = window.location.pathname;
    if (path.indexOf("/pages/") !== -1) {
      return new URL("../../", window.location.href);
    }
    return new URL("./", window.location.href);
  }

  window.JJ = window.JJ || {};
  window.JJ.rootUrl = getRootUrl();
  window.JJ.institution = institution;
  window.JJ.hydrateInstitution = hydrate;
  document.addEventListener("DOMContentLoaded", function () { hydrate(document); });
  document.addEventListener("jj:layout-ready", function () { hydrate(document); });
})();
