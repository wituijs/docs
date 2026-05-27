# witPieChart Ring Pie Chart %{#witPieChart}%

`witPieChart` is a ring pie chart component based on ECharts, used to display the proportion relationship of categorical data. The component adopts a layout with pie chart on the left and legend on the right, supports custom colors, sizes, positions and data formatting.

## Usage Example %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- Basic usage -->
    <witPieChart 
      :chart-data="chartData" 
      :color="colors" 
      height="400px"
    />
    
    <!-- Custom layout -->
    <witPieChart 
      :chart-data="chartData" 
      :color="colors" 
      height="400px"
      :legend-left="'60%'"
      :series-pie-left="20"
      :item-gap="30"
    />
    
    <!-- Custom pie chart size and position -->
    <witPieChart 
      :chart-data="chartData" 
      :color="colors" 
      height="400px"
      :series-pie-radius="['40%', '70%']"
      :series-pie-center="['30%', '50%']"
    />
    
    <!-- Show inner label -->
    <witPieChart 
      :chart-data="chartData" 
      :color="colors" 
      height="400px"
      :show-label="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Chart data
const chartData = ref([
  { name: 'Product A', value: 1200, unit: 'units' },
  { name: 'Product B', value: 2500, unit: 'units' },
  { name: 'Product C', value: 1800, unit: 'units' }
])

// Custom colors
const colors = ref([
  '#00B5FF',
  '#52C41A',
  '#FFC107'
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `color`                | [`Array`]       | `[]`                       | Custom color array                                     |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
| `legendLeft`           | [`String`]      | `'60%'`                    | Legend left position                                     |
| `seriesPieRadius`      | [`Array`]       | `['40%', '70%']`           | Pie chart inner and outer radius                         |
| `seriesPieCenter`      | [`Array`]       | `['30%', '50%']`           | Pie chart center position                                 |
| `showLabel`            | [`Boolean`]     | `false`                    | Whether to show label                                     |
