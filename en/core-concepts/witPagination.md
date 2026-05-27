# witPagination Pagination Component %{#witPagination}%

`witPagination` is one of the most used core components in backend systems. To unify list area styles and interactions, it's usually used in combination with witSearch/witTable. By configuring simple Props attributes, you can render beautiful pagination component views. [View Demo>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page2)

## Usage Example %{#dome}%

```vue
<template>
  <div class="test-container auto-height-container">
    <div class="app-pagination">
      <wit-pagination
        :current-page="searchForm.pageNum"
        :page-size="searchForm.pageSize"
        :total="searchForm.total"
        prev-text="Previous"
        next-text="Next"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Test-page2',
})

const searchForm = ref<any>({
  pageNum: 1, // Current page
  pageSize: 20, // Items per page
  total: 200, // Total items
}) // Assemble form data

const handleSizeChange = (value: number) => {
  searchForm.value.pageNum = 1
  searchForm.value.pageSize = value
}

const handleCurrentChange = (value: number) => {
  searchForm.value.pageNum = value
}
</script>
```

The witPagination pagination component inherits all properties and methods from the element-plus el-pagination pagination component.

## API

| Property Name | Type | Description |
| :------ | :------ | :------ |
| `page-size` | [`number`] | Number of items displayed per page |
| `current-page` | [`number`] | Current page number |
| `total` | [`number`] | Total number of items |
| `prev-text` | [`string`] | Text for previous page button, replaces icon |
| `next-text` | [`string`] | Text for next page button, replaces icon |
| `@current-change` | [`Function`] | Triggered when current-page changes |
| `@size-change` | [`Function`] | Triggered when page-size changes |

:::tip
The usage example only shows some fields. There are more property fields and components not explained one by one. This framework is not encrypted, all source code has comments, please check the source code for more comprehensive information!
:::
