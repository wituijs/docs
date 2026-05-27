# witMixedLineAndBarChart Mixed Line and Bar Chart %{#witMixedLineAndBarChart}%

`witMixedLineAndBarChart` is a mixed chart component based on ECharts, combines bar chart and line chart display methods, supports custom data, auxiliary line display and dynamic animation effects.

## Usage Example %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- Basic usage -->
    <witMixedLineAndBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
    />
    
    <!-- Hide auxiliary lines -->
    <witMixedLineAndBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
      :y-axis-split-line-show="false"
    />
    
    <!-- Custom data structure -->
    <witMixedLineAndBarChart 
      :chart-data="customChartData" 
      :type-list="customTypeList" 
      height="400px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Basic data
const chartData = ref([
  { name: 'Monday', sales: 120, profit: 30 },
  { name: 'Tuesday', sales: 200, profit: 50 },
  { name: 'Wednesday', sales: 150, profit: 40 },
  { name: 'Thursday', sales: 80, profit: 20 },
  { name: 'Friday', sales: 210, profit: 60 },
  { name: 'Saturday', sales: 180, profit: 45 },
  { name: 'Sunday', sales: 160, profit: 38 }
])

const typeList = ref([
  { name: 'Sales', field: 'sales' },
  { name: 'Profit', field: 'profit', unit: 'k' }
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `typeList`             | [`Array`]       | `[]`                       | Metric type configuration                                     |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
| `yAxisSplitLineShow`   | [`Boolean`]     | `true`                     | Whether to show Y-axis split line                               |
