# witUpdate Version Update Notification %{#witUpdate}%

`witUpdate` is a version update notification component based on PWA (Progressive Web App), used to automatically detect application updates and provide a friendly update notification interface. The component automatically displays an update dialog when a new version is detected, and supports automatic update functionality.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Simple usage -->
    <witUpdate />
  </div>
</template>

<script lang="ts" setup>
// Component automatically detects updates, no additional configuration needed
</script>
```

## API

| Property Name   | Type | Default Value | Description |
| :----- | :--- | :----- | :--- |
| None | - | - | Component requires no external property configuration, automatically handles update logic |

## Slots

| Slot Name   | Description       |
| :----- | :--- |
| None | Component does not provide external slots |

## Events

| Event Name   | Description       | Parameters       |
| :----- | :--- | :--- |
| None | Component does not expose external events | - |

:::tip
1. Component implements PWA functionality based on `virtual:pwa-register/vue`, need to ensure project has PWA correctly configured
2. Component automatically detects updates after page load, and executes update operation after 3 seconds
3. Loading state is displayed during update process, dialog automatically closes after update completes
4. Component supports internationalization, button text is automatically translated based on current language environment
5. Component styles are optimized, provides modern visual effects including gradient backgrounds and icons
:::
