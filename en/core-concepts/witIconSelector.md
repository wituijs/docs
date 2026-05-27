# witIconSelector Icon Selector %{#witIconSelector}%

`witIconSelector` is an icon selector component built based on Vue 3 and Element Plus, provides rich icon library, search functionality and pagination display, helps users quickly select needed icons.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div class="icon-selector-container">
    <wit-icon-selector @handle-icon="handleSelectIcon" />
  </div>
</template>

<script lang="ts" setup>
import { witIconSelector } from './plugins/witIconSelector'

// Handle icon selection event
const handleSelectIcon = (iconName) => {
  console.log('Selected icon:', iconName)
  // Handle icon selection logic
}
</script>

<style scoped>
.icon-selector-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witIconSelector`               | Icon selector component, provides icon search and selection functionality |

### Properties

| Property Name                  | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `modelValue`                    | `String`        | `'ri-24-hours-fill'` | Currently selected icon name                  |
| `placeholder`                   | `String`        | `''`         | Search box placeholder                        |
| `pageSize`                      | `Number`        | `20`         | Number of icons displayed per page                  |
| `layout`                        | `String`        | `'total, prev, next'` | Pagination layout                            |

### Events

| Event Name                  | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `handle-icon`                   | Triggered when icon is selected                  | Selected icon name (String)            |
