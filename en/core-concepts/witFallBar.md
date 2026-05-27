# witFallBar Waterfall Menu %{#witFallBar}%

`witFallBar` is a sidebar waterfall menu component based on @opentiny/vue FallMenu, supports up to three-level menu structure, provides collapse state, internationalization, fullscreen toggle and other features, suitable for building complex navigation systems.

## Usage Example %{#dome}%

```vue
<template>
  <div class="app-container">
    <witFallBar />
  </div>
</template>

<script lang="ts" setup>
// Component automatically gets route data from routesStore and renders menu
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
}
</style>
```

## Features

- **Three-level Menu Support**: Supports up to three-level menu structure, provides clear navigation hierarchy
- **Collapse State**: Supports sidebar collapse, saves screen space
- **Internationalization Support**: Built-in translation functionality, supports multi-language environments
- **Fullscreen Toggle**: Supports triggering fullscreen mode on menu item click
- **Menu Icons**: Supports configuring icons for menu items
- **Badges and Dots**: Supports displaying badge numbers and dot notifications on menu items
- **External Links**: Supports opening external links, can configure to open in new window
- **Mobile Adaptation**: Automatically collapses menu on mobile devices

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `collapse`             | [`Boolean`]     | `false`                    | Controls whether menu is collapsed                               |
| `...FallMenu.props`    | [`Object`]      | -                          | Inherits all properties from @opentiny/vue FallMenu         |

## Slots

| Slot Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `level1`               | Custom first-level menu item rendering                           | `slotScope`: Object containing route information |
| `level2`               | Custom second-level menu item rendering                           | `slotScope`: Object containing route information |
| `level3`               | Custom third-level menu item rendering                           | `slotScope`: Array of objects containing route information |
