# witPercentPieChart Percentage Ring Chart %{#witPercentPieChart}%

`witPercentPieChart` is a percentage ring chart component based on ECharts, used to visually display percentage data, combines ring progress chart and center number display, has gradient text effects and responsive design.

## Usage Example %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- Basic usage -->
    <witPercentPieChart 
      :precent="75" 
      label="Completion Rate" 
      height="200px"
    />
    
    <!-- Custom font size -->
    <witPercentPieChart 
      :precent="45" 
      label="Usage Rate" 
      precent-font-size="40px"
      label-font-size="16px"
      height="250px"
    />
    
    <!-- Custom chart size -->
    <witPercentPieChart 
      :precent="90" 
      label="Compliance Rate" 
      :pie-width="'60%'"
      :pie-height="'80%'"
      width="300px"
      height="200px"
    />
    
    <!-- HTML label support -->
    <witPercentPieChart 
      :precent="65" 
      label="<span style='color: #FFD166;'>Growth Rate</span>" 
      height="200px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Dynamic data
const dynamicPrecent = ref(30)
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `precent`              | [`Number`]      | `0`                        | Percentage value (0-100)                                     |
| `label`                | [`String`]      | `''`                       | Label text, supports HTML                                       |
| `height`               | [`String`]      | `'200px'`                  | Component height                                       |
| `width`                | [`String`]      | `'100%'`                   | Component width                                       |
| `precentFontSize`      | [`String`]      | `'36px'`                   | Percentage font size                                       |
| `labelFontSize`        | [`String`]      | `'14px'`                   | Label font size                                       |
| `pieWidth`             | [`String`]      | `'70%'`                    | Chart width                                       |
| `pieHeight`            | [`String`]      | `'70%'`                    | Chart height                                       |
