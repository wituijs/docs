import { shallowRef, inject, computed, ref, watch, onUnmounted, reactive, markRaw, readonly, nextTick, defineComponent, h } from "vue";
import { useDark } from "@vueuse/core";
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"zh-CN","dir":"ltr","title":"Wit-ui","description":"A VitePress site","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":"dark","themeConfig":{"logo":"/logo.png","outline":[2,3],"socialLinks":[{"icon":"github","link":"https://github.com/wituijs/docs"}],"footer":{"copyright":"Copyright © 2024 Wit-ui All Rights Reserved","message":"湘ICP备2024070110号"},"editLink":{"pattern":"https://github.com/wituijs/docs","text":"Suggest changes"},"search":{"provider":"algolia","options":{"appId":"VSBV9FTW22","apiKey":"d3ec1a7ab9681dad7978e5d762a27666","indexName":"www_wit_ui_com_vsbv9ftw22_pages","locales":{"zh":{"placeholder":"搜索文档","translations":{"button":{"buttonText":"搜索文档","buttonAriaLabel":"搜索文档"},"modal":{"searchBox":{"resetButtonTitle":"清除查询条件","resetButtonAriaLabel":"清除查询条件","cancelButtonText":"取消","cancelButtonAriaLabel":"取消"},"startScreen":{"recentSearchesTitle":"搜索历史","noRecentSearchesText":"没有搜索历史","saveRecentSearchButtonTitle":"保存至搜索历史","removeRecentSearchButtonTitle":"从搜索历史中移除","favoriteSearchesTitle":"收藏","removeFavoriteSearchButtonTitle":"从收藏中移除"},"errorScreen":{"titleText":"无法获取结果","helpText":"你可能需要检查你的网络连接"},"footer":{"selectText":"选择","navigateText":"切换","closeText":"关闭","searchByText":"搜索供应商"},"noResultsScreen":{"noResultsText":"无法找到相关结果","suggestedQueryText":"你可以尝试查询","reportMissingResultsText":"你认为该查询应该有结果？","reportMissingResultsLinkText":"点击反馈"}}}}}}},"carbonAds":{"code":"CEBICK3I","placement":"routervuejsorg"}},"locales":{"root":{"label":"简体中文","lang":"zh","link":"/","description":"值得你喜欢的 Wit-ui 前端框架","head":[["meta",{"property":"og:url","content":""}],["meta",{"property":"og:description","content":"值得你喜欢的 Wit-ui 前端框架"}],["meta",{"property":"twitter:url","content":""}],["meta",{"property":"twitter:title","content":"Wit-ui 前端框架"}],["meta",{"property":"twitter:description","content":"值得你喜欢的 Wit-ui 前端框架"}]],"themeConfig":{"editLink":{"pattern":"https://github.com/wituijs/docs/issues","text":"对本页提出修改建议"},"outline":{"label":"本页内容"},"docFooter":{"prev":"上一页","next":"下一页"},"nav":[{"text":"介绍","link":"/introduction.html","activeMatch":"^/introduction.html"},{"text":"快速开始","link":"/getting-started.html","activeMatch":"^/getting-started.html"},{"text":"参考文档","link":"/core-concepts/","activeMatch":"^/core-concepts/"},{"text":"相关链接","items":[{"text":"问题解答","link":"https://github.com/wituijs/docs/issues"},{"text":"更新日志","link":"https://github.com/wituijs/docs"}]}],"sidebar":{"/api/":[{"text":"packages","items":[{"text":"pinia","link":"/api/modules/pinia.html"},{"text":"@pinia/nuxt","link":"/api/modules/pinia_nuxt.html"},{"text":"@pinia/testing","link":"/api/modules/pinia_testing.html"}]}],"/":[{"text":"介绍","items":[{"text":"Wit-ui 是什么？","link":"/introduction.html"},{"text":"开始","link":"/getting-started.html"}]},{"text":"业务组件","items":[{"text":"witSeach<br>搜索","link":"/core-concepts/"},{"text":"witTable<br>表格","link":"/core-concepts/witTable.html"},{"text":"witTableV2<br>虚拟表格","link":"/core-concepts/witTableV2.html"},{"text":"witPagination<br>分页","link":"/core-concepts/witPagination.html"},{"text":"witSteps<br>步骤条","link":"/core-concepts/witSteps.html"},{"text":"witTree<br>树形","link":"/core-concepts/witTree.html"},{"text":"witTreeV2<br>虚拟树形","link":"/core-concepts/witTreeV2.html"},{"text":"witEditor<br>AI富文本","link":"/core-concepts/witEditor.html"},{"text":"witAiChat<br>AI对话框","link":"/core-concepts/witAiChat.html"},{"text":"witChart<br>图表","link":"/core-concepts/witChart.html"},{"text":"witCity<br>城市选择","link":"/core-concepts/witCity.html"},{"text":"witConfirm<br>确认弹框","link":"/core-concepts/witConfirm.html"},{"text":"witContextMenu<br>右键菜单","link":"/core-concepts/witContextMenu.html"},{"text":"witCount<br>数字格式化","link":"/core-concepts/witCount.html"},{"text":"witDataSelector<br>日期选择","link":"/core-concepts/witDataSelector.html"},{"text":"witDesignForm<br>表单设计器","link":"/core-concepts/witDesignForm.html"},{"text":"witFullScreenProgress<br>进度条","link":"/core-concepts/witFullScreenProgress.html"},{"text":"witIconSelector<br>图标选择器","link":"/core-concepts/witIconSelector.html"},{"text":"witMagnifier<br>放大镜","link":"/core-concepts/witMagnifier.html"},{"text":"witMdEditor<br>md文件解析器","link":"/core-concepts/witMdEditor.html"},{"text":"witPaneSplit<br>分屏","link":"/core-concepts/witPaneSplit.html"},{"text":"witPrint<br>打印","link":"/core-concepts/witPrint.html"},{"text":"witQrCode<br>二维码生成","link":"/core-concepts/witQrCode.html"},{"text":"witResultNotify<br>结果提示","link":"/core-concepts/witResultNotify.html"},{"text":"witSplit<br>拖拽分屏","link":"/core-concepts/witSplit.html"},{"text":"witTooltip<br>提示","link":"/core-concepts/witTooltip.html"},{"text":"witUpdate<br>上传","link":"/core-concepts/witUpdate.html"},{"text":"witSelectDialog<br>弹框选择器","link":"/core-concepts/witSelectDialog.html"},{"text":"witSeamlessScroll<br>无缝滚动","link":"/core-concepts/witSeamlessScroll.html"},{"text":"witPdfViewer<br>pdf查看器","link":"/core-concepts/witPdfViewer.html"},{"text":"witLottiePlayer<br>lottie动画","link":"/core-concepts/witLottiePlayer.html"},{"text":"witImageViewer<br>图片查看器","link":"/core-concepts/witImageViewer.html"},{"text":"witDraggable<br>可拖拽","link":"/core-concepts/witDraggable.html"}]},{"text":"通用组件","items":[{"text":"witApp<br>入口","link":"/core-concepts/witApp.html"},{"text":"witAppMain<br>入口路由","link":"/core-concepts/witAppMain.html"},{"text":"witAvatar<br>头像","link":"/core-concepts/witAvatar.html"},{"text":"witBreadcrumb<br>面包屑","link":"/core-concepts/witBreadcrumb.html"},{"text":"witCard<br>卡片","link":"/core-concepts/witCard.html"},{"text":"witChangePassword<br>修改密码","link":"/core-concepts/witChangePassword.html"},{"text":"witColorfulCard<br>多彩卡片","link":"/core-concepts/witColorfulCard.html"},{"text":"witColorPicker<br>取色","link":"/core-concepts/witColorPicker.html"},{"text":"witColumnBar<br>选项卡","link":"/core-concepts/witColumnBar.html"},{"text":"witDark<br>黑白切换","link":"/core-concepts/witDark.html"},{"text":"witDeepseekIcon<br>deepSeek入口","link":"/core-concepts/witDeepseekIcon.html"},{"text":"witDialog<br>弹框提示","link":"/core-concepts/witDialog.html"},{"text":"witDivider<br>分割线","link":"/core-concepts/witDivider.html"},{"text":"witErrorLog<br>错误日志","link":"/core-concepts/witErrorLog.html"},{"text":"witFallBar<br>瀑布菜单","link":"/core-concepts/witFallBar.html"},{"text":"witFold<br>展开合并","link":"/core-concepts/witFold.html"},{"text":"witFooter<br>底部","link":"/core-concepts/witFooter.html"},{"text":"witHeader<br>头部","link":"/core-concepts/witHeader.html"},{"text":"witFullscreen<br>全屏","link":"/core-concepts/witFullscreen.html"},{"text":"witIcon<br>图标","link":"/core-concepts/witIcon.html"},{"text":"witIM<br>IM入口","link":"/core-concepts/witIM.html"},{"text":"witLanguage<br>国际化","link":"/core-concepts/witLanguage.html"},{"text":"witLink<br>链接","link":"/core-concepts/witLink.html"},{"text":"witLock<br>锁屏","link":"/core-concepts/witLock.html"},{"text":"witLogo<br>logo图标","link":"/core-concepts/witLogo.html"},{"text":"witMenu<br>菜单","link":"/core-concepts/witMenu.html"},{"text":"witMount<br>预加载","link":"/core-concepts/witMount.html"},{"text":"witNav<br>顶部navBar","link":"/core-concepts/witNav.html"},{"text":"witNotice<br>通知","link":"/core-concepts/witNotice.html"},{"text":"witQueryForm<br>查询表单","link":"/core-concepts/witQueryForm.html"},{"text":"witRefresh<br>刷新","link":"/core-concepts/witRefresh.html"},{"text":"witRightTools<br>工具栏","link":"/core-concepts/witRightTools.html"},{"text":"witRouterView<br>路由切换","link":"/core-concepts/witRouterView.html"},{"text":"witSearchFunction<br>功能搜索","link":"/core-concepts/witSearchFunction.html"},{"text":"witSelectSite<br>站点选择","link":"/core-concepts/witSelectSite.html"},{"text":"witSideBar<br>左侧菜单","link":"/core-concepts/witSideBar.html"},{"text":"witStatistics<br>访问量统计","link":"/core-concepts/witStatistics.html"},{"text":"witTabs<br>多标签页","link":"/core-concepts/witTabs.html"},{"text":"witTheme<br>主题","link":"/core-concepts/witTheme.html"},{"text":"witLayoutColumn<br>分栏布局","link":"/core-concepts/witLayoutColumn.html"},{"text":"witLayoutComprehensive<br>综合布局","link":"/core-concepts/witLayoutComprehensive.html"},{"text":"witLayoutFall<br>瀑布流布局","link":"/core-concepts/witLayoutFall.html"},{"text":"witLayoutHorizontal<br>横向布局","link":"/core-concepts/witLayoutHorizontal.html"},{"text":"witLayoutVertical<br>纵向布局","link":"/core-concepts/witLayoutVertical.html"}]},{"text":"大屏组件","items":[{"text":"witAreaChart<br>基础面积图","link":"/core-concepts/witAreaChart.html"},{"text":"witBall<br>球指示器效果","link":"/core-concepts/witBall.html"},{"text":"witBallSuspension<br>球悬浮效果","link":"/core-concepts/witBallSuspension.html"},{"text":"witBarChart<br>基础柱状图","link":"/core-concepts/witBarChart.html"},{"text":"witBarStackChart<br>堆积柱状图","link":"/core-concepts/witBarStackChart.html"},{"text":"witBox<br>基础盒图","link":"/core-concepts/witBox.html"},{"text":"witBsFullScreen<br>全屏","link":"/core-concepts/witBsFullScreen.html"},{"text":"witBsHeader<br>通用头部","link":"/core-concepts/witBsHeader.html"},{"text":"witBsHeaderOne<br>头部风格1","link":"/core-concepts/witBsHeaderOne.html"},{"text":"witBsHeaderTwo<br>头部风格2","link":"/core-concepts/witBsHeaderTwo.html"},{"text":"witBsTable<br>表格","link":"/core-concepts/witBsTable.html"},{"text":"witBsTabs<br>选项卡","link":"/core-concepts/witBsTabs.html"},{"text":"witDashboard<br>仪表盘效果","link":"/core-concepts/witDashboard.html"},{"text":"witDataCard<br>卡片风格1","link":"/core-concepts/witDataCard.html"},{"text":"witDataCardTwo<br>卡片风格2","link":"/core-concepts/witDataCardTwo.html"},{"text":"witDataCardThree<br>卡片风格3","link":"/core-concepts/witDataCardThree.html"},{"text":"witDataCardFour<br>卡片风格4","link":"/core-concepts/witDataCardFour.html"},{"text":"witDataCardFive<br>卡片风格5","link":"/core-concepts/witDataCardFive.html"},{"text":"witDataCardSix<br>卡片风格6","link":"/core-concepts/witDataCardSix.html"},{"text":"witDataCardSeven<br>卡片风格7","link":"/core-concepts/witDataCardSeven.html"},{"text":"witHorizontalBarChart<br>横向柱状图","link":"/core-concepts/witHorizontalBarChart.html"},{"text":"witHorizontalPercentage<br>横向柱状图百分比","link":"/core-concepts/witHorizontalPercentage.html"},{"text":"witMap<br>地图风格1","link":"/core-concepts/witMap.html"},{"text":"witMapTwo<br>地图风格2","link":"/core-concepts/witMapTwo.html"},{"text":"witMapMarker<br>地图标记风格1","link":"/core-concepts/witMapMarker.html"},{"text":"witMapMarkerTwo<br>地图标记风格2","link":"/core-concepts/witMapMarkerTwo.html"},{"text":"witMixedLineAndBarChart<br>折柱混合","link":"/core-concepts/witMixedLineAndBarChart.html"},{"text":"witMultipleBarChart<br>多系列柱状图","link":"/core-concepts/witMultipleBarChart.html"},{"text":"witPercentPieChart<br>百分比饼图风格1","link":"/core-concepts/witPercentPieChart.html"},{"text":"witPercentPieChartTwo<br>百分比饼图风格2","link":"/core-concepts/witPercentPieChartTwo.html"},{"text":"witPieChart<br>多系列饼图风格1","link":"/core-concepts/witPieChart.html"},{"text":"witPieChartTwo<br>多系列饼图风格2","link":"/core-concepts/witPieChartTwo.html"},{"text":"witProgressChart<br>进度饼图","link":"/core-concepts/witProgressChart.html"},{"text":"witRadarChart<br>雷达图","link":"/core-concepts/witRadarChart.html"},{"text":"witRankBarChart<br>排名横向柱状图","link":"/core-concepts/witRankBarChart.html"},{"text":"witRate<br>比率显示","link":"/core-concepts/witRate.html"},{"text":"witTime<br>时间显示","link":"/core-concepts/witTime.html"},{"text":"witTitle<br>通用标题","link":"/core-concepts/witTitle.html"},{"text":"witTitleOne<br>标题风格1","link":"/core-concepts/witTitleOne.html"},{"text":"witTrendChart<br>折柱混合趋势图","link":"/core-concepts/witTrendChart.html"}]}]}}}},"scrollOffset":134,"cleanUrls":false}'));
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const HASH_OR_QUERY_RE = /[?#].*$/;
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?\.(?:md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_OR_QUERY_RE, "").replace(INDEX_OR_EXT_RE, "$1");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const KNOWN_EXTENSIONS = /* @__PURE__ */ new Set();
function treatAsHtml(filename) {
  var _a;
  if (KNOWN_EXTENSIONS.size === 0) {
    const extraExts = typeof process === "object" && ((_a = process.env) == null ? void 0 : _a.VITE_EXTRA_EXTENSIONS) || (define_import_meta_env_default == null ? void 0 : define_import_meta_env_default.VITE_EXTRA_EXTENSIONS) || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (extraExts && typeof extraExts === "string" ? "," + extraExts : "")).split(",").forEach((ext2) => KNOWN_EXTENSIONS.add(ext2));
  }
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => typeof appearance === "string" ? appearance : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  const hashRef = ref(inBrowser ? location.hash : "");
  if (inBrowser) {
    window.addEventListener("hashchange", () => {
      hashRef.value = location.hash;
    });
  }
  watch(() => route.data, () => {
    hashRef.value = inBrowser ? location.hash : "";
  });
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark,
    hash: computed(() => hashRef.value)
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    href = normalizeHref(href);
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    if (inBrowser && href !== normalizeHref(location.href)) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link = e.target.closest("a");
      if (link && !link.closest(".vp-raw") && (link instanceof SVGElement || !link.download)) {
        const { target } = link;
        const { href, origin, pathname, hash, search } = new URL(link.href instanceof SVGAnimatedString ? link.href.animVal : link.href, link.baseURI);
        const currentUrl = new URL(location.href);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && treatAsHtml(pathname)) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash !== currentUrl.hash) {
              history.pushState(null, "", href);
              window.dispatchEvent(new HashChangeEvent("hashchange", {
                oldURL: currentUrl.href,
                newURL: href
              }));
            }
            if (hash) {
              scrollTo(link, hash, link.classList.contains("header-anchor"));
            } else {
              window.scrollTo(0, 0);
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      var _a;
      await loadPage(normalizeHref(location.href), e.state && e.state.scrollPosition || 0);
      (_a = router.onAfterRouteChanged) == null ? void 0 : _a.call(router, location.href);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { site } = useData();
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
export {
  Content as C,
  EXTERNAL_URL_RE as E,
  RouterSymbol as R,
  isActive as a,
  useRoute as b,
  inBrowser as c,
  createTitle as d,
  initData as e,
  dataSymbol as f,
  getScrollOffset as g,
  createRouter as h,
  isExternal as i,
  useRouter as j,
  mergeHead as m,
  onContentUpdated as o,
  pathToFile as p,
  siteDataRef as s,
  treatAsHtml as t,
  useData as u,
  withBase as w
};
