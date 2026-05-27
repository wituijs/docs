# witTable Table Component %{#witTable}%

`witTable` is one of the most used core components in backend systems. To unify list area styles and interactions, it's usually used in combination with witSearch. By configuring simple JSON objects, you can render beautiful list component views. It's easy to use with two-way data binding, WYSIWYG, reducing 90% of repetitive work. [View Demo>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page2)

## Usage Example %{#dome}%

```vue
<template>
  <div class="test-container auto-height-container">
    <witSearch
      ref="witSearchRef"
      v-model="searchForm"
      :is-cache="true"
      :search-data="searchData"
      search-name="test-page2"
      :searching="tableLoading"
      @search="query"
    >
      <template #labelPrepend_member>
        <el-tooltip content="This is the store member" effect="dark" placement="top" popper-class="search-item-tooltip">
          <div class="labelPrepend_member"><wit-icon icon="ri-question-fill" /></div>
        </el-tooltip>
      </template>
      <template #labelPrepend_batchNumber>
        <el-tooltip content="This is the drug batch number" effect="dark" placement="top" popper-class="search-item-tooltip">
          <div class="labelPrepend_batchNumber"><wit-icon icon="ri-question-fill" /></div>
        </el-tooltip>
      </template>
      <template #labelPrepend_levelCode>
        <el-tooltip content="This is the member level" effect="dark" placement="top" popper-class="search-item-tooltip">
          <div class="labelPrepend_levelCode"><wit-icon icon="ri-question-fill" /></div>
        </el-tooltip>
      </template>
      <template #labelPrepend_member2>
        <div class="labelPrepend_member2">*</div>
      </template>
    </witSearch>
    <div class="app-content padding-out">
      <witTable table-name="test-page2" :table-data="tableData" @checkboxChange="checkboxChange" :columns="columns">
        <template #name="scope: any">
          <el-input v-model="scope.row.name"></el-input>
        </template>

        <template #btns>
          <el-button text type="primary">Edit</el-button>
          <el-button text type="primary">Save</el-button>
        </template>
      </witTable>
    </div>
    <div class="app-pagination">
      <wit-pagination
        :current-page="searchForm.pageNum"
        :page-size="searchForm.pageSize"
        :total="total"
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

const tableData = ref<any>([])
const columns = ref<any>([
  {
    width: '40',
    type: 'checkbox',
  },
  {
    width: '100',
    title: 'No.',
    type: 'seq',
  },
  {
    field: 'name',
    title: 'Name',
    width: '100',
    render: true,
  },
  {
    field: 'role',
    title: 'Role',
    minWidth: '120',
  },
  {
    field: 'sex',
    title: 'Gender',
    minWidth: '120',
  },
  {
    field: 'age',
    title: 'Age',
    minWidth: '120',
    sortable: true,
  },
  {
    field: 'educational',
    title: 'Education',
    minWidth: '120',
  },
  {
    field: 'occupation',
    title: 'Occupation',
    minWidth: '120',
  },
  {
    field: 'telephone',
    title: 'Phone',
    minWidth: '120',
  },
  {
    field: 'address',
    title: 'Address',
    minWidth: '120',
  },
  {
    field: 'btns',
    title: 'Actions',
    align: 'center',
    width: '180',
    fixed: 'right',
    render: true,
  },
])

const tableLoading = ref<boolean>(false) // Control Search component Loading state

const witSearchRef = ref<any>(null) // Get witSearchRef component internal methods and properties

const searchForm = ref<any>({
  dateRange: '',
  cardIssuingInstitution: 1,
  member: '',
  outStockDays: null,
  member1: '',
  member2: '',
  member3: '12312',
  searchQuick: {
    keyword: '',
    searchType: 1,
  },
  drugClassFlag: [],
  batchNumber: '',
  levelCode: '',
  createTime: '',

  clearDefault: {}, // Initial value object
}) // Assemble form data

const searchData = reactive<any>({
  searchListButtons: [
    // Search area search button
    {
      label: 'Search',
      isShowLoading: true, // Whether to show loading on search button
      attrs: {
        type: 'primary',
      },
      events: {
        click: _search,
      },
    },
    {
      label: 'Custom Button',
      attrs: {
        plain: true,
        type: 'primary',
      },
      events: {},
    },
  ],
  searchList: [
    // Left search area
    {
      type: 'date-picker',
      field: 'dateRange',
      label: 'Date Range',
      isOutBorder: true, // Whether outer border
      attrs: {
        type: 'daterange',
        width: 240,
        placeholder: 'Please select',
        clearable: true,
      },
      events: {},
    },
    {
      type: 'select',
      field: 'cardIssuingInstitution',
      label: 'Card Issuing Institution',
      valueField: 'institutionCode',
      labelField: 'institutionName',
      isOutBorder: true, // Whether outer border
      isRequired: true, // Whether required
      selectCustom: true,
      customLeftField: ['institutionName'],
      customRightField: ['institutionCode'],
      options: [
        {
          institutionCode: 1,
          institutionName: 'Yifeng Pharmacy',
        },
        {
          institutionCode: 2,
          institutionName: 'Qianjin Pharmacy',
        },
        {
          institutionCode: 3,
          institutionName: 'Laobaixing Pharmacy',
        },
      ],
      attrs: {
        width: 200,
        clearable: true,
        collapseTags: true,
      },
      events: {},
    },
    // ... more search items
  ],
}) // This large object builds the search area view

function _input() {
  console.log('_input')
}

function _search() {
  witSearchRef.value.search()
}

function query() {
  // Get list data, send ajax request
  console.log('query')
}

const total = ref<any>(0)
const handleSizeChange = (value: number) => {
  searchForm.value.pageNum = 1
  searchForm.value.pageSize = value
}

const handleCurrentChange = (value: number) => {
  searchForm.value.pageNum = value
}

const checkboxChange = (val) => {
  console.log(1)
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `tableName`            | [`String`]      | -                          | Table unique identifier, used for caching |
| `tableData`            | [`Array`]       | `[]`                       | Table data array |
| `columns`              | [`Array`]       | `[]`                       | Column configuration array |
| `loading`              | [`Boolean`]     | `false`                    | Whether to show loading state |

## Column Configuration

| Property Name            | Type            | Description                                           |
| :--------------------- | :-------------- | :--------------------------------------------- |
| `field`                | [`String`]      | Field name, corresponds to data property |
| `title`                | [`String`]      | Column title |
| `width`                | [`String`]      | Column width |
| `minWidth`             | [`String`]      | Minimum column width |
| `type`                 | [`String`]      | Column type: 'checkbox', 'seq' |
| `sortable`             | [`Boolean`]     | Whether sortable |
| `fixed`                | [`String`]      | Fixed position: 'left', 'right' |
| `align`                | [`String`]      | Text alignment |
| `render`               | [`Boolean`]     | Whether to use custom slot rendering |

:::tip
1. The table component integrates dozens of business components and basic components, meeting 99.9% of business interaction needs.
2. The usage example only shows some fields. There are more property fields and components not explained one by one.
3. This framework is not encrypted, all source code has comments, please check the source code for more comprehensive information!
:::
