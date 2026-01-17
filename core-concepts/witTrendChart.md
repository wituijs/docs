# witTrendChart 趋势图表组件 %{#witTrendChart}%

`witTrendChart`是一个基于ECharts封装的多功能趋势图表组件，支持柱状图和折线图的组合展示，采用双Y轴设计，支持自定义颜色、尺寸、格式化和交互效果，适用于各类数据趋势分析场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础柱状图 -->
    <witTrendChart 
      :chartData="barData"
      :typeList="barTypeList"
    />
    
    <!-- 柱状图+折线图组合 -->
    <witTrendChart 
      :chartData="comboData"
      :typeList="comboTypeList"
      :color="['#00E5FF', '#FF9800']"
    />
    
    <!-- 带标记线的图表 -->
    <witTrendChart 
      :chartData="barData"
      :typeList="barTypeList"
      markLineData="60"
      height="300px"
    />
    
    <!-- 自定义Y轴格式化 -->
    <witTrendChart 
      :chartData="barData"
      :typeList="barTypeList"
      formatterLeft="{value}%"
      formatterRight="{value}万元"
    />
    
    <!-- 隐藏辅助线和图例 -->
    <witTrendChart 
      :chartData="barData"
      :typeList="barTypeList"
      :yAxisSplitLineShow="false"
      :legend="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 基础柱状图数据
const barData = ref([
  { name: '1月', value: 55 },
  { name: '2月', value: 65 },
  { name: '3月', value: 75 },
  { name: '4月', value: 85 },
  { name: '5月', value: 95 }
])

// 柱状图类型配置
const barTypeList = ref([
  { type: 'bar', label: '销售数据', field: 'value' }
])

// 组合图表数据
const comboData = ref([
  { name: '1月', sales: 55, growth: 10 },
  { name: '2月', sales: 65, growth: 12 },
  { name: '3月', sales: 75, growth: 8 },
  { name: '4月', sales: 85, growth: 15 },
  { name: '5月', sales: 95, growth: 5 }
])

// 组合图表类型配置
const comboTypeList = ref([
  { type: 'bar', label: '销售额', field: 'sales' },
  { type: 'line', label: '增长率', field: 'growth' }
])
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | 图表数据数组，每个对象包含name和对应字段值     |
| `typeList`             | [`Array`]       | `[]`                       | 图表类型配置，包含type、label、field字段        |
| `color`                | [`Array`]       | `[]`                       | 图表颜色配置，按类型顺序对应                   |
| `height`               | [`String`]      | `'100%'`                   | 图表容器高度                                   |
| `max`                  | [`Number`]      | `100`                      | Y轴最大值                                       |
| `barWidth`             | [`Number`]      | `8`                        | 柱状图宽度                                     |
| `barBgColor`           | [`String`]      | `'rgba(0, 75, 177, .4)'`   | 柱状图背景色                                   |
| `formatterLeft`        | [`String`]      | `'{value}'`                | 左侧Y轴格式化字符串                            |
| `formatterRight`       | [`String`]      | `'{value}'`                | 右侧Y轴格式化字符串                            |
| `yAxisSplitLineShow`   | [`Boolean`]     | `true`                     | 是否显示Y轴辅助线                              |
| `legend`               | [`Boolean`]     | `true`                     | 是否显示图例                                   |
| `markLineData`         | [`Number`]      | `0`                        | 标记线数值                                     |

## 功能特性

- **图表类型组合**：支持柱状图和折线图的灵活组合，满足不同数据展示需求
- **双Y轴设计**：支持左右两个Y轴配置，可分别设置格式化方式
- **自定义样式**：支持自定义颜色、柱状图宽度、背景色等视觉元素
- **标记线功能**：可添加水平标记线，突出显示关键数据点
- **图例控制**：可选择是否显示图例，优化图表布局
- **辅助线配置**：可控制是否显示Y轴辅助线，提升数据可读性
- **响应式设计**：使用ResizeObserver实现图表自适应容器大小
- **动态数据更新**：支持数据实时更新，自动重新渲染图表

## 实现原理

1. **图表初始化**：使用ECharts库初始化图表实例，设置容器引用
2. **配置生成**：根据props动态生成ECharts配置项，包括系列数据、坐标轴、图例等
3. **双Y轴处理**：当存在折线图类型时，自动启用双Y轴配置
4. **柱状图增强**：为柱状图添加渐变效果和背景色，提升视觉层次感
5. **标记线功能**：根据markLineData配置添加水平标记线
6. **响应式设计**：使用ResizeObserver监听容器大小变化，自动调整图表尺寸
7. **数据监听**：监听chartData变化，自动更新图表数据

## typeList 配置说明

typeList数组中的每个对象需包含以下字段：

| 字段名                 | 类型            | 描述                                           |
| :--------------------- | :-------------- | :--------------------------------------------- |
| `type`                 | [`String`]      | 图表类型，可选值：'bar'（柱状图）、'line'（折线图） |
| `label`                | [`String`]      | 图表系列名称，用于图例显示                     |
| `field`                | [`String`]      | 对应chartData中的字段名，用于获取数据值        |

:::tip
- 组件依赖ECharts库，请确保项目中已正确安装
- chartData中每个对象必须包含name字段作为X轴标签
- typeList中至少需要配置一种图表类型
- color数组长度应与typeList长度一致，未配置时使用默认颜色
- markLineData设为0时不显示标记线
- 折线图默认使用右侧Y轴，可通过调整配置使用左侧Y轴
- 当只有柱状图时，barBgColor会自动应用为柱状图背景
:::