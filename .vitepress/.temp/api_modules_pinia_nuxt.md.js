import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Module: @pinia/nuxt","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[],"relativePath":"api/modules/pinia_nuxt.md","filePath":"api/modules/pinia_nuxt.md"}');
const _sfc_main = { name: "api/modules/pinia_nuxt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p><a href="./../">API 文档</a> / @pinia/nuxt</p><h1 id="module-pinia-nuxt" tabindex="-1">Module: @pinia/nuxt <a class="header-anchor" href="#module-pinia-nuxt" aria-label="Permalink to &quot;Module: @pinia/nuxt %{#module-pinia-nuxt}%&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">接口 <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;接口 %{#interfaces}%&quot;">​</a></h2><ul><li><a href="./../interfaces/pinia_nuxt.ModuleOptions.html">ModuleOptions</a></li></ul><h2 id="functions" tabindex="-1">函数 <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;函数 %{#functions}%&quot;">​</a></h2><h3 id="default" tabindex="-1">默认值 <a class="header-anchor" href="#default" aria-label="Permalink to &quot;默认值 %{#default}%&quot;">​</a></h3><p>▸ <strong>default</strong>(<code>this</code>, <code>inlineOptions</code>, <code>nuxt</code>): <code>void</code> | <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Name</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Type</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>this</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>void</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>inlineOptions</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><a href="./../interfaces/pinia_nuxt.ModuleOptions.html"><code>ModuleOptions</code></a></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>nuxt</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>Nuxt</code></td></tr></tbody></table><h4 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h4><p><code>void</code> | <code>Promise</code>&lt;<code>void</code>&gt;</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("api/modules/pinia_nuxt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia_nuxt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinia_nuxt as default
};
