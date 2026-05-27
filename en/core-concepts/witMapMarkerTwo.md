# witMapMarkerTwo Map Marker Component (Version 2) %{#witMapMarkerTwo}%

`witMapMarkerTwo` is a lightweight map marker component developed based on Vue 3 and TypeScript, a simplified version of witMapMarker, with the following features:
- Supports custom marker icons
- Has smooth zoom animation effect on mouse hover
- Supports custom marker position (via left and top properties)
- Provides index identifier for parent component to identify and control
- Communicates with parent component, supports external control of show/hide state
- Lightweight design, focuses on core marker functionality

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarkerTwo
      left="20%"
      top="30%"
      @mouseenterfun="handleMarkerEnter"
      @mouseLeavefun="handleMarkerLeave"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

function handleMarkerEnter(index) {
  console.log('Mouse entered marker:', index)
}

function handleMarkerLeave(index) {
  console.log('Mouse left marker:', index)
}
</script>
```

### Custom Icon and Index

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarkerTwo
      left="40%"
      top="50%"
      :zimg="customMarkerImage"
      :indexkey="1"
      @mouseenterfun="handleMarkerEnter"
      @mouseLeavefun="handleMarkerLeave"
    />
  </div>
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `left`                 | [`String`]      | `'0'`                      | Marker left position (percentage or px)                                     |
| `top`                  | [`String`]      | `'0'`                      | Marker top position (percentage or px)                                     |
| `zimg`                 | [`String`]      | Built-in image             | Marker image path                                       |
| `indexkey`             | [`Number`]      | `0`                        | Marker index identifier                                       |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `mouseenterfun`        | Triggered when mouse enters marker                               | Marker index                            |
| `mouseLeavefun`        | Triggered when mouse leaves marker                               | Marker index                            |
