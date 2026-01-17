# witRadarChart 雷达图组件 %{#witRadarChart}%

`witRadarChart`是一个基于 ECharts 实现的雷达图组件，用于展示多维度数据的分布和对比情况。组件采用自定义样式设计，包括虚线轴线、半透明填充区域和独特的数据标签格式，支持自定义数据、单位和高度，适用于需要直观展示多维度指标的场景。

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <witRadarChart
    :chartData="chartData"
    height="400px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '指标一', value: 85 },
  { name: '指标二', value: 70 },
  { name: '指标三', value: 90 },
  { name: '指标四', value: 65 },
  { name: '指标五', value: 80 }
])
</script>
```

### 自定义单位

```vue
<template>
  <witRadarChart
    :chartData="chartData"
    unit="分"
    height="450px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '数学', value: 92 },
  { name: '语文', value: 88 },
  { name: '英语', value: 95 },
  { name: '物理', value: 85 },
  { name: '化学', value: 89 },
  { name: '生物', value: 91 }
])
</script>
```

### 长文本处理

```vue
<template>
  <witRadarChart
    :chartData="chartData"
    height="500px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '市场占有率', value: 75 },
  { name: '客户满意度', value: 82 },
  { name: '产品质量评分', value: 88 },
  { name: '售后服务评价', value: 79 },
  { name: '品牌认知度', value: 85 },
  { name: '销售增长率', value: 68 }
])
</script>
```

## API

| 属性名        | 类型       | 默认值    | 描述                                           |
| :------------ | :--------- | :-------- | :--------------------------------------------- |
| `chartData`   | `Array`    | `[]`      | 图表数据源，包含 name 和 value 字段的对象数组   |
| `unit`        | `String`   | `'%'`     | 数据值的单位，默认显示为百分比                 |
| `height`      | `String`   | `'100%'`  | 图表高度，支持百分比或像素值                   |

## 功能特性

1. **雷达图展示**：采用环形雷达图展示多维度数据的分布情况
2. **自定义数据**：支持传入包含 name 和 value 字段的数组数据
3. **单位配置**：可自定义数据值的显示单位
4. **自适应大小**：支持窗口大小变化时自动调整图表尺寸
5. **独特样式设计**：
   - 虚线轴线和分割线
   - 半透明填充区域
   - 自定义数据标签格式
   - 长文本自动换行处理
6. **动态动画效果**：数据加载和更新时具有平滑的过渡动画

## 实现原理

1. **图表初始化**：在组件挂载后初始化 ECharts 实例，设置容器引用
2. **配置生成**：通过 getOptions 方法生成 ECharts 配置项，包括雷达图的指示器、样式和数据
3. **数据处理**：将传入的 chartData 转换为 ECharts 所需的格式
4. **标签格式化**：自定义标签格式化函数，实现值和名称的分行显示，并处理长文本换行
5. **响应式处理**：使用 ResizeObserver 监听容器大小变化，触发图表重绘
6. **样式定制**：设置独特的颜色、线条样式和填充效果，提升视觉体验

## 样式结构

组件主要采用以下样式设计：

1. **图表容器**：使用传入的 height 属性设置高度，宽度自适应父容器
2. **雷达图结构**：
   - 中心：`50%` 居中显示
   - 半径：`70%` 占容器大部分空间
   - 形状：圆形雷达图
3. **轴线和分割线**：
   - 轴线颜色：`#1354A1` 蓝色虚线
   - 分割线：多层嵌套，仅显示最内层和最外层虚线
4. **数据标签**：
   - 值：`#62FFFB` 青色，16px 字体
   - 名称：白色，14px 粗体，支持换行
5. **数据区域**：
   - 线条颜色：`#62FFFB` 青色
   - 填充区域：半透明青色 `rgba(98, 255, 251, .2)`

:::tip
1. **ECharts 依赖**：组件依赖 ECharts 库，使用前请确保已安装并导入
2. **数据字段要求**：chartData 数组中的每个对象必须包含 name 和 value 字段
3. **数据量建议**：雷达图适合展示 5-8 个维度的数据，过多维度可能导致标签重叠
4. **长文本处理**：组件会自动对超过 6 个字符的名称进行换行处理
5. **颜色配置**：当前版本使用固定颜色 `#62FFFB`，如需自定义颜色可修改组件代码
6. **性能优化**：组件使用 ResizeObserver 实现响应式，避免频繁重绘
7. **单位设置**：unit 属性会直接添加在数值后面，建议使用简短的单位符号
:::