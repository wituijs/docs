# witTreeV2 Tree Control (Version 2) %{#witTreeV2}%

`witTreeV2` is a high-performance tree control based on Element Plus el-tree-v2, supports auto-resize, custom node styles, multi-line text display and other features, suitable for tree structure display with large data volumes.

## Usage Example %{#dome}%

```vue
<template>
  <wit-tree-v2
    ref="treeRef"
    :data="treeData"
    :node-key="'id'"
    :default-props="{ label: 'name', children: 'children' }"
    :show-icon="true"
    :only-sub-click="true"
    :custom-label="['name', 'code']"
    :custom-label-join="'-'"
    :rows="2"
    @node-click="handleNodeClick"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const treeRef = ref()

const treeData = ref([
  {
    id: 1,
    name: 'Level 1 Node',
    code: '001',
    children: [
      {
        id: 11,
        name: 'Level 2 Node 1',
        code: '001-01'
      },
      {
        id: 12,
        name: 'Level 2 Node 2',
        code: '001-02',
        children: [
          {
            id: 121,
            name: 'Level 3 Node 1',
            code: '001-02-01'
          }
        ]
      }
    ]
  }
])

const handleNodeClick = (data) => {
  console.log('Node clicked:', data)
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `data`                 | [`Array`]       | `[]`                       | Tree data                                       |
| `nodeKey`              | [`String`]      | `'id'`                     | Node unique identifier field                                       |
| `defaultProps`         | [`Object`]      | `{}`                       | Field mapping configuration                                       |
| `showIcon`             | [`Boolean`]     | `false`                    | Whether to show node icon                                     |
| `onlySubClick`         | [`Boolean`]     | `false`                    | Whether only leaf nodes are clickable                               |
| `customLabel`          | [`Array`]       | `[]`                       | Custom label fields                                       |
| `customLabelJoin`      | [`String`]      | `'-'`                      | Custom label join character                                       |
| `rows`                 | [`Number`]      | `1`                        | Number of text lines to display                                     |
