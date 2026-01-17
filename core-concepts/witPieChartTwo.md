# witPieChartTow 玫瑰图组件 %{#witPieChartTow}%

`witPieChartTow`是一个基于 ECharts 实现的玫瑰图组件，采用环形玫瑰图与四角分布的自定义图例相结合的布局，具有独特的视觉效果和交互体验。组件支持自定义数据、颜色配置和高度调整，适用于需要展示分类数据占比关系的场景。

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <witPieChartTow
    :chartData="chartData"
    :color="color"
    height="300px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '指标一', value: 380, unit: '万' },
  { name: '指标二', value: 65, unit: '万' },
  { name: '指标三', value: 2152, unit: '万' },
  { name: '指标四', value: 0, unit: '万' }
])

const color = ref(['#00FFB2', '#208FF7', '#FFB400', '#FF4D4F'])
</script>
```

### 自定义颜色配置

```vue
<template>
  <witPieChartTow
    :chartData="chartData"
    :color="customColor"
    height="350px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '销售', value: 1250, unit: '万元' },
  { name: '成本', value: 890, unit: '万元' },
  { name: '利润', value: 360, unit: '万元' },
  { name: '其他', value: 150, unit: '万元' }
])

const customColor = ref(['#52C41A', '#FAAD14', '#1890FF', '#F5222D'])
</script>
```

## API

| 属性名        | 类型       | 默认值   | 描述                                           |
| :------------ | :--------- | :------- | :--------------------------------------------- |
| `chartData`   | `Array`    | `[]`     | 图表数据源，包含 name、value 和 unit 字段的对象数组 |
| `color`       | `Array`    | `[]`     | 图表颜色配置数组，对应数据项的颜色             |
| `height`      | `String`   | `'100%'` | 图表高度，支持百分比或像素值                   |

## 功能特性

1. **玫瑰图展示**：采用环形玫瑰图（roseType: 'radius'）展示数据占比关系，视觉效果突出
2. **自定义图例布局**：图例分布在图表的四个角落，包含名称和数值信息，布局清晰
3. **鼠标交互效果**：鼠标悬停在图例上时，对应的扇区会高亮显示
4. **多层环形结构**：包含三层环形结构（数据扇区、中心圆阴影、外边框），增强视觉层次感
5. **背景装饰**：内置背景图片，提升整体美观度
6. **响应式设计**：支持窗口大小变化时自动调整图表尺寸

## 实现原理

1. **图表初始化**：在组件挂载后初始化 ECharts 实例，设置容器引用
2. **数据处理**：将传入的 chartData 数据转换为 ECharts 所需的格式
3. **配置生成**：通过 getOptions 方法生成 ECharts 配置项，包括玫瑰图、中心圆阴影和外边框
4. **交互实现**：为图例项添加鼠标悬停事件，通过 dispatchAction 控制图表扇区的高亮和取消高亮
5. **响应式处理**：使用 ResizeObserver 监听容器大小变化，触发图表重绘
6. **生命周期管理**：在组件挂载时初始化图表和事件监听，确保组件正常工作

## 样式结构

组件采用固定宽度（594px）和自适应高度的布局，主要包含以下部分：

1. **图表容器**：`.chart-wrap` 类，包含玫瑰图和背景图片
2. **图例区域**：`.legend` 类，包含四个角落的图例项
3. **图例项**：`.legend-item` 类，每个图例项包含名称、颜色点和数值信息
4. **布局定位**：使用绝对定位将四个图例项分布在图表的左上角、右上角、左下角和右下角

:::tip
1. **ECharts 依赖**：组件依赖 ECharts 库，使用前请确保已安装并导入
2. **数据字段要求**：chartData 数组中的每个对象必须包含 name、value 和 unit 字段
3. **颜色配置**：color 数组的长度应与 chartData 数组长度一致，确保颜色一一对应
4. **固定宽度**：组件默认宽度为 594px，如需调整可通过外层容器控制
5. **高度设置**：height 属性支持百分比或像素值，建议根据实际需求进行调整
6. **交互效果**：鼠标悬停在图例上时，对应的扇区会高亮显示，增强用户体验
7. **数据注意事项**：当前实现中，图表数据固定为 [380, 65, 2152]，实际使用时需要修改为动态使用 props.chartData
:::