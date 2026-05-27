# witLottiePlayer Lottie Animation Player %{#witLottiePlayer}%

`witLottiePlayer` is a Lottie animation player component based on vue3-lottie, used to display high-quality animation effects in Vue 3 projects. The component supports local and remote Lottie JSON data, customizable animation width and height.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Use local Lottie data -->
    <witLottiePlayer
      :json-local-data="localAnimationData"
      :width="300"
      :height="300"
    />
    
    <!-- Use remote Lottie data -->
    <witLottiePlayer
      :json-remote-data="'https://assets9.lottiefiles.com/packages/lf20_suhe7qtm.json'"
      :width="400"
      :height="400"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Local Lottie animation data example
const localAnimationData = ref({
  v: "5.7.10",
  fr: 30,
  ip: 0,
  op: 90,
  w: 300,
  h: 300,
  nm: "Animation",
  ddd: 0,
  assets: [],
  layers: []
})
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witLottiePlayer`                | Lottie animation player component                    |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `jsonLocalData`                 | `Object`        | `null`       | Local Lottie JSON data                         |
| `jsonRemoteData`                | `String`        | `''`         | Remote Lottie JSON URL                         |
| `width`                         | `Number`        | `300`        | Animation width                            |
| `height`                        | `Number`        | `300`        | Animation height                            |
