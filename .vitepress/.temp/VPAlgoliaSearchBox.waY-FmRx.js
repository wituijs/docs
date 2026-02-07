import { defineComponent, onMounted, watch, nextTick, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import docsearch from "@docsearch/js";
import { j as useRouter, b as useRoute } from "./Content.B_Hoy07m.js";
import { u as useData } from "./app.js";
import "@vueuse/core";
import "./plugin-vue_export-helper.1tPrXgE0.js";
import "./home-links.l0sNRNKZ.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VPAlgoliaSearchBox",
  __ssrInlineRender: true,
  props: {
    algolia: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const route = useRoute();
    const { site, localeIndex, lang } = useData();
    onMounted(update);
    watch(localeIndex, update);
    async function update() {
      var _a, _b;
      await nextTick();
      const options = {
        ...props.algolia,
        ...(_a = props.algolia.locales) == null ? void 0 : _a[localeIndex.value]
      };
      const rawFacetFilters = ((_b = options.searchParameters) == null ? void 0 : _b.facetFilters) ?? [];
      const facetFilters = [
        ...(Array.isArray(rawFacetFilters) ? rawFacetFilters : [rawFacetFilters]).filter((f) => !f.startsWith("lang:")),
        `lang:${lang.value}`
      ];
      initialize({
        ...options,
        searchParameters: {
          ...options.searchParameters,
          facetFilters
        }
      });
    }
    function initialize(userOptions) {
      const options = Object.assign({}, userOptions, {
        container: "#docsearch",
        navigator: {
          navigate({ itemUrl }) {
            const { pathname: hitPathname } = new URL(
              window.location.origin + itemUrl
            );
            if (route.path === hitPathname) {
              window.location.assign(window.location.origin + itemUrl);
            } else {
              router.go(itemUrl);
            }
          }
        },
        transformItems(items) {
          return items.map((item) => {
            return Object.assign({}, item, {
              url: getRelativePath(item.url)
            });
          });
        },
        hitComponent({ hit, children }) {
          return {
            __v: null,
            type: "a",
            ref: void 0,
            constructor: void 0,
            key: void 0,
            props: { href: hit.url, children }
          };
        }
      });
      docsearch(options);
    }
    function getRelativePath(url) {
      const { pathname, hash } = new URL(url, location.origin);
      return pathname.replace(/\.html$/, site.value.cleanUrls ? "" : ".html") + hash;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "docsearch" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/vitepress@1.1.0_@algolia+client-search@4.23.3_@types+node@20.12.7_search-insights@2.13.0/node_modules/vitepress/dist/client/theme-default/components/VPAlgoliaSearchBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
