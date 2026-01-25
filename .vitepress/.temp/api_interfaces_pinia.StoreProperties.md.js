import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"接口：StoreProperties<Id>","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"api/interfaces/pinia.StoreProperties.md","filePath":"api/interfaces/pinia.StoreProperties.md"}');
const _sfc_main = { name: "api/interfaces/pinia.StoreProperties.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API 文档</a> / <a href="./../modules/pinia.html">pinia</a> / StoreProperties</p><h1 id="interface-storeproperties-id" tabindex="-1">接口：StoreProperties&lt;Id&gt; <a class="header-anchor" href="#interface-storeproperties-id" aria-label="Permalink to &quot;接口：StoreProperties&lt;Id\\&gt; %{#interface-storeproperties-id}%&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.StoreProperties</p><p>store 的属性。</p><h2 id="type-parameters" tabindex="-1">类型参数 <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;类型参数 %{#type-parameters}%&quot;">​</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">名称</th><th style="${ssrRenderStyle({ "text-align": "left" })}">类型</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Id</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">extends <code>string</code></td></tr></tbody></table><h2 id="hierarchy" tabindex="-1">层次结构 <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;层次结构 %{#hierarchy}%&quot;">​</a></h2><ul><li><p><strong><code>StoreProperties</code></strong></p><p>↳ <a href="./pinia._StoreWithState.html"><code>_StoreWithState</code></a></p></li></ul><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="id" tabindex="-1">$id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;$id %{#id}%&quot;">​</a></h3><p>• <strong>$id</strong>: <code>Id</code></p><p>store 的唯一标识符</p><hr><h3 id="customproperties" tabindex="-1">_customProperties <a class="header-anchor" href="#customproperties" aria-label="Permalink to &quot;\\_customProperties %{#customproperties}%&quot;">​</a></h3><p>• <strong>_customProperties</strong>: <code>Set</code>&lt;<code>string</code>&gt;</p><p>供 devtools 插件使用，用于检索插件添加的属性。 在生产环境中会被移除。 开发者可用于添加应在 devtools 中显示的 store 的属性键。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/interfaces/pinia.StoreProperties.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_StoreProperties = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_StoreProperties as default
};
