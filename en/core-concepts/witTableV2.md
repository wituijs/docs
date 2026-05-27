# witTableV2 High Performance Virtual Table %{#witTableV2}%

`witTableV2` is a high-performance virtual table component based on Element Plus el-table-v2, supports auto-resize, custom column settings, empty data handling and other features, suitable for table display in large data volume scenarios. The component provides concise API and flexible configuration options to meet various complex table requirements.

## Usage Example %{#dome}%

```vue
<template>
  <div class="table-container">
    <witTableV2
      table-name="demo-table"
      :table-data="tableData"
      :columns="columns"
      :show-overflow="false"
      :max-height="600"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Table data
const tableData = ref([
  {
    id: 1,
    name: 'John',
    age: 25,
    address: 'Beijing Chaoyang District'
  },
  {
    id: 2,
    name: 'Jane',
    age: 30,
    address: 'Shanghai Pudong New Area'
  },
  // More data...
])

// Column configuration
const columns = ref([
  {
    key: 'id',
    title: 'ID',
    width: 80,
    align: 'center'
  },
  {
    key: 'name',
    title: 'Name',
    width: 120
  },
  {
    key: 'age',
    title: 'Age',
    width: 80,
    align: 'center'
  },
  {
    key: 'address',
    title: 'Address',
    width: 200
  }
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `tableName`            | [`String`]      | `''`                       | Table name (for column settings cache)                                     |
| `tableData`            | [`Array`]       | `[]`                       | Table data                                       |
| `columns`              | [`Array`]       | `[]`                       | Column configuration                                       |
| `showOverflow`         | [`Boolean`]     | `true`                     | Whether to show overflow tooltip                               |
| `maxHeight`            | [`Number`]      | `400`                      | Maximum table height                                       |
