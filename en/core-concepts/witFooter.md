# witFooter Footer Component %{#witFooter}%

`witFooter` is a footer component that displays system copyright information, automatically shows current year and system title, display status can be controlled through configuration.

## Usage Example %{#dome}%

```vue
<template>
  <div class="app-container">
    <main class="app-main">
      <!-- Main content area -->
    </main>
    <witFooter />
  </div>
</template>

<script lang="ts" setup>
// Component automatically gets configuration from settingsStore, no additional configuration needed
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

1. **Copyright Information**: Automatically displays current year and copyright symbol
2. **System Title**: Gets system title from `settingsStore` and displays it
3. **Display Control**: Controls component show/hide through `theme.showFooter` in `settingsStore`
4. **Responsive Design**: Adapts to different screen sizes
5. **Theme Integration**: Uses Element Plus CSS variables, supports theme switching
