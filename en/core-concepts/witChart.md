# witChart Chart Component %{#witChart}%

`witChart` is a Vue chart component based on ECharts, supports multiple chart types and interaction methods, provides custom themes and flexible configuration options. The component integrates ECharts core functionality internally, supports both Canvas and SVG rendering methods, can be flexibly switched according to needs.

## Usage Example %{#dome}%

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

// Call component methods
const resizeChart = () => {
  witChartRef.value.resize()
}

const clearChart = () => {
  witChartRef.value.clear()
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `option`               | [`Object`]      | `() => {}`                 | ECharts configuration, see ECharts documentation for details    |
| `autoresize`           | [`Boolean`]     | `true`                     | Whether to auto resize                               |
| `renderer`             | [`String`]      | `'CanvasRenderer'`         | Rendering method, options: 'CanvasRenderer' or 'SVGRenderer' |


## Method

| Method              | Description                                        | Parameters                         |
| :---------------- | :------------------------------------------ | ---------------------------- |
| `resize`           | Resize chart                                |                              |
| `clear`            | Clear chart content                                |                              |
| `dispose`          | Destroy chart instance                                |                              |
| `getWidth`         | Get chart width                                |                              |
| `getHeight`        | Get chart height                                |                              |


## Events
