# witBallSuspension Floating Ball %{#witBallSuspension}%

`witBallSuspension` is a floating ball animation component based on Pixi.js and GSAP, used to create ball displays with animation effects. The component supports two types of balls: ordinary randomly moving small balls and text balls that float up and down, can be used for data visualization or decorative effects. [View Component Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs) [View Dashboard Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/thqysjgpt)

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witBallSuspension
    :ball="ballConfig"
    width="100%"
    height="400px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { witBallSuspension } from '@wit-ui/components'

// Sample configuration
const ballConfig = ref({
  ballimg: [
    { img: '/path/to/ball1.png', diameter: 20 },
    { img: '/path/to/ball2.png', diameter: 15 }
  ],
  ballArry: [
    {
      x: 100,
      y: 100,
      width: 80,
      height: 80,
      img: '/path/to/text-ball.png',
      name: 'Sample Text',
      offset: 20,
      wordWrapWidth: 50
    }
  ]
})
</script>
```

### Custom Size

```vue
<template>
  <witBallSuspension
    :ball="ballConfig"
    width="500px"
    height="300px"
  />
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `ball`                 | [`Object`]      | `{}`                       | Ball configuration object                                     |
| `width`                | [`String`]      | `'100%'`                   | Component width                                       |
| `height`               | [`String`]      | `'400px'`                  | Component height                                       |
