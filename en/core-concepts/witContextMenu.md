# witContextMenu Context Menu %{#witContextMenu}%

`witContextMenu` is a context menu component based on `@imengyu/vue3-context-menu`, provides rich menu options and flexible configuration. The component supports menu grouping, dividers, custom icons and other features, can be used to implement right-click menus, dropdown menus and other interaction scenarios.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <el-button
      @contextmenu.prevent="onContextMenu"
      type="primary"
    >
      Right-click me to open context menu
    </el-button>
    
    <!-- Context menu component -->
    <witContextMenu
      v-model:show="showContextMenu"
      :options="menuOptions"
      :x="menuX"
      :y="menuY"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { MenuOptions } from '@imengyu/vue3-context-menu'

const showContextMenu = ref(false)
const menuX = ref(0)
const menuY = ref(0)

// Menu options configuration
const menuOptions = reactive<MenuOptions>({
  items: [
    {
      label: 'Copy',
      onClick: () => {
        console.log('Copy operation')
        showContextMenu.value = false
      }
    },
    {
      label: 'Paste',
      onClick: () => {
        console.log('Paste operation')
        showContextMenu.value = false
      }
    }
  ]
})

const onContextMenu = (e: MouseEvent) => {
  menuX.value = e.clientX
  menuY.value = e.clientY
  showContextMenu.value = true
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `show`                 | [`Boolean`]     | `false`                    | Whether to show menu                           |
| `options`              | [`Object`]      | `{}`                       | Menu options configuration                           |
| `x`                    | [`Number`]      | `0`                        | Menu X position                           |
| `y`                    | [`Number`]      | `0`                        | Menu Y position                           |
