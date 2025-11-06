# witTable 表格组件 %{#witTable}%

`witTable`是后台系统中用的最多的核心组件之一，为了统一列表区域样式与交互，通常与witSeach组合使用，通过配置简单的json对象就能渲染出精美的列表组件视图，简单易用双向数据绑定所见即所得，减少90%的重复工作。[查看效果>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page2)

## 用法实列 %{#dome}%

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
        <el-tooltip content="这里是门店的会员" effect="dark" placement="top" popper-class="search-item-tooltip">
          <div class="labelPrepend_member"><wit-icon icon="ri-question-fill" /></div>
        </el-tooltip>
      </template>
      <template #labelPrepend_batchNumber>
        <el-tooltip content="这里是药品批号" effect="dark" placement="top" popper-class="search-item-tooltip">
          <div class="labelPrepend_batchNumber"><wit-icon icon="ri-question-fill" /></div>
        </el-tooltip>
      </template>
      <template #labelPrepend_levelCode>
        <el-tooltip content="这里是会员等级" effect="dark" placement="top" popper-class="search-item-tooltip">
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
          <el-button text type="primary">修改</el-button>
          <el-button text type="primary">保存</el-button>
        </template>
      </witTable>
    </div>
    <div class="app-pagination">
      <wit-pagination
        :current-page="searchForm.pageNum"
        :page-size="searchForm.pageSize"
        :total="total"
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

const tableData = ref<any>([])
const columns = ref<any>([
  {
    width: '40',
    type: 'checkbox',
  },
  {
    width: '100',
    title: '序号',
    type: 'seq',
  },
  {
    field: 'name',
    title: '姓名',
    width: '100',
    render: true,
  },
  {
    field: 'role',
    title: '角色',
    minWidth: '120',
  },
  {
    field: 'sex',
    title: '男',
    minWidth: '120',
  },
  {
    field: 'age',
    title: '年龄',
    minWidth: '120',
    sortable: true,
  },
  {
    field: 'educational',
    title: '学历',
    minWidth: '120',
  },
  {
    field: 'occupation',
    title: '工作',
    minWidth: '120',
  },
  {
    field: 'telephone',
    title: '电话',
    minWidth: '120',
  },
  {
    field: 'address',
    title: '地址',
    minWidth: '120',
  },
  {
    field: 'btns',
    title: '操作',
    align: 'center',
    width: '180',
    fixed: 'right',
    render: true,
  },
])

const tableLoading = ref<boolean>(false) // 控制Search组件Loading状态

const witSearchRef = ref<any>(null) // 获取witSearchRef组件内部方法与属性

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

  clearDefault: {}, // 初始值对象
}) // 拼装form表单数据

const searchData = reactive<any>({
  searchListButtons: [
    // 搜索区域搜索按钮
    {
      label: '搜 索',
      isShowLoading: true, // 是否显示搜索按钮上的loading
      attrs: {
        type: 'primary',
      },
      events: {
        click: _search,
      },
    },
    {
      label: '自定义按钮',
      attrs: {
        plain: true,
        type: 'primary',
      },
      events: {},
    },
  ],
  searchList: [
    // 左边搜索区域
    {
      type: 'date-picker',
      field: 'dateRange',
      label: '日期范围',
      isOutBorder: true, // 是否外边框
      attrs: {
        type: 'daterange',
        width: 240,
        placeholder: '请选择',
        clearable: true,
      },
      events: {},
    },
    {
      type: 'select',
      field: 'cardIssuingInstitution',
      label: '开卡机构',
      valueField: 'institutionCode',
      labelField: 'institutionName',
      isOutBorder: true, // 是否外边框
      isRequired: true, // 是否必填
      selectCustom: true,
      customLeftField: ['institutionName'],
      customRightField: ['institutionCode'],
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
        },
      ],
      attrs: {
        width: 200,
        clearable: true,
        collapseTags: true,
      },
      events: {},
    },
    {
      type: 'input',
      field: 'member',
      label: '会员',
      isOutBorder: true, //  是否外边框
      attrs: {
        placeholder: '卡号/姓名/手机号',
        width: 230,
        clearable: true,
      },
      events: {
        input: _input,
      },
    },
    {
      type: 'inputNumber',
      field: 'outStockDays',
      label: '断货天数超',
      isOutBorder: true,
      attrs: {
        width: 100,
        clearable: true,
        controlsPosition: 'right',
        min: 0,
        class: 'overflow-hidden',
      },
      events: {},
    },
    {
      type: 'checkbox-group',
      field: 'drugClassFlag',
      label: '',
      valueField: 'value',
      labelField: 'label',
      options: [
        { label: '西药', value: '1' },
        { label: '中成药', value: '2' },
        { label: '中药', value: '3' },
      ],
      attrs: {},
      events: {},
    },
    {
      type: 'input',
      field: 'member1',
      label: '会员1',
      isOutBorder: false, //  是否外边框
      attrs: {
        placeholder: '卡号/姓名/手机号',
        width: 230,
        clearable: true,
      },
      events: {
        input: _input,
      },
    },
    {
      type: 'input',
      field: 'member2',
      label: '会员2',
      isOutBorder: true, //  是否外边框
      attrs: {
        placeholder: '卡号/姓名/手机号',
        width: 230,
        clearable: true,
      },
      events: {
        input: _input,
      },
    },
    {
      type: 'input',
      field: 'member3',
      label: '会员3',
      isOutBorder: true, //  是否外边框
      attrs: {
        placeholder: '卡号/姓名/手机号',
        width: 230,
        clearable: true,
      },
      events: {
        input: _input,
      },
    },
    {
      type: 'searchQuick',
      field: 'searchQuick',
      options: [
        {
          name: '永久',
          code: 1,
        },
        {
          name: '指定',
          code: 2,
        },
      ],
      attrs: {
        width: 400,
        placeholder: {
          0: '账户编码/名称拼音码/岗位/业务机构1',
          1: '账户编码/名称拼音码/岗位/业务机构2',
          2: '账户编码/名称拼音码/岗位/业务机构3',
        },
        isFetch: false, // 是否支持远程下拉框搜索
      },
      events: {},
    },
  ],
  otherSearchList: [
    // 筛选条件搜索区域
    {
      type: 'input',
      field: 'batchNumber',
      label: '批号',
      attrs: {
        clearable: true,
        placeholder: '请输入',
      },
      events: {
        input: _input,
      },
    },
    {
      type: 'select',
      field: 'levelCode',
      label: '会员等级',
      valueField: 'levelCode',
      labelField: 'levelName',
      options: [
        {
          levelCode: 1,
          levelName: '普通会员',
        },
        {
          levelCode: 2,
          levelName: '黄金会员',
        },
      ],
      attrs: {
        clearable: true,
        collapseTags: true,
      },
      events: {},
    },
    {
      type: 'date-picker',
      field: 'createTime',
      label: '创建时间',
      attrs: {
        clearable: true,
        placeholder: '请选择时间',
      },
      events: {},
    },
  ],
  rightSearchList: [
    // 右边搜索区域
    {
      type: 'select',
      field: 'levelCode',
      label: '会员等级',
      valueField: 'levelCode',
      labelField: 'levelName',
      isOutBorder: true, //  是否外边框
      options: [
        {
          levelCode: 1,
          levelName: '普通会员',
        },
        {
          levelCode: 2,
          levelName: '黄金会员',
        },
      ],
      attrs: {
        width: 230,
        clearable: true,
        collapseTags: true,
      },
      events: {},
    },
    {
      type: 'select',
      field: 'levelCode',
      label: '会员等级',
      valueField: 'levelCode',
      labelField: 'levelName',
      isOutBorder: false, //  是否外边框
      options: [
        {
          levelCode: 1,
          levelName: '普通会员',
        },
        {
          levelCode: 2,
          levelName: '黄金会员',
        },
      ],
      attrs: {
        width: 230,
        clearable: true,
        collapseTags: true,
      },
      events: {},
    },
  ],
  rightSearchListButtons: [
    // 右边搜索按钮区域
    {
      label: '搜 索',
      icon: 'icon-excel',
      isShowLoading: true,
      attrs: {
        type: 'primary',
        plain: true,
      },
      events: {
        click: _search,
      },
    },
    {
      label: '自定义按钮',
      attrs: {
        plain: true,
        type: 'primary',
      },
      events: {},
    },
  ],
}) // 这个大对象是构建搜索区域视图

function _input() {
  console.log('_input')
}

function _search() {
  witSearchRef.value.search()
}

function query() {
  // 获取列表数据发送ajax请求
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

onMounted(() => {
  setTimeout(() => {
    // 模拟数据
    const mockList: any = []
    for (let index = 0; index < 10000; index++) {
      mockList.push({
        id: index,
        checked: true,
        name: 'Test' + index,
        role: '开发人员',
        sex: '男',
        age: 18,
        educational: '大专',
        occupation: 'it',
        telephone: '151163577447',
        address: '长沙',
      })
    }
    tableData.value = mockList
    total.value = 10000
  }, 100)
})
</script>
```

witTable表格组件继承了vxetable中vxe-table表格组件所有属性与方法，同时继承了element-plus中el-table表格组件所有属性与方法。

## API

| 属性名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `tableData` | [`object`] | 用于渲染搜索区域UI组件 |
| `tableName` | [`string`] | 缓存localStorage唯一键名 |
| `loading` | [`boolean`] | 是否显示表格loading |
| `columns` | [`Array`] | 配置列名，俗称表头 |
| `autoHeight` | [`boolean`] | 是否自动撑开高度 |
| `height` | [`Number, String`] | 指定高度 |
| `maxHeight` | [`Number`] | 最大高度 |
| `isShowTableSet` | [`boolean`] | 是否显示列表设置表头功能 |
| `isVirtuallyScroll` | [`boolean`] | 是否开启虚拟滚动 |
| `isCustomLoading` | [`boolean`] | 是否自定义loading |
| `isEmpty` | [`boolean`] | 是否自定义空数据显示模板 |
| `showOverflow` | [`boolean`] | 是否文字超出换行显示 |

:::tip
用法实列只展示部分字段，还有更多的属性字段与组件不做一一讲解，本框架不加密，都是源码有注释，请看源码更全面！
:::