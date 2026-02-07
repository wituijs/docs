import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interface: DefineStoreOptionsBase<S, Store>","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/interfaces/pinia.DefineStoreOptionsBase.md","filePath":"en/api/interfaces/pinia.DefineStoreOptionsBase.md"}');
const _sfc_main = { name: "en/api/interfaces/pinia.DefineStoreOptionsBase.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / DefineStoreOptionsBase</p><h1 id="Interface-DefineStoreOptionsBase-S-Store-" tabindex="-1">Interface: DefineStoreOptionsBase&lt;S, Store&gt; <a class="header-anchor" href="#Interface-DefineStoreOptionsBase-S-Store-" aria-label="Permalink to &quot;Interface: DefineStoreOptionsBase\\&lt;S, Store\\&gt;&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.DefineStoreOptionsBase</p><p>Options passed to <code>defineStore()</code> that are common between option and setup stores. Extend this interface if you want to add custom options to both kinds of stores.</p><h2 id="Type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#Type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>S</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">extends <a href="./../modules/pinia.html#StateTree"><code>StateTree</code></a></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Store</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Store</code></td></tr></tbody></table><h2 id="Hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#Hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><strong><code>DefineStoreOptionsBase</code></strong></p><p>↳ <a href="./pinia.DefineStoreOptions.html"><code>DefineStoreOptions</code></a></p><p>↳ <a href="./pinia.DefineSetupStoreOptions.html"><code>DefineSetupStoreOptions</code></a></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/interfaces/pinia.DefineStoreOptionsBase.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_DefineStoreOptionsBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_DefineStoreOptionsBase as default
};
