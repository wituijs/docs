# witMagnifier Image Magnifier %{#witMagnifier}%

`witMagnifier` is an image magnifier component developed based on Vue 3, supports mouse hover to zoom in and view image details, provides internal zoom and external zoom two modes, suitable for product image display, image detail viewing and other scenarios.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <h3>Basic Usage (Internal Zoom)</h3>
    <wit-magnifier :url="imageUrl" :width="200" type="circle" />
    
    <h3>External Zoom</h3>
    <wit-magnifier 
      :url="imageUrl" 
      :width="200" 
      :outZoomer="true" 
      :scale="3"
    />
    
    <h3>Custom Zoom Level</h3>
    <wit-magnifier :url="imageUrl" :width="200" :scale="2" />
    
    <h3>Square Magnifier</h3>
    <wit-magnifier :url="imageUrl" :width="200" type="square" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import witMagnifier from 'path/to/witMagnifier'

const imageUrl = 'https://example.com/image.jpg'
</script>
```

## API

### Properties

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `url`                  | [`String`]      | `''`                       | Original image URL                                   |
| `highUrl`              | [`String`]      | `''`                       | HD image URL (displayed when zoomed)                 |
| `width`                | [`Number`]      | `168`                      | Magnifier width                                     |
| `height`               | [`Number`]      | `-1`                       | Magnifier height, defaults to same as width                     |
| `type`                 | [`String`]      | `'square'`                 | Magnifier type, options: 'square', 'circle'         |
| `zoomerStyle`          | [`Object`]      | `{}`                       | Custom magnifier style                               |
| `outZoomerStyle`       | [`Object`]      | `{}`                       | Custom external magnifier style                           |
| `scale`                | [`Number`]      | `2`                        | Zoom level                                       |
