# witDraggable 可拖拽排序组件 %{#witDraggable}%

`witDraggable` 是一个基于 Sortable.js 封装的可拖拽排序组件，适用于 Vue 3 项目。该组件支持列表的拖拽排序、添加、移除等操作，并提供了丰富的事件和配置选项，可用于实现拖拽排序的交互功能。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <witDraggable
      v-model="listData"
      :item-key="'id'"
      :tag="'ul'"
    >
      <li v-for="item in listData" :key="item.id">
        {{ item.name }}
      </li>
    </witDraggable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 列表数据
const listData = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' }
])
</script>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witDraggable`                  | 可拖拽排序主组件                    |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `list`                          | `Array`         | `null`       | 数据列表（与 modelValue 二选一）    |
| `modelValue`                    | `Array`         | `null`       | 数据列表（v-model 双向绑定）        |
| `itemKey`                       | `String/Function` | 无           | 列表项的唯一标识，必填              |
| `clone`                         | `Function`      | `(original) => original` | 克隆函数，用于复制拖拽项     |
| `tag`                           | `String`        | `'div'`      | 容器标签名                          |
| `move`                          | `Function`      | `null`       | 移动时的回调函数，用于控制是否允许移动 |
| `componentData`                 | `Object`        | `null`       | 组件数据                            |

### 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `update:modelValue`             | 数据更新时触发                      | 更新后的数据列表（Array）    |
| `change`                        | 列表变化时触发（添加、移除、移动）  | 变化信息（Object）           |
| `start`                         | 拖拽开始时触发                      | 拖拽事件数据                 |
| `add`                           | 拖拽添加项时触发                    | 拖拽事件数据                 |
| `remove`                        | 拖拽移除项时触发                    | 拖拽事件数据                 |
| `update`                        | 拖拽更新项位置时触发                | 拖拽事件数据                 |
| `end`                           | 拖拽结束时触发                      | 拖拽事件数据                 |

### 方法

| 方法名                          | 描述                                | 参数类型                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| `getUnderlyingVm`               | 获取 DOM 元素对应的 Vue 实例        | `domElement: HTMLElement`         |
| `getUnderlyingPotencialDraggableComponent` | 获取潜在的可拖拽组件        | `htmElement: HTMLElement`         |
| `emitChanges`                   | 触发变化事件                        | `evt: Object`                    |
| `alterList`                     | 修改列表                            | `onList: Function`               |
| `spliceList`                    | 拼接列表                            | `...args: any[]`                 |
| `updatePosition`                | 更新位置                            | `oldIndex: Number, newIndex: Number` |
| `getRelatedContextFromMoveEvent` | 获取移动事件的相关上下文          | `evt: Object`                    |
| `getVmIndexFromDomIndex`        | 从 DOM 索引获取 VM 索引             | `domIndex: Number`               |
| `onDragStart`                   | 拖拽开始事件处理                    | `evt: Object`                    |
| `onDragAdd`                     | 拖拽添加事件处理                    | `evt: Object`                    |
| `onDragRemove`                  | 拖拽移除事件处理                    | `evt: Object`                    |
| `onDragUpdate`                  | 拖拽更新事件处理                    | `evt: Object`                    |
| `computeFutureIndex`            | 计算未来索引                        | `relatedContext: Object, evt: Object` |
| `onDragMove`                    | 拖拽移动事件处理                    | `evt: Object, originalEvent: Event` |
| `onDragEnd`                     | 拖拽结束事件处理                    | -                                |

## 功能特性

### 拖拽排序
- 支持列表项的拖拽排序
- 支持跨列表拖拽
- 支持克隆拖拽（pullMode: 'clone'）

### 数据绑定
- 支持 list 属性单向绑定
- 支持 v-model 双向绑定（modelValue）
- 自动同步 DOM 变化到数据列表

### 事件支持
- 提供完整的拖拽生命周期事件
- 支持自定义事件处理
- 提供变化事件，方便监听列表变化

### 自定义配置
- 支持自定义容器标签
- 支持自定义克隆函数
- 支持自定义移动控制函数
- 支持组件数据配置

:::tip
1. 组件基于 Sortable.js 实现，使用前需确保已安装该依赖。
2. list 和 modelValue 属性二选一，不可同时使用。
3. itemKey 为必填属性，用于标识列表项的唯一性。
4. 组件支持 Sortable.js 的所有配置选项，可通过 $attrs 传递。
5. 拖拽事件名称会自动转换为小写，如 'start' 事件对应 'start'。
:::