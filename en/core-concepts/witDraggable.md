# witDraggable Draggable Sort Component %{#witDraggable}%

`witDraggable` is a draggable sort component based on Sortable.js, suitable for Vue 3 projects. The component supports list drag sorting, add, remove and other operations, provides rich events and configuration options, can be used to implement drag sorting interaction functionality.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <witDraggable
      v-model="listData"
      :item-key="'id'"
      :tag="'ul'"
    >
      <li v-for="item in listData" :key="item.id">
        {{ item.name }}
      </li>
    </witDraggable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// List data
const listData = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' }
])
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witDraggable`                  | Draggable sort main component                    |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `list`                          | `Array`         | `null`       | Data list (choose one with modelValue)    |
| `modelValue`                    | `Array`         | `null`       | Data list (v-model two-way binding)        |
| `itemKey`                       | `String/Function` | None           | Unique identifier for list items, required              |
