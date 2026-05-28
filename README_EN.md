<p align="center">
    <img alt="logo" src="https://www.wit-ui.com/logo.png" width="200">
</p>

<p align="center">
  <a href="README.md">简体中文</a> | <a href="README_EN.md">English</a>
</p>

<h1 align="center">Wit-ui Large-Scale System Micro-Frontend Architecture - Multi-Platform</h1>
<h2 align="center">Precise Skill Permission Control, AI Intelligent Code Generation — Wit-UI Defines a New Paradigm for AI-Oriented Programming.</h2>
<h2 align="center">Vue3+Pinia+Vite+TS+Element-plus</h2>
<p align="center">
✈️ <a href="https://www.wit-ui.com">Official Website (Recommended)</a>&nbsp;
🚀 <a href="https://www.wit-ui.com/introduction.html">Documentation</a>&nbsp;
🖥️ <a href="http://demo.wit-ui.com/wit-pharm-main/">Demo</a>&nbsp;
</p>

<p>Rome was not built in a day, mountains are formed by accumulated earth</p>
<p>2026 Latest frontend architecture improves development efficiency by 8-10 times</p>

<div align="left">
  <p>Ten years of grinding the sword to achieve sharpness, breaking through bamboo with unstoppable momentum</p>
  <p>Knowledge from books is shallow, true understanding comes from practice</p>
  <p>100k+ enterprise internal system frontend architecture, dozens of well-known enterprise mid-to-back-end practices</p>
</div>

## 🔊 Multi-Platform Support

**Web Frontend Architecture: Vue3+Pinia+Vite+TS+Element-plus, Project URL: [Get Access](https://www.wit-ui.com/pricing.html) Not Open Source**

**Mobile Cross-Platform Frontend Architecture Solution 1: Uniapp+Vue3+Pinia+Vite+TS, Supports VScode Editor Development, Project URL: [Get Access](https://www.wit-ui.com/pricing.html) Not Open Source**

**Mobile Cross-Platform Frontend Architecture Solution 2: Flutter+GetX, Supports VScode Editor Development, Project URL: [Get Access](https://www.wit-ui.com/pricing.html) Not Open Source**

**Electron Desktop Application Frontend Architecture: Electron+Vue3+Pinia+Vite+TS+Element-plus, Project URL: [Get Access](https://www.wit-ui.com/pricing.html) Not Open Source**

**Nwjs Desktop Application (Supports XP System) Frontend Architecture: Nwjs+Vue2+Vuex+Vite+js+Element-ui, Project URL: [Get Access](https://www.wit-ui.com/pricing.html) Not Open Source**

**[Development Documentation Official Website: https://www.wit-ui.com](https://www.wit-ui.com)**

## 🔊 Installation Instructions

```bash
# Windows 10 install node: node-v20.19.1-x64.msi(https://nodejs.org/download/release/v20.19.1/node-v20.19.1-x64.msi)
# VSCode Chinese language plugin: Chinese (Simplified) (must install)
# VSCode quick syntax sugar template generation: element-plus-helper (enter wit- command in vue page to quickly generate syntax sugar template / enter el- to quickly generate code) (must install)
# VSCode code linting: Eslint (must install)
# CSS compilation format validation: stylelint (must install)
# Vue3 TS formatting: Vue - Official (must install)
# Import auto-completion: Auto Import (must install)
# Auto-complete HTML tags: Auto Close Tag (recommended)
# Auto-rename HTML tags: Auto Rename Tag (recommended)
# View imported dependency module sizes: Import Cost (optional)
# View git commit history: Git History (optional)

# Clone project
git clone https://github.com/wituijs/wit-admin.git

# Install pnpm
npm install -g pnpm

# Install Taobao mirror
npm install -g cnpm --registry=https://registry.npmmirror.com

# Install yarn
npm install -g yarn

# View current npm registry
npm config get registry

# Set npm registry
npm set registry https://registry.npmmirror.com/

# View current pnpm registry
pnpm config get registry

# Set pnpm registry
pnpm set config registry https://registry.npmmirror.com/

# View current yarn registry
yarn config get registry

# Set yarn registry
yarn config set registry https://registry.npmmirror.com/

# Install dependencies (pnpm, yarn, cnpm, npm all work, pnpm or cnpm recommended)
pnpm i

# Local development
npm run dev

# Production build
npm run build

# npm view cache path
npm config get cache

# npm clear cache
npm cache clean --force

# pnpm view cache path
pnpm store path

# pnpm clear cache
pnpm store prune

# yarn view cache path
yarn cache dir

# yarn clear cache
yarn cache clean

```

## 🔊 Code Directory Structure

```
main # Micro-frontend -- Main Application Module
├── .github # Automated CI configuration (can be deleted)
├── .vscode # VSCode configuration (cannot be deleted)
├── mock # Local mock data
├── node_modules # Project dependency modules
├── library # Core module, do not modify
│ ├── build # Build related, do not modify
│ |── components # Common components
| | ├── witApp # Entry page
| | ├── witAppMain # Inner page
| | ├── witAvatar # Avatar
| | ├── witBreadcrumb # Breadcrumb
| | ├── witCard # el-card wrapper (supports skeleton screen)
| | ├── witChangePassword # Change password
| | ├── witColorfulCard # Colorful card wrapper
| | ├── witColorPicker # Color picker
| | ├── witColumnBar # Tab bar
| | ├── witDark # Dark/light mode toggle
| | ├── witDeepseekIcon # DeepSeek feature entry
| | ├── witDialog # Dialog prompt
| | ├── witDivider # Divider
| | ├── witErrorLog # Error log
| | ├── witFallBar # Waterfall menu
| | ├── witFold # Expand/collapse
| | ├── witFooter # Footer
| | ├── witHeader # Header
| | ├── witFullscreen # Fullscreen
| | ├── witIcon # Icon
| | ├── witIM # IM entry
| | ├── witLanguage # Internationalization
| | ├── witLink # Link
| | ├── witLock # Lock screen
| | ├── witLogo # Logo
| | ├── witMenu # Menu
| | ├── witMount # Preload
| | ├── witNav # Top navbar
| | ├── witNotice # Notification
| | ├── witQueryForm # Top query condition layout wrapper
| | ├── witRefresh # Refresh
| | ├── witRightTools # Toolbar
| | ├── witRouterView # Router view
| | ├── witSearchFunction # Function search
| | ├── witSelectSite # Site selection
| | ├── witSideBar # Left sidebar menu
| | ├── witStatistics # Visit statistics
| | ├── witTabs # Multi-tab pages
│ | └── witTheme # Top query condition layout wrapper
│ ├── layouts # Interface layouts (unused themes can be deleted, vertical layout must be kept for mobile adaptation)
| | ├── witLayoutColumn # Column layout
| | ├── witLayoutHorizontal # Horizontal layout
| | ├── witLayoutVertical # Vertical layout
| | ├── witLayoutFall # Waterfall layout
| | ├── witLayoutComprehensive # Comprehensive layout
│ | └── index.vue # Layout switch entry
│ ├── plugins # Pre-build initialization plugins
│ ├── styles # Common styles
│ └── index.ts # main.ts file execution entry
├── public
│ ├── html # PWA icons
│ ├── static # Static resources
│ ├── preload.js # Preload script/config api
│ └── favicon.ico # Favicon
├── src
│ ├── api # API service module
│ ├── assets # Local static resources
│ ├── config # Project configuration
│ │ ├── cli.config.ts # Vue/cli configuration
│ │ ├── net.config.ts # Network configuration
│ │ ├── setting.config.ts # General configuration
│ │ ├── theme.config.ts # Theme configuration
│ │ └── index.ts # Custom configuration merge (not recommended to modify)
│ ├── hooks # Hooks functions
│ │ └── index.ts # Custom hooks function entry
│ ├── plugins # Business components
| | ├── witSeach # Search
| | ├── witTable # Virtual scroll table
| | ├── witTableV2 # Virtual scroll table
| | ├── witPagination # Pagination
| | ├── witSteps # Steps
| | ├── witTree # Tree
| | ├── witTreeV2 # Virtual scroll tree
| | ├── witEditor # AI rich text
| | ├── witAiChat # AI dialog
| | ├── witChart # Chart
| | ├── witChat # Chat box
| | ├── witPlayer # Video player
| | ├── witCity # City selection
| | ├── witConfirm # Confirm dialog
| | ├── witContextMenu # Right-click menu
| | ├── witCount # Number formatting
| | ├── witDataSelector # Date selection
| | ├── witDesignForm # Form designer
| | ├── witDraggable # Draggable component
| | ├── witFullScreenProgress # Progress bar
| | ├── witIconSelector # Icon selector
| | ├── witImageViewer # Image viewer
| | ├── witLottiePlayer # Lottie animation player
| | ├── witMagnifier # Magnifier
| | ├── witMdEditor # MD file parser
| | ├── witPaneSplit # Split pane
| | ├── witPdfViewer # PDF viewer
| | ├── witPrint # Print
| | ├── witQrCode # QR code generator
| | ├── witResultNotify # Result notification
| | ├── witSeamlessScroll # Seamless scroll
| | ├── witSelectDialog # Selector dialog
| | ├── witSplit # Drag split
| | ├── witTooltip # Tooltip
│ │ └── witUpdate # Upload
│ ├── i18n # Multi-language
│ ├── icon # Custom SVG icons storage, only used when icon property is isCustomSvg, recommend using built-in icons if not necessary
│ ├── router # Router configuration
│ ├── store # Pinia state management configuration
│ ├── utils # JS utilities
│ ...  
├── .eslintrc.js # ESLint configuration
├── package.json # package.json
├── index.html # Entry page
└── vite.config.ts # Vite configuration
```

```
report # Micro-frontend -- Dashboard and Report Module
├── ... # Integrated main application components
...  # Integrated main application directory structure
│ ├── views # Business components
| | ├── report # Report pages
| | | ├── proCodeReportViewer # Dashboard report
| | | | ├── components # Dashboard report component library
| | | | | ├── witAreaChart # Basic area chart
| | | | | ├── witBall # Ball indicator effect
| | | | | ├── witBallSuspension # Ball suspension effect
| | | | | ├── witBarChart # Basic bar chart
| | | | | ├── witBarStackChart # Stacked bar chart
| | | | | ├── witBox # Basic box chart
| | | | | ├── witBsFullScreen # Fullscreen
| | | | | ├── witBsHeader # Common header
| | | | | ├── witBsHeaderOne # Header style 1
| | | | | ├── witBsHeaderTwo # Header style 2
| | | | | ├── witBsTable # Table
| | | | | ├── witBsTabs # Tabs
| | | | | ├── witDashboard # Dashboard effect
| | | | | ├── witDataCard # Card style 1
| | | | | ├── witDataCardTwo # Card style 2
| | | | | ├── witDataCardThree # Card style 3
| | | | | ├── witDataCardFour # Card style 4
| | | | | ├── witDataCardFive # Card style 5
| | | | | ├── witDataCardSix # Card style 6
| | | | | ├── witDataCardSeven # Card style 7
| | | | | ├── witHorizontalBarChart # Horizontal bar chart
| | | | | ├── witHorizontalPercentage # Horizontal bar percentage
| | | | | ├── witMap # Map style 1
| | | | | ├── witMapTwo # Map style 2
| | | | | ├── witMapMarker # Map marker style 1
| | | | | ├── witMapMarkerTwo # Map marker style 2
| | | | | ├── witMixedLineAndBarChart # Mixed line and bar chart
| | | | | ├── witMultipleBarChart # Multi-series bar chart
| | | | | ├── witPercentPieChart # Percentage pie chart style 1
| | | | | ├── witPercentPieChartTwo # Percentage pie chart style 2
| | | | | ├── witPieChart # Multi-series pie chart style 1
| | | | | ├── witPieChartTwo # Multi-series pie chart style 2
| | | | | ├── witProgressChart # Progress pie chart
| | | | | ├── witRadarChart # Radar chart
| | | | | ├── witRankBarChart # Ranking horizontal bar chart
| | | | | ├── witRate # Rate display
| | | | | ├── witTime # Time display
| | | | | ├── witTitle # Common title
| | | | | ├── witTitleOne # Title style 1
| | | │ └── witTrendChart # Mixed line and bar trend chart
| | ... ... ...
│ ├── i18n # Multi-language
│ ├── icon # Custom SVG icons storage, only used when icon property is isCustomSvg, recommend using built-in icons if not necessary
│ ├── router # Router configuration
│ ├── store # Pinia state management configuration
│ ├── utils # JS utilities
│ ...  
├── .eslintrc.js # ESLint configuration
├── package.json # package.json
├── index.html # Entry page
└── vite.config.ts # Vite configuration
```

## 🔊 Startup Process

```
Understanding the entire framework workflow will greatly help our future development. The following is the framework workflow for accessing a webpage, logic code src/wit/plugins/permissions.js
```

![img](https://gcore.jsdelivr.net/gh/chuzhixin/image/vip/flow.drawio.png)

```
- After the website starts, it loads global configuration
- When a user visits a page (e.g., /index), it verifies if there is a token, if not, redirects to /login page
- After holding the token, it gets user information through /userInfo interface (including: username, avatar, guard)
- According to global configuration, choose frontend export routes or backend export routes, filter based on user roles and ability, put into vue router
- Open /index page
```

## 🔊 CLI Configuration

Location: src/config/cli.config.ts

```bash
/**
 * @description Export CLI configuration, all configuration modifications below require project restart
 */
export const cliConfig: { [key: string]: any } = {
  // URL for development and deployment
  // In hash mode, when the secondary directory name is uncertain, it is recommended to use "" for relative path or "/secondary-directory/"
  // In history mode, default use "/" or "/secondary-directory/", remember only in hash mode publicPath can be empty!!!
  publicPath: "",
  // Production environment build file directory name
  outputDir: "dist",
  // Directory for generated static resources (js, css, img, fonts) (relative to outputDir)
  assetsDir: "static",
  // Development environment port
  devPort: 5173,
  // PWA
  pwa: true,
};
```

## 🔊 Network Configuration

Location: src/config/net.config.ts

```bash
/**
 * @description Export network configuration
 * @description Vite version cannot configure global API in net.config.js, for development environment modify .env.development, for production environment modify .env.production, for test environment modify .env.test
 **/
export const netConfig: { [key: string]: any } = {
  // Configure backend data receiving method application/json;charset=UTF-8 or application/x-www-form-urlencoded;charset=UTF-8
  contentType: "application/json;charset=UTF-8",
  // Maximum request time
  requestTimeout: 10000,
  // Operation normal code, supports String, Array, int multiple types
  successCode: [200, 0, "200", "0"],
  // Data status field name
  statusName: "code",
  // Status message field name
  messageName: "msg",
};
```

## 🔊 General Configuration

Location: src/config/setting.config.js

```bash
/**
 * @description Export general configuration
 */
export const settingConfig: { [key: string]: any } = {
  // Title, this modification requires project restart!!! (including initial loading snow screen title, page title, browser title)
  title: "Vue Shop Vite",
  // Title separator
  titleSeparator: " - ",
  // Whether to reverse title
  // If false: "page - title"
  // If true: "title - page"
  titleReverse: false,
  // Abbreviation
  abbreviation: "wit-wit-vite",
  // Copyright can be modified freely
  copyright: "sunya",
  // Maximum number of cached routes
  keepAliveMaxNum: 20,
  // Router mode, whether it is hash mode
  isHashRouterMode: true,
  // Routes without token verification, whitelist routes are recommended to be configured at the same level as login page, if you need to release pages with parameters, please use query parameters, only configure path
  routesWhiteList: [
    "/login",
    "/register",
    "/404",
    "/403",
    "/redirect",
    "/portal",
  ],
  // Text displayed during loading
  loadingText: "Loading...",
  // Token name
  tokenName: "token",
  // Token storage key name in localStorage, sessionStorage, cookie
  tokenTableName: "wit-vite-token",
  // Token storage location localStorage sessionStorage cookie
  storage: "localStorage",
  // Whether to record current route when token expires and falls back to login page (whether to record current tab page)
  recordRoute: true,
  // Whether to show logo, set false when not displaying, please fill in the icon name under src/icon path
  // If you need to use built-in RemixIcon icons, please go to logo component to switch comment code (built-in SVG sprite is large, has certain impact on performance)
  logo: "mall-fill",
  // Language type zh, en
  i18n: "zh",
  // Message box disappear time
  messageDuration: 3000,
  // In which environments to show highlight errors ['development', 'production']
  errorLog: "development",
  // Whether to enable login interception
  loginInterception: true,
  // Whether to enable login RSA encryption
  loginRSA: false,
  // intelligence (frontend export routes) and all (backend export routes) two ways
  authentication: "intelligence",
  // Whether to support visitor mode, when supported, access whitelist, can view all asyncRoutes
  supportVisit: false,
  // Whether to enable roles field for role permission control (if it is all mode, backend completely handles roles and performs JSON assembly, can set false to not process roles field in routes)
  rolesControl: true,
  // Whether to keep only one submenu expanded in vertical column comprehensive common layout
  uniqueOpened: false,
  // Default expanded menu path in vertical column comprehensive common layout, use comma separation, recommend expanding only one
  defaultOpeneds: ["/wit/icon", "/wit/form"],
  // Requests that need loading layer to prevent duplicate submission
  debounce: ["doEdit"],
  // In column layout and comprehensive layout, whether to click first-level menu to open second-level menu by default (default first, can be customized via redirect)
  openFirstMenu: true,
};
```

## 🔊 Theme Configuration

Location: src/config/theme.config.ts

```bash
/**
 * @description Export theme configuration, note: items under this configuration need to clear browser cache after modification!!!
 */
export const themeConfig: ThemeType = {
  // Vite version only supports column layout, vertical layout, horizontal layout
  layout: "column",
  // Two themes: default, technology
  themeName: "default",
  // Menu width, only supports px, recommended size: 266px, 277px, 288px, other sizes will affect aesthetics
  menuWidth: "266px",
  // Column style: horizontal style, vertical style, card style, arrow style
  columnStyle: "card",
  // Color
  color: "#4e88f3",
  // Whether to fix header
  fixedHeader: true,
  // Whether to enable top progress bar
  showProgressBar: true,
  // Whether to enable tab pages
  showTabs: true,
  // Tab page style when displaying tab pages: card style, smart style, smooth style
  tabsBarStyle: "card",
  // Whether to show tab page icons
  showTabsIcon: true,
  // Whether to enable language selection component
  showLanguage: true,
  // Whether to enable refresh component
  showRefresh: true,
  // Whether to enable search component
  showSearch: true,
  // Whether to enable theme component
  showTheme: true,
  // Whether to enable notification component
  showNotice: true,
  // Whether to enable fullscreen component
  showFullScreen: true,
  // Whether to enable right floating window
  showThemeSetting: true,
  // Whether to enable dark mode component
  showDark: true,
  // Whether to collapse left menu by default
  foldSidebar: false,
  // Whether to enable page animation
  showPageTransition: true,
};
```

## 🔊 Common Regex Validation

Description: Wit commonly used original regex validation, location: src/utils/validate.ts

```bash
/**
 * @description Format time
 * @param time
 * @param cFormat
 * @returns {string|null}
 */
export function parseTime(time: any, cFormat: string) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj: any = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  return format.replace(/{([ymdhisa])+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a") {
      return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][value];
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`;
    }
    return value || 0;
  });
}

/**
 * @description Format time
 * @param time
 * @param option
 * @returns {string}
 */
export function formatTime(time: any, option: any) {
  if (`${time}`.length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d: any = new Date(time);
  const now: number = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return "Just now";
  } else if (diff < 3600) {
    return `${Math.ceil(diff / 60)} minutes ago`;
  } else if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)} hours ago`;
  } else if (diff < 3600 * 24 * 2) {
    return "1 day ago";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return `${
      d.getMonth() + 1
    }/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
  }
}

/**
 * @description Convert URL request parameters to JSON format
 * @param url
 * @returns {{}|any}
 */
export function paramObj(url: string) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    `{"${decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`
  );
}
```

## 🔊 Browser Support

Modern browsers and Internet Explorer 11+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browser-support-badge/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browser-support-badge/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browser-support-badge/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browser-support-badge/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## 🔊 License

[MIT](https://github.com/wituijs/wit-admin/blob/main/LICENSE)

Copyright (c) 2019-present Wit-ui
