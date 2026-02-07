import { defineComponent, ref, watch, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { u as useData, a as useAside } from "./app.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import "./Content.B_Hoy07m.js";
import "@vueuse/core";
import "./home-links.l0sNRNKZ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VPCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const { page } = useData();
    const props = __props;
    const carbonOptions = props.carbonAds;
    const { isAsideEnabled } = useAside();
    const container = ref();
    let isInitialized = false;
    function init() {
      if (!isInitialized) {
        isInitialized = true;
        const s = document.createElement("script");
        s.id = "_carbonads_js";
        s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonOptions.code}&placement=${carbonOptions.placement}`;
        s.async = true;
        container.value.appendChild(s);
      }
    }
    watch(() => page.value.relativePath, () => {
      var _a;
      if (isInitialized && isAsideEnabled.value) {
        (_a = window._carbonads) == null ? void 0 : _a.refresh();
      }
    });
    if (carbonOptions) {
      onMounted(() => {
        if (isAsideEnabled.value) {
          init();
        } else {
          watch(isAsideEnabled, (wide) => wide && init());
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPCarbonAds",
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-46df5e75></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.1.0_@algolia+client-search@4.23.3_@types+node@20.12.7_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPCarbonAds.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VPCarbonAds = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46df5e75"]]);
export {
  VPCarbonAds as default
};
