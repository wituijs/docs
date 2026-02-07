import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cookbook","description":"","frontmatter":{},"headers":[],"relativePath":"en/cookbook/index.md","filePath":"en/cookbook/index.md"}');
const _sfc_main = { name: "en/cookbook/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="Cookbook" tabindex="-1">Cookbook <a class="header-anchor" href="#Cookbook" aria-label="Permalink to &quot;Cookbook&quot;">​</a></h1><ul><li><a href="./migration-vuex.html">Migrating from Vuex ≤4</a>: A migration guide for converting Vuex ≤4 projects.</li><li><a href="./hot-module-replacement.html">HMR</a>: How to activate hot module replacement and improve the developer experience.</li><li><a href="./testing.html">Testing Stores (WIP)</a>: How to unit test Stores and mock them in component unit tests.</li><li><a href="./composing-stores.html">Composing Stores</a>: How to cross use multiple stores. e.g. using the user store in the cart store.</li><li><a href="./options-api.html">Options API</a>: How to use Pinia without the composition API, outside of <code>setup()</code>.</li><li><a href="./migration-0-0-7.html">Migrating from 0.0.7</a>: A migration guide with more examples than the changelog.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/cookbook/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
