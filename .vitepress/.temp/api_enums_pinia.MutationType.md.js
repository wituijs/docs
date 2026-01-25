import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Enumeration: MutationType","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"api/enums/pinia.MutationType.md","filePath":"api/enums/pinia.MutationType.md"}');
const _sfc_main = { name: "api/enums/pinia.MutationType.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API 文档</a> / <a href="./../modules/pinia.html">pinia</a> / MutationType</p><h1 id="enumeration-mutationtype" tabindex="-1">Enumeration: MutationType <a class="header-anchor" href="#enumeration-mutationtype" aria-label="Permalink to &quot;Enumeration: MutationType %{#enumeration-mutationtype}%&quot;">​</a></h1><p><a href="./../modules/pinia.html">pinia</a>.MutationType</p><p>SubscriptionCallback 的可能类型</p><h2 id="enumeration-members" tabindex="-1">Enumeration Members <a class="header-anchor" href="#enumeration-members" aria-label="Permalink to &quot;Enumeration Members %{#enumeration-members}%&quot;">​</a></h2><h3 id="direct" tabindex="-1">direct <a class="header-anchor" href="#direct" aria-label="Permalink to &quot;direct %{#direct}%&quot;">​</a></h3><p>• <strong>direct</strong> = <code>&quot;direct&quot;</code></p><p>Direct mutation of the state:</p><ul><li><code>store.name = &#39;new name&#39;</code></li><li><code>store.$state.name = &#39;new name&#39;</code></li><li><code>store.list.push(&#39;new item&#39;)</code></li></ul><hr><h3 id="patchfunction" tabindex="-1">patchFunction <a class="header-anchor" href="#patchfunction" aria-label="Permalink to &quot;patchFunction %{#patchfunction}%&quot;">​</a></h3><p>• <strong>patchFunction</strong> = <code>&quot;patch function&quot;</code></p><p>通过 <code>$patch</code> 和一个函数更改 state：</p><ul><li><code>store.$patch(state =&gt; state.name = &#39;newName&#39;)</code></li></ul><hr><h3 id="patchobject" tabindex="-1">patchObject <a class="header-anchor" href="#patchobject" aria-label="Permalink to &quot;patchObject %{#patchobject}%&quot;">​</a></h3><p>• <strong>patchObject</strong> = <code>&quot;patch object&quot;</code></p><p>通过 <code>$patch</code> 和一个对象更改 state：</p><ul><li><code>store.$patch({ name: &#39;newName&#39; })</code></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/enums/pinia.MutationType.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_MutationType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_MutationType as default
};
