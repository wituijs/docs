# witTheme Theme Switch Component %{#witTheme}%

`witTheme` is a component used to open the theme settings panel, providing a simple icon button that triggers the display of the theme settings panel when clicked, making it easy for users to switch system theme styles.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witTheme />
    
    <!-- Custom container -->
    <div class="custom-theme-container">
      <witTheme />
    </div>
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component will automatically trigger theme settings panel
</script>
```

## API

### Component

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| -                      | -               | -                          | No additional property configuration                                 |

### Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| -                      | No slot configuration                                     |

### Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| -                      | No directly exposed events                                 | -                            |

## Features

### 1. Theme Settings Entry
The component provides an intuitive icon button as the entry point for theme settings, users can click to open the theme settings panel.

### 2. Event Driven
When the component is clicked, it publishes the `wit-vite-open-theme` event through the `$pub` method, and the system opens the theme settings panel after listening for this event.

### 3. Style Adaptation
The component uses Flex layout and centering styles, ensuring the icon is centered in the container, adapting to different layout environments.

## Implementation Principle

The component communicates with the theme settings system through the publish/subscribe pattern:
1. User clicks the theme icon button
2. Component calls `$pub('wit-vite-open-theme')` to publish the theme open event
3. Modules listening for this event in the system (usually theme settings panel related components) receive the event and display the theme settings panel

## Style Structure

The component adopts a simple style design:
- Uses Flex layout to center the icon
- Applies `right-tool-box`, `flex`, and `all-center` class names
- Icon uses `ri-t-shirt-line`, representing theme-related functionality

:::tip
1. Component needs to be used with the system's theme settings module, ensure corresponding event listeners exist
2. Can adjust component display position and style through custom container class names
3. Component icon uses Element Plus's icon system, can be replaced as needed
:::
