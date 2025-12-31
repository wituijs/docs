# witConfirm 确认对话框 %{#witConfirm}%

`witConfirm`是一个基于 Element Plus 封装的确认对话框组件，支持成功、错误、处理中三种主题样式，提供简洁明了的视觉反馈。组件继承了 Element Plus Dialog 的所有属性，同时提供了自定义底部按钮区域的能力。

## 用法实列 %{#dome}%

```vue
<template>
  <div>
    <el-button type="primary" @click="showConfirm = true">
      显示成功提示
    </el-button>
    <el-button type="danger" @click="showError = true">
      显示错误提示
    </el-button>
    <el-button type="warning" @click="showPending = true">
      显示处理中提示
    </el-button>
    
    <!-- 成功提示 -->
    <witConfirm
      v-model="showConfirm"
      theme="success"
      title="操作成功"
      content="您的操作已成功完成"
    >
      <template #footer>
        <el-button @click="showConfirm = false">确定</el-button>
      </template>
    </witConfirm>
    
    <!-- 错误提示 -->
    <witConfirm
      v-model="showError"
      theme="error"
      title="操作失败"
      content="您的操作未能完成，请检查并重试"
    >
      <template #footer>
        <el-button @click="showError = false">确定</el-button>
      </template>
    </witConfirm>
    
    <!-- 处理中提示 -->
    <witConfirm
      v-model="showPending"
      theme="pending"
      title="处理中"
      content="系统正在处理您的请求，请稍候"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showConfirm = ref(false)
const showError = ref(false)
const showPending = ref(false)
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Boolean`]     | `false`                    | 控制对话框的显示与隐藏，支持 v-model 双向绑定 |
| `theme`                | [`String`]      | `'success'`                | 对话框主题，可选值：'success'、'error'、'pending' |
| `title`                | [`String`]      | `''`                       | 对话框标题                                     |
| `content`              | [`String`]      | `''`                       | 对话框内容                                     |
| `...ElDialog.props`    | [`Object`]      | -                          | 继承 Element Plus Dialog 的所有属性            |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `footer`               | 自定义对话框底部按钮区域                         |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | 对话框显示状态变化时触发                         | 新的显示状态（Boolean）       |
| `...ElDialog.events`   | 继承 Element Plus Dialog 的所有事件            | -                            |

:::tip
组件支持三种主题样式，每种主题对应不同的图标：
- success：成功图标（icon-wancheng）
- error：错误图标（icon-shibai）
- pending：处理中图标（icon-jinhangzhong）

组件继承了 Element Plus Dialog 的所有属性，如：width、close-on-click-modal、close-on-press-escape 等，可根据需求灵活配置。
:::