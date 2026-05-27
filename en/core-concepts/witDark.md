# witDark Dark Mode Toggle Component %{#witDark}%

`witDark` is a component used for system theme switching, supports switching between light mode and dark mode, providing users with a more personalized interface experience.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <el-button @click="toggleDark">Toggle Dark Mode</el-button>
    <witDark v-model="isDark" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Boolean`]     | `false`                    | Controls the dark mode toggle state, supports v-model two-way binding |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | Triggered when dark mode toggle state changes                     | New mode state (Boolean)       |

:::tip
1. Component is used to switch between light mode and dark mode, `true` means dark mode, `false` means light mode.
2. Component will automatically add or remove the `dark` class name for the page to achieve theme switching effect.
3. Can control the current theme mode through `v-model` two-way binding.
:::
