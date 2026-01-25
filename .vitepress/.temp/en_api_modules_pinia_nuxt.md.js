import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Module: @pinia/nuxt","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/modules/pinia_nuxt.md","filePath":"en/api/modules/pinia_nuxt.md"}');
const _sfc_main = { name: "en/api/modules/pinia_nuxt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API Documentation</a> / @pinia/nuxt</p><h1 id="Module-pinia-nuxt" tabindex="-1">Module: @pinia/nuxt <a class="header-anchor" href="#Module-pinia-nuxt" aria-label="Permalink to &quot;Module: @pinia/nuxt&quot;">​</a></h1><h2 id="Interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#Interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/pinia_nuxt.ModuleOptions.html">ModuleOptions</a></li></ul><h2 id="Functions" tabindex="-1">Functions <a class="header-anchor" href="#Functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h3><p>▸ <strong>default</strong>(<code>this</code>, <code>inlineOptions</code>, <code>nuxt</code>): <code>_ModuleSetupReturn</code></p><h4 id="Parameters" tabindex="-1">Parameters <a class="header-anchor" href="#Parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>this</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>void</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>inlineOptions</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/pinia_nuxt.ModuleOptions.html"><code>ModuleOptions</code></a></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>nuxt</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Nuxt</code></td></tr></tbody></table><h4 id="Returns" tabindex="-1">Returns <a class="header-anchor" href="#Returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>_ModuleSetupReturn</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/modules/pinia_nuxt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_nuxt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_nuxt as default
};
