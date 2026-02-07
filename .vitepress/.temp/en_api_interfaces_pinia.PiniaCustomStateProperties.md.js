import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interface: PiniaCustomStateProperties<S>","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/interfaces/pinia.PiniaCustomStateProperties.md","filePath":"en/api/interfaces/pinia.PiniaCustomStateProperties.md"}');
const _sfc_main = { name: "en/api/interfaces/pinia.PiniaCustomStateProperties.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / PiniaCustomStateProperties</p><h1 id="Interface-PiniaCustomStateProperties-S-" tabindex="-1">Interface: PiniaCustomStateProperties&lt;S&gt; <a class="header-anchor" href="#Interface-PiniaCustomStateProperties-S-" aria-label="Permalink to &quot;Interface: PiniaCustomStateProperties\\&lt;S\\&gt;&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.PiniaCustomStateProperties</p><p>Properties that are added to every <code>store.$state</code> by <code>pinia.use()</code>.</p><h2 id="Type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#Type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>S</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">extends <a href="./../modules/pinia.html#StateTree"><code>StateTree</code></a> = <a href="./../modules/pinia.html#StateTree"><code>StateTree</code></a></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/interfaces/pinia.PiniaCustomStateProperties.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_PiniaCustomStateProperties = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_PiniaCustomStateProperties as default
};
