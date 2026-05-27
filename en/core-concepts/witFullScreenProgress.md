# witFullScreenProgress Fullscreen Progress Indicator %{#witFullScreenProgress}%

`witFullScreenProgress` is a fullscreen overlay progress indicator component built based on Vue 3 and Element Plus, used to provide visual feedback during time-consuming operations such as data loading, file import, etc. The component supports auto-increment progress, custom tip text and error state display.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <el-button @click="startProgress">Start Loading</el-button>
    <el-button @click="stopProgress">Complete Loading</el-button>
    <el-button @click="errorProgress">Loading Error</el-button>
    
    <wit-full-screen-progress ref="progressRef" :tip="customTip" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { WitFullScreenProgress } from './plugins/witFullScreenProgress'

const progressRef = ref()
const customTip = ref('Processing data, please wait...')

// Start progress
const startProgress = () => {
  progressRef.value?.start()
}

// Complete progress
const stopProgress = () => {
  progressRef.value?.stop()
}

// Show error
const errorProgress = () => {
  progressRef.value?.error()
}
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `WitFullScreenProgress`         | Fullscreen progress indicator component                  |

### Properties

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `tip`                  | [`String`]      | `'Loading...'`             | Tip text to display                                       |

### Methods

| Method Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `start`                | Start progress indicator                               | -                            |
| `stop`                 | Complete progress indicator                               | -                            |
| `error`                | Show error state                               | -                            |
