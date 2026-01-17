# witHorizontalBarChart 水平条形图 %{#witHorizontalBarChart}%

`witHorizontalBarChart`是一个基于CSS实现的水平条形图组件，支持无缝滚动、排序显示和动态进度动画效果。组件采用现代感的设计风格，包含涟漪效果和渐变进度条，适用于大屏数据展示场景。

## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <div>
    <witHorizontalBarChart
      :chartData="chartData"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '产品A', value: 12345 },
  { name: '产品B', value: 9876 },
  { name: '产品C', value: 7654 },
  { name: '产品D', value: 5432 },
  { name: '产品E', value: 3210 }
])
</script>
```

### 排序显示

```vue
<template>
  <div>
    <witHorizontalBarChart
      :chartData="chartData"
      sort
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '产品A', value: 12345 },
  { name: '产品B', value: 9876 },
  { name: '产品C', value: 7654 }
])
</script>
```

### 自定义数据

```vue
<template>
  <div>
    <witHorizontalBarChart
      :chartData="salesData"
      sort
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const salesData = ref([
  { name: '华东地区', value: 125800 },
  { name: '华南地区', value: 98750 },
  { name: '华北地区', value: 76540 },
  { name: '华中地区', value: 54320 },
  { name: '西南地区', value: 32100 },
  { name: '西北地区', value: 23450 },
  { name: '东北地区', value: 18900 }
])
</script>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `chartData` | [`Array`] | `[]` | 图表数据，格式：[{ name: '名称', value: 数值 }, ...] |
| `sort` | [`Boolean`] | `false` | 是否显示排序序号 |

## 功能特性

- **水平条形图展示**：采用水平布局的条形图，直观展示数据对比
- **无缝滚动**：集成witSeamlessScroll组件，支持数据自动向上滚动
- **排序功能**：可选择显示排序序号，增强数据可读性
- **动态进度条**：条形图宽度根据数值比例动态计算
- **涟漪动画效果**：进度条末端有动态的涟漪扩散效果
- **交替颜色**：偶数项进度条使用不同颜色，增强视觉区分
- **千分位格式化**：数值自动添加千分位分隔符
- **空数据处理**：当数据为空时显示"暂无数据"提示
- **响应式设计**：适应不同容器尺寸的显示需求

## 实现原理

1. **组件结构**：使用witSeamlessScroll实现数据滚动，内部通过v-for渲染多个水平条形图项
2. **进度计算**：根据数据中的最大值动态计算每个条形图的宽度百分比
3. **动画效果**：通过CSS3的transform和animation属性实现涟漪扩散效果
4. **排序实现**：通过v-if条件渲染显示序号，根据数组索引计算排名
5. **数值格式化**：使用$wit.addThousandSeparator方法格式化数值为千分位格式
6. **交替样式**：使用:nth-child(even)选择器为偶数项设置不同的进度条颜色
7. **空数据处理**：使用v-if/v-else条件渲染处理空数据场景

:::tip
- 组件依赖witSeamlessScroll组件实现滚动效果，请确保项目中已正确引入
- 数据项的value属性应为数值类型，组件会自动计算最大值并按比例显示
- 排序功能会在每个数据项前显示序号，0-9的序号会自动补零
- 组件内部使用$wit.addThousandSeparator方法格式化数值，确保项目中存在该方法
- 进度条的涟漪效果使用CSS3动画实现，在现代浏览器中效果最佳
- 当数据量较大时，无缝滚动功能可以展示更多数据内容
- 组件高度由数据量决定，建议在父容器中设置合适的高度和overflow属性
:::