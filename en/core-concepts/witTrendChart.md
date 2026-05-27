# witTrendChart Trend Chart Component %{#witTrendChart}%

`witTrendChart` is a multi-functional trend chart component based on ECharts, supports combination display of bar charts and line charts, adopts dual Y-axis design, supports custom colors, sizes, formatting and interaction effects, suitable for various data trend analysis scenarios.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic bar chart -->
    <witTrendChart 
      :chartData="barData"
      :typeList="barTypeList"
    />
    
    <!-- Bar + Line combination -->
    <witTrendChart 
      :chartData="comboData"
      :typeList="comboTypeList"
      :color="['#00E5FF', '#FF9800']"
    />
    
    <!-- Chart with mark line -->
    <witTrendChart 
      :chartData="barData"
      :typeList="barTypeList"
      markLineData="60"
      height="300px"
    />
    
    <!-- Custom Y-axis formatting -->
    <witTrendChart 
      :chartData="barData"
      :typeList="barTypeList"
      formatterLeft="{value}%"
      formatterRight="{value}k"
    />
    
    <!-- Hide auxiliary lines and legend -->
    <witTrendChart 
      :chartData="barData"
      :typeList="barTypeList"
      :yAxisSplitLineShow="false"
      :legend="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `typeList`             | [`Array`]       | `[]`                       | Metric type configuration                                     |
| `color`                | [`Array`]       | `[]`                       | Custom color array                                     |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
| `legend`               | [`Boolean`]     | `true`                     | Whether to show legend                                     |
| `markLineData`         | [`String/Number`] | `''`                       | Mark line value                                     |
| `yAxisSplitLineShow`   | [`Boolean`]     | `true`                     | Whether to show Y-axis split line                               |
