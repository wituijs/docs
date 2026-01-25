import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"接口：DefineStoreOptionsBase<S, Store>","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"api/interfaces/pinia.DefineStoreOptionsBase.md","filePath":"api/interfaces/pinia.DefineStoreOptionsBase.md"}');
const _sfc_main = { name: "api/interfaces/pinia.DefineStoreOptionsBase.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API 文档</a> / <a href="./../modules/pinia.html">pinia</a> / DefineStoreOptionsBase</p><h1 id="interface-definestoreoptionsbase-s-store" tabindex="-1">接口：DefineStoreOptionsBase&lt;S, Store&gt; <a class="header-anchor" href="#interface-definestoreoptionsbase-s-store" aria-label="Permalink to &quot;接口：DefineStoreOptionsBase&lt;S, Store\\&gt; %{#interface-definestoreoptionsbase-s-store}%&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.DefineStoreOptionsBase</p><p>传递给 <code>defineStore()</code> 的选项，在 option store 和 setup store 之间是通用的。 如果你想为这两种 store 添加自定义的选项， 请扩展这个接口。</p><h2 id="type-parameters" tabindex="-1">类型参数 <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;类型参数 %{#type-parameters}%&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>S</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">extends <a href="./../modules/pinia.html#statetree"><code>StateTree</code></a></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Store</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Store</code></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">层次结构 <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;层次结构 %{#hierarchy}%&quot;">​</a></h2><ul><li><p><strong><code>DefineStoreOptionsBase</code></strong></p><p>↳ <a href="./pinia.DefineStoreOptions.html"><code>DefineStoreOptions</code></a></p><p>↳ <a href="./pinia.DefineSetupStoreOptions.html"><code>DefineSetupStoreOptions</code></a></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/interfaces/pinia.DefineStoreOptionsBase.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_DefineStoreOptionsBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_DefineStoreOptionsBase as default
};
