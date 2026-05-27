# witHeader Top Navigation Bar %{#witHeader}%

`witHeader` is a top navigation bar component that includes system Logo, horizontal menu, and right tool area, supports dynamic route menu generation and theme style customization.

## Usage Example %{#dome}%

```vue
<template>
  <div class="app-container">
    <witHeader />
    <main class="app-main">
      <!-- Main content area -->
    </main>
  </div>
</template>

<script lang="ts" setup>
// Component will automatically get route data from routesStore and render menu
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `layout`               | [`String`]      | `'horizontal'`             | Menu layout method, currently only supports `'horizontal'`        |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| None                     | Component does not provide slots                                 |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component does not trigger external events                             | -                            |

## Features

1. **System Logo**: Integrates `wit-logo` component, displays system logo
2. **Horizontal Menu**: Implemented based on Element Plus Menu component, only supports horizontal layout
3. **Dynamic Routes**: Gets route data from `routesStore`, automatically generates menu items
4. **Menu Highlight**: Automatically highlights based on currently active menu
5. **Right Tools**: Integrates `wit-right-tools` component, provides system tool buttons
6. **Theme Adaptation**: Uses Element Plus CSS variables, supports theme switching

## Route Configuration

Menu data comes from route configuration, route objects need to contain the following meta information:

| Property Name            | Type            | Description                                           |
| :--------------------- | :-------------- | :--------------------------------------------- |
| `meta.title`           | [`String`]      | Menu item display text                                 |
| `meta.icon`            | [`String`]      | Menu item icon name                                 |
| `meta.levelHidden`     | [`Boolean`]     | Whether to hide current level, directly display child level menu             |

## Usage Tips

:::tip
1. Component depends on `routesStore` to get route data, ensure route configuration is correct
2. Currently only supports horizontal layout (`layout="horizontal"`)
3. Menu item active state is controlled by `activeMenu` in `routesStore`
4. Supports multi-level menus, submenus will display as popups
5. Component styles use CSS variables, can be customized through theme configuration
6. Right tool area integrates `wit-right-tools` component, ensure the component is correctly installed
7. Menu item click events are handled internally by `wit-menu` component, implementing route navigation
:::
