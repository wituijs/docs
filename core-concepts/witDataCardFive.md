# witDataCardFive 数据卡片（第五版）%{#witDataCardFive}%

`witDataCardFive`是一个功能丰富的数据卡片组件，支持环形图和图片两种展示模式，用于展示关键数据指标。组件采用现代感的边框设计和渐变文字效果，适用于各种大屏数据展示场景。

## 用法实列 %{#dome}%

### 环形图模式

```vue
<template>
  <div>
    <witDataCardFive
      type="1"
      :rate="78.5"
      title1="总体完成率"
      title2="同比增长12%"
      color="#5BFFF5"
    />
  </div>
</template>

<script lang="ts" setup>
// 无需导入默认资源，组件已内置
</script>
```

### 图片模式

```vue
<template>
  <div>
    <witDataCardFive
      type="2"
      :rate="92.3"
      title1="满意度评分"
      leftImg="/@/assets/custom-image.png"
    />
  </div>
</template>

<script lang="ts" setup>
// 导入自定义图片
import customImage from '/@/assets/custom-image.png'
</script>
```

### 自定义样式

```vue
<template>
  <div>
    <witDataCardFive
      type="1"
      :rate="65.8"
      title1="市场占有率"
      color="#FF5B5B"
      fontSize1="32px"
      fontSize2="18px"
      width="320px"
      height="120px"
    />
  </div>
</template>

<script lang="ts" setup>
// 自定义颜色、字体大小和卡片尺寸
</script>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `rate` | [`Number`] | `0` | 显示的数值 |
| `title1` | [`String`] | `'默认'` | 主标题 |
| `title2` | [`String`] | `''` | 副标题 |
| `color` | [`String`] | `'#5BFFF5'` | 环形图颜色和副标题颜色 |
| `fontSize1` | [`String`] | `'26px'` | 数值字体大小 |
| `fontSize2` | [`String`] | `'16px'` | 单位和标题字体大小 |
| `pieWidth` | [`String`] | `'70px'` | 环形图宽度 |
| `pieHeight` | [`String`] | `'70px'` | 环形图高度 |
| `width` | [`String`] | `'280px'` | 卡片总宽度 |
| `height` | [`String`] | `'90px'` | 卡片总高度 |
| `croppingWidth` | [`String`] | `'120px'` | 文字区域宽度 |
| `leftImg` | [`String`] | 内置树叶图标 | 左侧显示的图片路径 |
| `type` | [`String`] | `'1'` | 展示类型：'1'为环形图，'2'为图片 |
| `unit` | [`String`] | `'%'` | 数值单位 |

## 功能特性

- **双模式展示**：支持环形图和图片两种展示方式，适应不同的数据可视化需求
- **环形图效果**：基于 ECharts 实现的环形图，支持自定义颜色和尺寸
- **图片展示**：支持自定义左侧显示的图片，增强视觉表达
- **渐变文字**：数值采用渐变文字效果，提升视觉吸引力
- **灵活配置**：支持自定义颜色、字体大小、卡片尺寸等多种样式
- **响应式设计**：环形图支持容器大小变化的响应式调整
- **现代边框**：采用带有装饰角的边框设计，增强视觉层次感

## 实现原理

1. **双模式切换**：通过 `type` 属性控制显示环形图或图片，实现灵活的数据展示方式
2. **环形图实现**：基于 ECharts 实现环形图，通过多系列配置实现复杂的环形效果
3. **渐变文字**：使用 CSS 的 `background-clip: text` 属性实现数值的渐变文字效果
4. **动态调整**：使用 ResizeObserver 监听容器大小变化，实现环形图的响应式调整
5. **样式绑定**：通过 Vue 的样式绑定实现动态的尺寸和颜色调整
6. **生命周期管理**：在组件挂载和属性变化时正确初始化和更新 ECharts 实例

:::tip

- 组件默认使用环形图模式（type='1'），可通过 type 属性切换为图片模式
- 环形图颜色可通过 color 属性自定义，该颜色同时会应用于副标题
- 组件支持自定义字体大小、卡片尺寸等多种样式参数，可根据需求灵活配置
- 在图片模式下，可通过 leftImg 属性自定义左侧显示的图片
- 组件依赖 ECharts 库实现环形图效果，确保项目已正确安装 ECharts
- 环形图会自动响应容器大小变化，保持良好的显示效果
- 标题文字支持换行显示，可根据内容自动调整
:::