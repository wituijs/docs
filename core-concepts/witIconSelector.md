# witIconSelector 图标选择器 %{#witIconSelector}%

`witIconSelector` 是一个基于 Vue 3 和 Element Plus 构建的图标选择器组件，提供丰富的图标库、搜索功能和分页展示，帮助用户快速选择所需图标。

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <div class="icon-selector-container">
    <wit-icon-selector @handle-icon="handleSelectIcon" />
  </div>
</template>

<script lang="ts" setup>
import { witIconSelector } from './plugins/witIconSelector'

// 处理图标选择事件
const handleSelectIcon = (iconName) => {
  console.log('选择的图标:', iconName)
  // 处理图标选择逻辑
}
</script>

<style scoped>
.icon-selector-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witIconSelector`               | 图标选择器组件，提供图标搜索和选择功能 |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `modelValue`                    | `String`        | `'ri-24-hours-fill'` | 当前选中的图标名称                  |
| `placeholder`                   | `String`        | `''`         | 搜索框占位符                        |
| `pageSize`                      | `Number`        | `20`         | 每页显示的图标数量                  |
| `layout`                        | `String`        | `'total, prev, next'` | 分页布局                            |
| `iconSize`                      | `Number/String` | `undefined`  | 图标大小                            |

### 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `handle-icon`                   | 选择图标时触发                      | 选中的图标名称               |
| `update:modelValue`             | 选中图标变化时触发                  | 最新的图标名称               |

## 功能特性

### 搜索功能

支持通过图标名称进行搜索，快速定位所需图标。

### 分页功能

图标列表支持分页展示，默认每页显示20个图标，可通过分页组件切换页码。

### 响应式布局

使用 Element Plus 的栅格布局，在不同屏幕尺寸下自动调整图标排列。

### 丰富的图标库

内置了大量图标，包括自定义图标和第三方图标库（如 Remix Icon）。

## 图标库说明

### 自定义图标

以 `icon-` 开头的图标名称，如：
- `icon-a-zu28379`
- `icon-jixiaoguanli`
- `icon-yaoxuemenzhen`

### Remix Icon

以 `ri-` 开头的图标名称，如：
- `ri-24-hours-fill`
- `ri-search-line`
- `ri-home-2-fill`

:::tip
1. `witIconSelector` 组件依赖 Element Plus 和内部的 `wit-query-form`、`wit-card`、`wit-icon` 和 `wit-pagination` 组件。
2. 图标名称格式为字符串，使用时直接传递给 `wit-icon` 组件的 `icon` 属性即可。
3. 选择图标后会触发 `handle-icon` 事件，返回选中的图标名称。
4. 可以通过 `modelValue` 属性双向绑定当前选中的图标。
5. 组件支持自定义每页显示的图标数量和分页布局。
:::