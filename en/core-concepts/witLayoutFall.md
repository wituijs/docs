# witLayoutFall Fall Layout Component %{#witLayoutFall}%

`witLayoutFall` is a fall layout component based on Element Plus, provides complete page layout structure, includes fall-style navigation bar, header navigation, tab bar and main content area, supports flexible layout configuration and responsive design.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witLayoutFall />
    
    <!-- Custom configuration -->
    <witLayoutFall
      :collapse="false"
      :fixedHeader="true"
      :showTabs="true"
    />
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component automatically integrates with system
</script>
```

## API

### Component

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `collapse`             | [`Boolean`]     | `false`                    | Whether to collapse sidebar                                 |
| `fixedHeader`          | [`Boolean`]     | `true`                     | Whether to fix header navigation and tab bar                       |
| `showTabs`             | [`Boolean`]     | `true`                     | Whether to show tab bar                                 |

### Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| -                      | No slot configuration                                     |

### Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| -                      | No directly exposed events                                 | -                            |

## Features

1. **Fall-style Navigation**: Provides unique fall-style navigation menu
2. **Responsive Design**: Adapts to different screen sizes
3. **Flexible Configuration**: Supports multiple layout options
