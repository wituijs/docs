# witProgressChart 环形进度条组件 %{#witProgressChart}%

`witProgressChart`是一个基于 ECharts 实现的环形进度条组件，支持自定义百分比、颜色、背景色和尺寸，提供文本和图片两种中心显示模式，适用于需要直观展示进度或比例的场景。

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <witProgressChart
    :precent="65"
    height="200px"
    width="200px"
  />
</template>

<script lang="ts" setup>
// 组件会自动导入
</script>
```

### 自定义颜色配置

```vue
<template>
  <witProgressChart
    :precent="85"
    color="#52C41A"
    bgColor="rgba(82, 196, 26, .3)"
    height="250px"
    width="250px"
  />
</template>

<script lang="ts" setup>
// 组件会自动导入
</script>
```

### 隐藏文本显示图片

```vue
<template>
  <witProgressChart
    :precent="45"
    :showTitle="false"
    pic="/path/to/your/image.png"
    height="180px"
    width="180px"
  />
</template>

<script lang="ts" setup>
// 组件会自动导入
</script>
```

### 自定义字体大小

```vue
<template>
  <witProgressChart
    :precent="75"
    fontSize="36px"
    height="300px"
    width="300px"
  />
</template>

<script lang="ts" setup>
// 组件会自动导入
</script>
```

## API

| 属性名        | 类型            | 默认值                               | 描述                                           |
| :------------ | :-------------- | :----------------------------------- | :--------------------------------------------- |
| `precent`     | `Number/String` | `0`                                  | 进度百分比值，支持数字或字符串类型             |
| `color`       | `String`        | `'#2269FF'`                          | 进度条颜色                                     |
| `bgColor`     | `String`        | `'rgba(19, 84, 161, .3)'`            | 进度条背景颜色                                 |
| `height`      | `String`        | `'100%'`                             | 组件高度，支持百分比或像素值                   |
| `width`       | `String`        | `'100%'`                             | 组件宽度，支持百分比或像素值                   |
| `showTitle`   | `Boolean`       | `true`                               | 是否显示中心百分比文本，false 时显示图片       |
| `pic`         | `String`        | 默认图片路径                         | 中心显示的图片路径                             |
| `fontSize`    | `String`        | `'24px'`                             | 百分比文本的字体大小                           |

## 功能特性

1. **环形进度展示**：采用环形进度条直观展示百分比
2. **双模式中心显示**：支持文本显示和图片显示两种模式
3. **自定义样式**：可自定义进度条颜色、背景色、尺寸和字体大小
4. **响应式设计**：支持容器大小变化时自动调整图表尺寸
5. **平滑动画**：进度变化时具有平滑的过渡动画效果
6. **默认图片支持**：提供默认的中心显示图片

## 实现原理

1. **图表初始化**：在组件挂载后初始化 ECharts 实例，设置容器引用
2. **配置生成**：通过 getOptions 方法生成 ECharts 配置项，包括环形图的内外半径、颜色和数据
3. **数据绑定**：监听 precent 属性变化，动态更新图表数据
4. **响应式处理**：使用 ResizeObserver 监听容器大小变化，触发图表重绘
5. **条件渲染**：根据 showTitle 属性决定中心显示文本还是图片
6. **动态样式**：通过 v-bind 动态绑定字体大小等样式属性

## 样式结构

组件采用 flex 布局，主要包含以下部分：

1. **图表容器**：`.chart-wrap` 类，包含 ECharts 图表和中心显示内容
2. **ECharts 区域**：`.flex-all` 类，占满剩余空间，用于渲染环形进度图
3. **文本显示**：`.value-text` 类，绝对定位在中心，显示百分比文本
4. **图片显示**：`.img` 类，绝对定位在中心，显示自定义图片
5. **字体样式**：使用 `pangmenzhengdao` 类定义字体，区分主文本和百分号

:::tip
1. **ECharts 依赖**：组件依赖 ECharts 库，使用前请确保已安装并导入
2. **百分比范围**：precent 属性支持 0-100 的数值范围
3. **图片路径**：pic 属性支持相对路径和绝对路径，未设置时使用默认图片
4. **尺寸调整**：height 和 width 属性支持百分比或像素值，建议同时设置以保持正方形比例
5. **字体大小**：fontSize 属性仅影响主百分比数字，百分号会自动调整为较小字号
6. **颜色格式**：color 和 bgColor 属性支持颜色名称、十六进制、RGB 和 RGBA 格式
7. **性能优化**：组件使用 ResizeObserver 实现响应式，避免频繁重绘
:::