# witDialog 对话框组件 %{#witDialog}%

`witDialog`是一个基于 Element Plus Dialog 封装的增强版对话框组件，提供了全屏、加载状态、主题样式等扩展功能，支持拖拽和动画效果，为用户提供更加灵活和美观的对话框体验。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <el-button type="primary" @click="showDialog = true">
      打开对话框
    </el-button>
    
    <witDialog
      v-model="showDialog"
      title="对话框标题"
      width="500px"
      :loading="loading"
      theme="primary"
    >
      <div>
        <p>对话框内容区域</p>
        <p>可以放置表单、表格等任何内容</p>
      </div>
      <template #footer>
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </template>
    </witDialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showDialog = ref(false)
const loading = ref(false)

const handleConfirm = () => {
  loading.value = true
  // 模拟异步操作
  setTimeout(() => {
    loading.value = false
    showDialog.value = false
  }, 2000)
}
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Boolean`]     | `false`                    | 控制对话框的显示与隐藏，支持 v-model 双向绑定 |
| `title`                | [`String`]      | `''`                       | 对话框标题                                     |
| `width`                | [`String`]      | `'50%'`                    | 对话框宽度                                     |
| `showClose`            | [`Boolean`]     | `true`                     | 是否显示关闭按钮                               |
| `showFullscreen`       | [`Boolean`]     | `true`                     | 是否显示全屏按钮                               |
| `loading`              | [`Boolean`]     | `false`                    | 是否显示加载状态                               |
| `animated`             | [`Boolean`]     | `true`                     | 是否启用动画效果                               |
| `theme`                | [`String`]      | `''`                       | 对话框主题，可选值：'default'、'plain'、'primary' |
| `draggable`            | [`Boolean`]     | `true`                     | 是否支持拖拽                                   |
| `overflow`             | [`Boolean`]     | `true`                     | 是否允许内容溢出                               |
| `alignCenter`          | [`Boolean`]     | `true`                     | 是否垂直居中显示                               |
| `closeOnClickModal`    | [`Boolean`]     | `false`                    | 是否点击遮罩关闭对话框                         |
| `closeOnPressEscape`   | [`Boolean`]     | `false`                    | 是否按 ESC 键关闭对话框                        |
| `...ElDialog.props`    | [`Object`]      | -                          | 继承 Element Plus Dialog 的所有属性            |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `default`              | 对话框内容区域                                 |
| `header`               | 自定义对话框头部                               |
| `footer`               | 自定义对话框底部按钮区域                       |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | 对话框显示状态变化时触发                       | 新的显示状态（Boolean）       |
| `...ElDialog.events`   | 继承 Element Plus Dialog 的所有事件            | -                            |

:::tip
1. 双击对话框标题可以切换全屏状态，也可以点击右上角的全屏按钮进行切换。
2. 支持设置不同的主题样式，通过 `theme` 属性配置。
3. 组件默认启用拖拽功能，可通过 `draggable` 属性关闭。
4. 加载状态通过 `loading` 属性控制，会在对话框内容区域显示加载动画。
5. 继承了 Element Plus Dialog 的所有属性，如：`center`、`modal`、`lockScroll` 等，可根据需求灵活配置。
:::