# witDialog Dialog Component %{#witDialog}%

`witDialog` is an enhanced dialog component based on Element Plus Dialog, providing extended features like fullscreen, loading state, theme styles, supports dragging and animation effects, providing users with a more flexible and beautiful dialog experience.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <el-button type="primary" @click="showDialog = true">
      Open Dialog
    </el-button>
    
    <witDialog
      v-model="showDialog"
      title="Dialog Title"
      width="500px"
      :loading="loading"
      theme="primary"
    >
      <div>
        <p>Dialog content area</p>
        <p>Can place forms, tables, or any content</p>
      </div>
      <template #footer>
        <el-button @click="showDialog = false">Cancel</el-button>
        <el-button type="primary" @click="handleConfirm">Confirm</el-button>
      </template>
    </witDialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showDialog = ref(false)
const loading = ref(false)

const handleConfirm = () => {
  loading.value = true
  // Simulate async operation
  setTimeout(() => {
    loading.value = false
    showDialog.value = false
  }, 2000)
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Boolean`]     | `false`                    | Controls dialog visibility, supports v-model two-way binding |
| `title`                | [`String`]      | `''`                       | Dialog title                                     |
| `width`                | [`String`]      | `'50%'`                    | Dialog width                                     |
| `showClose`            | [`Boolean`]     | `true`                     | Whether to show close button                               |
| `showFullscreen`       | [`Boolean`]     | `true`                     | Whether to show fullscreen button                               |
| `loading`              | [`Boolean`]     | `false`                    | Whether to show loading state                               |
| `animated`             | [`Boolean`]     | `true`                     | Whether to enable animation effects                               |
| `theme`                | [`String`]      | `''`                       | Dialog theme, optional values: 'default', 'plain', 'primary' |
| `draggable`            | [`Boolean`]     | `true`                     | Whether to support dragging                                   |
| `overflow`             | [`Boolean`]     | `true`                     | Whether to allow content overflow                               |
| `alignCenter`          | [`Boolean`]     | `true`                     | Whether to center vertically                               |
| `closeOnClickModal`    | [`Boolean`]     | `false`                    | Whether clicking mask closes dialog                         |
| `closeOnPressEscape`   | [`Boolean`]     | `false`                    | Whether pressing ESC key closes dialog                        |
| `...ElDialog.props`    | [`Object`]      | -                          | Inherits all properties of Element Plus Dialog            |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| `default`              | Dialog content area                                 |
| `header`               | Custom dialog header                               |
| `footer`               | Custom dialog footer button area                       |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | Triggered when dialog visibility changes                       | New visibility state (Boolean)       |
| `...ElDialog.events`   | Inherits all events of Element Plus Dialog            | -                            |

:::tip
1. Double-clicking the dialog title can toggle fullscreen state, or click the fullscreen button in the top right corner.
2. Supports setting different theme styles through the `theme` property.
3. The component has dragging enabled by default, can be disabled via `draggable` property.
4. Loading state is controlled via `loading` property, shows loading animation in dialog content area.
5. Inherits all properties of Element Plus Dialog, such as: `center`, `modal`, `lockScroll`, etc., can be flexibly configured as needed.
:::
