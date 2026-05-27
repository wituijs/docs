# witMap Map Marker Component %{#witMap}%

`witMap` is an interactive map marker component developed based on Vue 3 and TypeScript, with the following features:
- Supports custom map background images
- Can add multiple markers on the map
- Supports marker hover interaction effects
- Provides auto-carousel functionality to enhance data display
- Supports custom marker icons
- Allows customizing marker popup menu content through slots

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div style="width: 800px; height: 600px;">
    <witMap
      :positions="mapPositions"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mapPositions = ref([
  { left: '20%', top: '30%', title: 'Beijing', placement: 'top' },
  { left: '40%', top: '50%', title: 'Shanghai', placement: 'bottom' },
  { left: '60%', top: '40%', title: 'Guangzhou', placement: 'left' },
  { left: '75%', top: '55%', title: 'Shenzhen', placement: 'right' }
])
</script>
```

### Custom Map and Marker Images

```vue
<template>
  <div style="width: 800px; height: 600px;">
    <witMap
      :positions="mapPositions"
      :mimg="customMapImage"
      :zimg="customMarkerImage"
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
| `positions`            | [`Array`]       | `[]`                       | Marker position array                                     |
| `mimg`                 | [`String`]      | Built-in image             | Map background image path                                 |
| `zimg`                 | [`String`]      | Built-in image             | Marker image path                                       |
