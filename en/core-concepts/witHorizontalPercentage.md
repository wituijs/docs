# witHorizontalPercentage Horizontal Percentage Chart %{#witHorizontalPercentage}%

`witHorizontalPercentage` is a horizontal percentage chart component developed based on Vue 3 and TypeScript, with the following features:
- Supports horizontal bar chart form to display percentage data
- Integrates seamless scrolling functionality, suitable for large data display
- Provides sorting number functionality, enhances data readability
- Has dynamic wave animation effects, improves visual experience
- Supports even row different color styles, enhances data distinction

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div style="width: 300px; height: 200px;">
    <witHorizontalPercentage
      :chart-data="chartData"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const chartData = ref([
  { name: 'Project A', value: '85%' },
  { name: 'Project B', value: '72%' },
  { name: 'Project C', value: '93%' },
  { name: 'Project D', value: '68%' },
  { name: 'Project E', value: '79%' }
])
</script>
```

### With Sorting Function

```vue
<template>
  <div style="width: 300px; height: 200px;">
    <witHorizontalPercentage
      :chart-data="chartData"
      :sort="true"
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
| `sort`                 | [`Boolean`]     | `false`                    | Whether to sort by value                                     |
