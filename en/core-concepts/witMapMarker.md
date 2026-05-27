# witMapMarker Map Marker Component %{#witMapMarker}%

`witMapMarker` is a map marker component developed based on Vue 3 and TypeScript, mainly used to display interactive markers on maps, with the following features:
- Supports custom marker icons
- Shows popup menu on mouse hover
- Provides smooth zoom animation effects
- Supports custom marker position (via left and top properties)
- Supports multiple popup directions (top, bottom, left, right)
- Communicates with parent component, supports external control of show/hide state

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarker
      left="20%"
      top="30%"
    >
      <template #menu>
        <div class="marker-menu">
          <h4>Marker Information</h4>
          <p>This is a map marker</p>
        </div>
      </template>
    </witMapMarker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `left`                 | [`String`]      | `'0'`                      | Marker left position (percentage or px)                                     |
| `top`                  | [`String`]      | `'0'`                      | Marker top position (percentage or px)                                     |
| `placement`            | [`String`]      | `'top'`                    | Popup direction: 'top', 'bottom', 'left', 'right'                           |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| `menu`                 | Popup menu content                                   |
