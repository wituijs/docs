# witBarStackChart Stacked Bar Chart Component %{#witBarStackChart}%

`witBarStackChart` is a Vue stacked bar chart component based on ECharts, used to display stacked relationships of multiple data sets, supports custom styles and responsive design. The component provides a concise API interface for developers to quickly integrate and configure stacked bar charts. [View Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs)

## Usage Example %{#dome}%

### Basic Usage
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
  { name: 'Monday', productA: 120, productB: 220, productC: 150 },
  { name: 'Tuesday', productA: 200, productB: 182, productC: 232 },
  { name: 'Wednesday', productA: 150, productB: 191, productC: 201 },
  { name: 'Thursday', productA: 80, productB: 234, productC: 154 },
  { name: 'Friday', productA: 70, productB: 290, productC: 190 },
  { name: 'Saturday', productA: 110, productB: 330, productC: 330 },
  { name: 'Sunday', productA: 130, productB: 310, productC: 410 }
])

const options = ref([
  { field: 'productA', name: 'Product A', stack: 'Total', color: '#5470c6' },
  { field: 'productB', name: 'Product B', stack: 'Total', color: '#91cc75' },
  { field: 'productC', name: 'Product C', stack: 'Total', color: '#fac858' }
])
</script>
```

### Custom Configuration
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
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `options`              | [`Array`]       | `[]`                       | Series configuration options                                     |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
| `legend`               | [`Boolean`]     | `false`                    | Whether to show legend                                     |
| `barWidth`             | [`Number`]      | `auto`                     | Bar width                                       |
