# witBsFullScreen 全屏切换组件 %{#witBsFullScreen}%

`witBsFullScreen`是一个简单的全屏切换组件，提供全屏和退出全屏功能，通过图标直观地显示当前状态。组件内部使用了全屏相关的hook，实现了浏览器全屏API的封装。

## 用法实例 %{#dome}%

### 基础用法
```vue
<template>
  <div>
    <witBsFullScreen />
  </div>
</template>
```

### 自定义容器
```vue
<template>
  <div class="custom-container">
    <h2>示例内容</h2>
    <p>这是一个包含全屏切换功能的页面</p>
    <div class="fullscreen-button">
      <witBsFullScreen />
    </div>
  </div>
</template>

<style scoped>
.custom-container {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.fullscreen-button {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
```

## API

该组件没有提供自定义属性，使用简单直观。

## 功能特性

### 1. 全屏切换功能
组件提供一键全屏和退出全屏功能，点击图标即可切换状态。

### 2. 状态指示
- 全屏状态：显示缩小图标（icon-suoxiao3），鼠标悬停显示"退出全屏"提示
- 非全屏状态：显示全屏图标（icon-quanping-4），鼠标悬停显示"全屏"提示

### 3. 简洁的UI设计
- 白色图标，大小为40px
- 无多余装饰，专注于功能实现
- 响应式设计，适应不同屏幕尺寸

## 实现原理

### 1. 全屏API封装
组件内部使用`useFullscreen` hook封装了浏览器的全屏API，包括：
- `requestFullscreen`：请求全屏
- `exitFullscreen`：退出全屏
- `fullscreenchange`：监听全屏状态变化

### 2. 状态管理
通过`isFullscreen`变量管理当前全屏状态，根据状态动态切换图标和提示文字。

### 3. 事件处理
点击图标时调用`toggle`方法，实现全屏状态的切换。

## 样式结构

```scss
.witBsFullScreen {
  font-size: 40px;
  color: #fff;
}
```

组件使用简单的CSS样式，设置了图标大小为40px，颜色为白色，确保在深色背景下有良好的可见性。

## 提示信息

:::tip
1. 组件依赖于`useFullscreen` hook和`wit-icon`组件，请确保项目中已正确引入这些依赖。
2. 全屏功能需要浏览器支持Fullscreen API，主流现代浏览器（Chrome、Firefox、Safari、Edge）均支持该API。
3. 由于浏览器安全策略限制，全屏请求必须由用户交互（如点击）触发，否则可能会失败。
4. 组件图标使用了自定义图标库，图标名称为`icon-quanping-4`（全屏）和`icon-suoxiao3`（退出全屏），请确保项目中已正确配置这些图标。
5. 可以通过包裹组件的容器来自定义组件的位置和样式，组件本身只提供核心功能和基础样式。
:::