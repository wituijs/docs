# witAreaChart Area Chart %{#witAreaChart}%

`witAreaChart` is an area chart component based on ECharts, used to display line chart data visualization with area filling, supports various custom configuration options such as axis names, legend display, auxiliary lines, value labels, etc. [View Component Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs) [View Dashboard Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/thqysjgpt)

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witAreaChart
    :chart-data="chartData"
    :type-list="typeList"
    height="400px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { witAreaChart } from '@wit-ui/components'

// Sample data
const chartData = ref([
  { name: 'January', value1: 120, value2: 200 },
  { name: 'February', value1: 132, value2: 182 },
  { name: 'March', value1: 101, value2: 234 },
  { name: 'April', value1: 134, value2: 390 },
  { name: 'May', value1: 90, value2: 330 },
  { name: 'June', value1: 230, value2: 410 }
])

const typeList = ref([
  { name: 'Metric 1', field: 'value1', color: '#5470c6' },
  { name: 'Metric 2', field: 'value2', color: '#91cc75' }
])
</script>
```

### Custom Configuration

```vue
<template>
  <witAreaChart
    :chart-data="chartData"
    :type-list="typeList"
    height="400px"
    :legend="true"
    :formatter="'${value}'"
    :x-name="'Month'"
    :y-name="'Sales'"
  />
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `typeList`             | [`Array`]       | `[]`                       | Metric type configuration                                     |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
| `legend`               | [`Boolean`]     | `false`                    | Whether to show legend                                     |
| `xName`                | [`String`]      | `''`                       | X-axis name                                       |
| `yName`                | [`String`]      | `''`                       | Y-axis name                                       |
