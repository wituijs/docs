# witPagination 分页组件 %{#witPagination}%

`witPagination`是后台系统中用的最多的核心组件之一，为了统一列表区域样式与交互，通常与witSeach/witTable组合使用，通过配置简单的Props属性配置就能渲染出精美的分页组件视图。[查看效果>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page2)

## 用法实列 %{#dome}%

```vue
<template>
  <div class="test-container auto-height-container">
    <div class="app-pagination">
      <wit-pagination
        :current-page="searchForm.pageNum"
        :page-size="searchForm.pageSize"
        :total="searchForm.total"
        prev-text="上一页"
        next-text="下一页"
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
  pageNum: 1, // 当前页
  pageSize: 20, // 每页显示条目个数
  total: 200, // 总条目数
}) // 拼装form表单数据

const handleSizeChange = (value: number) => {
  searchForm.value.pageNum = 1
  searchForm.value.pageSize = value
}

const handleCurrentChange = (value: number) => {
  searchForm.value.pageNum = value
}
</script>
```

witPagination分页组件继承了element-plus中el-pagination分页组件所有属性与方法。

## API

| 属性名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `page-size` | [`number`] | 每页显示条目个数 |
| `current-page` | [`number`] | 当前页数 |
| `total` | [`number`] | 总条目数 |
| `prev-text` | [`string`] | 替代图标显示的上一页文字 |
| `next-text` | [`string`] | 替代图标显示的下一页文字 |
| `@current-change` | [`Function`] | current-page 改变时触发 |
| `@size-change` | [`Function`] | page-size 改变时触发 |

:::tip
用法实列只展示部分字段，还有更多的属性字段与组件不做一一讲解，本框架不加密，都是源码有注释，请看源码更全面！
:::