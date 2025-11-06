# witSeach 搜索组件 %{#witSeach}%

`witSeach`是后台系统中用的最多的核心组件之一，为了统一搜索区域样式与交互，通过配置简单的json对象就能渲染出精美的搜索组件视图，简单易用双向数据绑定所见即所得，减少90%的重复工作。[查看效果>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## 用法实列 %{#dome}%

```vue
<template>
  <div class="test-container">
    <witSearch
      ref="witSearchRef"
      v-model="searchForm"
      :is-cache="true"
      :search-data="searchData"
      search-name="test-page"
      :searching="tableLoading"
      :autoLoad="false"
      @search="query"
    />
  </div>
</template>
<script lang="ts" setup>
  // 拼装form表单数据
  const searchForm = ref<any>({
    dateRange: '',
    cardIssuingInstitution: 2,
    // 初始值对象
    clearDefault: {},
  })

  // 这个大对象是构建搜索区域视图
  const searchData = reactive<any>({
    searchListButtons: [
      // 搜索区域右边搜索按钮
      {
        label: '搜 索',
        isShowLoading: true, // 是否显示搜索按钮上的loading
        attrs: {
          type: 'primary',
        },
        events: {
          click: search, // 点击事件
        },
      }
    ],
    searchList: [
        // 搜索区域左边
        {
          type: 'date-picker', // 组件类型
          field: 'dateRange', // searchForm表单绑定的字段
          label: '日期范围',
          isOutBorder: true, // 是否外边框
          attrs: {
            type: 'daterange',
            width: 240,
            placeholder: '请选择',
            clearable: true,
          },
        },
        {
          type: 'select',
          field: 'cardIssuingInstitution',
          label: '开卡机构',
          valueField: 'institutionCode',
          labelField: 'institutionName',
          isOutBorder: true, // 是否外边框
          isRequired: true, // 是否必填
          options: [
            {
              institutionCode: 1,
              institutionName: '益丰大药房',
            },
            {
              institutionCode: 2,
              institutionName: '千金大药房',
            },
            {
              institutionCode: 3,
              institutionName: '老百姓大药房',
            }
          ],
          attrs: {
            width: 200,
            clearable: true,
            collapseTags: true,
          }
        },
        ...
      ]
  })
</script>
<style lang="scss" scoped>
.test-container{
  // ...
}
</style>
```

搜索区域小组件集成了几十个业务组件与基础组件，满足99.9%的业务交互需求，也可以自定义业务组件，然后集成到`witSeach`组件中。

## API

| 属性名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `v-model` | [`object`] | 双向数据绑定用于后端数据交互 |
| `searchData` | [`object`] | 用于渲染搜索区域UI组件 |
| `isCache` | [`boolean`] | 是否缓存搜索数据 |
| `searchName` | [`string`] | 缓存localStorage唯一键名 |
| `searching` | [`boolean`] | 是否显示搜索loading |
| `autoLoad` | [`boolean`] | 是否进入页面立即执行搜索命令 |
| `popoverWidth` | [`Number`] | 筛选条件弹框宽度 |
| `labelWidth` | [`String`] | form表单label宽度 |
| `showResult` | [`boolean`] | 是否显示筛选条件结果 |
| `border` | [`boolean`] | 是否加底部灰线 |
| `@search` | [`Function`] | 点击搜索按钮回调函数 |

:::tip
用法实列只展示部分字段，还有更多的属性字段与组件不做一一讲解，本框架不加密，都是源码有注释，请看源码更全面！
:::