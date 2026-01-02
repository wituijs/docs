# witTreeV2 树形控件（版本2） %{#witTreeV2}%

`witTreeV2`是一个基于 Element Plus el-tree-v2 封装的高性能树形控件，支持自动调整大小、自定义节点样式、多行文本显示等功能，适用于大数据量的树形结构展示。

## 用法实列 %{#dome}%

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
    name: '一级节点',
    code: '001',
    children: [
      {
        id: 11,
        name: '二级节点1',
        code: '001-01'
      },
      {
        id: 12,
        name: '二级节点2',
        code: '001-02',
        children: [
          {
            id: 121,
            name: '三级节点1',
            code: '001-02-01'
          }
        ]
      }
    ]
  }
])

const handleNodeClick = (data) => {
  console.log('点击节点:', data)
}
</script>
```

## API

```markdown
| 属性名 | 类型 | 默认值 | 描述 |
| :----- | :--- | :----- | :--- |
| `node-key` | [`String`] | `''` | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 |
| `default-props` | [`Object`] | `{ label: 'label', children: 'children' }` | 配置树节点的结构属性 |
| `width` | [`Number`] | `0` | 树的宽度 |
| `show-icon` | [`Boolean`] | `false` | 是否展示图标 |
| `only-sub-click` | [`Boolean`] | `false` | 是否只有子节点可点击 |
| `custom-label` | [`Array`] | `[]` | 自定义标签字段集合，多个字段会按顺序拼接 |
| `custom-label-join` | [`String`] | `'、'` | 自定义标签字段的连接符 |
| `rows` | [`Number`] | `0` | 标签显示的行数，0表示不限制 |
| `...ElTreeV2.props` | [`Object`] | - | 继承 Element Plus ElTreeV2 的所有属性 |
```

## 插槽

```markdown
| 插槽名 | 描述 |
| :----- | :--- |
| `default` | 自定义节点内容插槽，参数：{ node, data } |
```

## 事件

```markdown
| 事件名 | 描述 | 参数 |
| :----- | :--- | :--- |
| `node-click` | 节点点击事件 | 点击的节点数据 |
| `...ElTreeV2.events` | 继承 Element Plus ElTreeV2 的所有事件 | - |
```

## 暴露的方法

```markdown
| 方法名 | 描述 | 参数 |
| :----- | :--- | :--- |
| `handleNodeClick` | 节点点击处理方法 | 点击的节点数据 |
| `methods` | 调用 Element Plus ElTreeV2 的方法 | (name, ...params) - 方法名和参数 |
| `clear` | 清除当前选中状态 | - |
```

:::tip
1. 组件基于 Element Plus ElTreeV2 实现，支持虚拟滚动，性能更优
2. 使用 el-auto-resizer 实现树的自动大小调整
3. 支持自定义图标，一级节点和子节点使用不同图标
4. 支持标签多行显示，通过 rows 属性控制
5. 可以组合多个字段作为节点标签，通过 custom-label 和 custom-label-join 配置
:::