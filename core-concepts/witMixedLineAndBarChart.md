# witMixedLineAndBarChart 混合折线柱状图 %{#witMixedLineAndBarChart}%

`witMixedLineAndBarChart` 是一个基于 ECharts 实现的混合图表组件，结合了柱状图和折线图的展示方式，支持自定义数据、辅助线显示和动态动画效果。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- 基础用法 -->
    <witMixedLineAndBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
    />
    
    <!-- 隐藏辅助线 -->
    <witMixedLineAndBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
      :y-axis-split-line-show="false"
    />
    
    <!-- 自定义数据结构 -->
    <witMixedLineAndBarChart 
      :chart-data="customChartData" 
      :type-list="customTypeList" 
      height="400px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 基础数据
const chartData = ref([
  { name: '周一', sales: 120, profit: 30 },
  { name: '周二', sales: 200, profit: 50 },
  { name: '周三', sales: 150, profit: 40 },
  { name: '周四', sales: 80, profit: 20 },
  { name: '周五', sales: 210, profit: 60 },
  { name: '周六', sales: 180, profit: 45 },
  { name: '周日', sales: 160, profit: 38 }
])

const typeList = ref([
  { name: '销售额', field: 'sales' },
  { name: '利润', field: 'profit', unit: '万元' }
])

// 自定义数据结构
const customChartData = ref([
  { name: '产品A', revenue: 350, growth: 15 },
  { name: '产品B', revenue: 280, growth: 8 },
  { name: '产品C', revenue: 420, growth: 22 },
  { name: '产品D', revenue: 190, growth: 3 }
])

const customTypeList = ref([
  { name: '营收', field: 'revenue' },
  { name: '增长率', field: 'growth', unit: '%' }
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
| `typeList`             | [`Array`]       | `[]`                       | 图表类型配置，包含名称、字段名和单位           |
| `height`               | [`String`]      | `'100%'`                   | 图表容器高度                                   |
| `yAxisSplitLineShow`   | [`Boolean`]     | `true`                     | 是否显示 Y 轴辅助线                            |

## 功能特性

- **混合图表展示**：同时展示柱状图和折线图，清晰对比不同类型数据
- **自定义数据结构**：支持灵活配置数据字段和类型
- **动态动画效果**：包含标记点呼吸动画和数据加载动画
- **响应式设计**：自适应容器大小变化
- **辅助线控制**：可选择是否显示 Y 轴辅助线
- **空数据提示**：当没有数据时显示友好提示信息

## 实现原理

1. **图表初始化**：使用 ECharts 库初始化图表实例，绑定到 DOM 元素
2. **数据处理**：将输入的 chartData 转换为 ECharts 所需的格式
3. **配置生成**：根据 props 动态生成 ECharts 配置项，包括网格、图例、坐标轴和系列数据
4. **动画效果**：实现标记点的呼吸动画效果，增强视觉体验
5. **响应式处理**：使用 ResizeObserver 监听容器大小变化，自动调整图表尺寸
6. **生命周期管理**：在组件卸载时清理定时器，避免内存泄漏

## 注意事项

:::tip
- 组件依赖 ECharts 库，使用前需确保已安装相关依赖
- chartData 数组中的每个对象必须包含 name 字段和 typeList 中定义的所有字段
- typeList 数组长度应为 2，分别对应柱状图和折线图的数据类型
- typeList 中的第二个对象可以包含 unit 字段，用于折线图数值的单位显示
- 可通过调整 height 属性控制图表的显示高度
- 当数据量较大时，建议使用分页或滚动加载优化性能
:::