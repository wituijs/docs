# witMagnifier 图片放大镜 %{#witMagnifier}%

`witMagnifier`是一个基于 Vue 3 开发的图片放大镜组件，支持鼠标悬停放大查看图片细节，提供内部放大和外部放大两种模式，适用于商品图片展示、图片细节查看等场景。

## 用法实列 %{#dome}%

```vue
<template>
  <div>
    <h3>基础用法（内部放大）</h3>
    <wit-magnifier :url="imageUrl" :width="200" type="circle" />
    
    <h3>外部放大</h3>
    <wit-magnifier 
      :url="imageUrl" 
      :width="200" 
      :outZoomer="true" 
      :scale="3"
    />
    
    <h3>自定义放大倍数</h3>
    <wit-magnifier :url="imageUrl" :width="200" :scale="2" />
    
    <h3>方形放大镜</h3>
    <wit-magnifier :url="imageUrl" :width="200" type="square" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import witMagnifier from 'path/to/witMagnifier'

const imageUrl = 'https://example.com/image.jpg'
</script>
```

## API

### 属性

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `url`                  | [`String`]      | `''`                       | 原始图片 URL                                   |
| `highUrl`              | [`String`]      | `''`                       | 高清图片 URL（用于放大时显示）                 |
| `width`                | [`Number`]      | `168`                      | 放大镜宽度                                     |
| `height`               | [`Number`]      | `-1`                       | 放大镜高度，默认与宽度相同                     |
| `type`                 | [`String`]      | `'square'`                 | 放大镜类型，可选值：'square'、'circle'         |
| `zoomerStyle`          | [`Object`]      | `{}`                       | 自定义放大镜样式                               |
| `outZoomerStyle`       | [`Object`]      | `{}`                       | 自定义外部放大镜样式                           |
| `scale`                | [`Number`]      | `2`                        | 放大倍数                                       |
| `enterEvent`           | [`Object/UIEvent`] | `null`                 | 自定义鼠标进入事件                             |
| `moveEvent`            | [`Object/UIEvent`] | `null`                 | 自定义鼠标移动事件                             |
| `leaveEvent`           | [`Object/UIEvent`] | `null`                 | 自定义鼠标离开事件                             |
| `selector`             | [`Boolean`]     | `true`                     | 是否显示选择器                                 |
| `outZoomer`            | [`Boolean`]     | `false`                    | 是否启用外部放大模式                           |
| `pointer`              | [`Boolean`]     | `false`                    | 是否显示指针                                   |
| `baseline`             | [`Boolean`]     | `false`                    | 是否显示基准线                                 |
| `disabledReactive`     | [`Boolean`]     | `false`                    | 是否禁用响应式                                 |
| `disabled`             | [`Boolean`]     | `false`                    | 是否禁用放大镜功能                             |
| `mask`                 | [`Boolean`]     | `true`                     | 是否显示遮罩                                   |
| `maskColor`            | [`String`]      | `''`                       | 遮罩颜色                                       |

### 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `mouseenter`           | 鼠标进入组件时触发                               | 鼠标事件对象                   |
| `mousemove`            | 鼠标在组件上移动时触发                           | 鼠标事件对象                   |
| `mouseleave`           | 鼠标离开组件时触发                               | 鼠标事件对象                   |
| `created`              | 组件创建完成时触发                               | 图片元素和图片信息对象         |

### 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `zoomer`               | 自定义内部放大镜内容                             |
| `outZoomer`            | 自定义外部放大镜内容                             |

:::tip
1. 组件支持两种放大模式：内部放大（默认）和外部放大（通过 `outZoomer` 属性启用）
2. 当 `outZoomer` 为 true 时，放大镜会显示在图片右侧
3. 组件支持圆形和方形两种放大镜类型，通过 `type` 属性设置
4. 可以通过 `highUrl` 属性提供高清图片，提升放大效果
5. 组件会自动处理图片加载状态，确保在图片完全加载后才显示放大效果
:::