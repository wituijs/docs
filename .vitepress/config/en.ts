import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const META_URL = ''
export const META_TITLE = 'Wit-ui Frontend Framework'
export const META_DESCRIPTION = 'The Wit-ui Frontend Framework you will love'
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
      pattern: 'https://github.com/wituijs/docs/issues',
      text: 'Suggest changes to this page',
    },

    outline: {
      label: 'On this page',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    nav: [
      {
        text: 'Introduction',
        link: '/en/introduction.html',
        activeMatch: '^/en/introduction.html',
      },
      {
        text: 'Quick Start',
        link: '/en/getting-started.html',
        activeMatch: '^/en/getting-started.html',
      },
      {
        text: 'Reference Documentation',
        link: '/en/core-concepts/',
        activeMatch: '^/en/core-concepts/',
      },
      {
        text: 'Related Links',
        items: [
          {
            text: 'Q&A',
            link: 'https://github.com/wituijs/docs/issues',
          },
          {
            text: 'Changelog',
            link: 'https://github.com/wituijs/docs',
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
          text: 'Introduction',
          items: [
            {
              text: 'What is Wit-ui?',
              link: '/en/introduction.html',
            },
            {
              text: 'Getting Started',
              link: '/en/getting-started.html',
            },
          ],
        },
        {
          text: 'Business Components',
          items: [
            { text: 'witSearch<br>Search', link: '/en/core-concepts/' },
            { text: 'witTable<br>Table', link: '/en/core-concepts/witTable.html' },
            { text: 'witTableV2<br>Virtual Table', link: '/en/core-concepts/witTableV2.html' },
            { text: 'witPagination<br>Pagination', link: '/en/core-concepts/witPagination.html' },
            { text: 'witSteps<br>Steps', link: '/en/core-concepts/witSteps.html' },
            { text: 'witTree<br>Tree', link: '/en/core-concepts/witTree.html' },
            { text: 'witTreeV2<br>Virtual Tree', link: '/en/core-concepts/witTreeV2.html' },
            { text: 'witEditor<br>AI Rich Text', link: '/en/core-concepts/witEditor.html' },
            { text: 'witAiChat<br>AI Chat Dialog', link: '/en/core-concepts/witAiChat.html' },
            { text: 'witChart<br>Chart', link: '/en/core-concepts/witChart.html' },
            { text: 'witCity<br>City Selection', link: '/en/core-concepts/witCity.html' },
            { text: 'witConfirm<br>Confirm Dialog', link: '/en/core-concepts/witConfirm.html' },
            { text: 'witContextMenu<br>Context Menu', link: '/en/core-concepts/witContextMenu.html' },
            { text: 'witCount<br>Number Format', link: '/en/core-concepts/witCount.html' },
            { text: 'witDataSelector<br>Date Selector', link: '/en/core-concepts/witDataSelector.html' },
            { text: 'witDesignForm<br>Form Designer', link: '/en/core-concepts/witDesignForm.html' },
            { text: 'witFullScreenProgress<br>Progress Bar', link: '/en/core-concepts/witFullScreenProgress.html' },
            { text: 'witIconSelector<br>Icon Selector', link: '/en/core-concepts/witIconSelector.html' },
            { text: 'witMagnifier<br>Magnifier', link: '/en/core-concepts/witMagnifier.html' },
            { text: 'witMdEditor<br>MD File Parser', link: '/en/core-concepts/witMdEditor.html' },
            { text: 'witPaneSplit<br>Pane Split', link: '/en/core-concepts/witPaneSplit.html' },
            { text: 'witPrint<br>Print', link: '/en/core-concepts/witPrint.html' },
            { text: 'witQrCode<br>QR Code Generator', link: '/en/core-concepts/witQrCode.html' },
            { text: 'witResultNotify<br>Result Notification', link: '/en/core-concepts/witResultNotify.html' },
            { text: 'witSplit<br>Draggable Split', link: '/en/core-concepts/witSplit.html' },
            { text: 'witTooltip<br>Tooltip', link: '/en/core-concepts/witTooltip.html' },
            { text: 'witUpdate<br>Upload', link: '/en/core-concepts/witUpdate.html' },
            { text: 'witSelectDialog<br>Select Dialog', link: '/en/core-concepts/witSelectDialog.html' },
            { text: 'witSeamlessScroll<br>Seamless Scroll', link: '/en/core-concepts/witSeamlessScroll.html' },
            { text: 'witPdfViewer<br>PDF Viewer', link: '/en/core-concepts/witPdfViewer.html' },
            { text: 'witLottiePlayer<br>Lottie Animation', link: '/en/core-concepts/witLottiePlayer.html' },
            { text: 'witImageViewer<br>Image Viewer', link: '/en/core-concepts/witImageViewer.html' },
            { text: 'witDraggable<br>Draggable', link: '/en/core-concepts/witDraggable.html' },
          ],
        },
        {
          text: 'Common Components',
          items: [
            { text: 'witApp<br>Entry', link: '/en/core-concepts/witApp.html' },
            { text: 'witAppMain<br>Entry Router', link: '/en/core-concepts/witAppMain.html' },
            { text: 'witAvatar<br>Avatar', link: '/en/core-concepts/witAvatar.html' },
            { text: 'witBreadcrumb<br>Breadcrumb', link: '/en/core-concepts/witBreadcrumb.html' },
            { text: 'witCard<br>Card', link: '/en/core-concepts/witCard.html' },
            { text: 'witChangePassword<br>Change Password', link: '/en/core-concepts/witChangePassword.html' },
            { text: 'witColorfulCard<br>Colorful Card', link: '/en/core-concepts/witColorfulCard.html' },
            { text: 'witColorPicker<br>Color Picker', link: '/en/core-concepts/witColorPicker.html' },
            { text: 'witColumnBar<br>Column Bar', link: '/en/core-concepts/witColumnBar.html' },
            { text: 'witDark<br>Dark Mode Toggle', link: '/en/core-concepts/witDark.html' },
            { text: 'witDeepseekIcon<br>DeepSeek Entry', link: '/en/core-concepts/witDeepseekIcon.html' },
            { text: 'witDialog<br>Dialog', link: '/en/core-concepts/witDialog.html' },
            { text: 'witDivider<br>Divider', link: '/en/core-concepts/witDivider.html' },
            { text: 'witErrorLog<br>Error Log', link: '/en/core-concepts/witErrorLog.html' },
            { text: 'witFallBar<br>Waterfall Menu', link: '/en/core-concepts/witFallBar.html' },
            { text: 'witFold<br>Fold', link: '/en/core-concepts/witFold.html' },
            { text: 'witFooter<br>Footer', link: '/en/core-concepts/witFooter.html' },
            { text: 'witHeader<br>Header', link: '/en/core-concepts/witHeader.html' },
            { text: 'witFullscreen<br>Fullscreen', link: '/en/core-concepts/witFullscreen.html' },
            { text: 'witIcon<br>Icon', link: '/en/core-concepts/witIcon.html' },
            { text: 'witIM<br>IM Entry', link: '/en/core-concepts/witIM.html' },
            { text: 'witLanguage<br>Internationalization', link: '/en/core-concepts/witLanguage.html' },
            { text: 'witLink<br>Link', link: '/en/core-concepts/witLink.html' },
            { text: 'witLock<br>Lock Screen', link: '/en/core-concepts/witLock.html' },
            { text: 'witLogo<br>Logo Icon', link: '/en/core-concepts/witLogo.html' },
            { text: 'witMenu<br>Menu', link: '/en/core-concepts/witMenu.html' },
            { text: 'witMount<br>Preload', link: '/en/core-concepts/witMount.html' },
            { text: 'witNav<br>Top NavBar', link: '/en/core-concepts/witNav.html' },
            { text: 'witNotice<br>Notice', link: '/en/core-concepts/witNotice.html' },
            { text: 'witQueryForm<br>Query Form', link: '/en/core-concepts/witQueryForm.html' },
            { text: 'witRefresh<br>Refresh', link: '/en/core-concepts/witRefresh.html' },
            { text: 'witRightTools<br>Right Tools', link: '/en/core-concepts/witRightTools.html' },
            { text: 'witRouterView<br>Router View', link: '/en/core-concepts/witRouterView.html' },
            { text: 'witSearchFunction<br>Function Search', link: '/en/core-concepts/witSearchFunction.html' },
            { text: 'witSelectSite<br>Site Selection', link: '/en/core-concepts/witSelectSite.html' },
            { text: 'witSideBar<br>Side Menu', link: '/en/core-concepts/witSideBar.html' },
            { text: 'witStatistics<br>Visit Statistics', link: '/en/core-concepts/witStatistics.html' },
            { text: 'witTabs<br>Multi Tabs', link: '/en/core-concepts/witTabs.html' },
            { text: 'witTheme<br>Theme', link: '/en/core-concepts/witTheme.html' },
            { text: 'witLayoutColumn<br>Column Layout', link: '/en/core-concepts/witLayoutColumn.html' },
            { text: 'witLayoutComprehensive<br>Comprehensive Layout', link: '/en/core-concepts/witLayoutComprehensive.html' },
            { text: 'witLayoutFall<br>Waterfall Layout', link: '/en/core-concepts/witLayoutFall.html' },
            { text: 'witLayoutHorizontal<br>Horizontal Layout', link: '/en/core-concepts/witLayoutHorizontal.html' },
            { text: 'witLayoutVertical<br>Vertical Layout', link: '/en/core-concepts/witLayoutVertical.html' },
          ],
        },
        {
          text: 'Dashboard Components',
          items: [
            { text: 'witAreaChart<br>Area Chart', link: '/en/core-concepts/witAreaChart.html' },
            { text: 'witBall<br>Ball Indicator', link: '/en/core-concepts/witBall.html' },
            { text: 'witBallSuspension<br>Ball Suspension', link: '/en/core-concepts/witBallSuspension.html' },
            { text: 'witBarChart<br>Bar Chart', link: '/en/core-concepts/witBarChart.html' },
            { text: 'witBarStackChart<br>Stacked Bar Chart', link: '/en/core-concepts/witBarStackChart.html' },
            { text: 'witBox<br>Box', link: '/en/core-concepts/witBox.html' },
            { text: 'witBsFullScreen<br>Full Screen', link: '/en/core-concepts/witBsFullScreen.html' },
            { text: 'witBsHeader<br>Common Header', link: '/en/core-concepts/witBsHeader.html' },
            { text: 'witBsHeaderOne<br>Header Style 1', link: '/en/core-concepts/witBsHeaderOne.html' },
            { text: 'witBsHeaderTwo<br>Header Style 2', link: '/en/core-concepts/witBsHeaderTwo.html' },
            { text: 'witBsTable<br>Table', link: '/en/core-concepts/witBsTable.html' },
            { text: 'witBsTabs<br>Tabs', link: '/en/core-concepts/witBsTabs.html' },
            { text: 'witDashboard<br>Dashboard', link: '/en/core-concepts/witDashboard.html' },
            { text: 'witDataCard<br>Card Style 1', link: '/en/core-concepts/witDataCard.html' },
            { text: 'witDataCardTwo<br>Card Style 2', link: '/en/core-concepts/witDataCardTwo.html' },
            { text: 'witDataCardThree<br>Card Style 3', link: '/en/core-concepts/witDataCardThree.html' },
            { text: 'witDataCardFour<br>Card Style 4', link: '/en/core-concepts/witDataCardFour.html' },
            { text: 'witDataCardFive<br>Card Style 5', link: '/en/core-concepts/witDataCardFive.html' },
            { text: 'witDataCardSix<br>Card Style 6', link: '/en/core-concepts/witDataCardSix.html' },
            { text: 'witDataCardSeven<br>Card Style 7', link: '/en/core-concepts/witDataCardSeven.html' },
            { text: 'witHorizontalBarChart<br>Horizontal Bar Chart', link: '/en/core-concepts/witHorizontalBarChart.html' },
            { text: 'witHorizontalPercentage<br>Horizontal Percentage', link: '/en/core-concepts/witHorizontalPercentage.html' },
            { text: 'witMap<br>Map Style 1', link: '/en/core-concepts/witMap.html' },
            { text: 'witMapTwo<br>Map Style 2', link: '/en/core-concepts/witMapTwo.html' },
            { text: 'witMapMarker<br>Map Marker Style 1', link: '/en/core-concepts/witMapMarker.html' },
            { text: 'witMapMarkerTwo<br>Map Marker Style 2', link: '/en/core-concepts/witMapMarkerTwo.html' },
            { text: 'witMixedLineAndBarChart<br>Mixed Line and Bar', link: '/en/core-concepts/witMixedLineAndBarChart.html' },
            { text: 'witMultipleBarChart<br>Multiple Bar Chart', link: '/en/core-concepts/witMultipleBarChart.html' },
            { text: 'witPercentPieChart<br>Percent Pie Chart 1', link: '/en/core-concepts/witPercentPieChart.html' },
            { text: 'witPercentPieChartTwo<br>Percent Pie Chart 2', link: '/en/core-concepts/witPercentPieChartTwo.html' },
            { text: 'witPieChart<br>Pie Chart Style 1', link: '/en/core-concepts/witPieChart.html' },
            { text: 'witPieChartTwo<br>Pie Chart Style 2', link: '/en/core-concepts/witPieChartTwo.html' },
            { text: 'witProgressChart<br>Progress Pie Chart', link: '/en/core-concepts/witProgressChart.html' },
            { text: 'witRadarChart<br>Radar Chart', link: '/en/core-concepts/witRadarChart.html' },
            { text: 'witRankBarChart<br>Rank Bar Chart', link: '/en/core-concepts/witRankBarChart.html' },
            { text: 'witRate<br>Rate Display', link: '/en/core-concepts/witRate.html' },
            { text: 'witTime<br>Time Display', link: '/en/core-concepts/witTime.html' },
            { text: 'witTitle<br>Common Title', link: '/en/core-concepts/witTitle.html' },
            { text: 'witTitleOne<br>Title Style 1', link: '/en/core-concepts/witTitleOne.html' },
            { text: 'witTrendChart<br>Trend Chart', link: '/en/core-concepts/witTrendChart.html' },
          ],
        },
      ],
    },
  },
}

export const enSearch: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  en: {
    placeholder: 'Search documentation',
    translations: {
      button: {
        buttonText: 'Search documentation',
        buttonAriaLabel: 'Search documentation',
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Clear query',
          resetButtonAriaLabel: 'Clear query',
          cancelButtonText: 'Cancel',
          cancelButtonAriaLabel: 'Cancel',
        },
        startScreen: {
          recentSearchesTitle: 'Recent searches',
          noRecentSearchesText: 'No recent searches',
          saveRecentSearchButtonTitle: 'Save to recent searches',
          removeRecentSearchButtonTitle: 'Remove from recent searches',
          favoriteSearchesTitle: 'Favorites',
          removeFavoriteSearchButtonTitle: 'Remove from favorites',
        },
        errorScreen: {
          titleText: 'Unable to fetch results',
          helpText: 'You might need to check your network connection',
        },
        footer: {
          selectText: 'Select',
          navigateText: 'Navigate',
          closeText: 'Close',
          searchByText: 'Search by',
        },
        noResultsScreen: {
          noResultsText: 'No results for',
          suggestedQueryText: 'Try searching for',
          reportMissingResultsText: 'Believe this query should return results?',
          reportMissingResultsLinkText: 'Let us know',
        },
      },
    },
  },
}