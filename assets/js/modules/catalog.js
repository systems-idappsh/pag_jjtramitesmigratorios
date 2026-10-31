(function () {
  "use strict";

  var categoryOrder = ["derecho-familiar", "derecho-civil", "tramites-migratorios", "acompanamiento-embajadas", "pasaportes"];
  var positions = {
    "tramites-migratorios": "0% 0%", "derecho-familiar": "50% 0%", pasaportes: "100% 0%",
    "derecho-civil": "0% 100%", "acompanamiento-embajadas": "100% 100%"
  };
  var iconPaths = {
    family: "M16 20v-1.5a4.5 4.5 0 0 0-9 0V20m13 0v-1a3 3 0 0 0-3-3m-5-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 0a2.5 2.5 0 1 0 0-5",
    balance: "M12 3v18M5 6h14M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7ZM8 21h8",
    migration: "M4 12h16M12 4c3 2.7 3 13.3 0 16M12 4c-3 2.7-3 13.3 0 16M5.5 7.5h13m-13 9h13",
    care: "M12 21S4 16.5 4 10a4 4 0 0 1 7-2.6L12 8.7l1-1.3A4 4 0 0 1 20 10c0 6.5-8 11-8 11Z",
    embassy: "m3 10 9-6 9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M2 10h20",
    passport: "M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm5 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3.5 4h7",
    whatsapp: "M20.5 11.5a8.5 8.5 0 1 1-3.8-7.1M8.3 8.8c.5 3.3 3.1 5.9 6.4 6.4",
    arrow: "M5 12h14m-5-5 5 5-5 5"
  };

  function esc(value) {
    var node = document.createElement("span");
    node.textContent = value == null ? "" : String(value);
    return node.innerHTML;
  }

  function categories() {
    return categoryOrder.map(function (slug) { return window.JJ.getCategory(slug); }).filter(Boolean);
  }

  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + iconPaths[name] + '"></path></svg>';
  }

  function categoryUrl(category) {
    var base = (window.JJ && window.JJ.rootUrl) ? window.JJ.rootUrl : (window.location.pathname.indexOf("/pages/") !== -1 ? new URL("../../", window.location.href) : new URL("./", window.location.href));
    return new URL("pages/servicios/" + category.slug + ".html", base).href;
  }

  function serviceAnchor(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function card(category) {
    var services = category.services.slice(0, 3).map(function (service) { return "<li>" + esc(service.name) + "</li>"; }).join("");
    return '<article class="jj-category-card"><a class="jj-category-card__hit" href="' + categoryUrl(category) + '" aria-label="Abrir ' + esc(category.name) + '"><div class="jj-category-card__visual"><span class="jj-category-card__number">' + esc(category.number) + '</span><span class="jj-category-card__icon">' + icon(category.icon) + '</span><h3>' + esc(category.name) + '</h3></div><div class="jj-category-card__body"><p>' + esc(category.description) + '</p><ul>' + services + '</ul><span class="jj-category-card__link">Abrir servicio <span aria-hidden="true">→</span></span></div></a></article>';
  }

  function compactCard(category) {
    return '<article class="service-category-card"><a class="service-category-card__hit" href="#' + esc(category.slug) + '" aria-label="Ver detalle de ' + esc(category.name) + '"><div class="service-category-card__visual"><span class="service-category-card__art" style="background-position:' + positions[category.slug] + '"></span><span class="service-category-card__status">Área ' + esc(category.number) + '</span></div><div class="service-category-card__body"><h3>' + esc(category.name) + '</h3><ul class="service-category-card__list">' + category.services.slice(0, 2).map(function (service) { return '<li>' + esc(service.name) + '</li>'; }).join("") + '</ul><span class="service-category-card__link"><span>Ver detalle</span><span aria-hidden="true">↓</span></span></div></a></article>';
  }

  function detail(category) {
    var principal = category.services.slice(0, 3).map(function (service) { return '<li>' + esc(service.name) + '</li>'; }).join("");
    var offerings = category.services.map(function (service) {
      return '<li><strong>' + esc(service.name) + '</strong><span>' + esc(service.description) + '</span></li>';
    }).join("");
    return '<article class="service-category-detail" id="' + esc(category.slug) + '"><aside class="service-category-detail__aside"><div class="service-category-detail__image"><span class="service-category-detail__art" style="background-position:' + positions[category.slug] + '"></span></div></aside><div class="service-category-detail__main"><header class="service-category-detail__header"><div><span class="service-category-detail__number">' + esc(category.number) + '</span><h2>' + esc(category.name) + '</h2></div><span class="service-state service-state--conditional">Sujeto a revisión</span></header><p class="service-category-detail__objective">' + esc(category.description) + '</p><div class="service-summary-grid"><section class="service-summary-box"><h3>Servicios principales</h3><ul>' + principal + '</ul></section><section class="service-summary-box"><h3>Atención individual</h3><ul><li>Revisión inicial de antecedentes</li><li>Definición de documentos y alcance</li></ul></section></div><h3 class="service-list-title">Catálogo de servicios</h3><ol class="service-offerings">' + offerings + '</ol><p class="service-notice">La viabilidad, requisitos, disponibilidad y condiciones se confirman después de revisar cada asunto. No se garantizan resoluciones de autoridades.</p><div class="service-category-detail__actions"><a class="btn btn--whatsapp" href="https://wa.me/524251039697" target="_blank" rel="noopener noreferrer">' + icon("whatsapp") + 'Consultar por WhatsApp</a><a class="btn btn--outline-dark" href="' + categoryUrl(category) + '">' + icon("arrow") + 'Abrir categoría</a><a class="service-category-detail__top" href="#catalogo">↑ Volver a categorías</a></div></div></article>';
  }

  function renderCatalogs() {
    document.querySelectorAll("[data-service-catalog]").forEach(function (container) { container.innerHTML = categories().map(card).join(""); });
  }

  function renderServicesPage() {
    var page = document.querySelector("[data-services-page]");
    if (!page) return;
    var top = page.querySelector("[data-services-cards]");
    var details = page.querySelector("[data-services-details]");
    if (top) top.innerHTML = categories().map(compactCard).join("");
    if (details) details.innerHTML = categories().map(detail).join("");
  }

  function renderCategory() {
    var page = document.querySelector("[data-category-page]");
    if (!page) return;
    var category = window.JJ.getCategory(page.dataset.categoryPage);
    if (!category) { page.innerHTML = '<div class="container"><p>No se encontró la categoría solicitada.</p></div>'; return; }
    var container = page.querySelector(".container");
    if (container && !container.querySelector(".jj-back-row")) {
      container.insertAdjacentHTML("afterbegin", '<div class="jj-back-row"><a class="btn btn--outline-dark btn--sm" href="' + new URL("pages/core/servicios.html", window.JJ.rootUrl || window.location.href).href + '">← Volver a todos los servicios</a></div>');
    }
    document.querySelectorAll("[data-category-name]").forEach(function (node) { node.textContent = category.name; });
    document.querySelectorAll("[data-category-description]").forEach(function (node) { node.textContent = category.description; });
    var list = page.querySelector("[data-category-services]");
    if (list && !list.children.length) list.innerHTML = category.services.map(function (service, index) {
      var situations = service.situations.map(function (item) { return '<li>' + esc(item) + '</li>'; }).join("");
      return '<article class="jj-service-card" id="' + esc(serviceAnchor(service.name)) + '"><span class="jj-service-card__number">' + category.number + '.' + String(index + 1).padStart(2, "0") + '</span><h2>' + esc(service.name) + '</h2><p class="jj-service-card__summary">' + esc(service.summary) + '</p><p>' + esc(service.description) + '</p><h3>Situaciones habituales</h3><ul>' + situations + '</ul></article>';
    }).join("");
    if (window.location.hash) {
      var target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) window.requestAnimationFrame(function () { target.scrollIntoView({ block: "start" }); });
    }
  }

  document.addEventListener("DOMContentLoaded", function () { renderCatalogs(); renderServicesPage(); renderCategory(); });
})();
