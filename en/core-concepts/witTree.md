# witTree Tree Component %{#witTree}%

`witTree` displays information with a clear hierarchical structure, can be expanded or collapsed. [View Demo>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## Usage Example %{#dome}%

```vue
<template>
  <el-input
    v-model="filterText"
    clearable
    placeholder="Please enter keyword to search"
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
    name: "Digitalis Glycosides",
    children: [
      {
        id: "11",
        name: "Digoxin Tablets",
      },
      {
        id: "12",
        name: "Metildigoxin Tablets",
      },
      {
        id: "13",
        name: "Anti-Heart Failure Drugs",
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

// Filter
const filterNode: any = (value: any, data: any) => {
  if (!value) return true;
  return data.name.includes(value);
};
</script>
```

The witTree tree component inherits all properties and methods from the element-plus el-tree tree component.

## API

| Property Name   | Type        | Description                                                 |
| :------------- | :---------- | :--------------------------------------------------- |
| `data`         | [`object`]  | Display data                                             |
| `node-key`     | [`string`]  | Property used as unique identifier for each tree node, should be unique across the entire tree |
| `onlySubClick` | [`boolean`] | Only child nodes are clickable, default false                         |
| `showIcon`     | [`boolean`] | Whether to show icon, default false                            |
| `customLabel`  | [`object`]  | Label display field collection, displayed with comma separator                     |
| `rows`         | [`number`]  | Number of label display rows, default 1 row                            |

## Method

| Method              | Description                                        | Parameters                         |
| :---------------- | :------------------------------------------ | ---------------------------- |
| `clear`           | Clear current selection                                |                              |
| `handleNodeClick` | Node click                                    | leafOnly node to click        |
| `methods`         | Call methods from element-plus el-tree tree component | (name,...params) method name, parameters |

:::tip
The usage example only shows some fields. There are more property fields and components not explained one by one. This framework is not encrypted, all source code has comments, please check the source code for more comprehensive information!
:::
