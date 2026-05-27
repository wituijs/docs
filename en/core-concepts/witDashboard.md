# witDashboard Dashboard Component %{#witDashboard}%

`witDashboard` is a large screen data visualization dashboard component based on ECharts, adopts a semi-circular design, supports custom values, units and sizes, has modern gradient color effects and smooth interactive experience.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witDashboard :value="65" unit="%" />
    
    <!-- Custom size -->
    <witDashboard :value="1200" unit="people" width="200px" height="150px" />
    
    <!-- Dynamic data -->
    <witDashboard :value="dynamicValue" unit="10k" />
    
    <el-button @click="updateValue">Update Value</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dynamicValue = ref(85)

const updateValue = () => {
  dynamicValue.value = Math.floor(Math.random() * 100)
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `width`                | [`String`]      | `'100%'`                   | Component width                                       |
| `height`               | [`String`]      | `'100%'`                   | Component height                                       |
| `value`                | [`String`]      | `'0'`                      | Display value                                     |
| `unit`                 | [`String`]      | `''`                       | Value unit                                       |

## Features

- **Semi-circular Design**: Adopts elegant semi-circular layout, saves space while maintaining visual impact
- **Gradient Colors**: Uses multi-layer gradient colors, enhances visual hierarchy and modern feel
- **Dynamic Updates**: Automatically updates chart when value changes, provides smooth transition effects
- **Responsive Design**: Automatically adapts to container size changes, maintains good display effect
- **Custom Unit**: Supports setting any unit, meets different data display needs
- **Flexible Size**: Can customize component width and height, adapts to various layout scenarios

## Implementation Principle

1. **ECharts Integration**: Based on ECharts library for chart drawing, uses gauge chart type to build dashboard
2. **Double Ring Structure**:
   - Outer ring: Decorative progress ring, filled with gradient colors
   - Inner ring: Main data display area, shows current value and unit
3. **Data Driven**: Dynamically updates chart data by monitoring value property changes
4. **Responsive Handling**: Uses ResizeObserver API to monitor container size changes, automatically adjusts chart size
5. **Visual Optimization**:
