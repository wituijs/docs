import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"CHANGELOG.md","filePath":"CHANGELOG.md"}');
const _sfc_main = { name: "CHANGELOG.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_2-1-8-beta-0-2024-04-17-" tabindex="-1"><a href="https://github.com/vuejs/pinia/compare/pinia@2.1.7...pinia@2.1.8-beta.0" target="_blank" rel="noreferrer">2.1.8-beta.0</a> (2024-04-17) <a class="header-anchor" href="#_2-1-8-beta-0-2024-04-17-" aria-label="Permalink to &quot;[2.1.8-beta.0](https://github.com/vuejs/pinia/compare/pinia@2.1.7...pinia@2.1.8-beta.0) (2024-04-17)&quot;">​</a></h2><h3 id="Bug-Fixes" tabindex="-1">Bug Fixes <a class="header-anchor" href="#Bug-Fixes" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h3><ul><li><strong>devtools:</strong> Do not patch mocked actions (<a href="https://github.com/vuejs/pinia/issues/2300" target="_blank" rel="noreferrer">#2300</a>) (<a href="https://github.com/vuejs/pinia/commit/069ffd14a52ccb576d63d03d06b18dee69185ae7" target="_blank" rel="noreferrer">069ffd1</a>)</li><li>support webpack minification (<a href="https://github.com/vuejs/pinia/commit/57914b522fb901701c397a5ef62dad3339ee0cf9" target="_blank" rel="noreferrer">57914b5</a>), closes <a href="https://github.com/vuejs/pinia/issues/1143" target="_blank" rel="noreferrer">#1143</a></li><li><strong>types:</strong> fix storeToRefs state return type (<a href="https://github.com/vuejs/pinia/issues/2574" target="_blank" rel="noreferrer">#2574</a>) (<a href="https://github.com/vuejs/pinia/issues/2604" target="_blank" rel="noreferrer">#2604</a>) (<a href="https://github.com/vuejs/pinia/commit/c8f727a0a2187c591134bd467efe426fb747ea40" target="_blank" rel="noreferrer">c8f727a</a>)</li><li><strong>types:</strong> mapHelpers with getters types (<a href="https://github.com/vuejs/pinia/issues/2571" target="_blank" rel="noreferrer">#2571</a>) (<a href="https://github.com/vuejs/pinia/issues/2576" target="_blank" rel="noreferrer">#2576</a>) (<a href="https://github.com/vuejs/pinia/commit/ea5c974c73d458518aff318dbab369e506db9285" target="_blank" rel="noreferrer">ea5c974</a>)</li><li><strong>types:</strong> use declare module vue (<a href="https://github.com/vuejs/pinia/commit/8a6ce86db83b6315c067c8a98c898b3c74efe62e" target="_blank" rel="noreferrer">8a6ce86</a>)</li></ul><h3 id="Features" tabindex="-1">Features <a class="header-anchor" href="#Features" aria-label="Permalink to &quot;Features&quot;">​</a></h3><ul><li>disposePinia (<a href="https://github.com/vuejs/pinia/commit/bb8bf60581747c76e42796b82eb3aa04e2336fdf" target="_blank" rel="noreferrer">bb8bf60</a>), closes <a href="https://github.com/vuejs/pinia/issues/2453" target="_blank" rel="noreferrer">vuejs/pinia#2453</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("CHANGELOG.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CHANGELOG = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CHANGELOG as default
};
