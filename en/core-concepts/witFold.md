# witFold Sidebar Collapse Control %{#witFold}%

`witFold` is a sidebar collapse/expand control component, used to toggle the display state of the left menu, provides intuitive visual interaction feedback.

## Usage Example %{#dome}%

```vue
<template>
  <div class="app-container">
    <witFallBar />
    <witFold />
    <main class="app-main">
      <!-- Main content area -->
    </main>
  </div>
</template>

<script lang="ts" setup>
// Component automatically integrates with settingsStore, no additional configuration needed
</script>

<style>
.app-container {
  display: flex;
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

1. **State Management**: Component integrates with `settingsStore`, automatically syncs sidebar collapse state
2. **Visual Feedback**: Icon rotates 180 degrees when clicked, provides clear state toggle feedback
3. **Custom Styles**: Adopts modern triangle top/bottom border design, unified with sidebar style

## Usage Tips
