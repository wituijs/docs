# witTree 树形控件 %{#witTree}%

`witTree`用清晰的层级结构展示信息，可展开或折叠。[查看效果>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## 用法实列 %{#dome}%

```vue
<template>
  <el-input
    v-model="filterText"
    clearable
    placeholder="请输入关键词搜索"
    prefix-icon="Search"
    @input="handleSearch"
  />
  <wit-tree
    ref="treeRef"
    :data="treeData"
    :show-icon="true"
    :defaultProps="treeProps"
    node-key="id"
    :onlySubClick="true"
    default-expand-all
    :customLabel="['id', 'name']"
    @node-click="handleNodeClick"
    :filter-node-method="filterNode"
  />
</template>

<script lang="ts" setup>
const treeProps = {
  children: "children",
  label: "name",
};

const treeData = ref<any>([
  {
    id: "1",
    name: "洋地黄糖苷类",
    children: [
      {
        id: "11",
        name: "地高辛片",
      },
      {
        id: "12",
        name: "甲地高辛片",
      },
      {
        id: "13",
        name: "抗心力衰竭药",
      },
    ],
  },
]);

const filterText = ref<any>("");
const handleNodeClick = (row: any) => {};

const treeRef = ref<any>();
const handleSearch = () => {
  treeRef.value.methods("filter", keyword);
};

// 过滤
const filterNode: any = (value: any, data: any) => {
  if (!value) return true;
  return data.name.includes(value);
};
</script>
```

witTree 树形控件继承了继承了 element-plus 中 el-tree 树形控件组件所有属性与方法。

## API

| 属性名         | 类型        | 描述                                                 |
| :------------- | :---------- | :--------------------------------------------------- |
| `data`         | [`object`]  | 展示数据                                             |
| `node-key`     | [`string`]  | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 |
| `onlySubClick` | [`boolean`] | 只有子节点可点击，默认 false                         |
| `showIcon`     | [`boolean`] | 是否展示 icon，默认 false                            |
| `customLabel`  | [`object`]  | label 展示字段集合，显示以、拼接                     |
| `rows`         | [`number`]  | label 展示行数，默认 1 行                            |

## Method

| 方法              | 描述                                        | 参数                         |
| :---------------- | :------------------------------------------ | ---------------------------- |
| `clear`           | 清除当前选中                                |                              |
| `handleNodeClick` | 节点点击                                    | leafOnly 要点击的节点        |
| `methods`         | 调用 element-plus 中 el-tree 树形控件的方法 | (name,...params)方法名，参数 |

:::tip
用法实列只展示部分字段，还有更多的属性字段与组件不做一一讲解，本框架不加密，都是源码有注释，请看源码更全面！
:::
