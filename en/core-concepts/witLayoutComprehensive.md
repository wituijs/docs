# witLayoutComprehensive Comprehensive Layout Component %{#witLayoutComprehensive}%

`witLayoutComprehensive` is a comprehensive layout component based on Element Plus, provides complete page layout structure, includes sidebar, header navigation, tab bar and main content area, supports flexible layout configuration and responsive design.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witLayoutComprehensive />
    
    <!-- Custom configuration -->
    <witLayoutComprehensive
      :collapse="false"
      :fixedHeader="true"
      :showTabs="true"
      :device="desktop"
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
| `device`               | [`String`]      | `'desktop'`                | Device type, for responsive design                       |

### Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| -                      | No slot configuration                                     |

### Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| -                      | No directly exposed events                                 | -                            |
