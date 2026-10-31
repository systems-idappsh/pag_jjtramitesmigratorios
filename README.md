# Despacho Jurídico y Trámites Migratorios J&J

Sitio estático modular listo para GitHub Pages. No requiere compilación ni dependencias de producción.

La configuración editorial, técnica y de publicación se documenta en [`DOCUMENTACION-SEO-Y-PUBLICACION.md`](DOCUMENTACION-SEO-Y-PUBLICACION.md).

## Desarrollo local

Desde esta carpeta ejecuta `python -m http.server 5500` y abre `http://localhost:5500`. El servidor local es la validación recomendada; el layout también incluye una reserva integrada para mostrar navegación, pie y CTA cuando `index.html` se abre directamente con `file://`.

## Publicación en GitHub Pages

1. Publica **el contenido de esta carpeta** en la raíz de la rama elegida; `index.html`, `CNAME` y `.nojekyll` deben quedar en el nivel superior.
2. En `Settings > Pages`, selecciona `Deploy from a branch`, la rama de publicación y `/ (root)`.
3. En `Custom domain`, configura `jjtramitesmigratorios.com` y activa `Enforce HTTPS` cuando GitHub confirme el certificado.
4. En el proveedor DNS crea los registros que GitHub indique. El dominio fue eliminado previamente de Cloudflare: antes de publicar debe volver a añadirse a la cuenta o administrarse desde el proveedor DNS activo.
5. Verifica `https://jjtramitesmigratorios.com/robots.txt`, `https://jjtramitesmigratorios.com/sitemap.xml` y registra el sitemap en Google Search Console y Bing Webmaster Tools.

No cambies el dominio sin actualizar también `CNAME`, `sitemap.xml`, los enlaces `canonical`, `og:url`, el JSON-LD y `assets/js/config/institution.js`.

## SEO, redes y medición

- Las páginas públicas incluyen título, descripción, canonical, robots, Open Graph, Twitter Cards y datos estructurados JSON-LD.
- `sitemap.xml` contiene las páginas indexables; `404.html` usa `noindex`.
- La ficha local usa el domicilio `Hidalgo Ote. 271, Centro, 61853 La Huacana, Michoacán` y los canales institucionales proporcionados.
- `assets/js/core/marketing.js` admite GA4 y Meta Pixel solo después del consentimiento. Coloca los identificadores reales en `assets/js/config/institution.js` (`googleAnalyticsId` y `metaPixelId`). Si están vacíos, no se descarga ningún rastreador ni aparece el banner.
- Los clics en WhatsApp, teléfono, correo y mapa se registran cuando existe una integración válida. Nunca coloques tokens, contraseñas ni credenciales en JavaScript público.
- Confirma la titularidad de los perfiles de Facebook antes de presentarlos como verificados.

## Estructura editorial

- `pages/core/`: directorio de servicios, preguntas frecuentes, contacto con mapa y ruta antigua del despacho solo para compatibilidad.
- `pages/servicios/`: cinco categorías, catorce grupos de servicios y una página de apoyo para adultos mayores.
- `pages/paises/`: México y Estados Unidos con fuentes oficiales y límites de orientación.
- `pages/legal/`: aviso de privacidad, términos y políticas de servicio.
- `assets/js/config/institution.js`: datos institucionales y configuración de medición.
- `assets/js/content/services.js`: catálogo único de servicios.
- `components/`: cabecera, navegación, CTA, pie y botón de WhatsApp compartidos.

## Antes de abrir al público

- Confirmar horario de atención, jurisdicción profesional, cédula o datos que legalmente deban exhibirse y disponibilidad real de traslados.
- Validar con una persona especialista el aviso de privacidad y los términos antes de recibir expedientes o datos sensibles.
- Confirmar los dos enlaces de Facebook, configurar GA4/Meta Pixel solo si se usarán y actualizar el texto de consentimiento si cambian los proveedores.
- Comprobar DNS, HTTPS, dominio canónico, favicon, vista móvil, enlaces y mapa después del despliegue.
