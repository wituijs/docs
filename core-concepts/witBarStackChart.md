# witBarStackChart 堆积柱状图组件 %{#witBarStackChart}%

`witBarStackChart`是一个基于 ECharts 封装的 Vue 堆积柱状图组件，用于展示多组数据的堆叠关系，支持自定义样式和响应式设计。组件提供了简洁的 API 接口，方便开发者快速集成和配置堆积柱状图。 [查看效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs)

## 用法实例 %{#dome}%

### 基础用法
```vue
<template>
  <div style="width: 600px; height: 400px;">
    <witBarStackChart 
      :chart-data="chartData" 
      :options="options" 
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '周一', productA: 120, productB: 220, productC: 150 },
  { name: '周二', productA: 200, productB: 182, productC: 232 },
  { name: '周三', productA: 150, productB: 191, productC: 201 },
  { name: '周四', productA: 80, productB: 234, productC: 154 },
  { name: '周五', productA: 70, productB: 290, productC: 190 },
  { name: '周六', productA: 110, productB: 330, productC: 330 },
  { name: '周日', productA: 130, productB: 310, productC: 410 }
])

const options = ref([
  { field: 'productA', name: '产品A', stack: '总量', color: '#5470c6' },
  { field: 'productB', name: '产品B', stack: '总量', color: '#91cc75' },
  { field: 'productC', name: '产品C', stack: '总量', color: '#fac858' }
])
</script>
```

### 自定义配置
```vue
<template>
  <div style="width: 600px; height: 400px;">
    <witBarStackChart 
      :chart-data="chartData" 
      :options="options" 
      height="300px"
      :legend="true"
      :bar-width="20"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: '一月', sales: 1200, profit: 400, cost: 800 },
  { name: '二月', sales: 1900, profit: 600, cost: 1300 },
  { name: '三月', sales: 2500, profit: 900, cost: 1600 }
])

const options = ref([
  { field: 'cost', name: '成本', stack: '收支', color: '#ee6666' },
  { field: 'profit', name: '利润', stack: '收支', color: '#73c0de' }
])
</script>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `chartData` | [`Array`] | `[]` | 图表数据数组，每个对象包含分类名称和对应的数据字段 |
| `options` | [`Array`] | `[]` | 配置选项数组，定义每个系列的字段、名称、堆叠组和颜色 |
| `height` | [`String`] | `'100%'` | 图表高度 |
| `legend` | [`Boolean`] | `true` | 是否显示图例 |
| `barWidth` | [`Number`] | `12` | 柱子宽度 |

## 配置选项（options）

| 属性名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `field` | [`String`] | 数据字段名，对应chartData中的属性 |
| `name` | [`String`] | 系列名称，显示在图例中 |
| `stack` | [`String`] | 堆叠组名称，相同组的柱子会堆叠显示 |
| `color` | [`String`] | 柱子颜色 |

## 功能特性

### 1. 堆积柱状图展示
组件核心功能是展示堆积柱状图，清晰呈现多组数据的堆叠关系和总量对比。

### 2. 灵活的数据配置
通过`chartData`和`options`属性，支持任意数量的分类和系列数据，灵活配置堆叠关系。

### 3. 自定义样式
- 支持自定义图表高度
- 可配置是否显示图例
- 支持调整柱子宽度
- 可自定义每个系列的颜色

### 4. 响应式设计
使用ResizeObserver监听容器大小变化，自动调整图表尺寸，确保在不同设备和窗口大小下都能正常显示。

### 5. 空数据处理
当没有数据时，组件会显示"暂无数据"提示，提升用户体验。

## 实现原理

### 1. 数据处理
组件接收`chartData`和`options`属性，通过遍历数据生成ECharts所需的系列配置。

### 2. ECharts初始化
在组件挂载后，使用ECharts的`init`方法初始化图表实例，并设置初始配置。

### 3. 响应式更新
- 监听`chartData`变化，当数据更新时重新生成配置并更新图表
- 使用ResizeObserver监听容器大小变化，调用`resize`方法调整图表尺寸

### 4. 空状态处理
通过`v-show`指令根据`chartData`长度切换图表和空数据提示的显示状态。

## 样式结构

```scss
.chart-wrap {
  width: 100%;
}
.empty-wrap {
  width: 100%;
  height: 100%;
  color: var(--el-text-color-secondary);
}
```

组件包含两个主要容器：
- `chart-wrap`：用于渲染ECharts图表的容器
- `empty-wrap`：用于显示空数据提示的容器

## 提示信息

:::tip
1. 组件依赖ECharts库，请确保项目中已正确安装ECharts。
2. `chartData`数组中的每个对象必须包含`name`字段和与`options`中`field`对应的属性。
3. 相同`stack`名称的系列会被堆积显示，不同`stack`名称的系列会并列显示。
4. 当需要调整图表大小时，可以直接修改`height`属性或调整容器尺寸。
5. 组件会自动处理窗口大小变化，无需手动调用resize方法。
:::