(function () {
  "use strict";

  function escapeHtml(value) {
    var node = document.createElement("span");
    node.textContent = value == null ? "" : String(value);
    return node.innerHTML;
  }

  function siteUrl(value) {
    var base = (window.JJ && window.JJ.rootUrl) ? window.JJ.rootUrl : (window.location.pathname.indexOf("/pages/") !== -1 ? new URL("../../", window.location.href) : new URL("./", window.location.href));
    return new URL(String(value || "").replace(/^\/+/, ""), base).href;
  }

  function anchorId(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function categoryUrl(category, service) {
    var url = siteUrl("pages/servicios/" + category.slug + ".html");
    return service ? url + "#" + anchorId(service.name) : url;
  }

  function renderSlides() {
    var track = document.querySelector("[data-hero-slides]");
    if (!track || !window.JJ.showcase) return;

    track.innerHTML = window.JJ.showcase.slides.map(function (slide, index) {
      var active = index === 0;
      return '<a class="hero-slide' + (slide.contain ? ' hero-slide--contain' : '') + (active ? ' is-active' : '') + '" data-hero-slide href="' + escapeHtml(siteUrl(slide.href)) + '" aria-hidden="' + (active ? 'false' : 'true') + '"' + (active ? '' : ' tabindex="-1"') + '>' +
        '<picture>' +
          '<source media="(max-width: 720px)" srcset="' + escapeHtml(siteUrl(slide.mobileImage)) + '">' +
          '<img src="' + escapeHtml(siteUrl(slide.image)) + '" width="' + escapeHtml(slide.width || 2172) + '" height="' + escapeHtml(slide.height || 724) + '" alt="' + escapeHtml(slide.alt) + '" decoding="async" loading="eager" fetchpriority="' + (active ? 'high' : 'low') + '">' +
        '</picture>' +
      '</a>';
    }).join("");
  }

  function renderServices() {
    var track = document.querySelector("[data-service-track]");
    if (!track || !window.JJ.services || !window.JJ.showcase) return;

    var positions = {};
    window.JJ.showcase.services.forEach(function (item) { positions[item.href.split("/").pop().replace(".html", "")] = item.position; });

    track.innerHTML = window.JJ.services.map(function (category) {
      var serviceLinks = category.services.map(function (service) {
        return '<li><a href="' + escapeHtml(categoryUrl(category, service)) + '">' + escapeHtml(service.name) + '</a></li>';
      }).join("");
      return '<li class="service-tile" data-service-card role="listitem">' +
        '<a class="service-tile__visual" href="' + escapeHtml(categoryUrl(category)) + '" aria-label="Abrir ' + escapeHtml(category.name) + '">' +
          '<span class="service-tile__art" style="background-position:' + escapeHtml(positions[category.slug] || "50% 50%") + '" aria-hidden="true"></span>' +
          '<span class="service-tile__status">' + escapeHtml(category.name) + '</span>' +
        '</a>' +
        '<div class="service-tile__body">' +
          '<h3><a href="' + escapeHtml(categoryUrl(category)) + '">' + escapeHtml(category.name) + '</a></h3>' +
          '<ul class="service-tile__list">' + serviceLinks + '</ul>' +
          '<a class="service-tile__detail" href="' + escapeHtml(categoryUrl(category)) + '"><span>Ver detalle</span><span aria-hidden="true">→</span></a>' +
        '</div>' +
      '</li>';
    }).join("");
  }

  function init() {
    renderSlides();
    renderServices();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
