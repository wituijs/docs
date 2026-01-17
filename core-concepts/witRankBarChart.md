# witRankBarChart 排名柱状图组件 %{#witRankBarChart}%

`witRankBarChart`是一个基于 ECharts 实现的水平排名柱状图组件，采用双层柱状图设计（背景柱+数据柱），具有独特的视觉效果和动态动画。组件支持自定义数据、高度设置，适用于需要直观展示排名数据的场景。

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <witRankBarChart
    :chartData="chartData"
    height="300px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '项目1', value: 120 },
  { name: '项目2', value: 80 },
  { name: '项目3', value: 150 },
  { name: '项目4', value: 200 },
  { name: '项目5', value: 70 }
])
</script>
```

### 动态数据更新

```vue
<template>
  <div>
    <el-button @click="updateData">更新数据</el-button>
    <witRankBarChart
      :chartData="chartData"
      height="350px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '产品A', value: 580 },
  { name: '产品B', value: 450 },
  { name: '产品C', value: 720 },
  { name: '产品D', value: 390 }
])

const updateData = () => {
  chartData.value = [
    { name: '产品A', value: 620 },
    { name: '产品B', value: 580 },
    { name: '产品C', value: 790 },
    { name: '产品D', value: 450 },
    { name: '产品E', value: 380 }
  ]
}
</script>
```

### 高数据量展示

```vue
<template>
  <witRankBarChart
    :chartData="largeChartData"
    height="500px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 生成模拟数据
const generateData = () => {
  const data = []
  for (let i = 1; i <= 10; i++) {
    data.push({
      name: `项目${i}`,
      value: Math.floor(Math.random() * 1000) + 100
    })
  }
  return data
}

const largeChartData = ref(generateData())
</script>
```

## API

| 属性名        | 类型       | 默认值   | 描述                                           |
| :------------ | :--------- | :------- | :--------------------------------------------- |
| `chartData`   | `Array`    | `[]`     | 图表数据源，包含 name 和 value 字段的对象数组   |
| `height`      | `String`   | `'100%'` | 图表高度，支持百分比或像素值                   |

## 功能特性

1. **排名柱状图展示**：采用水平柱状图展示排名数据，直观清晰
2. **双层柱状设计**：背景柱+数据柱的双层结构，增强视觉层次感
3. **动态动画效果**：
   - 标记点呼吸动画
   - 数据加载平滑过渡
4. **响应式设计**：支持窗口大小变化时自动调整图表尺寸
5. **数据格式化**：数值自动添加千分位分隔符和单位
6. **交替颜色方案**：奇数和偶数项采用不同颜色，便于区分
7. **空数据处理**：无数据时显示"暂无数据"提示
8. **性能优化**：使用 debounce 函数优化动画性能

## 实现原理

1. **图表初始化**：在组件挂载后初始化 ECharts 实例，设置容器引用
2. **数据处理**：将传入的 chartData 转换为 ECharts 所需的格式
3. **配置生成**：设置图表的坐标轴、网格、系列等配置项
4. **动画实现**：
   - 使用 setInterval 实现标记点的呼吸动画
   - 使用 debounce 优化动画性能
5. **响应式处理**：使用 ResizeObserver 监听容器大小变化，触发图表重绘
6. **生命周期管理**：在组件卸载时清除定时器，避免内存泄漏

## 样式结构

组件采用以下样式设计：

1. **图表容器**：`.echartRef` 类，根据传入的 height 属性设置高度
2. **空数据提示**：`.empty-wrap` 类，居中显示"暂无数据"文本
3. **柱状图样式**：
   - 背景柱：`rgba(9, 27, 71, .66)` 半透明蓝色
   - 数据柱：线性渐变，交替使用两种颜色
     - 奇数项：`#0084FF` 到 `rgba(9, 27, 71, .6)`
     - 偶数项：`#3CFFD8` 到 `rgba(9, 27, 71, .6)`
4. **标记点**：
   - 圆形标记，大小为 6px
   - 带阴影效果的背景框
   - 呼吸动画效果
5. **文本样式**：
   - 项目名称：白色，左对齐
   - 数值：白色，右对齐，带千分位分隔符和"万元"单位

## 实现细节

1. **双层柱状图实现**：
   - 使用两个系列（series）实现背景柱和数据柱
   - 通过 `barGap: '-100%'` 使两个系列重叠显示
   - 背景柱使用 `showBackground: true` 属性

2. **动态动画**：
   - 使用 setInterval 控制标记点大小变化
   - 通过 growing 变量控制动画方向
   - 使用 debounce 避免频繁触发动画

3. **响应式设计**：
   - 使用 ResizeObserver 监听容器大小变化
   - 调用 echartEle.resize() 方法重绘图表
   - 设置动画持续时间为 800ms，缓动函数为 cubicInOut

:::tip
1. **ECharts 依赖**：组件依赖 ECharts 库，使用前请确保已安装并导入
2. **数据字段要求**：chartData 数组中的每个对象必须包含 name 和 value 字段
3. **lodash-es 依赖**：组件使用了 lodash-es 的 debounce 函数，需要确保该依赖已安装
4. **性能优化**：当数据量较大时，建议适当调整 height 属性，确保显示效果
5. **数据格式化**：组件内部使用 `$w.addThousandSeparator` 函数格式化数值，确保该函数可用
6. **单位显示**：当前版本默认显示"万元"单位，如需修改请调整代码中的 formatter 函数
7. **颜色方案**：组件交替使用两种颜色，如需自定义请修改 series[1].itemStyle.color 配置
:::