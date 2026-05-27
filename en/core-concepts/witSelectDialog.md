# witSelectDialog Selector Dialog %{#witSelectDialog}%

`witSelectDialog` is a selector dialog component based on Element Plus el-input-tag and witDataSelector, supports multiple selector types, provides tagged selection result display.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <witSelectDialog
      v-model="selectedItems"
      :selector-type="2"
      placeholder="Please select item"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedItems = ref([])

function handleChange(value) {
  console.log('Selection changed:', value)
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Array`]       | `[]`                       | Two-way binding value for selection result                           |
| `selectorType`         | [`Number`]      | `2`                        | Selector type: 2-department, 9-pharmacist, 4-doctor             |
| `...ElInputTag.props`  | [`Object`]      | -                          | Inherits all properties from Element Plus InputTag          |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| -                      | No custom slots                                   |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | Triggered when selection result changes                               | New selection result array (Array)     |
| `change`               | Triggered when selection result changes                               | New selection result array (Array)     |
