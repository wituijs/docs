# witRefresh Refresh Component %{#witRefresh}%

`witRefresh` is a component that provides page refresh functionality, triggers router view reload when clicked, and displays rotation animation effect. The component uses event bus mechanism to implement global refresh notification, supports manual click refresh and external event triggered refresh.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witRefresh />
    
    <!-- Use with other components -->
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <witRefresh /> Refresh Page
      </el-dropdown-item>
    </el-dropdown-menu>
  </div>
</template>

<script lang="ts" setup>
// Example of externally triggering refresh animation
const handleExternalRefresh = () => {
  $pub('refresh-rotate')
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| None                     | -               | -                          | Component requires no external properties                            |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| None                     | Component does not provide slots                                 |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component does not directly trigger events, communicates through event bus            | -                            |

:::tip
Component supports two refresh trigger methods:
1. Manual click: Directly click refresh icon to trigger page refresh
2. External event: Trigger refresh animation through event bus `$pub('refresh-rotate')`

Shows 500 milliseconds rotation animation during refresh, automatically returns to initial state after animation ends.

Component depends on event bus mechanism to implement page refresh functionality, need to ensure relevant event bus is configured in the project.
:::

## Features

1. **Page Refresh**: Clicking component triggers router view reload
