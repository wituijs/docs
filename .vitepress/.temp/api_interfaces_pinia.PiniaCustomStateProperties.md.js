import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"接口：PiniaCustomStateProperties<S>","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"api/interfaces/pinia.PiniaCustomStateProperties.md","filePath":"api/interfaces/pinia.PiniaCustomStateProperties.md"}');
const _sfc_main = { name: "api/interfaces/pinia.PiniaCustomStateProperties.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API 文档</a> / <a href="./../modules/pinia.html">pinia</a> / PiniaCustomStateProperties</p><h1 id="interface-piniacustomstateproperties-s" tabindex="-1">接口：PiniaCustomStateProperties&lt;S&gt; <a class="header-anchor" href="#interface-piniacustomstateproperties-s" aria-label="Permalink to &quot;接口：PiniaCustomStateProperties&lt;S\\&gt; %{#interface-piniacustomstateproperties-s}%&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.PiniaCustomStateProperties</p><p>通过 <code>pinia.use()</code> 添加到每个 <code>store.$state</code> 的属性。</p><h2 id="type-parameters" tabindex="-1">类型参数 <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;类型参数 %{#type-parameters}%&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">名称</th><th style="${ssrRenderStyle({ "text-align": "left" })}">类型</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>S</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">extends <a href="./../modules/pinia.html#statetree"><code>StateTree</code></a> = <a href="./../modules/pinia.html#statetree"><code>StateTree</code></a></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/interfaces/pinia.PiniaCustomStateProperties.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_PiniaCustomStateProperties = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_PiniaCustomStateProperties as default
};
