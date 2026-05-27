# witProgressChart Ring Progress Component %{#witProgressChart}%

`witProgressChart` is a ring progress bar component based on ECharts, supports custom percentage, colors, background colors and sizes, provides text and image two center display modes, suitable for scenarios that need to intuitively display progress or proportions.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witProgressChart
    :precent="65"
    height="200px"
    width="200px"
  />
</template>

<script lang="ts" setup>
// Component will be auto-imported
</script>
```

### Custom Color Configuration

```vue
<template>
  <witProgressChart
    :precent="85"
    color="#52C41A"
    bgColor="rgba(82, 196, 26, .3)"
    height="250px"
    width="250px"
  />
</template>

<script lang="ts" setup>
// Component will be auto-imported
</script>
```

### Hide Text and Display Image

```vue
<template>
  <witProgressChart
    :precent="45"
    :showTitle="false"
    pic="/path/to/your/image.png"
    height="180px"
    width="180px"
  />
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `precent`              | [`Number`]      | `0`                        | Progress percentage (0-100)                                     |
| `color`                | [`String`]      | `'#00B5FF'`                | Progress bar color                                       |
| `bgColor`              | [`String`]      | `'#E6EBF5'`                | Background color                                       |
| `height`               | [`String`]      | `'200px'`                  | Component height                                       |
| `width`                | [`String`]      | `'200px'`                  | Component width                                       |
| `showTitle`            | [`Boolean`]     | `true`                     | Whether to show center text                                     |
| `pic`                  | [`String`]      | `''`                       | Center image URL                                       |
