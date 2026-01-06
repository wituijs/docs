# witDark 黑白模式切换组件 %{#witDark}%

`witDark`是一个用于系统主题切换的组件，支持在亮色模式和暗色模式之间进行切换，为用户提供更加个性化的界面体验。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <el-button @click="toggleDark">切换黑白模式</el-button>
    <witDark v-model="isDark" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Boolean`]     | `false`                    | 控制黑白模式的切换状态，支持 v-model 双向绑定 |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | 黑白模式切换状态变化时触发                     | 新的模式状态（Boolean）       |

:::tip
1. 组件用于在亮色模式和暗色模式之间切换，`true`表示暗色模式，`false`表示亮色模式。
2. 组件会自动为页面添加或移除`dark`类名，以实现主题切换效果。
3. 可通过`v-model`双向绑定控制当前的主题模式。
:::