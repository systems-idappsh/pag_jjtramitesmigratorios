(function () {
  "use strict";

  window.JJ = window.JJ || {};
  window.JJ.showcase = Object.freeze({
    interval: 5000,
    slides: Object.freeze([
      Object.freeze({
        href: "index.html#despacho",
        image: "assets/img/brand-jj/banner-jj.png",
        mobileImage: "assets/img/brand-jj/banner-jj.png",
        width: 1280,
        height: 548,
        contain: true,
        alt: "Despacho Jurídico y Trámites Migratorios J&J"
      }),
      Object.freeze({
        href: "pages/servicios/tramites-migratorios.html",
        image: "assets/img/banners/banner-visas.webp",
        mobileImage: "assets/img/banners/banner-visas-1086.webp",
        width: 2172,
        height: 724,
        alt: "Visas con orientación y guía profesional"
      }),
      Object.freeze({
        href: "pages/servicios/pasaportes.html",
        image: "assets/img/banners/banner-pasaportes.webp",
        mobileImage: "assets/img/banners/banner-pasaportes-1086.webp",
        width: 2172,
        height: 724,
        alt: "Orientación para trámites de pasaportes"
      })
    ]),
    services: Object.freeze([
      Object.freeze({ name: "Derecho familiar", href: "pages/servicios/derecho-familiar.html", position: "50% 0%" }),
      Object.freeze({ name: "Derecho civil", href: "pages/servicios/derecho-civil.html", position: "0% 100%" }),
      Object.freeze({ name: "Trámites migratorios", href: "pages/servicios/tramites-migratorios.html", position: "0% 0%" }),
      Object.freeze({ name: "Acompañamiento consular", href: "pages/servicios/acompanamiento-embajadas.html", position: "100% 100%" }),
      Object.freeze({ name: "Pasaportes", href: "pages/servicios/pasaportes.html", position: "100% 0%" })
    ])
  });
})();
