# witPieChartTwo Rose Chart Component %{#witPieChartTwo}%

`witPieChartTwo` is a rose chart component based on ECharts, adopts a layout combining ring rose chart with four-corner distributed custom legends, has unique visual effects and interactive experience. The component supports custom data, color configuration and height adjustment, suitable for scenarios that need to display categorical data proportion relationships.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witPieChartTwo
    :chartData="chartData"
    :color="color"
    height="300px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Metric 1', value: 380, unit: 'million' },
  { name: 'Metric 2', value: 65, unit: 'million' },
  { name: 'Metric 3', value: 2152, unit: 'million' },
  { name: 'Metric 4', value: 0, unit: 'million' }
])

const color = ref(['#00FFB2', '#208FF7', '#FFB400', '#FF4D4F'])
</script>
```

### Custom Color Configuration

```vue
<template>
  <witPieChartTwo
    :chartData="chartData"
    :color="customColor"
    height="350px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Sales', value: 1250, unit: 'million yuan' },
  { name: 'Cost', value: 890, unit: 'million yuan' },
  { name: 'Profit', value: 360, unit: 'million yuan' },
  { name: 'Other', value: 150, unit: 'million yuan' }
])

const customColor = ref(['#5470c6', '#91cc75', '#fac858', '#ee6666'])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `color`                | [`Array`]       | `[]`                       | Color array                                       |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
