import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interface: ModuleOptions","description":"","frontmatter":{"editLink":false},"headers":[],"relativePath":"en/api/interfaces/pinia_nuxt.ModuleOptions.md","filePath":"en/api/interfaces/pinia_nuxt.ModuleOptions.md"}');
const _sfc_main = { name: "en/api/interfaces/pinia_nuxt.ModuleOptions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API Documentation</a> / <a href="./../modules/pinia_nuxt.html">@pinia/nuxt</a> / ModuleOptions</p><h1 id="Interface-ModuleOptions" tabindex="-1">Interface: ModuleOptions <a class="header-anchor" href="#Interface-ModuleOptions" aria-label="Permalink to &quot;Interface: ModuleOptions&quot;">​</a></h1><p><a href="./../modules/pinia_nuxt.html">@pinia/nuxt</a>.ModuleOptions</p><h2 id="Properties" tabindex="-1">Properties <a class="header-anchor" href="#Properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="disableVuex" tabindex="-1">disableVuex <a class="header-anchor" href="#disableVuex" aria-label="Permalink to &quot;disableVuex&quot;">​</a></h3><p>• <code>Optional</code> <strong>disableVuex</strong>: <code>boolean</code></p><p>Pinia disables Vuex by default, set this option to <code>false</code> to avoid it and use Pinia alongside Vuex (Nuxt 2 only)</p><p><strong><code>Default</code></strong></p><p><code>true</code></p><hr><h3 id="storesDirs" tabindex="-1">storesDirs <a class="header-anchor" href="#storesDirs" aria-label="Permalink to &quot;storesDirs&quot;">​</a></h3><p>• <code>Optional</code> <strong>storesDirs</strong>: <code>string</code>[]</p><p>Automatically add stores dirs to the auto imports. This is the same as directly adding the dirs to the <code>imports.dirs</code> option. If you want to also import nested stores, you can use the glob pattern <code>./stores/**</code></p><p><strong><code>Default</code></strong></p><p><code>[&#39;stores&#39;]</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/interfaces/pinia_nuxt.ModuleOptions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_nuxt_ModuleOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_nuxt_ModuleOptions as default
};
