# witHorizontalBarChart Horizontal Bar Chart %{#witHorizontalBarChart}%

`witHorizontalBarChart` is a horizontal bar chart component based on CSS, supports seamless scrolling, sorted display and dynamic progress animation effects. The component adopts modern design style, includes ripple effects and gradient progress bars, suitable for dashboard data display scenarios.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div>
    <witHorizontalBarChart
      :chartData="chartData"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Product A', value: 12345 },
  { name: 'Product B', value: 9876 },
  { name: 'Product C', value: 7654 },
  { name: 'Product D', value: 5432 },
  { name: 'Product E', value: 3210 }
])
</script>
```

### Sorted Display

```vue
<template>
  <div>
    <witHorizontalBarChart
      :chartData="chartData"
      sort
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Product A', value: 12345 },
  { name: 'Product B', value: 9876 },
  { name: 'Product C', value: 7654 }
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `chartData`            | [`Array`]       | `[]`                       | Chart data array                                     |
| `sort`                 | [`Boolean`]     | `false`                    | Whether to sort by value                                     |
