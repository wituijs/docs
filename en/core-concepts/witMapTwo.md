# witMapTwo Map Marker Component (Version 2) %{#witMapTwo}%

`witMapTwo` is an interactive map marker component developed based on Vue 3 and TypeScript, an enhanced version of witMap, with the following features:
- Uses background image for map display, more flexible style control
- Supports custom map image size (width and height)
- Can add multiple markers on the map
- Provides auto-carousel functionality, cyclically displays marker information
- Supports custom marker icons
- Provides menu slot, can display detailed information of currently selected marker outside the map
- Distinguishes manual trigger and auto-carousel, optimizes user experience

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div style="width: 800px; height: 400px;">
    <witMapTwo
      :positions="mapPositions"
    >
      <template #menu="{ data }">
        <div class="map-menu" v-if="data">
          <h3>{{ data.title }}</h3>
          <p>This is detailed information for {{ data.title }}</p>
        </div>
      </template>
    </witMapTwo>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mapPositions = ref([
  { left: '20%', top: '30%', title: 'Beijing' },
  { left: '40%', top: '50%', title: 'Shanghai' },
  { left: '60%', top: '40%', title: 'Guangzhou' },
  { left: '75%', top: '55%', title: 'Shenzhen' }
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `positions`            | [`Array`]       | `[]`                       | Marker position array                                     |
| `mimg`                 | [`String`]      | Built-in image             | Map background image path                                 |
| `zimg`                 | [`String`]      | Built-in image             | Marker image path                                       |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| `menu`                 | Menu content slot, receives current marker data                                   |
