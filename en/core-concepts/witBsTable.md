# witBsTable Table %{#witBsTable}%

`witBsTable` is a table component based on Element Plus, designed for dashboard data display, supports auto-scroll, custom rendering and special style effects, suitable for various data reports and monitoring pages.

## Usage Example %{#dome}%

```vue
<template>
  <div style="height: 500px;">
    <!-- Basic usage -->
    <witBsTable
      :tableData="tableData"
      :columns="columns"
    />
    
    <!-- Custom column rendering -->
    <witBsTable
      :tableData="tableData"
      :columns="customColumns"
    >
      <!-- Custom cell content -->
      <template #status="{ row }">
        <el-tag :type="row.status === 'success' ? 'success' : 'warning'">
          {{ row.status === 'success' ? 'Completed' : 'In Progress' }}
        </el-tag>
      </template>
      
      <!-- Custom header -->
      <template #nameHeader="{ column }">
        <span>{{ column.label }} <el-icon><ArrowUp /></el-icon></span>
      </template>
    </witBsTable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Basic table data
const tableData = ref([
  { id: 1, name: 'Drug A', count: 120, status: 'success' },
  { id: 2, name: 'Drug B', count: 80, status: 'warning' },
  { id: 3, name: 'Drug C', count: 150, status: 'success' }
])

// Basic column configuration
const columns = ref([
  { prop: 'id', label: 'ID', width: 80 },
  { prop: 'name', label: 'Name', width: 120 },
  { prop: 'count', label: 'Count', width: 100 },
  { prop: 'status', label: 'Status', width: 100 }
])
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `tableData`            | [`Array`]       | `[]`                       | Table data array                                     |
| `columns`              | [`Array`]       | `[]`                       | Column configuration array                                     |
