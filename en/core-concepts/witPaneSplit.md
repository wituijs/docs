# witPaneSplit Panel Split Component %{#witPaneSplit}%

`witPaneSplit` is a panel split component developed based on Vue 3, supports horizontal and vertical split modes, can adjust the size ratio of two panels by dragging, suitable for scenarios that require split layout, such as code editors, document readers, etc.

## Usage Example %{#dome}%

### Basic Usage (Vertical Split)

```vue
<template>
  <div style="height: 400px;">
    <witPaneSplit>
      <template #one>
        <div class="panel">Left Panel</div>
      </template>
      <template #two>
        <div class="panel">Right Panel</div>
      </template>
    </witPaneSplit>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.panel {
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

#one {
  background-color: #f0f2f5;
}

#two {
  background-color: #ffffff;
}
</style>
```

### Horizontal Split

```vue
<template>
  <div style="height: 400px;">
    <witPaneSplit :horizontal="true">
      <template #one>
        <div class="panel">Top Panel</div>
      </template>
      <template #two>
        <div class="panel">Bottom Panel</div>
      </template>
    </witPaneSplit>
  </div>
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `horizontal`           | [`Boolean`]     | `false`                    | Whether to use horizontal split mode                             |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| `one`                  | First panel content (left/top)                                   |
| `two`                  | Second panel content (right/bottom)                                   |
