# witMultipleBarChart Multiple Series Bar Chart %{#witMultipleBarChart}%

`witMultipleBarChart` is a multiple series bar chart component based on ECharts, supports custom data, colors, styles and interaction effects, can be used to display comparative analysis of multiple data sets.

## Usage Example %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- Basic usage -->
    <witMultipleBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
    />
    
    <!-- Hide legend and auxiliary lines -->
    <witMultipleBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
      :legend="false"
      :y-axis-split-line-show="false"
    />
    
    <!-- Custom style -->
    <witMultipleBarChart 
      :chart-data="chartData" 
      :type-list="customTypeList" 
      height="400px"
      :bar-width="10"
      :series-show="true"
      :axis-color="#FF6B6B"
    />
    
    <!-- Show background bar -->
    <witMultipleBarChart 
      :chart-data="chartData" 
      :type-list="typeList" 
      height="400px"
      :show-background="true"
      :background-color="rgba(255, 107, 107, 0.2)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Basic data
const chartData = ref([
  { name: 'Q1', sales: 120, profit: 30 },
  { name: 'Q2', sales: 200, profit: 50 },
  { name: 'Q3', sales: 150, profit: 40 },
  { name: 'Q4', sales: 180, profit: 45 }
])

const typeList = ref([
  { name: 'Sales', field: 'sales' },
  { name: 'Profit', field: 'profit' }
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `typeList`             | [`Array`]       | `[]`                       | Metric type configuration                                     |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
| `legend`               | [`Boolean`]     | `true`                     | Whether to show legend                                     |
| `yAxisSplitLineShow`   | [`Boolean`]     | `true`                     | Whether to show Y-axis split line                               |
| `barWidth`             | [`Number`]      | `auto`                     | Bar width                                       |
| `showBackground`       | [`Boolean`]     | `false`                    | Whether to show background bar                               |
