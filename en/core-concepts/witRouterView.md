# witRouterView Router View Component %{#witRouterView}%

`witRouterView` is an enhanced router view component that integrates page switching animation, page cache management, progress bar display and other features, supports dynamic page meta information updates, suitable for single-page applications that need to optimize user experience.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Router view component -->
    <witRouterView />
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component automatically handles route rendering
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witRouterView`                 | Enhanced router view component, supports page caching and switching animation |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| -                               | -               | -            | This component requires no property configuration                  |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -               | -            | This component requires no method calls                  |

### Events

| Event Name                      | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -               | -            | This component does not trigger custom events            |

## Features

### Router View Rendering
- Based on Vue Router's `router-view` component
- Supports dynamic component rendering
- Automatically handles route parameter changes

### Page Switching Animation
- Supports configuring page switching transition effects
- Uses `transition` component to implement animation
- Transition mode is `out-in` (out first, then in)
- Animation name obtained from theme configuration

### Page Cache Management
- Integrates `keep-alive` to implement page caching
