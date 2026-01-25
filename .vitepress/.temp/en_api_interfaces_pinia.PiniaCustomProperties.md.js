import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interface: PiniaCustomProperties<Id, S, G, A>","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/interfaces/pinia.PiniaCustomProperties.md","filePath":"en/api/interfaces/pinia.PiniaCustomProperties.md"}');
const _sfc_main = { name: "en/api/interfaces/pinia.PiniaCustomProperties.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / PiniaCustomProperties</p><h1 id="Interface-PiniaCustomProperties-Id-S-G-A-" tabindex="-1">Interface: PiniaCustomProperties&lt;Id, S, G, A&gt; <a class="header-anchor" href="#Interface-PiniaCustomProperties-Id-S-G-A-" aria-label="Permalink to &quot;Interface: PiniaCustomProperties\\&lt;Id, S, G, A\\&gt;&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.PiniaCustomProperties</p><p>Interface to be extended by the user when they add properties through plugins.</p><h2 id="Type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#Type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">extends <code>string</code> = <code>string</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>S</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">extends <a href="./../modules/pinia.html#StateTree"><code>StateTree</code></a> = <a href="./../modules/pinia.html#StateTree"><code>StateTree</code></a></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>G</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../modules/pinia.html#_GettersTree"><code>_GettersTree</code></a>&lt;<code>S</code>&gt;</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>A</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../modules/pinia.html#_ActionsTree"><code>_ActionsTree</code></a></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/interfaces/pinia.PiniaCustomProperties.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_PiniaCustomProperties = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_PiniaCustomProperties as default
};
