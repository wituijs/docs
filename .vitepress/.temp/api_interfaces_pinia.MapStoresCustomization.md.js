import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"接口：MapStoresCustomization","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"api/interfaces/pinia.MapStoresCustomization.md","filePath":"api/interfaces/pinia.MapStoresCustomization.md"}');
const _sfc_main = { name: "api/interfaces/pinia.MapStoresCustomization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API 文档</a> / <a href="./../modules/pinia.html">pinia</a> / MapStoresCustomization</p><h1 id="interface-mapstorescustomization" tabindex="-1">接口：MapStoresCustomization <a class="header-anchor" href="#interface-mapstorescustomization" aria-label="Permalink to &quot;接口：MapStoresCustomization %{#interface-mapstorescustomization}%&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.MapStoresCustomization</p><p>允许自定义映射辅助函数的接口。用以下属性来扩展这个接口：</p><ul><li><code>suffix</code>: 字符串。影响 <code>mapStores()</code> 的后缀，默认为<code>Store</code>。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/interfaces/pinia.MapStoresCustomization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_MapStoresCustomization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_MapStoresCustomization as default
};
