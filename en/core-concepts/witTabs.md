# witTabs Tab Component %{#witTabs}%

`witTabs` is a tab component based on Element Plus, used to manage visited route pages, supports multiple style themes, tab operations, and right-click menu functionality, deeply integrated with the routing system, providing a smooth page switching experience.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witTabs />
    
    <!-- Specify layout -->
    <witTabs layout="vertical" />
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component automatically integrates with routing system
</script>
```

## API

### Component

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `layout`               | [`String`]      | `''`                       | Layout type, used to adapt to different page layouts               |

### Events

Component interacts through routing system and state management, does not directly expose event interfaces.

## Features

### 1. Route Integration
- Automatically tracks route pages visited by users
- Supports tab management when route parameters change
- Automatically restores tab state on page refresh

### 2. Tab Operations
- **Click to Switch**: Click tab to quickly switch to corresponding route page
- **Close Tab**: Supports closing individual tabs (except pinned tabs)
- **Right-click Menu**: Provides rich right-click menu operations:
  - Refresh current tab
  - Close other tabs
  - Close left tabs
  - Close right tabs
  - Close all tabs

### 3. Multiple Style Themes
Component supports four tab bar styles, controlled through global configuration `theme.tabsBarStyle`:
- `card`: Card-style tabs
- `smart`: Smart-style tabs
- `smooth`: Smooth-style tabs
- `rect`: Rectangular tabs

### 4. Pinned Tabs
Pinned tabs can be set through route configuration `meta.noClosable: true`, users cannot close them.

### 5. Dropdown Menu
When there are too many tabs, provides dropdown menu for quick access to all tabs.

## Tab Management Logic

1. **Initialization**: When component mounts, automatically adds all route tabs configured as `noClosable`
2. **Route Listening**: Listens for route changes, automatically adds newly visited route tabs
3. **Tab Switching**: When clicking a tab, if it's not the currently active route, navigates to it
4. **Tab Closing**:
   - When closing current tab, automatically navigates to last visited tab
   - When closing other tabs, keeps current tab and pinned tabs
5. **Page Refresh**: Listens for page unload events, saves tab state, restores on page reload

## Style Structure

Component uses Flex layout, mainly contains the following parts:
- `wit-tabs`: Main container
- `wit-tabs-content`: Tab content area
- `wit-tabs-more`: More tabs dropdown button
- `contextmenu`: Right-click menu

Different style themes are distinguished through `wit-tabs-content-{style}` class names, achieving different visual effects.

:::tip
1. Component is deeply integrated with Vue Router, no need to manually manage tab data
2. Tab bar style can be modified through global configuration `settingsStore.theme.tabsBarStyle`
3. Pinned tabs need to set `meta.noClosable: true` in route configuration
4. Component provides rich tab operation features, enhancing user experience
5. Supports quick tab management operations through right-click menu
:::
