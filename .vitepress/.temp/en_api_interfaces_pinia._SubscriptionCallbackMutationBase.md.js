import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interface: _SubscriptionCallbackMutationBase","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/interfaces/pinia._SubscriptionCallbackMutationBase.md","filePath":"en/api/interfaces/pinia._SubscriptionCallbackMutationBase.md"}');
const _sfc_main = { name: "en/api/interfaces/pinia._SubscriptionCallbackMutationBase.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API Documentation</a> / <a href="./../modules/pinia.html">pinia</a> / _SubscriptionCallbackMutationBase</p><h1 id="Interface-SubscriptionCallbackMutationBase" tabindex="-1">Interface: _SubscriptionCallbackMutationBase <a class="header-anchor" href="#Interface-SubscriptionCallbackMutationBase" aria-label="Permalink to &quot;Interface: \\_SubscriptionCallbackMutationBase&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>._SubscriptionCallbackMutationBase</p><p>Base type for the context passed to a subscription callback. Internal type.</p><h2 id="Hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#Hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><strong><code>_SubscriptionCallbackMutationBase</code></strong></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationDirect.html"><code>SubscriptionCallbackMutationDirect</code></a></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationPatchFunction.html"><code>SubscriptionCallbackMutationPatchFunction</code></a></p><p>↳ <a href="./pinia.SubscriptionCallbackMutationPatchObject.html"><code>SubscriptionCallbackMutationPatchObject</code></a></p></li></ul><h2 id="Properties" tabindex="-1">Properties <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h3><p>• <code>Optional</code> <strong>events</strong>: <code>DebuggerEvent</code> | <code>DebuggerEvent</code>[]</p><p>🔴 DEV ONLY, DO NOT use for production code. Different mutation calls. Comes from <a href="https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging" target="_blank" rel="noreferrer">https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging</a> and allows to track mutations in devtools and plugins <strong>during development only</strong>.</p><hr><h3 id="storeId" tabindex="-1">storeId <a class="header-anchor" href="#storeId" aria-label="Permalink to &quot;storeId&quot;">​</a></h3><p>• <strong>storeId</strong>: <code>string</code></p><p><code>id</code> of the store doing the mutation.</p><hr><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>• <strong>type</strong>: <a href="./../enums/pinia.MutationType.html"><code>MutationType</code></a></p><p>Type of the mutation.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/interfaces/pinia._SubscriptionCallbackMutationBase.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia__SubscriptionCallbackMutationBase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia__SubscriptionCallbackMutationBase as default
};
