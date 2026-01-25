import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"API Documentation","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/index.md","filePath":"en/api/index.md"}');
const _sfc_main = { name: "en/api/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>API Documentation</p><h1 id="API-Documentation" tabindex="-1">API Documentation <a class="header-anchor" href="#API-Documentation" aria-label="Permalink to &quot;API Documentation&quot;">​</a></h1><h2 id="Modules" tabindex="-1">Modules <a class="header-anchor" href="#Modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><ul><li><a href="./modules/pinia_nuxt.html">@pinia/nuxt</a></li><li><a href="./modules/pinia_testing.html">@pinia/testing</a></li><li><a href="./modules/pinia.html">pinia</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
