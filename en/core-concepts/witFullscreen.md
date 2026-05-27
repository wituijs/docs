# witFullscreen Fullscreen Toggle Button %{#witFullscreen}%

`witFullscreen` is a fullscreen toggle button component, used to control the fullscreen display state of the page, providing intuitive icon feedback.

## Usage Example %{#dome}%

```vue
<template>
  <div class="app-toolbar">
    <!-- Use alone -->
    <witFullscreen />
    
    <!-- Use with other tool buttons -->
    <div class="tool-group">
      <witFullscreen />
      <witDark />
      <witErrorLog />
    </div>
  </div>
</template>

<script lang="ts" setup>
// Component requires no additional configuration, automatically manages fullscreen state
</script>

<style>
.app-toolbar {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: #f5f7fa;
}

.tool-group {
  display: flex;
  gap: 5px;
}
</style>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| None                     | -               | -                          | Component requires no additional property configuration                           |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| None                     | Component does not provide slots                                 |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component does not trigger external events                             | -                            |

## Features

1. **Fullscreen State Toggle**: Click button to toggle page fullscreen display state
2. **Icon Feedback**: Displays different icons based on current state
   - Non-fullscreen state: Shows fullscreen icon (`ri-fullscreen-fill`)
   - Fullscreen state: Shows exit fullscreen icon (`ri-fullscreen-exit-fill`)
3. **Auto Management**: Uses `useFullscreen` to automatically manage fullscreen state
4. **Responsive Design**: Adapts to different screen sizes and themes

## Usage Tips

:::tip
1. Component depends on `@vueuse/core`'s `useFullscreen` functionality, ensure this dependency is installed
2. Clicking the button will automatically toggle the page's fullscreen state
3. Component styles use CSS variables, can be customized through theme configuration
4. Usually used in combination with other tool buttons (such as `witDark`, `witErrorLog`)
5. Fullscreen state is shared between browser tabs but does not affect other applications
6. Some browsers may require user interaction to trigger fullscreen functionality
:::
