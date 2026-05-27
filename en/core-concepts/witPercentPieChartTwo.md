# witPercentPieChartTwo Vertical Layout Percentage Ring Chart %{#witPercentPieChartTwo}%

`witPercentPieChartTwo` is a vertical layout percentage ring chart component based on ECharts, used to visually display percentage data. The component adopts a vertical layout with ring chart on top and text description below, has gradient text effects and responsive design.

## Usage Example %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- Basic usage -->
    <witPercentPieChartTwo 
      :precent="75" 
      label="Completion Rate" 
      height="250px"
    />
    
    <!-- Custom font size -->
    <witPercentPieChartTwo 
      :precent="45" 
      label="Usage Rate" 
      precent-font-size="40px"
      label-font-size="16px"
      height="300px"
    />
    
    <!-- Custom label spacing -->
    <witPercentPieChartTwo 
      :precent="90" 
      label="Compliance Rate" 
      :label-top="'20px'"
      height="250px"
    />
    
    <!-- Custom chart size -->
    <witPercentPieChartTwo 
      :precent="65" 
      label="Growth Rate" 
      :pie-width="'60%'"
      :pie-height="'70%'"
      width="300px"
      height="250px"
    />
    
    <!-- HTML label support -->
    <witPercentPieChartTwo 
      :precent="80" 
      label="<span style='color: #FFD166;'>Satisfaction</span>" 
      height="250px"
    />
  </div>
</template>
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
| `labelTop`             | [`String`]      | `'10px'`                   | Label top spacing                                       |
| `pieWidth`             | [`String`]      | `'70%'`                    | Chart width                                       |
| `pieHeight`            | [`String`]      | `'70%'`                    | Chart height                                       |
