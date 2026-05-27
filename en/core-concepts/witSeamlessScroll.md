# witSeamlessScroll Seamless Scroll %{#witSeamlessScroll}%

`witSeamlessScroll` is a seamless scroll component based on Vue 3, supports custom scroll speed and direction, provides mouse hover pause functionality, uses requestAnimationFrame to optimize animation performance.

## Usage Example %{#dome}%

```vue
<template>
  <div style="height: 200px; width: 300px; border: 1px solid #eee;">
    <witSeamlessScroll :speed="200" direction="up">
      <div v-for="item in list" :key="item" style="padding: 10px; border-bottom: 1px dashed #eee;">
        {{ item }}
      </div>
    </witSeamlessScroll>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const list = ref([
  'List item 1',
  'List item 2',
  'List item 3',
  'List item 4',
  'List item 5',
  'List item 6',
  'List item 7',
  'List item 8',
  'List item 9',
  'List item 10'
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `speed`                | [`Number`]      | `180`                      | Scroll speed, higher value means faster speed                     |
| `direction`            | [`String`]      | `'up'`                     | Scroll direction, options: 'up' (upward), 'down' (downward) |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| `default`              | Scroll content slot                                 |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| -                      | No custom events                                 | -                            |
