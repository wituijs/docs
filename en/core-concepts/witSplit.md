# witSplit Panel Split Component %{#witSplit}%

`witSplit` is a powerful panel split component used to split page content horizontally or vertically into two resizable panels. The component supports dynamically adjusting panel sizes by dragging the divider, suitable for applications with complex layouts such as code editors, data dashboards, file managers and other scenarios.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic horizontal split -->
    <witSplit
      v-model="splitRatio"
      :min="100"
      mode="horizontal"
      @getPosition="handlePosition"
    >
      <template #left>
        <div class="panel-content">Left panel content</div>
      </template>
      <template #right>
        <div class="panel-content">Right panel content</div>
      </template>
    </witSplit>
    
    <!-- Vertical split -->
    <witSplit
      v-model="verticalRatio"
      :min="150"
      mode="vertical"
      type="line"
    >
      <template #top>
        <div class="panel-content">Top panel content</div>
      </template>
      <template #bottom>
        <div class="panel-content">Bottom panel content</div>
      </template>
    </witSplit>
    
    <!-- Custom initial position -->
    <witSplit
      v-model="customRatio"
      :initPosition="200"
      :min="50"
      mode="horizontal"
      type="block"
    >
      <template #left>
        <div class="panel-content">Left panel (initial width 200px)</div>
      </template>
      <template #right>
        <div class="panel-content">Right panel</div>
      </template>
    </witSplit>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Number`]      | `0.5`                      | Split ratio, supports v-model two-way binding |
| `mode`                 | [`String`]      | `'horizontal'`             | Split mode: 'horizontal' or 'vertical' |
| `min`                  | [`Number`]      | `50`                       | Minimum panel size (px) |
| `initPosition`         | [`Number`]      | `0`                        | Initial position (px) |
| `type`                 | [`String`]      | `'line'`                   | Divider type: 'line' or 'block' |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| `left` / `top`         | Left/top panel content                                   |
| `right` / `bottom`     | Right/bottom panel content                                   |
