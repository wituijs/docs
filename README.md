<p align="center">
    <img alt="logo" src="https://www.wit-ui.com/logo.png" width="200">
</p>

<h1 align="center">Wit-ui大型系统微前端架构-多端</h1>
<h2 align="center">Vue3+Pinia+Vite+TS+Element-plus</h2>
<p align="center">
✈️ <a href="https://www.wit-ui.com">官方网站 (推荐)</a>&nbsp;
🚀 <a href="https://www.wit-ui.com/introduction.html">文档网站</a>&nbsp;
🖥️ <a href="http://demo.wit-ui.com/wit-pharm-main/">演示站</a>&nbsp;
</p>

<p>冰冻三尺，非一日之寒，积土成山，非斯须之作</p>
<p>2024年最新前端架构让开发效率提升8~10倍</p>

<div align="left">
  <p>十年磨剑终成锋，一朝破竹势如虹</p>
  <p>纸上得来终觉浅，绝知此事要躬行</p>
  <p>10w级企业内部系统前端架构，几十个知名企业中后台实践</p>
</div>

## 🔊 支持多端

**web前端架构：Vue3+Pinia+Vite+TS+Element-plus，项目地址：[获取地址](https://www.wit-ui.com/pricing.html) 不开源**

**移动端跨平台前端架构方案1：Uniapp+Vue3+Pinia+Vite+TS+WotDesignUni+TuniaoUI 支持 VScode 编辑器开发，项目地址：[获取地址](https://www.wit-ui.com/pricing.html) 不开源**

**移动端跨平台前端架构方案2：Flutter+GetX 支持 VScode 编辑器开发，项目地址：[获取地址](https://www.wit-ui.com/pricing.html) 不开源**

**Electron 桌面应用前端架构：Electron+Vue3+Pinia+Vite+TS+Element-plus，项目地址：[获取地址](https://www.wit-ui.com/pricing.html) 不开源**

**Nwjs 桌面应用（支持 XP 系统）前端架构：Nwjs+Vue2+Vuex+Vite+js+Element-ui，项目地址：[获取地址](https://www.wit-ui.com/pricing.html) 不开源**

**[开发文档官方网址：https://www.wit-ui.com](https://www.wit-ui.com)**

## 🔊 安装说明

```bash
# win10安装node：node-v20.19.1-x64.msi(https://nodejs.org/download/release/v20.19.1/node-v20.19.1-x64.msi)
# vscode中文版插件：Chinese (Simplified)（必须安装）
# vscode快速生成语法糖模板: element-plus-helper（vue页面中输入wit-指令即可快速生成语法糖模板/输入el-快速生成代码）（必须安装）
# vscode代码校验: Eslint（必须安装）
# css编译时格式校验: stylelint（必须安装）
# vue3 Ts格式化:Vue - Official（必须安装）
# import 引入自动补全: Auto Import（必须安装）
# 自动补全 html 标签: Auto Close Tag（推荐安装）
# 自动重命名 html 标签: Auto Rename Tag（推荐安装）
# 查看你引入的依赖模块大小: Import Cost（可不安装）
# 查查看 git 提交历史: Git History（可不安装）

# 克隆项目
git clone https://github.com/wituijs/wit-admin.git

# 安装pnpm
npm install -g pnpm

# 安装淘宝镜像
npm install -g cnpm --registry=https://registry.npmmirror.com

# 安装yarn
npm install -g yarn

# 查看当前npm源
npm config get registry

# 设置npm源
npm set registry https://registry.npmmirror.com/

# 查看当前pnpm源
pnpm config get registry

# 设置pnpm源
pnpm set config registry https://registry.npmmirror.com/

# 查看当前yarn源
yarn config get registry

# 设置yarn源
yarn config set registry https://registry.npmmirror.com/

# 安装依赖（pnpm、yarn、cnpm、npm均可，推荐用pnpm或cnpm）
pnpm i

# 本地开发
npm run dev

# 生产打包
npm run build

# npm查看缓存路径
npm config get cache

# npm删除缓存
npm cache clean --force

# pnpm查看缓存路径
pnpm store path

# pnpm删除缓存
pnpm store prune

# yarn查看缓存路径
yarn cache dir

# yarn删除缓存
yarn cache clean

```

## 🔊 代码目录结构

```
├── .github # 自动化 ci 配置（可删除）
├── .vscode # vscode 配置（不可删除）
├── mock # 本地 mock 数据
├── node_modules # 项目依赖模块
├── library # 核心模块，请勿修改
│ ├── build # 打包相关，请勿修改
│ |── components # 通用组件
| | ├── witApp # 入口页
| | ├── witAppMain # 内页
| | ├── witAvatar # 头像
| | ├── witBreadcrumb # 面包屑
| | ├── witCard # el-card封装（支持骨架屏）
| | ├── witChangePassword # 修改密码
| | ├── witColorfulCard # 多彩卡片封装
| | ├── witColorPicker # 取色
| | ├── witColumnBar # 选项卡
| | ├── witDark # 黑白切换
| | ├── witDeepseekIcon # deepSeek功能入口
| | ├── witDialog # 弹框提示
| | ├── witDivider # 分割线
| | ├── witErrorLog # 错误日志
| | ├── witFallBar # 瀑布菜单
| | ├── witFold # 展开合并
| | ├── witFooter # 底部
| | ├── witHeader # 头部
| | ├── witFullscreen # 全屏
| | ├── witIcon # Icon图标
| | ├── witIM # IM入口
| | ├── witLanguage # 国际化
| | ├── witLink # 链接
| | ├── witLock # 锁屏
| | ├── witLogo # logo
| | ├── witMenu # 菜单
| | ├── witMount # 预加载
| | ├── witNav # 顶部navBar
| | ├── witNotice # 通知
| | ├── witQueryForm # 顶部查询条件布局封装
| | ├── witRefresh # 刷新
| | ├── witRightTools # 工具栏
| | ├── witRouterView # 路由切换
| | ├── witSearchFunction # 功能搜索
| | ├── witSelectSite # 站点选择
| | ├── witSideBar # 左侧菜单
| | ├── witStatistics # 访问量统计
| | ├── witTabs # 多标签页
│ | └── witTheme # 顶部查询条件布局封装
│ ├── layouts # 界面布局（不需要的主题可删除，手机端适配必须保留纵向布局）
| | ├── witLayoutColumn # 分栏布局
| | ├── witLayoutHorizontal # 横向布局
| | ├── witLayoutVertical # 纵向布局
| | ├── witLayoutFall # 瀑布流布局
| | ├── witLayoutComprehensive # 综合布局
│ | └── index.vue # 布局切换入口
│ ├── plugins # 打包前初始化插件
│ ├── styles # 公用样式
│ └── index.ts # main.ts文件执行入口
├── public
│ ├── html # pwa图标
│ ├── static # 静态资源
│ ├── preload.js # 预加载脚本/配置api
│ └── favicon.ico # favicon图标
├── src
│ ├── api # API 服务模块
│ ├── assets # 本地静态资源
│ ├── config # 项目配置
│ │ ├── cli.config.ts # vue/cli配置
│ │ ├── net.config.ts # 网络配置
│ │ ├── setting.config.ts # 通用配置
│ │ ├── theme.config.ts # 主题配置
│ │ └── index.ts # 自定义配置合并（不建议修改）
│ ├── hooks # hooks函数
│ │ └── index.ts # 自定义hooks函数入口
│ ├── plugins # 业务组件
| | ├── witSeach # 搜索
| | ├── witTable # 虚拟滚动表格
| | ├── witTableV2 # 虚拟滚动表格
| | ├── witPagination # 分页
| | ├── witSteps # 步骤条
| | ├── witTree # 树形
| | ├── witTreeV2 # 虚拟滚动树形
| | ├── witEditor # AI富文本
| | ├── witAiChat # AI对话框
| | ├── witChart # 图表
| | ├── witCity # 城市选择
| | ├── witConfirm # 确认弹框
| | ├── witContextMenu # 右键菜单
| | ├── witCount # 数字格式化
| | ├── witDataSelector # 日期选择
| | ├── witDesignForm # 表单设计器
| | ├── witDraggable # 可拖拽组件
| | ├── witFullScreenProgress # 进度条
| | ├── witIconSelector # 图标选择器
| | ├── witImageViewer # 图片查看器
| | ├── witLottiePlayer # lottie动画播放
| | ├── witMagnifier # 放大镜
| | ├── witMdEditor # md文件解析器
| | ├── witPaneSplit # 分屏
| | ├── witPdfViewer # pdf查看器
| | ├── witPrint # 打印
| | ├── witQrCode # 二维码生成
| | ├── witResultNotify # 结果提示
| | ├── witSeamlessScroll # 无缝滚动
| | ├── witSelectDialog # 选择器对话框
| | ├── witSplit # 拖拽分屏
| | ├── witTooltip # 提示
│ │ └── witUpdate # 上传
│ ├── i18n # 多语言
│ ├── icon # 存放自定义svg图标 ，仅在icon属性为isCustomSvg时才会调用svg图标，如无必要建议使用内置图标
│ ├── router # 路由配置
│ ├── store # pinia 状态管理配置
│ ├── utils # js 工具
├── .eslintrc.js # eslint 配置项
├── package.json # package.json
├── index.html # 入口页
└── vite.config.ts # vite 配置
```

## 🔊 启动流程

```
了解整个框架的工作流程，会对我们以后开发有很大的帮助，以下是框架访问一个网页的工作流程，逻辑代码src/wit/plugins/permissions.js
```

![img](https://gcore.jsdelivr.net/gh/chuzhixin/image/vip/flow.drawio.png)

```
- 网站启动后，会加载全局配置
- 用户访问一个页面(如：/index)后，会验证是否有 token，没有会跳转到/login 页面
- 持有 token 后，会通过/userInfo 接口获取用户信息(包含：用户名、头像、guard)
- 根据全局配置，选择前端导出路由或者后端导出路由，根据用户 roles 和 ability 过滤，放入 vue router
- 打开/index 页面
```

## 🔊 cli 配置

位置：src/config/cli.config.ts

```bash
/**
 * @description 导出cli配置，以下所有配置修改需要重启项目
 */
export const cliConfig: { [key: string]: any } = {
  // 开发以及部署时的URL
  // hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"
  // history模式默认使用"/"或者"/二级目录/"，记住只有hash时publicPath可以为空！！！
  publicPath: "",
  // 生产环境构建文件的目录名
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  // 开发环境端口号
  devPort: 5173,
  // pwa
  pwa: true,
};
```

## 🔊 网络配置

位置：src/config/net.config.ts

```bash
/**
 * @description 导出网络配置
 * @description vite版本无法在net.config.js配置全局api，开发环境去.env.development改，生产环境去.env.production改，测试环境去.env.test改
 **/
export const netConfig: { [key: string]: any } = {
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: "application/json;charset=UTF-8",
  // 最长请求时间
  requestTimeout: 10000,
  // 操作正常code，支持String、Array、int多种类型
  successCode: [200, 0, "200", "0"],
  // 数据状态的字段名称
  statusName: "code",
  // 状态信息的字段名称
  messageName: "msg",
};
```

## 🔊 通用配置

位置：src/config/setting.config.js

```bash
/**
 * @description 导出通用配置
 */
export const settingConfig: { [key: string]: any } = {
  // 标题，此项修改后需要重启项目！！！ (包括初次加载雪花屏的标题 页面的标题 浏览器的标题)
  title: "Vue Shop Vite",
  // 标题分隔符
  titleSeparator: " - ",
  // 标题是否反转
  // 如果为false: "page - title"
  // 如果为ture : "title - page"
  titleReverse: false,
  // 简写
  abbreviation: "wit-wit-vite",
  // copyright可随意修改
  copyright: "sunya",
  // 缓存路由的最大数量
  keepAliveMaxNum: 20,
  // 路由模式，是否为hash模式
  isHashRouterMode: true,
  // 不经过token校验的路由，白名单路由建议配置到与login页面同级，如果需要放行带传参的页面，请使用query传参，配置时只配置path即可
  routesWhiteList: [
    "/login",
    "/register",
    "/404",
    "/403",
    "/redirect",
    "/portal",
  ],
  // 加载时显示文字
  loadingText: "正在加载中...",
  // token名称
  tokenName: "token",
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: "wit-vite-token",
  // token存储位置localStorage sessionStorage cookie
  storage: "localStorage",
  // token失效回退到登录页时是否记录本次的路由（是否记录当前tab页）
  recordRoute: true,
  // 是否开启logo，不显示时设置false，请填写src/icon路径下的图标名称
  // 如需使用内置RemixIcon图标，请自行去logo组件切换注释代码(内置svg雪碧图较大，对性能有一定影响)
  logo: "mall-fill",
  // 语言类型zh、en
  i18n: "zh",
  // 消息框消失时间
  messageDuration: 3000,
  // 在哪些环境下显示高亮错误 ['development', 'production']
  errorLog: "development",
  // 是否开启登录拦截
  loginInterception: true,
  // 是否开启登录RSA加密
  loginRSA: false,
  // intelligence(前端导出路由)和all(后端导出路由)两种方式
  authentication: "intelligence",
  // 是否支持游客模式，支持情况下，访问白名单，可查看所有asyncRoutes
  supportVisit: false,
  // 是否开启roles字段进行角色权限控制(如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段)
  rolesControl: true,
  // vertical column comprehensive common布局时是否只保持一个子菜单的展开
  uniqueOpened: false,
  // vertical column comprehensive common布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOpeneds: ["/wit/icon", "/wit/form"],
  // 需要加loading层的请求，防止重复提交
  debounce: ["doEdit"],
  // 分栏布局和综合布局时，是否点击一级菜单默认开启二级菜单(默认第一个，可通过redirect自定义)
  openFirstMenu: true,
};
```

## 🔊 主题配置

位置：src/config/theme.config.ts

```bash
/**
 * @description 导出主题配置，注意事项：此配置下的项修改后需清理浏览器缓存！！！
 */
export const themeConfig: ThemeType = {
  // vite版本仅支持分栏布局column、纵向布局vertical、横向布局horizontal
  layout: "column",
  // 主题分两种：default、technology
  themeName: "default",
  // 菜单宽度，仅支持px，建议大小：266px、277px、288px，其余尺寸会影响美观
  menuWidth: "266px",
  // 分栏风格：横向风格horizontal、纵向风格vertical、卡片风格card、箭头风格arrow
  columnStyle: "card",
  //颜色
  color: "#4e88f3",
  //是否固定头部固定
  fixedHeader: true,
  //是否开启顶部进度条
  showProgressBar: true,
  //是否开启标签页
  showTabs: true,
  //显示标签页时标签页样式：卡片风格card、灵动风格smart、圆滑风格smooth
  tabsBarStyle: "card",
  //是否显示标签页图标
  showTabsIcon: true,
  //是否开启语言选择组件
  showLanguage: true,
  //是否开启刷新组件
  showRefresh: true,
  //是否开启搜索组件
  showSearch: true,
  // 是否开启主题组件
  showTheme: true,
  //是否开启通知组件
  showNotice: true,
  //是否开启全屏组件
  showFullScreen: true,
  // 是否开启右侧悬浮窗
  showThemeSetting: true,
  //是否开启暗黑组件
  showDark: true,
  //否默认收起左侧菜单
  foldSidebar: false,
  //是否开启页面动画
  showPageTransition: true,
};
```

## 🔊 常用正则校验

说明：wit 常用的原正则校验，位置：src/utils/validate.ts

```bash
/**
 * @description 格式化时间
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
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`;
    }
    return value || 0;
  });
}

/**
 * @description 格式化时间
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
    return "刚刚";
  } else if (diff < 3600) {
    return `${Math.ceil(diff / 60)}分钟前`;
  } else if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)}小时前`;
  } else if (diff < 3600 * 24 * 2) {
    return "1天前";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return `${
      d.getMonth() + 1
    }月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分`;
  }
}

/**
 * @description 将url请求参数转为json格式
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
      .replace(/=/g, '":"')
      .replace(/\+/g, " ")}"}`
  );
}

/**
 * @description 父子关系的数组转换成树形结构数据
 * @param data
 * @returns {*}
 */
export function translateDataToTree(data: any[]) {
  const parent = data.filter(
    (value) => value.parentId === "undefined" || value.parentId === null
  );
  const children = data.filter(
    (value) => value.parentId !== "undefined" && value.parentId !== null
  );
  const translator = (parent: any[], children: any[]) => {
    parent.forEach((_parent: any) => {
      children.forEach((current: any, index: number) => {
        if (current.parentId === _parent.id) {
          const temp = JSON.parse(JSON.stringify(children));
          temp.splice(index, 1);
          translator([current], temp);
          typeof _parent.children !== "undefined"
            ? _parent.children.push(current)
            : (_parent.children = [current]);
        }
      });
    });
  };
  translator(parent, children);
  return parent;
}

/**
 * @description 树形结构数据转换成父子关系的数组
 * @param data
 * @returns {[]}
 */
export function translateTreeToData(data: any) {
  const result: any[] = [];
  data.forEach((item: any) => {
    const loop = (data: any) => {
      result.push({
        id: data.id,
        name: data.name,
        parentId: data.parentId,
      });
      const child = data.children;
      if (child) {
        for (let i = 0; i < child.length; i++) {
          loop(child[i]);
        }
      }
    };
    loop(item);
  });
  return result;
}

/**
 * @description 10位时间戳转换
 * @param time
 * @returns {string}
 */
export function tenBitTimestamp(time: number) {
  const date = new Date(time * 1000);
  const y = date.getFullYear();
  let m: string | number = date.getMonth() + 1;
  m = m < 10 ? `${m}` : m;
  let d: string | number = date.getDate();
  d = d < 10 ? `${d}` : d;
  let h: string | number = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute: string | number = date.getMinutes();
  let second: string | number = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${y}年${m}月${d}日 ${h}:${minute}:${second}`; //组合
}

/**
 * @description 13位时间戳转换
 * @param time
 * @returns {string}
 */
export function thirteenBitTimestamp(time: number) {
  const date = new Date(time / 1);
  const y = date.getFullYear();
  let m: string | number = date.getMonth() + 1;
  m = m < 10 ? `${m}` : m;
  let d: string | number = date.getDate();
  d = d < 10 ? `${d}` : d;
  let h: string | number = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute: string | number = date.getMinutes();
  let second: string | number = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${y}年${m}月${d}日 ${h}:${minute}:${second}`; //组合
}

/**
 * @description 获取随机id
 * @param length
 * @returns {string}
 */
export function uuid(length = 32) {
  const num = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += num.charAt(Math.floor(Math.random() * num.length));
  }
  return str;
}

/**
 * @description m到n的随机数
 * @param m
 * @param n
 * @returns {number}
 */
export function random(m: number, n: number) {
  return Math.floor(Math.random() * (m - n) + n);
}

/**
 * @description addEventListener
 * @type {function(...[*]=)}
 */
export const on = (function () {
  return function (element: any, event: any, handler: any, useCapture = false) {
    if (element && event && handler) {
      element.addEventListener(event, handler, useCapture);
    }
  };
})();

/**
 * @description removeEventListener
 * @type {function(...[*]=)}
 */
export const off = (function () {
  return function (element: any, event: any, handler: any, useCapture = false) {
    if (element && event) {
      element.removeEventListener(event, handler, useCapture);
    }
  };
})();

/**
 * @description 数组打乱
 * @param array
 * @returns {*}
 */
export function shuffle(array: any[]) {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
```

## 🔊 路由配置

路由加载实现 3 种方案：

- 前端进行拦截，路由写在 src/router/index.js 下，角色权限清晰不会随意变更时，配置 authentication: "intelligence"，rolesControl:true，参数项在 src/config/setting.config.ts 中配置
- 后端返回路由但由前端过滤权限拦截，配置 authentication: "all"，rolesControl:true，后端返回接口格式可参照 mock/controller/router.js，参数项在 src/config/setting.config.ts 中配置
- 后端返回处理好权限逻辑的路由，，配置 authentication: "all"，rolesControl:false，路由 JSON 无需再返回 guard 字段，后端返回接口格式可参照 mock/controller/router.js，参数项在 src/config/setting.config.ts 中配置

## 🔊 路由配置项

极为重要：name 与 path 的配置极为终于请仔细阅读注释，没理解之前请勿配置路由，name 首字母大写，一定要与 vue 文件 export 的 name 对应起来，name 名不可重复，用于 noKeepAlive 缓存控制（该项特别重要），path 注意根路由（第一条数据）是斜线，第一级路由必须带斜线，第二级路由开始不能带斜线，并且 path 名不可重复，框架会自动将父级与子级进行拼接，path 只能是一个单词切勿配置成/a/b/c 这种写法

```bash
{
  "name": "Demo", //首字母大写，一定要与vue文件export的name对应起来，name名不可重复，用于noKeepAlive缓存控制（该项特别重要）
  "path": "/", //注意根路由（第一条数据）是斜线，第一级路由必须带斜线，第二级路由开始不能带斜线，并且path名不可重复，框架会自动将父级与子级进行拼接，path只能是一个单词切勿配置成`/a/b/c`这种写法
  "component": "Layout", //后端路由时此项为字符串，前端路由时此项为import的function，第一级路由是为Layout，其余为层级为vue的文件路径
  "redirect":"", //重定向到子路由，格式从第一级路由开始拼接（默认可不写）
  "meta": {
    "hidden": true, //是否显示在菜单中显示隐藏路由（默认值：false）
    "levelHidden": false, //是否显示在菜单中显示隐藏一级路由（默认值：false）
    "title": "title", //菜单、面包屑、多标签页显示的名称
    "icon": "", //图标
    "isCustomSvg": false, //是否是自定义svg图标（默认值：false，如果设置true，那么需要把你的svg拷贝到icon下，然后icon字段配置上你的图标名）
    "noKeepAlive": true, //当前路由是否不缓存（默认值：false）
    "noClosable": true, //当前路由是否可关闭多标签页
    "noColumn":false, //是否隐藏分栏，仅在分栏布局中二级路由生效（默认值：false，不推荐使用）
    "badge": "New", //badge小标签（只支持子级，String类型，支持自定义）
    "tabHidden": true, //当前路由是否不显示多标签页（默认值：false，不推荐使用）
    "target": "_blank", //是否浏览新标签页打开（不适用于分栏布局左侧tab部分，不推荐使用）
    "activeMenu": "", //高亮指定菜单，要从跟路由的path开始拼接（用于隐藏页高亮）
    "dot": false, //小圆点（默认值：false）
    "dynamicNewTab": false, //动态传参路由是否新开标签页（默认值：false）
    "breadcrumbHidden": true, //面包屑是否显示（默认值：false）
    "guard": ["Admin", "..."], //当config/settings.js中rolesControl配置开启时，用于控制角色（简写）
    "guard": {
      "role": ["Admin", "..."],
      "mode": "allOf" //allOf: 数组内所有角色都拥有，返回True oneOf: 数组内拥有任一角色，返回True(等价第1种数据) except: 不拥有数组内任一角色，返回True(取反)
    },
  },
   "children": [{...},{...}],
}
```

## 🔊 组件自动导入

使用自动导入将极大减轻 import 的工作量，但一定要注意文件名必须在项目中唯一且不可重复，以下位置支持自动导入：

- 位置 1：library/components
- 位置 2：src/views/你的页面文件夹/witAutoComponents

## 🔊 设置角色和权限点

你可以在 src/store/modules/user.js 中 getUserInfo 的时候对角色(role)和权限点(permission)进行设置，
一个完整的权限判断对象

```bash
{
  "role": ["Admin", "Editor"],
  "permission ": ["read:system","write:system","delete:system"],
  "mode": "oneOf" | "allOf" | "except"
}
```

```bash
- allOf: 数组内所有角色都拥有，返回True
- oneOf: 数组内拥有任一角色，返回True(等价第1种数据)
- except: 不拥有数组内任一角色，返回True(取反)
```

v-permissions 自定义指令，如果你想简单的使用，直接输入一个字符串数组即可，默认使用 role 角色判断，oneOf 模式

```bash
v-permissions="['Admin']"
```

等价于

```bash
v-permissions="{ role: ['Admin'], mode: 'oneOf'}"
```

如果你想使用更多的功能，比如使用权限点 permission） 控制，输入完整的对象即可，以下输入皆可行

```bash
v-permissions="{ role: ['Admin'] }"
<br />
v-permissions="{ permission: ['delete:system'] }"
<br />
v-permissions="{ role: ['Admin'], permission: ['delete:system'], mode: 'allOf'}"
```

mode 模式不输入默认是 oneOf

## 🔊 页面权限

注意事项：Pro 版本的角色权限控制字段为 roles，路由会与 userInfo 接口返回的 roles 进行匹配和过滤，当路由模式为 all 模式时，你可以完全后端处理路由以及页面，那么你可以将 src/config/settings.js 中的 rolesControl 设置为 false

```bash
{
  "meta": {
    "guard": ["Admin"]
  }
}
```

也可以更细粒度的设置，根据个人需求设置

```bash
{
  "meta": {
    "guard": { "role": ["Admin", "Editor"], "mode": "allOf" }
  }
}
```

## 🔊 mock

```bash
{
  // 随机生成一个大区。
  region:"@region",
  // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
  province:"@province",
  // 随机生成一个（中国）市。
  city:"@city",
  // 随机生成一个（中国）县。
  county：:"@county",
  // 随机生成一个邮政编码（六位数字）。
  zip:"@zip",
  // 返回一个随机的布尔值。
  boolean:"@boolean",
  // 返回一个随机的自然数（大于等于 0 的整数）。
  natural:"@natural",
  // 返回一个随机的整数。
  integer:"@integer",
  // 返回一个随机的浮点数。
  float:"@float",
  // 返回一个随机字符。
  character:"@character",
  // 返回一个随机字符串。
  string:"@string",
  // 返回一个整型数组。
  range:"@range",
  // 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
  color:"@color",
  // #DAC0DE
  hex:"@hex",
  // rgb(128,255,255)
  rgb:"@rgb",
  // rgba(128,255,255,0.3)
  rgba:"@rgba",
  // hsl(300,80%,90%)
  hsl:"@hsl",
  // 随机生成一个有吸引力的颜色。
  _goldenRatioColor:"@_goldenRatioColor",
  // 日期占位符集合。
  _patternLetters:"@_patternLetters",
  // 日期占位符正则。
  _rformat:"@_rformat",
  // 格式化日期。
  _formatDate:"@_formatDate",
  // 生成一个随机的 Date 对象。
  _randomDate:"@_randomDate",
  // 返回一个随机的日期字符串。
  date:"@date",
  // 返回一个随机的时间字符串。
  time:"@time",
  // 返回一个随机的日期和时间字符串。
  datetime:"@datetime",
  // 返回当前的日期和时间字符串。
  now:"@now",
  // 常见的广告宽高
  _adSize:"@_adSize",
  // 常见的屏幕宽高
  _screenSize:"@_screenSize",
  // 常见的视频宽高
  _videoSize:"@_videoSize",
  //生成一个随机的图片地址。
  image:"@image",
  //大牌公司的颜色集合
  _brandColors:"@_brandColors",
  //  生成一段随机的 Base64 图片编码。
  dataImage:"@dataImage",
  //随机生成一个 GUID。
  guid:"@guid",
  // 随机生成一个 18 位身份证。
  id:"@id",
  // 生成一个全局的自增整数。
  increment:"@increment",
  // 随机生成一个常见的英文名。
  first:"@first"
  // 随机生成一个常见的英文姓。
  last:"@last",
  // 随机生成一个常见的英文姓名。
  name:"@name",
  // 随机生成一个常见的中文姓。
  cfirst:"@cfirst",
  // 随机生成一个常见的中文名。
  clast:"@clast",
  // 随机生成一个常见的中文姓名。
  cname:"@cname",
  // 随机生成一段文本。
  paragraph:"@paragraph",
  // 随机生成一个句子，第一个单词的首字母大写。
  sentence:"@sentence",
  // 随机生成一个中文句子。
  csentence:"@csentence",
  // 随机生成一个单词。
  word:"@word",
  // 随机生成一个或多个汉字。
  cword:"@cword",
  // 随机生成一句标题，其中每个单词的首字母大写。
  title:"@title",
  // 随机生成一句中文标题。
  ctitle:"@ctitle",
  //  随机生成一个 URL。
  url:"@url",
  // 随机生成一个 URL 协议。
  protocol:"@protocol",
  // 随机生成一个域名。
  domain:"@domain",
   //  随机生成一个顶级域名。
  tld:"@tld",
  // 随机生成一个邮件地址。
  email:"@email",
  // 随机生成一个 IP 地址。
  ip:"@ip",
}
```

## 🔊 样式 scoped

强烈建议使用 scoped ，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

```bash
#通过深度选择器自定义子组件样式

<style lang="scss" scoped>
:deep(*) {
      .el-menu--collapse {
        border-right: 0 !important;

        .el-submenu__icon-arrow {
          right: 10px;
          margin-top: -3px;
        }

        .el-submenu__title {
          span {
            display: none;
          }
        }
      }
    }
</style>

```

## 🔊 如何快速编写完成后端接口

- 第 1 步: 本地启动一个最原始的带 mock 的项目，退回到登录页，打开浏览器控制台，开始模拟登录，此时你可以在浏览器 network（网络）中看到/login、/userInfo、/logout 的 json 格式和参数
- 第 2 步：开始完整照着 network 编写后端接口，使用 postman 测试通过（注意 postman 支持跨域而浏览器不支持，故需要先配置好对应的后端跨域）
- 第 3 步：修改 src/config/net.config.js 里面的 baseURL 即可
- 第 4 步：如需使用进阶方案，采用后端路由，请详见【路由配置】模块

## 🔊 如何连接后端接口

- 直接连接方案（记得后端配置跨域）
  修改位置 src/config/net.config.js

```bash
/**
 * @description 导出网络配置
 **/
module.exports = {
  // 默认的接口地址，开发环境和生产环境都会走/wit-mock-server
  // 正式项目可以选择自己配置成需要的接口地址，如"https://api.xxx.com"
  // 问号后边代表开发环境，冒号后边代表生产环境
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/wit-mock-server"
      : "/wit-mock-server",
};
```

## 🔊 项目开发必要接口

本项目需要三个必要的接口，联调前务必保证这登录接口、用户信息接口、退出接口无问题，请注意 application/x-www-form-urlencoded;charset=UTF-8 与 application/json;charset=UTF-8 请求的区别，具体可在 src/config/settings.js 中配置，注意：除登录接口外其他接口连接后端后携带 token，格式如下 Authorization: Bearer admin-token-24ba1FFF-AcC8-f0AE-ECea-A1EE12d712Ae-后端在登陆时返回给你的 token 字符串

- 登录接口 /login（post 请求） application/json;charset=UTF-8 请求参数（默认格式）

```bash
{
  "username": "admin",
  "password": "123456"
}
```

返回格式：（必须严格按照此格式，不能为空这里返回的 token 会在今后所有的接口中自动通过 headers 的 Authorization 携带到后端，后端注意接收并处理跨域问题）

```bash
{
  "code": 200,
  "msg": "success",
  "data": {
    "token": "admin-accessToken-xxxxxx"
  }
}
```

用户信息接口 /userInfo（get 请求）

此接口默认会通过 headers 将 Authorization（token）传递到后端，后端根据 headers 判断用户所包含的权限，并返回相应的数据即可

- 返回格式：（必须严格按照此格式，不能为空）

[rbac 文档](https://auth0.com/docs/manage-users/access-control/sample-use-cases-role-based-access-control)

```bash
{
  "code": 200,
  "msg": "success",
  "data": {
    "username": "admin",
    "roles": ["Admin"],
    "permissions": ["read:system", "write:system", "delete:system"],
    "avatar": "https://i.gtimg.cn/club/item/face/img/2/16022_100.gif"
  }
}
```

退出接口 /logout（get 请求）

此接口默认会通过 headers 将 Authorization（token）传递到后端，后端根据 headers 判断用户所包含的权限，退出对应的账号即可

- 返回格式

```bash
{
  "code": 200,
  "msg": "success"
}
```

- 其余可配置关闭的接口，如顶部的搜索、通知接口请自行查看 mock/controller 下的示例
- 接口风格将都是 restful 的规范

## 🔊 前端请求示例

- 强烈建议：所有请求放到 src/api 文件夹下

```bash
// post请求示例
import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/table/list",
    method: "post",
    data,
  });
}
```

```bash
// get请求示例
import request from "@/utils/request";

export function getList(params) {
  return request({
    url: "/table/list",
    method: "get",
    params,
  });
}
```

## 🔊 前端请求约定

- 请求中会在 headers 中自动传入 token，格式如下 Authorization: Bearer admin-token-24ba1FFF-AcC8-f0AE-ECea-A1EE12d712Ae-后端在登陆时返回给你的 token 字符串

```bash
/*表格中请求参数约定*/
{
  "pageNum": 1, //页数
  "pageSize": 10 //每页条数
}
```

resultful 的规范，后端返回 JSON 数据的约定

```bash
{
  "code": 200, //成功的状态码
  "msg": "success", //提示信息
  "data": { //返回数据
      "list": [{}，{}，{}], //返回数组
      "total": 238, //总条数（表格中用到，其它接口可以不返回）
  }
}
```

## 🔊 后端返回 code 的约定

- 常用的 code：200-正常 500-错误提示用 401-回到登录页用 402-刷新 token 用

```bash
  200: '服务器成功返回请求数据', //常用
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队(异步任务)',
  204: '删除数据成功',
  400: '发出信息有误',
  401: '用户没有权限(令牌失效、用户名、密码错误、登录过期)', //常用
  402: '令牌过期', //常用
  403: '用户得到授权，但是访问是被禁止的',
  404: '访问资源不存在',
  406: '请求格式不可得',
  410: '请求资源被永久删除，且不会被看到',
  500: '服务器发生错误', //常用
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
```

## 🔊 tsconfig.json 详解

```bash
"incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
"tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
"diagnostics": true, // 打印诊断信息
"target": "ES5", // 目标语言的版本
"module": "CommonJS", // 生成代码的模板标准
                 // 默认值 target === "es3" or "es5" ?"commonjs" : "es6"
"outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，
                      // 即开启时应设置"module": "AMD",
//target 为 es6 时: ["dom", "es6", "dom.iterable", "scripthost"]
"allowJS": true, // 允许编译器编译JS，JSX文件
"checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
"outDir": "./dist", // 指定输出目录
"rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
"declaration": true, // 生成声明文件，开启后会自动生成声明文件
"declarationDir": "./file", // 指定生成声明文件存放目录
"emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
"sourceMap": true, // 生成目标文件的sourceMap文件
"inlineSourceMap": true, // 生成目标文件的inline SourceMap，//inline SourceMap会包含在生成的js文件中
"declarationMap": true, // 为声明文件生成sourceMap
"typeRoots": [], // 声明文件目录，默认时node_modules/@types
"types": [], // 加载的声明文件包
              //如果指定了某个值， 她会在 typeRoots 下找这个包，找到了就只加载这个包
"removeComments":true, // 删除注释
"noEmit": true, // 不输出文件,即编译后不会生成任何js文件
"noEmitOnError": true, // 发送错误时不输出任何文件
"noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
"importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
"downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
"strict": true, // 开启所有严格的类型检查
"alwaysStrict": true, // 在代码中注入'use strict'
"noImplicitAny": true, // 不允许隐式的any类型
"strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
"strictFunctionTypes": true, // 不允许函数参数双向协变
"strictPropertyInitialization": true, // 类的实例属性必须初始化
"strictBindCallApply": true, // 严格的bind/call/apply检查
"noImplicitThis": true, // 不允许this有隐式的any类型
"noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
"noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
"noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
"noImplicitReturns": true, //每个分支都会有返回值
"esModuleInterop": true, // 允许export=导出，由import from 导入
"allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
"moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
"baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
"paths": { // 路径映射，相对于baseUrl
    // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
   "jquery": ["node_modules/jquery/dist/jquery.min.js"]
  },
"rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，
                          //即编译后引入文件的位置可能发生变化，
                          //这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
"listEmittedFiles": true, // 打印输出文件
"listFiles": true , // 打印编译的文件(包括引用的声明文件)
"jsx":"Preserve"   //在 .tsx 中支持 JSX ：React 或 Preserve
"jsxFactory":""   //默认值 React.createElement	。  jsx 设置为 React 时使用的创建函数

"lib": [ // 编译过程中需要引入的库文件的列表
      "es5",
      "es2015",
      "es2016",
      "es2017",
      "es2018",
      "dom"
    ]
  },
  // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
  "include": [
    "src/**/*"
  ],
  // 指定一个排除列表（include的反向操作）
  "exclude": [
    "demo.ts"
  ],
  // 指定哪些文件使用该配置（属于手动一个个指定文件）
  "files": [
    "demo.ts"
  ]
```

## 🔊 提高网站加载速度

nginx 配置：vim /etc/nginx/nginx.conf

```bash
#是否启动gzip压缩,on代表启动,off代表开启
gzip  on;

#需要压缩的常见静态资源
gzip_types text/plain application/javascript   application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;

#由于nginx的压缩发生在浏览器端而微软的ie6很坑爹,会导致压缩后图片看不见所以该选
项是禁止ie6发生压缩
gzip_disable "MSIE [1-6]\.";

#如果文件大于1k就启动压缩
gzip_min_length 1k;

#以16k为单位,按照原始数据的大小以4倍的方式申请内存空间,一般此项不要修改
gzip_buffers 4 16k;

#压缩的等级,数字选择范围是1-9,数字越小压缩的速度越快,消耗cpu就越大
gzip_comp_level 2;

#引导的在/etc/nginx/conf.d目录下所有后缀为.conf的子配置文件
include /etc/nginx/conf.d/*.conf;
```

```bash
nginx -t

nginx -s reload
```

## 🔊 同道中人交流群

<table>
<thead>
<tr>
<th>QQ交流群：379224645</th>
<th>微信交流群</th>
<th>作者微信：wit-ui</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><img src="https://www.wit-ui.com/banners/qq.jpg" width="120"></td>
<td align="center"><img src="https://www.wit-ui.com/banners/wx.jpg" width="120"></td>
<td align="center"><img src="https://www.wit-ui.com/banners/wit.jpg" width="120"></td>
</tr>
</tbody>
</table>
