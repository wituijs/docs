# witRadarChart Radar Chart Component %{#witRadarChart}%

`witRadarChart` is a radar chart component based on ECharts, used to display the distribution and comparison of multi-dimensional data. The component adopts custom style design, including dashed axis lines, semi-transparent fill areas and unique data label format, supports custom data, units and height, suitable for scenarios that need to intuitively display multi-dimensional indicators.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witRadarChart
    :chartData="chartData"
    height="400px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Metric 1', value: 85 },
  { name: 'Metric 2', value: 70 },
  { name: 'Metric 3', value: 90 },
  { name: 'Metric 4', value: 65 },
  { name: 'Metric 5', value: 80 }
])
</script>
```

### Custom Unit

```vue
<template>
  <witRadarChart
    :chartData="chartData"
    unit="points"
    height="450px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Math', value: 92 },
  { name: 'Chinese', value: 88 },
  { name: 'English', value: 95 },
  { name: 'Physics', value: 85 },
  { name: 'Chemistry', value: 89 },
  { name: 'Biology', value: 91 }
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `unit`                 | [`String`]      | `''`                       | Data unit                                       |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
