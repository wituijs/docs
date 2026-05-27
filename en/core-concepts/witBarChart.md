# witBarChart Bar Chart Component %{#witBarChart}%

`witBarChart` is a Vue bar chart component based on ECharts, supports multiple custom configuration options, provides rich bar chart visualization effects. The component supports single-series and multi-series bar charts, can customize colors, styles, labels and other properties, suitable for various data display scenarios. [View Component Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs) [View Dashboard Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/thqysjgpt)

## Usage Example %{#dome}%

### Basic Usage
```vue
<template>
  <div style="width: 600px; height: 400px;">
    <witBarChart :chart-data="chartData" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref({
  xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    {
      name: 'Sales',
      data: [120, 200, 150, 80, 70, 110, 130]
    }
  ]
})
</script>
```

### Multi-series Bar Chart
```vue
<template>
  <div style="width: 600px; height: 400px;">
    <witBarChart 
      :chart-data="chartData" 
      :colors="['#5470c6', '#91cc75', '#fac858']"
      :y-axis-split-line-show="true"
      :x-axis-name="'Date'"
      :y-axis-name="'Sales (10k)'"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref({
  xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    {
      name: 'Product A',
      data: [120, 200, 150, 80, 70, 110, 130]
    },
    {
      name: 'Product B',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Product C',
      data: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
})
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Object`]      | `{}`                        | Chart data object                                     |
| `colors`               | [`Array`]       | `[]`                        | Custom color array                                     |
| `xAxisName`            | [`String`]      | `''`                        | X-axis name                                       |
| `yAxisName`            | [`String`]      | `''`                        | Y-axis name                                       |
| `yAxisSplitLineShow`   | [`Boolean`]     | `true`                      | Whether to show Y-axis split line                               |
