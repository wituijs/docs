# witBsTabs 大屏标签页组件 %{#witBsTabs}%

`witBsTabs`是一个用于大屏报表展示的标签页组件，支持手动切换和自动轮播功能，具有现代感的视觉设计和流畅的交互体验。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <witBsTabs v-model="activeTab" :pane="tabList" />
    
    <!-- 自定义文字大小 -->
    <witBsTabs v-model="activeTab" :pane="tabList" fontSize="16px" />
    
    <!-- 禁用自动轮播 -->
    <witBsTabs v-model="activeTab" :pane="tabList" :isSetInterval="false" @change="handleTabChange" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeTab = ref(0)
const tabList = ref(['标签页1', '标签页2', '标签页3', '标签页4'])

const handleTabChange = () => {
  console.log('标签页切换了', activeTab.value)
}
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Number`]      | `0`                        | 当前激活的标签页索引，支持 v-model 双向绑定   |
| `pane`                 | [`Array<String>`] | `[]`                     | 标签页内容数组                                 |
| `fontSize`             | [`String`]      | `'14px'`                   | 标签页文字大小                                 |
| `isSetInterval`        | [`Boolean`]     | `true`                     | 是否启用自动轮播功能                           |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | 标签页切换时触发，更新 v-model 绑定值           | 新的标签页索引（Number）     |
| `change`               | 标签页切换时触发                               | -                            |

## 功能特性

- **手动切换**：点击标签页可手动切换激活状态
- **自动轮播**：默认每10秒自动切换到下一个标签页
- **鼠标交互**：鼠标悬停时暂停自动轮播，鼠标离开时恢复
- **视觉反馈**：激活状态的标签页有明显的视觉指示（底部图片高亮）
- **自定义样式**：支持通过 fontSize 属性调整文字大小
- **灵活配置**：可通过 isSetInterval 属性控制是否启用自动轮播

## 实现原理

1. **布局结构**：采用 flex 布局实现标签页的水平排列
2. **状态管理**：使用 Vue 的 useVModel 实现双向绑定，管理当前激活的标签页
3. **自动轮播机制**：
   - 组件挂载时启动定时器，每10秒自动切换标签页
   - 鼠标悬停时清除定时器，暂停自动轮播
   - 鼠标离开时重新启动定时器，恢复自动轮播
4. **组件生命周期**：
   - onMounted 钩子中初始化自动轮播
   - onUnmounted 钩子中清除定时器，避免内存泄漏
5. **视觉效果**：通过 active 类和底部图片实现激活状态的视觉反馈

:::tip
- 自动轮播功能默认启用，可通过 isSetInterval 属性禁用
- 自动轮播的时间间隔固定为10秒，当前版本不支持自定义
- 标签页内容数组 pane 至少需要包含一个元素，否则自动轮播功能不会生效
- 鼠标悬停在任意标签页上时，自动轮播会暂停，鼠标离开后恢复
:::