import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interface: MapStoresCustomization","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/interfaces/pinia.MapStoresCustomization.md","filePath":"en/api/interfaces/pinia.MapStoresCustomization.md"}');
const _sfc_main = { name: "en/api/interfaces/pinia.MapStoresCustomization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / MapStoresCustomization</p><h1 id="Interface-MapStoresCustomization" tabindex="-1">Interface: MapStoresCustomization <a class="header-anchor" href="#Interface-MapStoresCustomization" aria-label="Permalink to &quot;Interface: MapStoresCustomization&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.MapStoresCustomization</p><p>Interface to allow customizing map helpers. Extend this interface with the following properties:</p><ul><li><code>suffix</code>: string. Affects the suffix of <code>mapStores()</code>, defaults to <code>Store</code>.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/interfaces/pinia.MapStoresCustomization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_MapStoresCustomization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_MapStoresCustomization as default
};
