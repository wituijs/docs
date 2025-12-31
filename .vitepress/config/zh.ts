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
            { text: 'witSeach 搜索', link: '/core-concepts/' },
            { text: 'witTable 表格', link: '/core-concepts/witTable.html' },
            { text: 'witPagination 分页', link: '/core-concepts/witPagination.html' },
            { text: 'witSteps 步骤条', link: '/core-concepts/witSteps.html' },
            { text: 'witTree 树形', link: '/core-concepts/witTree.html' },
            { text: 'witEditor AI富文本', link: '/core-concepts/witEditor.html' },
            { text: 'witAiChat AI对话框', link: '/core-concepts/witAiChat.html' },
            { text: 'witChart 图表', link: '/core-concepts/witChart.html' },
            { text: 'witCity 城市选择', link: '/core-concepts/witCity.html' },
            { text: 'witConfirm 确认弹框', link: '/core-concepts/witConfirm.html' },
            { text: 'witContextMenu 右键菜单', link: '/core-concepts/witContextMenu.html' },
            { text: 'witCount 数字格式化', link: '/core-concepts/witCount.html' },
            { text: 'witDataSelector 日期选择', link: '/core-concepts/witDataSelector.html' },
            { text: 'witDesignForm 表单设计器', link: '/core-concepts/witDesignForm.html' },
            { text: 'witFullScreenProgress 进度条', link: '/core-concepts/witFullScreenProgress.html' },
            { text: 'witIconSelector 图标选择器', link: '/core-concepts/witIconSelector.html' },
            { text: 'witMagnifier 放大镜', link: '/core-concepts/witMagnifier.html' },
            { text: 'witMdEditor md文件解析器', link: '/core-concepts/witMdEditor.html' },
            { text: 'witPaneSplit 分屏', link: '/core-concepts/witPaneSplit.html' },
            { text: 'witPrint 打印', link: '/core-concepts/witPrint.html' },
            { text: 'witQrCode 二维码生成', link: '/core-concepts/default.html' },
            { text: 'witResultNotify 结果提示', link: '/core-concepts/default.html' },
            { text: 'witSplit 拖拽分屏', link: '/core-concepts/default.html' },
            { text: 'witTooltip 提示', link: '/core-concepts/default.html' },
            { text: 'witUpdate 上传', link: '/core-concepts/default.html' },
          ],
        },
        {
          text: '通用组件',
          items: [
            { text: 'witApp 入口', link: '/core-concepts/default.html' },
            { text: 'witAppMain 入口路由', link: '/core-concepts/default.html' },
            { text: 'witAvatar 头像', link: '/core-concepts/default.html' },
            { text: 'witBreadcrumb 面包屑', link: '/core-concepts/default.html' },
            { text: 'witCard 卡片', link: '/core-concepts/default.html' },
            { text: 'witChangePassword 修改密码', link: '/core-concepts/default.html' },
            { text: 'witColorfulCard 多彩卡片', link: '/core-concepts/default.html' },
            { text: 'witColorPicker 取色', link: '/core-concepts/default.html' },
            { text: 'witColumnBar 选项卡', link: '/core-concepts/default.html' },
            { text: 'witDark 黑白切换', link: '/core-concepts/default.html' },
            { text: 'witDeepseekIcon deepSeek入口', link: '/core-concepts/default.html' },
            { text: 'witDialog 弹框提示', link: '/core-concepts/default.html' },
            { text: 'witDivider 分割线', link: '/core-concepts/default.html' },
            { text: 'witErrorLog 错误日志', link: '/core-concepts/default.html' },
            { text: 'witFallBar 瀑布菜单', link: '/core-concepts/default.html' },
            { text: 'witFold 展开合并', link: '/core-concepts/default.html' },
            { text: 'witFooter 底部', link: '/core-concepts/default.html' },
            { text: 'witHeader 头部', link: '/core-concepts/default.html' },
            { text: 'witFullscreen 全屏', link: '/core-concepts/default.html' },
            { text: 'witIcon 图标', link: '/core-concepts/default.html' },
            { text: 'witIM IM入口', link: '/core-concepts/default.html' },
            { text: 'witLanguage 国际化', link: '/core-concepts/default.html' },
            { text: 'witLink 链接', link: '/core-concepts/default.html' },
            { text: 'witLock 锁屏', link: '/core-concepts/default.html' },
            { text: 'witLogo logo图标', link: '/core-concepts/default.html' },
            { text: 'witMenu 菜单', link: '/core-concepts/default.html' },
            { text: 'witMount 预加载', link: '/core-concepts/default.html' },
            { text: 'witNav 顶部navBar', link: '/core-concepts/default.html' },
            { text: 'witNotice 通知', link: '/core-concepts/default.html' },
            { text: 'witQueryForm 表单', link: '/core-concepts/default.html' },
            { text: 'witRefresh 刷新', link: '/core-concepts/default.html' },
            { text: 'witRightTools 工具栏', link: '/core-concepts/default.html' },
            { text: 'witRouterView 路由切换', link: '/core-concepts/default.html' },
            { text: 'witSearchFunction 功能搜索', link: '/core-concepts/default.html' },
            { text: 'witSelectSite 站点选择', link: '/core-concepts/default.html' },
            { text: 'witSideBar 左侧菜单', link: '/core-concepts/default.html' },
            { text: 'witStatistics 访问量统计', link: '/core-concepts/default.html' },
            { text: 'witTabs 多标签页', link: '/core-concepts/default.html' },
            { text: 'witTheme 主题', link: '/core-concepts/default.html' },
            { text: 'witLayoutColumn 分栏布局', link: '/core-concepts/default.html' },
            { text: 'witLayoutComprehensive 综合布局', link: '/core-concepts/default.html' },
            { text: 'witLayoutFall 瀑布流布局', link: '/core-concepts/default.html' },
            { text: 'witLayoutHorizontal 横向布局', link: '/core-concepts/default.html' },
            { text: 'witLayoutVertical 纵向布局', link: '/core-concepts/default.html' },
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
