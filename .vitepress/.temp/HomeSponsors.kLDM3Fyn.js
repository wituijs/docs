import { defineComponent, computed, unref, useSSRContext, mergeProps } from "vue";
import { ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useData } from "./Content.B_Hoy07m.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const platinum = [];
const gold = [];
const silver = [
  {
    imgSrcDark: "https://www.wit-ui.com/banners/zs-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/zs-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/aeyk-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/aeyk-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/xyyy-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/xyyy-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/hc-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/hc-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/yf-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/yf-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/ty-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/ty-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/sd-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/sd-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/ykd-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/ykd-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/syy-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/syy-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/qf-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/qf-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/jr-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/jr-light.png"
  },
  {
    imgSrcDark: "https://www.wit-ui.com/banners/zj-dark.png",
    imgSrcLight: "https://www.wit-ui.com/banners/zj-light.png"
  }
];
const sponsors = {
  platinum,
  gold,
  silver
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeSponsorsGroup",
  __ssrInlineRender: true,
  props: {
    name: {},
    size: { default: 140 }
  },
  setup(__props) {
    const { site } = useData();
    const props = __props;
    const { isDark } = useData();
    const list = computed(
      () => sponsors[props.name.toLowerCase()].map((sponsor) => ({
        ...sponsor,
        imgSrc: isDark.value ? sponsor.imgSrcDark : sponsor.imgSrcLight
      }))
    );
    const translations = {
      "en-US": "Silver Sponsors",
      "zh": "使用者"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h3 data-v-645bfe74>${ssrInterpolate(translations[unref(site).lang])}</h3><p data-v-645bfe74><!--[-->`);
      ssrRenderList(list.value, (sponsor) => {
        _push(`<a${ssrRenderAttr("href", sponsor.href)}${ssrRenderAttr("title", sponsor.alt)} target="_blank" rel="sponsored noopener" class="${ssrRenderClass([
          unref(isDark) && sponsor.imgSrcLight === sponsor.imgSrcDark && "apply-bg",
          "sponsor_wrapper"
        ])}" data-v-645bfe74><img${ssrRenderAttr("src", sponsor.imgSrc)} class="${ssrRenderClass(
          unref(isDark) && sponsor.imgSrcLight === sponsor.imgSrcDark && "invert-colors"
        )}"${ssrRenderAttr("alt", sponsor.alt)} style="${ssrRenderStyle({ height: _ctx.size + "px" })}" data-v-645bfe74></a>`);
      });
      _push(`<!--]--></p><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/HomeSponsorsGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeSponsorsGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-645bfe74"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeSponsors",
  __ssrInlineRender: true,
  setup(__props) {
    useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sponsors_outer" }, _attrs))} data-v-0da17880><div data-v-0da17880>`);
      if (unref(sponsors).platinum.length) {
        _push(ssrRenderComponent(HomeSponsorsGroup, {
          name: "Platinum",
          size: "96"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(sponsors).gold.length) {
        _push(ssrRenderComponent(HomeSponsorsGroup, {
          name: "Gold",
          size: "38"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(sponsors).silver.length) {
        _push(ssrRenderComponent(HomeSponsorsGroup, {
          name: "Silver",
          size: "24"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/HomeSponsors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeSponsors = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0da17880"]]);
export {
  HomeSponsors as H
};
