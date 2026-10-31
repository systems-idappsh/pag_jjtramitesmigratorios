(function () {
  "use strict";
  document.addEventListener("click", function (event) {
    var external = event.target.closest('a[target="_blank"]');
    if (!external) return;
    var rel = new Set((external.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
    rel.add("noopener");
    rel.add("noreferrer");
    external.setAttribute("rel", Array.from(rel).join(" "));
  });
})();
