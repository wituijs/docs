# witHorizontalPercentage 水平百分比图表 %{#witHorizontalPercentage}%

`witHorizontalPercentage` 是一个基于 Vue 3 和 TypeScript 开发的水平百分比图表组件，具有以下特点：
- 支持水平条形图形式展示百分比数据
- 集成无缝滚动功能，适用于大量数据展示
- 提供排序编号功能，增强数据可读性
- 具有动感的波纹动画效果，提升视觉体验
- 支持偶数行不同颜色样式，增强数据区分度

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <div style="width: 300px; height: 200px;">
    <witHorizontalPercentage
      :chart-data="chartData"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '项目A', value: '85%' },
  { name: '项目B', value: '72%' },
  { name: '项目C', value: '93%' },
  { name: '项目D', value: '68%' },
  { name: '项目E', value: '79%' }
])
</script>
```

### 带排序功能

```vue
<template>
  <div style="width: 300px; height: 200px;">
    <witHorizontalPercentage
      :chart-data="chartData"
      :sort="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '项目A', value: '85%' },
  { name: '项目B', value: '72%' },
  { name: '项目C', value: '93%' },
  { name: '项目D', value: '68%' },
  { name: '项目E', value: '79%' }
])
</script>
```

### 大量数据展示

```vue
<template>
  <div style="width: 300px; height: 300px;">
    <witHorizontalPercentage
      :chart-data="largeChartData"
      :sort="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 生成20条模拟数据
const largeChartData = ref(Array.from({ length: 20 }, (_, i) => ({
  name: `项目${String.fromCharCode(65 + i)}`,
  value: `${Math.floor(Math.random() * 100)}%`
})))
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | 图表数据数组，每个元素包含name和value属性       |
| `sort`                 | [`Boolean`]     | `false`                    | 是否显示排序编号                               |

## 功能特性

### 数据可视化
- 水平条形图直观展示百分比数据
- 动态计算进度条宽度，准确反映百分比值
- 支持处理带百分号或不带百分号的数值

### 视觉设计
- 主色调使用蓝色渐变，偶数行使用另一种蓝色变体
- 进度条末端具有发光效果和波纹动画
- 清晰的层级结构，增强数据可读性

### 交互体验
- 集成无缝滚动功能，适用于大量数据
- 排序功能自动添加两位数字编号
- 空数据状态显示友好提示

### 技术特性
- 基于 Vue 3 Composition API 开发
- TypeScript 提供类型安全
- 使用 SCSS 进行样式管理，支持嵌套和变量
- 样式隔离，避免与其他组件冲突

## 实现原理

### 组件结构
- 外部容器：`.witHorizontalBarChart` - 控制整体高度和滚动
- 无缝滚动：`witSeamlessScroll` - 实现数据滚动效果
- 水平条项：`.horizontal-bar` - 包含标签和进度条
- 进度条：`.bar-progress` - 动态设置宽度显示进度
- 波纹效果：`.zsq` - 实现进度条末端的波纹动画

### 数据处理
- 使用 `$wit.delPercent` 工具函数处理百分比值
- 数据更新时添加 500ms 延迟，确保动画效果正常显示
- 排序功能自动补零，确保编号格式一致

### 动画效果
- 进度条宽度变化使用 CSS transition
- 波纹效果使用 CSS animation 实现
- 三个波纹元素依次延迟动画，形成连续效果

### 样式实现
- 使用 CSS 变量和渐变实现现代化外观
- 媒体查询和弹性布局确保响应式设计
- 偶数行使用 `nth-child(even)` 选择器实现不同样式

:::tip
1. 组件依赖 `witSeamlessScroll` 组件实现滚动效果，使用前请确保已正确引入
2. `chartData` 中的 `value` 属性可以是带百分号的字符串（如 "85%"）或数字（如 85）
3. 组件会自动处理百分比值，将其转换为 0-100 之间的数值用于计算进度条宽度
4. 排序功能会自动为数据项添加两位数字编号（如 "01、"、"02、"）
5. 组件高度由外部容器控制，建议根据数据量设置合适的高度
6. 波纹动画效果通过 CSS animation 实现，可根据需要调整动画速度和样式
:::