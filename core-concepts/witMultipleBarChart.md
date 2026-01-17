# witMultipleBarChart 多系列柱状图 %{#witMultipleBarChart}%

`witMultipleBarChart` 是一个基于 ECharts 实现的多系列柱状图组件，支持自定义数据、颜色、样式和交互效果，可用于展示多组数据的对比分析。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- 基础用法 -->
    <witMultipleBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
    />
    
    <!-- 隐藏图例和辅助线 -->
    <witMultipleBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
      :legend="false"
      :y-axis-split-line-show="false"
    />
    
    <!-- 自定义样式 -->
    <witMultipleBarChart 
      :chart-data="chartData" 
      :type-list="customTypeList" 
      height="400px"
      :bar-width="10"
      :series-show="true"
      :axis-color="#FF6B6B"
    />
    
    <!-- 显示背景柱 -->
    <witMultipleBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
      :show-background="true"
      :background-color="rgba(255, 107, 107, 0.2)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 基础数据
const chartData = ref([
  { name: '产品A', sales: 120, profit: 30, growth: 15 },
  { name: '产品B', sales: 200, profit: 50, growth: 8 },
  { name: '产品C', sales: 150, profit: 40, growth: 22 },
  { name: '产品D', sales: 80, profit: 20, growth: 3 }
])

const typeList = ref([
  { name: '销售额', field: 'sales', color: '#00B5FF' },
  { name: '利润', field: 'profit', color: '#52C41A' },
  { name: '增长率', field: 'growth', color: '#FFC107' }
])

// 自定义颜色配置
const customTypeList = ref([
  { 
    name: '销售额', 
    field: 'sales', 
    color: '#FF6B6B', 
    color1: '#FF8787',
    topColor: '#FF4757'
  },
  { 
    name: '利润', 
    field: 'profit', 
    color: '#4ECDC4', 
    color1: '#88D8B0',
    topColor: '#26A69A'
  },
  { 
    name: '增长率', 
    field: 'growth', 
    color: '#FFD166', 
    color1: '#FFEAA7',
    topColor: '#FFC107'
  }
])
</script>

<style>
.chart-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | 图表数据数组，每个对象包含名称和对应的数据字段   |
| `typeList`             | [`Array`]       | `[]`                       | 图表类型配置，包含名称、字段名、颜色等配置       |
| `height`               | [`String`]      | `'100%'`                   | 图表容器高度                                   |
| `legend`               | [`Boolean`]     | `true`                     | 是否显示图例                                   |
| `max`                  | [`Number`]      | `100`                      | 图表最大值，用于背景柱显示                     |
| `barWidth`             | [`Number`]      | `8`                        | 柱子宽度                                       |
| `formatter`            | [`String`]      | `'{value}'`                | Y轴格式化字符串                                 |
| `yAxisSplitLineShow`   | [`Boolean`]     | `true`                     | 是否显示Y轴辅助线                               |
| `seriesShow`           | [`Boolean`]     | `true`                     | 是否显示柱子顶部数字                             |
| `yAxisShow`            | [`Boolean`]     | `false`                    | 是否显示Y轴线                                   |
| `axisColor`            | [`String`]      | `'#41ABFF'`                | YX轴线颜色                                     |
| `showBackground`       | [`Boolean`]     | `true`                     | 是否显示带背景色的柱                             |
| `backgroundColor`      | [`String`]      | `'rgba(0, 174, 255, .1)'`  | 带背景色的柱的颜色                              |
| `markPointShow`        | [`Boolean`]     | `true`                     | 是否显示柱子顶部方块                             |
| `fontSize`             | [`Number`]      | `12`                       | XY轴字体大小                                    |

## 功能特性

- **多系列数据展示**：支持同时展示多个数据系列，便于对比分析
- **自定义颜色配置**：支持为每个数据系列配置不同的颜色和渐变效果
- **灵活的样式控制**：可自定义柱子宽度、字体大小、轴线颜色等样式
- **交互效果**：支持鼠标悬停显示数值、点击图例切换系列显示
- **背景柱支持**：可显示带背景色的柱子，增强数据可视化效果
- **响应式设计**：自适应容器大小变化，保持良好的显示效果
- **丰富的配置选项**：支持控制图例、辅助线、顶部数字等元素的显示

## 实现原理

1. **图表初始化**：使用 ECharts 库初始化图表实例，绑定到 DOM 元素
2. **数据处理**：将输入的 chartData 和 typeList 转换为 ECharts 所需的格式
3. **配置生成**：根据 props 动态生成 ECharts 配置项，包括网格、图例、坐标轴和系列数据
4. **样式定制**：支持自定义颜色、渐变、背景等样式属性
5. **交互配置**：设置鼠标悬停、点击等交互效果
6. **响应式处理**：使用 ResizeObserver 监听容器大小变化，自动调整图表尺寸

## 注意事项

:::tip
- 组件依赖 ECharts 库，使用前需确保已安装相关依赖
- chartData 数组中的每个对象必须包含 name 字段和 typeList 中定义的所有字段
- typeList 中的每个对象应包含 name、field 和 color 字段，可选择性包含 color1、topColor 等字段
- 可通过调整 barWidth 属性控制柱子宽度，建议根据数据系列数量进行调整
- seriesShow 属性控制是否显示柱子顶部数字，当数据较多时建议关闭以避免重叠
- showBackground 属性控制是否显示背景柱，可增强数据的视觉层次感
- 当需要展示大量数据时，建议使用分页或滚动加载优化性能
:::