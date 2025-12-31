# witChart 图表组件 %{#witChart}%

`witChart`是一个基于 ECharts 封装的 Vue 图表组件，支持多种图表类型和交互方式，提供了自定义主题和灵活的配置选项。组件内部集成了 ECharts 的核心功能，支持 Canvas 和 SVG 两种渲染方式，可根据需求灵活切换。

## 用法实列 %{#dome}%

```vue
<template>
  <div style="width: 600px; height: 400px;">
    <witChart
      ref="witChartRef"
      :option="chartOption"
      :autoresize="true"
      :renderer="'CanvasRenderer'"
      @click="handleChartClick"
      @highlight="handleChartHighlight"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const witChartRef = ref<any>(null)
const chartOption = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
})

const handleChartClick = (event: any) => {
  console.log('Chart clicked:', event)
}

const handleChartHighlight = (action: any) => {
  console.log('Chart highlighted:', action)
}

// 调用组件方法
const resizeChart = () => {
  witChartRef.value.resize()
}

const clearChart = () => {
  witChartRef.value.clear()
}
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `option`               | [`Object`]      | `() => {}`                 | ECharts 配置项，详细配置可参考 ECharts 文档    |
| `autoresize`           | [`Boolean`]     | `true`                     | 是否自动调整大小                               |
| `renderer`             | [`String`]      | `'CanvasRenderer'`         | 渲染方式，可选值：'CanvasRenderer' 或 'SVGRenderer' |


## Method

| 方法              | 描述                                        | 参数                         |
| :---------------- | :------------------------------------------ | ---------------------------- |
| `resize`           | 调整图表大小                                |                              |
| `clear`            | 清空图表内容                                |                              |
| `dispose`          | 销毁图表实例                                |                              |
| `getWidth`         | 获取图表宽度                                |                              |
| `getHeight`        | 获取图表高度                                |                              |


## Events

| 事件名             | 描述                                        | 参数                         |
| :----------------- | :------------------------------------------ | ---------------------------- |
| `click`            | 图表点击事件                                | event 对象                   |
| `highlight`        | 图表高亮事件                                | action 对象                  |


:::tip
组件内部已集成了大部分 ECharts 图表类型和组件，可直接在 option 中配置使用。
:::