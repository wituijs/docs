# witSideBar Sidebar Menu %{#witSideBar}%

`witSideBar` is a sidebar menu component based on Element Plus Menu, supports vertical layout, collapse/expand functionality and route menu display in different layout modes. The component provides smooth scrolling experience, responsive design and custom style support, suitable for navigation needs of various management systems.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic sidebar menu -->
    <wit-side-bar />
    
    <!-- Sidebar menu with specified layout mode -->
    <wit-side-bar layout="comprehensive" />
  </div>
</template>

<script lang="ts" setup>
// Component automatically gets data from routes and settings
</script>
```

## API

### Component

```vue
<wit-side-bar
  :layout="vertical"
/>
```

### Properties

| Property Name   | Type      | Default Value    | Description                           |
| :------- | :-------- | :-------- | :----------------------------- |
| `layout` | `String`  | `vertical`| Layout mode, options: 'vertical', 'comprehensive' |

### Slots

| Slot Name   | Description       |
| :------- | :--------- |
| None       | No custom slots |

### Events

| Event Name   | Description       | Parameters       |
| :------- | :--------- | :--------- |
| None       | No custom events | -          |

## Features

1. **Route Menu Display**
   - Supports displaying different route menus based on layout mode
   - Comprehensive layout mode shows partial routes
   - Vertical layout mode handles top-level route display logic
   - Automatically expands specified menu nodes

2. **Collapse/Expand Functionality**
   - Supports sidebar collapse and expand
