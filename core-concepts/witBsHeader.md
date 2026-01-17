# witBsHeader 报表头部组件 %{#witBsHeader}%

`witBsHeader`是一个复杂的报表头部组件，集成了标题显示、副标题菜单、时间显示和全屏切换功能。组件采用了现代化的UI设计，包含渐变文字效果和自定义背景图片，适用于各种报表和数据可视化页面的头部展示。

## 用法实例 %{#dome}%

### 基础用法
```vue
<template>
  <witBsHeader 
    title="药品使用监控系统"
    :has-subtitle="true"
  />
</template>
```

### 自定义样式
```vue
<template>
  <witBsHeader 
    title="重点药物监控"
    :has-subtitle="false"
    fontSize="42px"
    height="70px"
    timeRight="40px"
    timeTop="40px"
    leftFontSize="28px"
    rightTopFontSize="12px"
    rightBottomFontSize="14px"
  />
</template>
```

### 监听菜单点击事件
```vue
<template>
  <witBsHeader 
    title="阳光用药监管平台"
    :has-subtitle="true"
    @tabClick="handleTabClick"
  />
</template>

<script lang="ts" setup>
const handleTabClick = (activeIndex: number) => {
  console.log('当前激活的菜单索引:', activeIndex)
  // 根据索引切换不同的报表内容
}
</script>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `title` | [`String`] | `'xxx'` | 头部主标题文本 |
| `hasSubtitle` | [`Boolean`] | `true` | 是否显示副标题菜单 |
| `fontSize` | [`String`] | `'48px'` | 主标题字体大小 |
| `height` | [`String`] | `'80px'` | 头部高度 |
| `timeRight` | [`String`] | `'56px'` | 时间组件距离右侧的距离 |
| `timeTop` | [`String`] | `'56px'` | 时间组件距离顶部的距离 |
| `leftFontSize` | [`String`] | `'32px'` | 时间组件左侧字体大小 |
| `rightTopFontSize` | [`String`] | `'14px'` | 时间组件右上角字体大小 |
| `rightBottomFontSize` | [`String`] | `'16px'` | 时间组件右下角字体大小 |

## 事件

| 事件名 | 描述 | 参数 |
| :------ | :------ | :------ |
| `tabClick` | 副标题菜单项点击时触发 | `activeIndex: number` - 当前激活的菜单索引 |

## 功能特性

### 1. 主标题显示
- 支持自定义标题文本
- 采用渐变文字效果，增强视觉冲击力
- 可配置字体大小，适应不同页面需求

### 2. 副标题菜单
- 可配置是否显示副标题菜单
- 支持多个菜单项，采用特殊的重叠布局设计
- 菜单项点击时触发事件，支持页面内容切换
- 支持激活状态高亮显示

### 3. 时间显示
- 集成witTime组件，显示当前时间
- 可配置时间组件的位置和字体大小
- 时间格式美观，包含日期和具体时间

### 4. 全屏切换
- 集成witBsFullScreen组件，提供全屏切换功能
- 全屏按钮位于右上角，方便用户操作

### 5. 响应式设计
- 组件各部分位置可通过属性配置
- 支持不同屏幕尺寸的自适应显示

## 实现原理

### 1. 布局结构
组件采用绝对定位和相对定位相结合的布局方式：
- 主标题居中显示，使用背景图片增强视觉效果
- 副标题菜单使用特殊的重叠布局，通过margin-left负值实现
- 时间组件和全屏按钮绝对定位在右上角

### 2. 视觉效果
- 主标题使用渐变文字效果，通过`-webkit-background-clip: text`实现
- 菜单项使用背景图片，支持普通状态和激活状态的切换
- 菜单项采用水平翻转(scaleX(-1))实现特殊的视觉效果

### 3. 组件集成
组件内部集成了两个子组件：
- `witTime`：用于显示当前时间
- `witBsFullScreen`：用于实现全屏切换功能

### 4. 状态管理
- 使用`activeIndex`变量管理当前激活的菜单项
- 点击菜单项时更新`activeIndex`并触发`tabClick`事件

## 样式结构

```scss
.witBsHeader {
  position: relative;
}

.witBsHeader_centre {
  width: 1907px;
  height: 118.5px;
  text-align: center;
  cursor: pointer;
  background: url('/@/assets/proCodeReportViewer/tbzhong.png') no-repeat center center;
  background-size: cover;
  span {
    height: 118.5px;
    font-size: 38px;
    font-weight: 400;
    line-height: 75px;
    color: #ffffff;
    background: linear-gradient(180deg, #ffffff 43.115234375%, #67cfff 99.0478515625%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.menu {
  position: absolute;
  top: 20px;
  left: 0;
  pointer-events: none;
  .menu_ul {
    .menu_ul_li {
      width: 280px;
      height: 50px;
      list-style: none;
      pointer-events: auto;
      cursor: pointer;
      background: url('/@/assets/proCodeReportViewer/menu.png') no-repeat center center;
      background-size: cover;
      transform: scaleX(-1);
      .menu_ul_li_span {
        display: block;
        font-family: pfct;
        font-size: 16px;
        line-height: 35px;
        color: #fff;
        text-align: center;
        transform: scaleX(-1);
      }
    }
    .menu_ul_li.active {
      background: url('/@/assets/proCodeReportViewer/menu_h.png') no-repeat center center;
      background-size: cover;
    }
    // 其他菜单样式...
  }
}

.time {
  position: absolute;
  top: 30px;
  right: 56px;
}

.fullScreen {
  position: absolute;
  top: 25px;
  right: 10px;
}
```

## 提示信息

:::tip
1. 组件依赖于`witTime`和`witBsFullScreen`子组件，请确保项目中已正确引入这些依赖。
2. 组件使用了多张背景图片（如tbzhong.png、menu.png、menu_h.png），请确保这些图片资源已正确放置在项目的assets目录下。
3. 主标题文字使用了渐变效果，需要浏览器支持`-webkit-background-clip: text`属性。
4. 副标题菜单目前处于注释状态，如需使用，请取消注释相关代码并根据实际需求调整菜单项内容。
5. 菜单项采用了特殊的重叠布局设计，通过调整margin-left负值实现，如需修改菜单数量或样式，可能需要重新计算这些值。
6. 组件中的时间显示格式由`witTime`组件控制，可通过传入的字体大小属性进行调整。
7. 全屏功能由`witBsFullScreen`组件提供，需要浏览器支持Fullscreen API。
:::