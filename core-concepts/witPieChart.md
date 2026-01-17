# witPieChart 环形饼图 %{#witPieChart}%

`witPieChart` 是一个基于 ECharts 实现的环形饼图组件，用于展示分类数据的占比关系。该组件采用左侧饼图、右侧图例的布局方式，支持自定义颜色、尺寸、位置和数据格式化。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- 基础用法 -->
    <witPieChart 
      :chart-data="chartData" 
      :color="colors" 
      height="400px"
    />
    
    <!-- 自定义布局 -->
    <witPieChart 
      :chart-data="chartData" 
      :color="colors" 
      height="400px"
      :legend-left="'60%'"
      :series-pie-left="20"
      :item-gap="30"
    />
    
    <!-- 自定义饼图尺寸和位置 -->
    <witPieChart 
      :chart-data="chartData" 
      :color="colors" 
      height="400px"
      :series-pie-radius="['40%', '70%']"
      :series-pie-center="['30%', '50%']"
    />
    
    <!-- 显示内部标签 -->
    <witPieChart 
      :chart-data="chartData" 
      :color="colors" 
      height="400px"
      :show-label="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 图表数据
const chartData = ref([
  { name: '产品A', value: 1200, unit: '台' },
  { name: '产品B', value: 2500, unit: '台' },
  { name: '产品C', value: 1800, unit: '台' }
])

// 自定义颜色
const colors = ref([
  '#00B5FF',
  '#52C41A',
  '#FFC107'
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
| `chartData`            | [`Array`]       | `[]`                       | 图表数据数组，每个对象包含name、value和unit字段 |
| `color`                | [`Array`]       | `[]`                       | 饼图各部分的颜色数组                            |
| `height`               | [`String`]      | `'100%'`                   | 图表容器高度                                   |
| `itemGap`              | [`Number`]      | `40`                       | 相邻图例项之间的距离                             |
| `legendLeft`           | [`String`]      | `'56%'`                    | 图例距离左侧的距离                               |
| `seriesPieLeft`        | [`Number`]      | `10`                       | 饼图距离左侧的距离                               |
| `seriesPieRingLeft`    | [`String`]      | `'26.4%'`                  | 中心圆阴影距离左侧的距离                         |
| `seriesPieBorderLeft`  | [`String`]      | `'26.5%'`                  | 外边框距离左侧的距离                             |
| `seriesPieRingOpacity` | [`Number`]      | `1`                        | 中心圆阴影的透明度                               |
| `seriesPieRadius`      | [`Array`]       | `['30%', '65%']`           | 饼图半径，数组第一项为内半径，第二项为外半径     |
| `seriesPieCenter`      | [`Array`]       | `['25%', '50%']`           | 饼图中心位置，数组第一项为x坐标，第二项为y坐标   |
| `showLabel`            | [`Boolean`]     | `false`                    | 是否在饼图内部显示百分比标签                     |

## 功能特性

- **环形饼图展示**：使用环形饼图直观展示分类数据的占比关系
- **自定义布局**：支持调整饼图和图例的位置、间距和尺寸
- **数据格式化**：自动对数值进行千分位分隔符格式化
- **视觉增强**：包含中心阴影和外边框，提升视觉层次感
- **响应式设计**：自适应容器大小变化，保持良好的显示效果
- **空数据提示**：当没有数据时显示友好提示信息
- **灵活配置**：支持自定义颜色、标签显示等多种样式属性

## 实现原理

1. **图表初始化**：使用 ECharts 库初始化图表实例，绑定到 DOM 元素
2. **数据处理**：将输入的 chartData 转换为 ECharts 所需的格式，并使用 $w.addThousandSeparator 进行数值格式化
3. **多层环形结构**：通过 ECharts 的 series 配置实现多层环形效果，包括主饼图、中心阴影环和外边框环
4. **自定义图例**：实现右侧垂直排列的图例，包含名称和格式化后的数值
5. **响应式处理**：使用 ResizeObserver 监听容器大小变化，自动调整图表尺寸
6. **空数据处理**：根据 chartData 长度控制图表或空数据提示的显示

## 注意事项

:::tip
- 组件依赖 ECharts 库和 $w.addThousandSeparator 工具函数，使用前需确保已安装相关依赖
- chartData 数组中的每个对象必须包含 name、value 和 unit 字段
- color 数组的长度应与 chartData 数组长度一致，否则会使用 ECharts 默认颜色
- 可通过调整 seriesPieRadius 属性控制饼图的内外半径，实现不同的环形效果
- 当数据量较大时，建议调整 itemGap 和 legendLeft 属性，确保图例显示完整
- showLabel 属性控制是否在饼图内部显示百分比标签，当数据项较多时建议关闭
- 组件支持高度自定义，可通过调整各个位置属性实现不同的布局效果
:::