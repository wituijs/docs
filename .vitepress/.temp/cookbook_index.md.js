import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"手册","description":"","frontmatter":{},"headers":[],"relativePath":"cookbook/index.md","filePath":"cookbook/index.md"}');
const _sfc_main = { name: "cookbook/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cookbook" tabindex="-1">手册 <a class="header-anchor" href="#cookbook" aria-label="Permalink to &quot;手册 %{#cookbook}%&quot;">​</a></h1><ul><li><a href="./migration-vuex.html">从 Vuex ≤4 迁移</a>。用于转换 Vuex ≤4 项目的迁移指南。</li><li><a href="./hot-module-replacement.html">HMR</a>：如何激活热更新并改善开发者体验。</li><li><a href="./testing.html">测试 Stores (WIP)</a>: 如何对 Store 进行单元测试并在组件单元测试中模拟它们。</li><li><a href="./composing-stores.html">Composing Stores</a>: 如何交叉使用多个 store，例如在购物车 store 中使用用户 store。</li><li><a href="./options-api.html">选项式 API</a>: 如何在 <code>setup()</code> 外部使用 Pinia 而不使用组合式 API。</li><li><a href="./migration-0-0-7.html">从 0.0.7 迁移</a>。迁移指南，比更新日志有更多的例子。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cookbook/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
