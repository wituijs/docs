# witAppMain Application Main Content Component %{#witAppMain}%

`witAppMain` is an application main content area component that serves as a router view container, responsible for rendering the application's main page content, and integrates with route state management to implement state updates when routes change.

## Usage Example %{#dome}%

```vue
<template>
  <witAppMain />
</template>

<script lang="ts" setup>
import witAppMain from '@/library/components/witAppMain'
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witAppMain`                    | Application main content component, serves as router view container    |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| -                               | -               | -            | Component has no custom properties                    |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -                                   | -                                 |

### Events

| Event Name                      | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -                                   | -                            |

## Features

### Router View Container
- Serves as the application's main content area, rendering matched route components
- Uses `wit-router-view` component to display page content
- Provides unified content area layout structure

### Route State Management
- Integrates route state management module, monitors route changes
- Automatically updates currently active tab state
- Dynamically sets currently active menu item
- Ensures synchronization between routes and UI state

### Layout Structure
- Adopts standard layout structure, containing `wit-app-main` and `section` containers
- Provides unified style foundation for application content
- Supports seamless integration with other layout components

:::tip
1. The component is typically used as the main content area of the application layout
2. Depends on the routing system and route state management module
3. Automatically monitors route changes and updates related states
4. As a router view container, needs to be used with Vue Router
5. Supports working with navigation menu, tabs, and other components
:::
