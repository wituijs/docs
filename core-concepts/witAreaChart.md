# witAreaChart 面积图 %{#witAreaChart}%

`witAreaChart`是一个基于 ECharts 封装的面积图组件，用于展示带有面积填充的折线图数据可视化，支持多种自定义配置选项，如坐标轴名称、图例显示、辅助线、数值标签等。[查看组件效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs) [查看大屏效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/thqysjgpt)

## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <witAreaChart
    :chart-data="chartData"
    :type-list="typeList"
    height="400px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { witAreaChart } from '@wit-ui/components'

// 示例数据
const chartData = ref([
  { name: '一月', value1: 120, value2: 200 },
  { name: '二月', value1: 132, value2: 182 },
  { name: '三月', value1: 101, value2: 234 },
  { name: '四月', value1: 134, value2: 390 },
  { name: '五月', value1: 90, value2: 330 },
  { name: '六月', value1: 230, value2: 410 }
])

const typeList = ref([
  { name: '指标一', field: 'value1', color: '#5470c6' },
  { name: '指标二', field: 'value2', color: '#91cc75' }
])
</script>
```

### 自定义配置

```vue
<template>
  <witAreaChart
    :chart-data="chartData"
    :type-list="typeList"
    height="400px"
    :legend="true"
    :formatter="'¥{value}'"
    :x-name="'月份'"
    :y-name="'销售额'"
    :y-axis-split-line-show="true"
    :series-label-show="false"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { witAreaChart } from '@wit-ui/components'

// 示例数据
const chartData = ref([
  { name: '一月', value1: 120, value2: 200 },
  { name: '二月', value1: 132, value2: 182 },
  { name: '三月', value1: 101, value2: 234 },
  { name: '四月', value1: 134, value2: 390 },
  { name: '五月', value1: 90, value2: 330 },
  { name: '六月', value1: 230, value2: 410 }
])

const typeList = ref([
  { 
    name: '指标一', 
    field: 'value1', 
    color: '#5470c6',
    dotColor: '#89cff0',
    labelColor: '#ffffff'
  },
  { 
    name: '指标二', 
    field: 'value2', 
    color: '#91cc75',
    dotColor: '#98fb98',
    labelColor: '#ffffff'
  }
])
</script>
```

## API

### 组件

| 属性名                 | 类型    | 默认值                     | 描述                                           |
| :--------------------- | :------ | :------------------------- | :--------------------------------------------- |
| `chartData`            | Array   | `[]`                       | 图表数据，格式：`[{ name: '名称', field1: 值1, field2: 值2 }]` |
| `typeList`             | Array   | `[]`                       | 类型列表，格式：`[{ name: '类型名称', field: '字段名', color: '颜色值', dotColor: '点颜色', labelColor: '标签颜色' }]` |
| `width`                | String  | `'100%'`                   | 图表宽度                                       |
| `height`               | String  | `'100%'`                   | 图表高度                                       |
| `legend`               | Boolean | `true`                     | 是否显示图例                                   |
| `formatter`            | String  | `'{value}'`                | y轴数值格式化                                   |
| `xName`                | String  | `''`                       | x轴名称                                        |
| `yName`                | String  | `''`                       | y轴名称                                        |
| `yAxisSplitLineShow`   | Boolean | `true`                     | 是否显示y轴辅助线                              |
| `seriesLabelShow`      | Boolean | `true`                     | 是否显示折线图折点上方数值                     |

### 插槽

暂无插槽

### 事件

暂无事件

## 功能特性 %{#feature}%

1. **面积图数据可视化**：展示带面积填充的折线图，直观呈现数据趋势
2. **动态数据更新**：支持图表数据实时更新，自动重新渲染
3. **灵活的配置选项**：可配置图例、坐标轴、辅助线、数值标签等多种元素
4. **自定义样式**：支持自定义颜色、点样式、标签样式等
5. **响应式设计**：使用ResizeObserver监听容器大小变化，自动调整图表尺寸
6. **数值格式化**：支持y轴数值自定义格式化
7. **轴名称支持**：可配置x轴和y轴的名称

## 实现原理 %{#principle}%

`witAreaChart`组件基于ECharts库实现，主要包含以下部分：

1. **ECharts初始化**：在组件挂载后初始化ECharts实例
2. **配置选项生成**：根据props生成ECharts配置选项，包括网格、图例、坐标轴、系列数据等
3. **数据监听**：监听`chartData`变化，自动更新图表配置和数据
4. **响应式处理**：使用ResizeObserver监听容器大小变化，调用`resize`方法调整图表尺寸
5. **图表样式定制**：支持通过props自定义各种图表样式，如颜色、字体、线条样式等

组件的核心逻辑是根据输入的`chartData`和`typeList`动态生成ECharts配置，实现数据的可视化展示。

## 样式结构 %{#style}%

```scss
.chart-wrap {
  width: 100%;
}
```

组件的样式结构简洁，主要是一个`chart-wrap`容器，用于承载ECharts实例。容器的宽度默认设置为100%，高度可通过props配置。

## 提示信息 %{#tips}%

:::tip
1. 组件依赖ECharts库，使用前请确保已正确安装和引入
2. `chartData`和`typeList`是组件的核心配置，需按照指定格式提供数据
3. `typeList`中的`field`属性需要与`chartData`中的字段名对应
4. 支持通过`dotColor`和`labelColor`自定义点颜色和标签颜色，若不提供则使用`color`属性
5. 当`seriesLabelShow`为`false`时，鼠标悬停在折点上会显示数值标签
6. 图表默认使用深色主题，文本颜色为白色，适合深色背景使用
:::