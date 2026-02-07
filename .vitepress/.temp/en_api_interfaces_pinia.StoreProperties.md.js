import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interface: StoreProperties<Id>","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/interfaces/pinia.StoreProperties.md","filePath":"en/api/interfaces/pinia.StoreProperties.md"}');
const _sfc_main = { name: "en/api/interfaces/pinia.StoreProperties.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / StoreProperties</p><h1 id="Interface-StoreProperties-Id-" tabindex="-1">Interface: StoreProperties&lt;Id&gt; <a class="header-anchor" href="#Interface-StoreProperties-Id-" aria-label="Permalink to &quot;Interface: StoreProperties\\&lt;Id\\&gt;&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.StoreProperties</p><p>Properties of a store.</p><h2 id="Type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#Type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">extends <code>string</code></td></tr></tbody></table><h2 id="Hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#Hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><strong><code>StoreProperties</code></strong></p><p>↳ <a href="./pinia._StoreWithState.html"><code>_StoreWithState</code></a></p></li></ul><h2 id="Properties" tabindex="-1">Properties <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="-id" tabindex="-1">$id <a class="header-anchor" href="#-id" aria-label="Permalink to &quot;$id&quot;">​</a></h3><p>• <strong>$id</strong>: <code>Id</code></p><p>Unique identifier of the store</p><hr><h3 id="-customProperties" tabindex="-1">_customProperties <a class="header-anchor" href="#-customProperties" aria-label="Permalink to &quot;\\_customProperties&quot;">​</a></h3><p>• <strong>_customProperties</strong>: <code>Set</code>&lt;<code>string</code>&gt;</p><p>Used by devtools plugin to retrieve properties added with plugins. Removed in production. Can be used by the user to add property keys of the store that should be displayed in devtools.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/interfaces/pinia.StoreProperties.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_StoreProperties = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_StoreProperties as default
};
