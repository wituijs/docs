# witBarChart 柱状图组件 %{#witBarChart}%

`witBarChart`是一个基于 ECharts 封装的 Vue 柱状图组件，支持多种自定义配置选项，提供丰富的柱状图可视化效果。组件支持单系列和多系列柱状图，可自定义颜色、样式、标签等属性，适用于各种数据展示场景。[查看组件效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs) [查看大屏效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/thqysjgpt)

## 用法实例 %{#dome}%

### 基础用法
```vue
<template>
  <div style="width: 600px; height: 400px;">
    <witBarChart :chart-data="chartData" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref({
  xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  series: [
    {
      name: '销量',
      data: [120, 200, 150, 80, 70, 110, 130]
    }
  ]
})
</script>
```

### 多系列柱状图
```vue
<template>
  <div style="width: 600px; height: 400px;">
    <witBarChart 
      :chart-data="chartData" 
      :colors="['#5470c6', '#91cc75', '#fac858']"
      :y-axis-split-line-show="true"
      :x-axis-name="'日期'"
      :y-axis-name="'销售额(万元)'"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref({
  xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  series: [
    {
      name: '产品A',
      data: [120, 200, 150, 80, 70, 110, 130]
    },
    {
      name: '产品B',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '产品C',
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
})
</script>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `chartData` | [`Object`] | `{ xAxis: [], series: [] }` | 图表数据，包含x轴数据和系列数据 |
| `height` | [`Number, String`] | `'100%'` | 图表高度 |
| `width` | [`Number, String`] | `'100%'` | 图表宽度 |
| `yAxisSplitLineShow` | [`Boolean`] | `false` | 是否显示Y轴分割线 |
| `xAxisName` | [`String`] | `''` | X轴名称 |
| `yAxisName` | [`String`] | `''` | Y轴名称 |
| `colors` | [`Array`] | `['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de']` | 柱状图颜色数组 |
| `barWidth` | [`Number`] | `null` | 柱状图宽度，不设置则自动计算 |
| `barGap` | [`String`] | `'30%'` | 同系列柱状图之间的间距 |
| `barCategoryGap` | [`String`] | `'20%'` | 不同系列柱状图之间的间距 |
| `labelShow` | [`Boolean`] | `false` | 是否显示柱状图标签 |
| `labelPosition` | [`String`] | `'top'` | 标签位置，可选值：'top'、'inside'、'left'、'right' |
| `labelFormatter` | [`Function`] | `null` | 标签格式化函数 |
| `tooltipFormatter` | [`Function`] | `null` | 提示框格式化函数 |
| `gridLeft` | [`String`] | `'3%'` | 图表距离容器左侧的距离 |
| `gridRight` | [`String`] | `'4%'` | 图表距离容器右侧的距离 |
| `gridBottom` | [`String`] | `'3%'` | 图表距离容器底部的距离 |
| `gridTop` | [`String`] | `'3%'` | 图表距离容器顶部的距离 |
| `animation` | [`Boolean`] | `true` | 是否开启动画 |
| `animationDuration` | [`Number`] | `1000` | 动画持续时间 |
| `isTooltipShow` | [`Boolean`] | `true` | 是否显示提示框 |
| `isLegendShow` | [`Boolean`] | `true` | 是否显示图例 |
| `legendPosition` | [`String`] | `'top'` | 图例位置，可选值：'top'、'bottom'、'left'、'right' |
| `xAxisLabelRotate` | [`Number`] | `0` | X轴标签旋转角度 |
| `yAxisMax` | [`Number`] | `null` | Y轴最大值 |
| `yAxisMin` | [`Number`] | `null` | Y轴最小值 |

## 功能特性

### 1. 灵活的数据配置
支持单系列和多系列柱状图，可通过`chartData`属性灵活配置X轴数据和系列数据。

### 2. 丰富的样式自定义
- 支持自定义柱状图颜色、宽度、间距
- 可配置标签显示位置和格式化
- 支持自定义坐标轴名称和样式

### 3. 交互功能
- 支持提示框显示，可自定义格式化
- 支持图例显示，可配置位置
- 支持图表动画效果

### 4. 响应式设计
图表支持自动调整大小，适应不同容器尺寸。

## 实现原理

### 1. ECharts 初始化
组件内部使用ECharts的`init`方法初始化图表实例，将DOM元素与ECharts实例关联。

### 2. 配置生成
根据组件属性生成ECharts配置项，包括：
- 坐标系配置（xAxis、yAxis）
- 系列配置（series）
- 样式配置（color、label、tooltip等）
- 布局配置（grid）

### 3. 数据监听与更新
使用Vue的响应式系统监听`chartData`等属性变化，当数据变化时，通过`setOption`方法更新图表。

### 4. 生命周期管理
在组件挂载时初始化图表，在组件卸载时销毁图表实例，避免内存泄漏。

## 样式结构

组件使用SCSS编写样式，主要包括图表容器的基础样式：

```scss
.wit-bar-chart-container {
  width: 100%;
  height: 100%;
  position: relative;
  
  .chart-dom {
    width: 100%;
    height: 100%;
  }
}
```

## 提示信息

:::tip
1. 组件默认使用ECharts的Canvas渲染模式，确保浏览器支持Canvas。
2. 当数据量较大时，建议关闭动画效果以提高性能。
3. 可通过`colors`属性自定义柱状图颜色，颜色数组长度应大于等于系列数量。
4. 标签显示位置可根据实际需求选择，数据密集时建议使用`'inside'`或不显示标签。
:::