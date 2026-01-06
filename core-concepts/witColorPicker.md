# witColorPicker 颜色选择器 %{#witColorPicker}%

`witColorPicker` 是一个颜色选择器组件，提供了预设的颜色选项，方便用户快速选择颜色，适用于主题配置、样式定制等场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="color-picker-container">
    <!-- 基础用法 -->
    <witColorPicker 
      v-model="selectedColor"
      @change="handleColorChange"
    />
    
    <!-- 自定义尺寸 -->
    <witColorPicker 
      v-model="selectedColor"
      :size="'large'"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import witColorPicker from '@/library/components/witColorPicker'

const selectedColor = ref('#16baa9')

const handleColorChange = (color: string) => {
  console.log('选中的颜色:', color)
}
</script>

<style scss>
.color-picker-container {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witColorPicker`                | 颜色选择器组件，提供预设颜色选项    |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `modelValue`                    | `String`        | `''`         | 选中的颜色值，支持 v-model 双向绑定 |
| `size`                          | `String`        | `'default'`  | 颜色选择器尺寸，可选值：'small'、'default'、'large' |

## 功能特性

### 预设颜色选项
- 提供丰富的预设颜色选项，方便用户快速选择
- 包含常用的主题色、中性色等多种颜色

### 双向绑定
- 支持 v-model 双向绑定选中的颜色值
- 颜色变化时触发 `change` 事件

### 尺寸定制
- 支持多种尺寸选择，适应不同的使用场景
- 保持与 Element Plus 组件库的尺寸一致性

### 响应式设计
- 适配不同屏幕尺寸
- 提供良好的用户交互体验

:::tip
1. 组件预设了多种常用颜色，包括 '#16baa9' 等
2. 支持通过 `v-model` 双向绑定颜色值
3. 可通过 `size` 属性调整选择器尺寸
4. 颜色选择后会触发 `change` 事件
5. 组件使用简单，适合各种颜色选择场景
:::