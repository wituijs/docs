# witRightTools 右侧工具栏组件 %{#witRightTools}%

`witRightTools` 是一个集成了多种系统工具的右侧工具栏组件，包含站点选择、搜索功能、主题设置、全屏切换等工具，支持水平/垂直布局切换，适用于管理系统的顶部或侧边工具栏。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 垂直布局的右侧工具栏 -->
    <witRightTools />
    
    <!-- 水平布局的右侧工具栏 -->
    <witRightTools :isHorizontal="true" />
  </div>
</template>

<script lang="ts" setup>
// 无需额外配置，组件会根据系统设置自动显示相应工具
</script>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witRightTools`                 | 右侧工具栏主组件，集成多种系统工具  |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `isHorizontal`                  | `Boolean`       | `false`      | 是否采用水平布局                    |

### 方法

| 方法名                          | 描述                                | 参数类型                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -               | -            | 该组件无需调用方法                  |

### 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -               | -            | 该组件不触发自定义事件            |

## 功能特性

### 工具集成
- 集成站点选择器（wit-select-site）
- 集成搜索功能（witSearchFunction）
- 集成颜色选择器（wit-color-picker）
- 集成主题切换（wit-theme）
- 集成锁屏功能（wit-lock）
- 集成全屏切换（wit-fullscreen）
- 集成通知中心（wit-notice）
- 集成即时通讯（wit-IM）
- 集成AI助手入口（witDeepseekIcon）
- 集成用户头像（wit-avatar）

### 布局适配
- 支持垂直布局（默认）
- 支持水平布局（通过isHorizontal属性配置）
- 响应式设计，适配不同屏幕尺寸
- 工具间使用分割线区分

### 条件显示
- 根据系统配置显示/隐藏工具
- 支持IM功能开关控制
- 支持AI助手功能开关控制
- 根据路由名称显示/隐藏特定工具

### 通信功能
- 组件挂载时自动初始化WebSocket连接
- 发送用户信息到WebSocket服务器
- 支持实时消息通信

## 工具显示控制

| 工具名称                | 显示控制条件                                  | 配置来源                        |
| :---------------------- | :-------------------------------------------- | :------------------------------ |
| 颜色选择器              | theme.showColorPicker === true                | settingsStore.theme             |
| 主题切换                | theme.showTheme === true && routeName !== 'SeparateLayout' | settingsStore.theme 和当前路由 |
| 锁屏功能                | theme.showLock === true                       | settingsStore.theme             |
| 全屏切换                | theme.showFullScreen === true                 | settingsStore.theme             |
| 通知中心                | theme.showNotice === true                     | settingsStore.theme             |
| 即时通讯                | isIm === true (window.g.isIm)                 | 全局配置                        |
| AI助手                  | showAi === true (系统配置开关)                 | 系统配置存储                    |

:::tip
1. 组件依赖多个子工具组件，使用前请确保已正确导入所有依赖。
2. 工具的显示状态主要由 settingsStore.theme 中的配置控制。
3. AI 助手的显示需要系统配置中 `sys_config:login_switch_sys_medication_assistant` 为 'ON'。
4. 组件挂载时会自动初始化 WebSocket 连接，用于实时通信。
5. 可以通过 `isHorizontal` 属性切换工具栏的布局方向。
:::