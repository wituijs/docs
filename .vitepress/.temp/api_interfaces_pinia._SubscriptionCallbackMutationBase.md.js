import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"接口：_SubscriptionCallbackMutationBase","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"api/interfaces/pinia._SubscriptionCallbackMutationBase.md","filePath":"api/interfaces/pinia._SubscriptionCallbackMutationBase.md"}');
const _sfc_main = { name: "api/interfaces/pinia._SubscriptionCallbackMutationBase.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API 文档</a> / <a href="./../modules/pinia.html">pinia</a> / _SubscriptionCallbackMutationBase</p><h1 id="interface-subscriptioncallbackmutationbase" tabindex="-1">接口：_SubscriptionCallbackMutationBase <a class="header-anchor" href="#interface-subscriptioncallbackmutationbase" aria-label="Permalink to &quot;接口：\\_SubscriptionCallbackMutationBase %{#interface-subscriptioncallbackmutationbase}%&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>._SubscriptionCallbackMutationBase</p><p>传递给订阅回调的上下文的基本类型。内部类型。</p><h2 id="hierarchy" tabindex="-1">层次结构 <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;层次结构 %{#hierarchy}%&quot;">​</a></h2><ul><li><p><strong><code>_SubscriptionCallbackMutationBase</code></strong></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationDirect.html"><code>SubscriptionCallbackMutationDirect</code></a></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationPatchFunction.html"><code>SubscriptionCallbackMutationPatchFunction</code></a></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationPatchObject.html"><code>SubscriptionCallbackMutationPatchObject</code></a></p></li></ul><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="storeid" tabindex="-1">storeId <a class="header-anchor" href="#storeid" aria-label="Permalink to &quot;storeId %{#storeid}%&quot;">​</a></h3><p>• <strong>storeId</strong>: <code>string</code></p><p>执行 mutation 的 store 的<code>id</code>。</p><hr><h3 id="type" tabindex="-1">类型 <a class="header-anchor" href="#type" aria-label="Permalink to &quot;类型 %{#type}%&quot;">​</a></h3><p>• <strong>type</strong>: <a href="./../enums/pinia.MutationType.html"><code>MutationType</code></a></p><p>mutation 的类型</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/interfaces/pinia._SubscriptionCallbackMutationBase.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia__SubscriptionCallbackMutationBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia__SubscriptionCallbackMutationBase as default
};
