# witLayoutColumn Column Layout Component %{#witLayoutColumn}%

`witLayoutColumn` is a column layout component based on Element Plus, provides complete page layout structure, includes column navigation bar, header navigation, tab bar and main content area, supports multiple style themes and flexible layout configuration.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witLayoutColumn />
    
    <!-- Custom configuration -->
    <witLayoutColumn
      :collapse="false"
      :fixedHeader="true"
      :showTabs="true"
      :showHeader="true"
    />
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component automatically integrates with settings system
</script>
```

## API

### Component

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `collapse`             | [`Boolean`]     | `false`                    | Whether to collapse sidebar                                 |
| `fixedHeader`          | [`Boolean`]     | `true`                     | Whether to fix header navigation and tab bar                       |
| `showTabs`             | [`Boolean`]     | `true`                     | Whether to show tab bar                                 |
| `showHeader`           | [`Boolean`]     | `true`                     | Whether to show header navigation                               |

### Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| -                      | No slot configuration                                     |

### Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| -                      | No directly exposed events                                 | -                            |
