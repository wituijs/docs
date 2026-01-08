# witIcon 图标组件 %{#witIcon}%

`witIcon`是一个灵活的图标组件，支持自定义SVG图标和普通字体图标两种渲染模式，提供统一的图标使用接口，方便在项目中统一管理和使用各类图标资源。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 普通字体图标 -->
    <witIcon 
      icon="el-icon-edit" 
      size="24" 
      className="custom-icon"
    />
    
    <!-- 自定义SVG图标 -->
    <witIcon 
      icon="user" 
      :isCustomSvg="true" 
      size="32"
    />
    
    <!-- 不同大小的图标 -->
    <div class="icon-group">
      <witIcon icon="el-icon-success" size="16" />
      <witIcon icon="el-icon-success" size="20" />
      <witIcon icon="el-icon-success" size="24" />
      <witIcon icon="el-icon-success" size="32" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.custom-icon {
  color: #409eff;
}

.icon-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `icon`                 | [`String`]      | -                          | 图标名称或ID，必填项                             |
| `isCustomSvg`          | [`Boolean`]     | `false`                    | 是否为自定义SVG图标，默认为false                 |
| `className`            | [`String`]      | `''`                       | 自定义类名，用于添加额外样式                     |
| `size`                 | [`String`]      | `''`                       | 图标大小，支持px、rem等单位字符串                 |

## 插槽

无

## 事件

无

:::tip
- 当使用普通字体图标（isCustomSvg=false）时，`icon`属性直接作为i标签的class属性值
- 当使用自定义SVG图标（isCustomSvg=true）时，组件会通过`<use>`标签引用ID为`#wit-icon-{icon}`的SVG元素
- 自定义SVG图标需要确保对应的SVG symbol已经在页面中定义
- 组件默认会为自定义SVG图标添加`wit-icon`类名，方便统一管理样式
:::