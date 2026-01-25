import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"API 文档","description":"","frontmatter":{},"headers":[],"relativePath":"api/index.md","filePath":"api/index.md"}');
const _sfc_main = { name: "api/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>API 文档</p><h1 id="api-documentation" tabindex="-1">API 文档 <a class="header-anchor" href="#api-documentation" aria-label="Permalink to &quot;API 文档 %{#api-documentation}%&quot;">​</a></h1><h2 id="modules" tabindex="-1">模块 <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;模块 %{#modules}%&quot;">​</a></h2><ul><li><a href="./modules/pinia_nuxt.html">@pinia/nuxt</a></li><li><a href="./modules/pinia_testing.html">@pinia/testing</a></li><li><a href="./modules/pinia.html">pinia</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
