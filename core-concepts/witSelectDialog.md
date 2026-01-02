# witSelectDialog 选择器对话框 %{#witSelectDialog}%

`witSelectDialog`是一个基于 Element Plus el-input-tag 和 witDataSelector 封装的选择器对话框组件，支持多种选择器类型，提供标签化的选择结果展示。

## 用法实列 %{#dome}%

```vue
<template>
  <div>
    <witSelectDialog
      v-model="selectedItems"
      :selector-type="2"
      placeholder="请选择项目"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedItems = ref([])

function handleChange(value) {
  console.log('选择结果变化：', value)
}
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Array`]       | `[]`                       | 选择结果的双向绑定值                           |
| `selectorType`         | [`Number`]      | `2`                        | 选择器类型，2-科室，9-药师，4-医生             |
| `...ElInputTag.props`  | [`Object`]      | -                          | 继承 Element Plus InputTag 的所有属性          |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| -                      | 无自定义插槽                                   |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | 选择结果变化时触发                               | 新的选择结果数组（Array）     |
| `change`               | 选择结果变化时触发                               | 新的选择结果数组（Array）     |

:::tip
组件支持三种选择器类型，每种类型对应不同的数据字段：
- 2：科室选择（deptName）
- 9：药师选择（nickName）
- 4：医生选择（nickName）

组件继承了 Element Plus InputTag 的所有属性，如：placeholder、clearable、collapse-tags 等，可根据需求灵活配置。
:::