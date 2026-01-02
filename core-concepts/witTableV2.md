# witTableV2 高性能虚拟表格 %{#witTableV2}%

`witTableV2`是一个基于 Element Plus el-table-v2 封装的高性能虚拟表格组件，支持自动调整大小、自定义列设置、空数据处理等功能，适用于大数据量场景下的表格展示。组件提供了简洁的 API 和灵活的配置选项，能够满足各种复杂的表格需求。

## 用法实例 %{#dome}%

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

// 表格数据
const tableData = ref([
  {
    id: 1,
    name: '张三',
    age: 25,
    address: '北京市朝阳区'
  },
  {
    id: 2,
    name: '李四',
    age: 30,
    address: '上海市浦东新区'
  },
  // 更多数据...
])

// 列配置
const columns = ref([
  {
    key: 'id',
    title: 'ID',
    width: 80,
    align: 'center'
  },
  {
    key: 'name',
    title: '姓名',
    width: 120,
    align: 'left'
  },
  {
    key: 'age',
    title: '年龄',
    width: 80,
    align: 'center'
  },
  {
    key: 'address',
    title: '地址',
    width: 200,
    align: 'left'
  }
])
</script>

<style scoped>
.table-container {
  height: 100%;
  width: 100%;
}
</style>
```

## API

```json
{
  "props": [
    {
      "name": "tableData",
      "type": "Array",
      "default": "[]",
      "description": "表格数据"
    },
    {
      "name": "columns",
      "type": "Array",
      "default": "[]",
      "description": "列配置信息"
    },
    {
      "name": "autoHeight",
      "type": "Boolean",
      "default": "false",
      "description": "是否自动撑开高度"
    },
    {
      "name": "height",
      "type": "Number, String",
      "default": "'100%'",
      "description": "表格高度"
    },
    {
      "name": "maxHeight",
      "type": "Number",
      "default": "0",
      "description": "表格最大高度"
    },
    {
      "name": "tableName",
      "type": "String",
      "default": "必传参数",
      "description": "本地存储的唯一键名，用于保存列配置"
    },
    {
      "name": "isShowTableSet",
      "type": "Boolean",
      "default": "true",
      "description": "是否显示头部设置功能"
    },
    {
      "name": "isCustomLoading",
      "type": "Boolean",
      "default": "false",
      "description": "是否自定义loading"
    },
    {
      "name": "isEmpty",
      "type": "Boolean",
      "default": "true",
      "description": "是否显示自定义空数据模板"
    },
    {
      "name": "customEmpty",
      "type": "Boolean",
      "default": "false",
      "description": "是否使用自定义空数据模板"
    },
    {
      "name": "showOverflow",
      "type": "Boolean",
      "default": "true",
      "description": "文字超出是否换行显示，false为换行"
    },
    {
      "name": "...ElTableV2.props",
      "type": "Object",
      "default": "-",
      "description": "继承 Element Plus ElTableV2 的所有属性"
    }
  ],
  "slots": [
    {
      "name": "empty",
      "description": "自定义空数据显示内容"
    }
  ],
  "events": [
    {
      "name": "...ElTableV2.events",
      "description": "继承 Element Plus ElTableV2 的所有事件",
      "params": "-"
    }
  ],
  "methods": [
    {
      "name": "tableMethods",
      "description": "调用表格内部方法的接口",
      "params": "name: 方法名, ...params: 方法参数"
    },
    {
      "name": "openTableSet",
      "description": "打开表格列设置对话框",
      "params": "-"
    }
  ]
}
```

:::tip
1. 组件基于 Element Plus el-table-v2 开发，支持虚拟滚动，适合处理大数据量表格
2. 通过 `tableName` 属性可以将列配置保存到本地存储，实现用户个性化设置
3. 支持自动调整表格大小，适配不同的容器尺寸
4. 当 `showOverflow` 设为 false 时，文字超出会自动换行显示
5. 组件继承了 Element Plus el-table-v2 的所有属性和事件，可根据需求灵活配置
:::