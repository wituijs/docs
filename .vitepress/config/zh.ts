import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = ''
export const META_TITLE = 'Wit-ui 前端框架'
export const META_DESCRIPTION = '值得你喜欢的 Wit-ui 前端框架'
// TODO: translation of this
// 'Intuitive, type safe, light and flexible Store for Vue'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/wituijs/docs/issues',
      text: '对本页提出修改建议',
    },

    outline: {
      label: '本页内容',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    nav: [
      {
        text: '介绍',
        link: '/introduction.html',
        activeMatch: '^/introduction.html',
      },
      {
        text: '快速开始',
        link: '/getting-started.html',
        activeMatch: '^/getting-started.html',
      },
      {
        text: '参考文档',
        link: '/core-concepts/',
        activeMatch: '^/core-concepts/',
      },
      // { text: '手册', link: '/cookbook/', activeMatch: '^/cookbook/' },
      {
        text: '相关链接',
        items: [
          {
            text: '问题解答',
            link: 'https://github.com/wituijs/docs/issues',
          },
          {
            text: '更新日志',
            link: 'https://github.com/wituijs/docs',
          },
        ],
      },
    ],
    sidebar: {
      '/api/': [
        {
          text: 'packages',
          items: [
            { text: 'pinia', link: '/api/modules/pinia.html' },
            { text: '@pinia/nuxt', link: '/api/modules/pinia_nuxt.html' },
            {
              text: '@pinia/testing',
              link: '/api/modules/pinia_testing.html',
            },
          ],
        },
      ],
      '/': [
        {
          text: '介绍',
          items: [
            {
              text: 'Wit-ui 是什么？',
              link: '/introduction.html',
            },
            {
              text: '开始',
              link: '/getting-started.html',
            },
          ],
        },
        {
          text: '业务组件',
          items: [
            { text: 'witSeach<br>搜索', link: '/core-concepts/' },
            { text: 'witTable<br>表格', link: '/core-concepts/witTable.html' },
            { text: 'witTableV2<br>虚拟表格', link: '/core-concepts/witTableV2.html' },
            { text: 'witPagination<br>分页', link: '/core-concepts/witPagination.html' },
            { text: 'witSteps<br>步骤条', link: '/core-concepts/witSteps.html' },
            { text: 'witTree<br>树形', link: '/core-concepts/witTree.html' },
            { text: 'witTreeV2<br>虚拟树形', link: '/core-concepts/witTreeV2.html' },
            { text: 'witEditor<br>AI富文本', link: '/core-concepts/witEditor.html' },
            { text: 'witAiChat<br>AI对话框', link: '/core-concepts/witAiChat.html' },
            { text: 'witChart<br>图表', link: '/core-concepts/witChart.html' },
            { text: 'witCity<br>城市选择', link: '/core-concepts/witCity.html' },
            { text: 'witConfirm<br>确认弹框', link: '/core-concepts/witConfirm.html' },
            { text: 'witContextMenu<br>右键菜单', link: '/core-concepts/witContextMenu.html' },
            { text: 'witCount<br>数字格式化', link: '/core-concepts/witCount.html' },
            { text: 'witDataSelector<br>日期选择', link: '/core-concepts/witDataSelector.html' },
            { text: 'witDesignForm<br>表单设计器', link: '/core-concepts/witDesignForm.html' },
            { text: 'witFullScreenProgress<br>进度条', link: '/core-concepts/witFullScreenProgress.html' },
            { text: 'witIconSelector<br>图标选择器', link: '/core-concepts/witIconSelector.html' },
            { text: 'witMagnifier<br>放大镜', link: '/core-concepts/witMagnifier.html' },
            { text: 'witMdEditor<br>md文件解析器', link: '/core-concepts/witMdEditor.html' },
            { text: 'witPaneSplit<br>分屏', link: '/core-concepts/witPaneSplit.html' },
            { text: 'witPrint<br>打印', link: '/core-concepts/witPrint.html' },
            { text: 'witQrCode<br>二维码生成', link: '/core-concepts/witQrCode.html' },
            { text: 'witResultNotify<br>结果提示', link: '/core-concepts/witResultNotify.html' },
            { text: 'witSplit<br>拖拽分屏', link: '/core-concepts/witSplit.html' },
            { text: 'witTooltip<br>提示', link: '/core-concepts/witTooltip.html' },
            { text: 'witUpdate<br>上传', link: '/core-concepts/witUpdate.html' },
            { text: 'witSelectDialog<br>弹框选择器', link: '/core-concepts/witSelectDialog.html' },
            { text: 'witSeamlessScroll<br>无缝滚动', link: '/core-concepts/witSeamlessScroll.html' },
            { text: 'witPdfViewer<br>pdf查看器', link: '/core-concepts/witPdfViewer.html' },
            { text: 'witLottiePlayer<br>lottie动画', link: '/core-concepts/witLottiePlayer.html' },
            { text: 'witImageViewer<br>图片查看器', link: '/core-concepts/witImageViewer.html' },
            { text: 'witDraggable<br>可拖拽', link: '/core-concepts/witDraggable.html' },
          ],
        },
        {
          text: '通用组件',
          items: [
            { text: 'witApp<br>入口', link: '/core-concepts/witApp.html' },
            { text: 'witAppMain<br>入口路由', link: '/core-concepts/witAppMain.html' },
            { text: 'witAvatar<br>头像', link: '/core-concepts/witAvatar.html' },
            { text: 'witBreadcrumb<br>面包屑', link: '/core-concepts/witBreadcrumb.html' },
            { text: 'witCard<br>卡片', link: '/core-concepts/witCard.html' },
            { text: 'witChangePassword<br>修改密码', link: '/core-concepts/witChangePassword.html' },
            { text: 'witColorfulCard<br>多彩卡片', link: '/core-concepts/witColorfulCard.html' },
            { text: 'witColorPicker<br>取色', link: '/core-concepts/witColorPicker.html' },
            { text: 'witColumnBar<br>选项卡', link: '/core-concepts/witColumnBar.html' },
            { text: 'witDark<br>黑白切换', link: '/core-concepts/witDark.html' },
            { text: 'witDeepseekIcon<br>deepSeek入口', link: '/core-concepts/witDeepseekIcon.html' },
            { text: 'witDialog<br>弹框提示', link: '/core-concepts/witDialog.html' },
            { text: 'witDivider<br>分割线', link: '/core-concepts/witDivider.html' },
            { text: 'witErrorLog<br>错误日志', link: '/core-concepts/witErrorLog.html' },
            { text: 'witFallBar<br>瀑布菜单', link: '/core-concepts/witFallBar.html' },
            { text: 'witFold<br>展开合并', link: '/core-concepts/witFold.html' },
            { text: 'witFooter<br>底部', link: '/core-concepts/witFooter.html' },
            { text: 'witHeader<br>头部', link: '/core-concepts/witHeader.html' },
            { text: 'witFullscreen<br>全屏', link: '/core-concepts/witFullscreen.html' },
            { text: 'witIcon<br>图标', link: '/core-concepts/witIcon.html' },
            { text: 'witIM<br>IM入口', link: '/core-concepts/witIM.html' },
            { text: 'witLanguage<br>国际化', link: '/core-concepts/witLanguage.html' },
            { text: 'witLink<br>链接', link: '/core-concepts/witLink.html' },
            { text: 'witLock<br>锁屏', link: '/core-concepts/witLock.html' },
            { text: 'witLogo<br>logo图标', link: '/core-concepts/witLogo.html' },
            { text: 'witMenu<br>菜单', link: '/core-concepts/witMenu.html' },
            { text: 'witMount<br>预加载', link: '/core-concepts/witMount.html' },
            { text: 'witNav<br>顶部navBar', link: '/core-concepts/witNav.html' },
            { text: 'witNotice<br>通知', link: '/core-concepts/witNotice.html' },
            { text: 'witQueryForm<br>查询表单', link: '/core-concepts/witQueryForm.html' },
            { text: 'witRefresh<br>刷新', link: '/core-concepts/witRefresh.html' },
            { text: 'witRightTools<br>工具栏', link: '/core-concepts/witRightTools.html' },
            { text: 'witRouterView<br>路由切换', link: '/core-concepts/witRouterView.html' },
            { text: 'witSearchFunction<br>功能搜索', link: '/core-concepts/witSearchFunction.html' },
            { text: 'witSelectSite<br>站点选择', link: '/core-concepts/witSelectSite.html' },
            { text: 'witSideBar<br>左侧菜单', link: '/core-concepts/witSideBar.html' },
            { text: 'witStatistics<br>访问量统计', link: '/core-concepts/witStatistics.html' },
            { text: 'witTabs<br>多标签页', link: '/core-concepts/witTabs.html' },
            { text: 'witTheme<br>主题', link: '/core-concepts/witTheme.html' },
            { text: 'witLayoutColumn<br>分栏布局', link: '/core-concepts/witLayoutColumn.html' },
            { text: 'witLayoutComprehensive<br>综合布局', link: '/core-concepts/witLayoutComprehensive.html' },
            { text: 'witLayoutFall<br>瀑布流布局', link: '/core-concepts/witLayoutFall.html' },
            { text: 'witLayoutHorizontal<br>横向布局', link: '/core-concepts/witLayoutHorizontal.html' },
            { text: 'witLayoutVertical<br>纵向布局', link: '/core-concepts/witLayoutVertical.html' },
          ],
        },
        {
          text: '大屏组件',
          items: [
            { text: 'witAreaChart<br>基础面积图', link: '/core-concepts/witAreaChart.html' },
            { text: 'witBall<br>球指示器效果', link: '/core-concepts/witBall.html' },
            { text: 'witBallSuspension<br>球悬浮效果', link: '/core-concepts/witBallSuspension.html' },
            { text: 'witBarChart<br>基础柱状图', link: '/core-concepts/witBarChart.html' },
            { text: 'witBarStackChart<br>堆积柱状图', link: '/core-concepts/witBarStackChart.html' },
            { text: 'witBox<br>基础盒图', link: '/core-concepts/witBox.html' },
            { text: 'witBsFullScreen<br>全屏', link: '/core-concepts/witBsFullScreen.html' },
            { text: 'witBsHeader<br>通用头部', link: '/core-concepts/witBsHeader.html' },
            { text: 'witBsHeaderOne<br>头部风格1', link: '/core-concepts/witBsHeaderOne.html' },
            { text: 'witBsHeaderTwo<br>头部风格2', link: '/core-concepts/witBsHeaderTwo.html' },
            { text: 'witBsTable<br>表格', link: '/core-concepts/witBsTable.html' },
            { text: 'witBsTabs<br>选项卡', link: '/core-concepts/witBsTabs.html' },
            { text: 'witDashboard<br>仪表盘效果', link: '/core-concepts/witDashboard.html' },
            { text: 'witDataCard<br>卡片风格1', link: '/core-concepts/witDataCard.html' },
            { text: 'witDataCardTwo<br>卡片风格2', link: '/core-concepts/witDataCardTwo.html' },
            { text: 'witDataCardThree<br>卡片风格3', link: '/core-concepts/witDataCardThree.html' },
            { text: 'witDataCardFour<br>卡片风格4', link: '/core-concepts/witDataCardFour.html' },
            { text: 'witDataCardFive<br>卡片风格5', link: '/core-concepts/witDataCardFive.html' },
            { text: 'witDataCardSix<br>卡片风格6', link: '/core-concepts/witDataCardSix.html' },
            { text: 'witDataCardSeven<br>卡片风格7', link: '/core-concepts/witDataCardSeven.html' },
            { text: 'witHorizontalBarChart<br>横向柱状图', link: '/core-concepts/witHorizontalBarChart.html' },
            { text: 'witHorizontalPercentage<br>横向柱状图百分比', link: '/core-concepts/witHorizontalPercentage.html' },
            { text: 'witMap<br>地图风格1', link: '/core-concepts/witMap.html' },
            { text: 'witMapTwo<br>地图风格2', link: '/core-concepts/witMapTwo.html' },
            { text: 'witMapMarker<br>地图标记风格1', link: '/core-concepts/witMapMarker.html' },
            { text: 'witMapMarkerTwo<br>地图标记风格2', link: '/core-concepts/witMapMarkerTwo.html' },
            { text: 'witMixedLineAndBarChart<br>折柱混合', link: '/core-concepts/witMixedLineAndBarChart.html' },
            { text: 'witMultipleBarChart<br>多系列柱状图', link: '/core-concepts/witMultipleBarChart.html' },
            { text: 'witPercentPieChart<br>百分比饼图风格1', link: '/core-concepts/witPercentPieChart.html' },
            { text: 'witPercentPieChartTwo<br>百分比饼图风格2', link: '/core-concepts/witPercentPieChartTwo.html' },
            { text: 'witPieChart<br>多系列饼图风格1', link: '/core-concepts/witPieChart.html' },
            { text: 'witPieChartTwo<br>多系列饼图风格2', link: '/core-concepts/witPieChartTwo.html' },
            { text: 'witProgressChart<br>进度饼图', link: '/core-concepts/witProgressChart.html' },
            { text: 'witRadarChart<br>雷达图', link: '/core-concepts/witRadarChart.html' },
            { text: 'witRankBarChart<br>排名横向柱状图', link: '/core-concepts/witRankBarChart.html' },
            { text: 'witRate<br>比率显示', link: '/core-concepts/witRate.html' },
            { text: 'witTime<br>时间显示', link: '/core-concepts/witTime.html' },
            { text: 'witTitle<br>通用标题', link: '/core-concepts/witTitle.html' },
            { text: 'witTitleOne<br>标题风格1', link: '/core-concepts/witTitleOne.html' },
            { text: 'witTrendChart<br>折柱混合趋势图', link: '/core-concepts/witTrendChart.html' },
          ],
        },
        // {
        //   text: '手册',
        //   collapsed: false,
        //   items: [
        //     {
        //       text: '目录',
        //       link: '/cookbook/',
        //     },
        //     {
        //       text: '从 Vuex ≤4 迁移',
        //       link: '/cookbook/migration-vuex.html',
        //     },
        //     {
        //       text: '热更新',
        //       link: '/cookbook/hot-module-replacement.html',
        //     },
        //     {
        //       text: '测试',
        //       link: '/cookbook/testing.html',
        //     },
        //     {
        //       text: '不使用 setup() 的用法',
        //       link: '/cookbook/options-api.html',
        //     },
        //     {
        //       text: '组合式 Stores',
        //       link: '/cookbook/composing-stores.html',
        //     },
        //     {
        //       text: '从 v0/v1 迁移至 v2',
        //       link: '/cookbook/migration-v1-v2.html',
        //     },
        //     {
        //       text: '处理组合式函数',
        //       link: '/cookbook/composables.html',
        //     },
        //   ],
        // },
      ],
    },
  },
}

export const zhSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索供应商',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
      },
    },
  },
}
