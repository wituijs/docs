import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = ''
export const META_TITLE = 'Pinia 🍍'
export const META_DESCRIPTION = '值得你喜欢的 Vue Store'
// TODO: translation of this
// 'Intuitive, type safe, light and flexible Store for Vue'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
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
      pattern: 'https://gitee.com/wit-ui/docs/issues',
      text: 'Suggest changes to this page',
    },

    nav: [
      {
        text: 'guide',
        link: '/en/core-concepts/',
        activeMatch: '^/en/core-concepts/',
      },
      { text: 'API', link: '/en/api/', activeMatch: '^/en/api/' },
      { text: 'Cookbook', link: '/en/cookbook/', activeMatch: '^/en/cookbook/' },
      {
        text: 'Links',
        items: [
          {
            text: 'Discussions',
            link: 'https://www.gitee.com/wit-ui/docs/issues',
          },
          {
            text: 'Changelog',
            link: 'https://www.gitee.com/wit-ui/docs/blob/master/CHANGELOG.md',
          },
        ],
      },
    ],
    sidebar: {
      '/en/api/': [
        {
          text: 'packages',
          items: [
            { text: 'pinia', link: '/en/api/modules/pinia.html' },
            { text: '@pinia/nuxt', link: '/en/api/modules/pinia_nuxt.html' },
            {
              text: '@pinia/testing',
              link: '/en/api/modules/pinia_testing.html',
            },
          ],
        },
      ],
      '/en/': [
        {
          text: '介绍',
          items: [
            {
              text: 'Pinia 是什么？',
              link: '/en/introduction.html',
            },
            {
              text: '开始',
              link: '/en/getting-started.html',
            },
          ],
        },
        {
          text: '核心概念',
          items: [
            { text: '定义 Store', link: '/en/core-concepts/' },
            { text: 'State', link: '/en/core-concepts/state.html' },
            { text: 'Getter', link: '/en/core-concepts/getters.html' },
            { text: 'Action', link: '/en/core-concepts/actions.html' },
            { text: '插件', link: '/en/core-concepts/plugins.html' },
            {
              text: '组件外的 Store',
              link: '/en/core-concepts/outside-component-usage.html',
            },
          ],
        },
        {
          text: '手册',
          collapsed: false,
          items: [
            {
              text: '目录',
              link: '/en/cookbook/',
            },
            {
              text: '从 Vuex ≤4 迁移',
              link: '/en/cookbook/migration-vuex.html',
            },
            {
              text: '热更新',
              link: '/en/cookbook/hot-module-replacement.html',
            },
            {
              text: '测试',
              link: '/en/cookbook/testing.html',
            },
            {
              text: '不使用 setup() 的用法',
              link: '/en/cookbook/options-api.html',
            },
            {
              text: '组合式 Stores',
              link: '/en/cookbook/composing-stores.html',
            },
            {
              text: '从 v0/v1 迁移至 v2',
              link: '/en/cookbook/migration-v1-v2.html',
            },
            {
              text: '处理组合式函数',
              link: '/en/cookbook/composables.html',
            },
          ],
        },
      ],
    },
  },
}