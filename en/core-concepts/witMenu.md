# witMenu Dynamic Menu Component %{#witMenu}%

`witMenu` is a dynamic menu component that automatically renders menu structure based on route configuration, supports nested menus and dynamic component loading.

## Usage Example %{#demo}%

```vue
<template>
  <div class="app-menu">
    <!-- Root menu -->
    <witMenu v-for="route in routes" :key="route.path" :item="route" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.options.routes.filter(route => !route.meta?.hidden)
</script>
```

## API

### Properties

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `item`                 | [`Object`]      | -                          | Route configuration object, required field                           |
| `layout`               | [`String`]      | `''`                       | Layout type, used to control menu display method                 |

### Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| No available slots             | -                                              | Component is fully implemented internally, does not provide external slots                 |

### Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| No custom events           | -                                              | -                            | Component manages routes through Vue Router, does not directly expose events |

## Features

### 1. Dynamic Component Selection
- Automatically selects rendering `witSubMenu` or `witMenuItem` component based on route configuration
- If route has children and children are not hidden, renders as submenu component
- Otherwise renders as menu item component

### 2. Nested Menu Support
- Supports unlimited levels of nested menus
- Implements nested menu rendering through recursive self-calling
- Automatically handles display and hiding of child routes

### 3. Route Integration
- Deep integration with Vue Router
- Uses route configuration directly as menu data source
- Supports route's `meta.hidden` property to control menu display

### 4. Automatic Component Loading
- Uses Vite's `import.meta.glob` to dynamically load menu components
- Automatically recognizes and registers `witSubMenu` and `witMenuItem` components
- Supports dynamic updates and hot reloading of components

:::tip
1. **Route Configuration Requirements**:
   - Menu data comes directly from route configuration
   - Supports `meta.hidden` property to control menu display/hide
   - Nested menus are implemented through route's `children` property

2. **Component Structure**:
   - Component needs to be used with `witSubMenu` and `witMenuItem` components
   - These two child components need to be placed in the same directory

3. **Layout Support**:
   - Layout information can be passed through `layout` property
   - Child components can adjust display style based on layout information

4. **Performance Optimization**:
   - Uses `eager: true` option for component preloading
   - Recursive rendering automatically filters hidden child routes
:::
