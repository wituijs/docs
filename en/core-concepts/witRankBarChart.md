# witRankBarChart Ranking Bar Chart Component %{#witRankBarChart}%

`witRankBarChart` is a horizontal ranking bar chart component based on ECharts, adopts dual-layer bar chart design (background bar + data bar), has unique visual effects and dynamic animations. The component supports custom data, height settings, suitable for scenarios that need to visually display ranking data.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witRankBarChart
    :chartData="chartData"
    height="300px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Project 1', value: 120 },
  { name: 'Project 2', value: 80 },
  { name: 'Project 3', value: 150 },
  { name: 'Project 4', value: 200 },
  { name: 'Project 5', value: 70 }
])
</script>
```

### Dynamic Data Update

```vue
<template>
  <div>
    <el-button @click="updateData">Update Data</el-button>
    <witRankBarChart
      :chartData="chartData"
      height="350px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Product A', value: 580 },
  { name: 'Product B', value: 450 },
  { name: 'Product C', value: 720 },
  { name: 'Product D', value: 390 }
])

const updateData = () => {
  chartData.value = chartData.value.map(item => ({
    ...item,
    value: Math.floor(Math.random() * 1000)
  }))
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `height`               | [`String`]      | `'300px'`                  | Chart height                                       |
