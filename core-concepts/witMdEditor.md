# witMdEditor Markdown编辑器 %{#witMdEditor}%

`witMdEditor`是一个基于 `md-editor-v3` 封装的 Markdown 编辑器组件，支持实时预览、语法高亮、双向数据绑定等功能，适用于需要在应用中集成 Markdown 编辑功能的场景。

## 用法实列 %{#dome}%

```vue
<template>
  <div style="height: 500px;">
    <witMdEditor v-model="content" @getPosition="handleGetPosition" />
    <div class="mt-4">
      <h3>预览内容：</h3>
      <div v-html="htmlContent"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { marked } from 'marked'

const content = ref('# Hello World\n\n这是一个 Markdown 编辑器示例')
const htmlContent = computed(() => marked(content.value))

const handleGetPosition = (position: any) => {
  console.log('当前光标位置：', position)
}
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`String`]      | `''`                       | Markdown 内容，用于双向绑定                   |

## Events

| 事件名                 | 描述                                        | 参数                         |
| :--------------------- | :------------------------------------------ | :--------------------------- |
| `update:modelValue`    | 编辑器内容变化时触发                          | 最新的 Markdown 内容         |
| `getPosition`          | 获取光标位置时触发                          | 光标位置信息对象             |

:::tip
1. `witMdEditor` 是基于 `md-editor-v3` 封装的组件，支持 `md-editor-v3` 的所有属性和事件，可以通过 `v-bind="$attrs"` 传递额外属性
2. 组件默认高度为 100%，可以通过外层容器控制编辑器高度
3. 若需要自定义工具栏或编辑器行为，可以直接使用 `md-editor-v3` 组件
4. 如需将 Markdown 转换为 HTML 显示，可使用 `marked` 等第三方库进行转换
:::