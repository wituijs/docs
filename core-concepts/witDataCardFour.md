# witDataCardFour 数据卡片（第四版）%{#witDataCardFour}%

`witDataCardFour`是一个用于展示关键数据指标的数据卡片组件，支持图片、数值和标题的组合展示，具有独特的视觉设计和渐变文字效果。组件采用固定尺寸设计，适用于大屏数据展示场景。

## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <div>
    <witDataCardFour
      title="拦截率"
      :rate="89.5"
    />
  </div>
</template>

<script lang="ts" setup>
// 无需导入默认图片，组件已内置
</script>
```

### 自定义图片

```vue
<template>
  <div>
    <witDataCardFour
      title="通过率"
      :rate="76.2"
      pic="/@/assets/custom-image.png"
    />
  </div>
</template>

<script lang="ts" setup>
// 导入自定义图片
import customImage from '/@/assets/custom-image.png'
</script>
```

### HTML标题

```vue
<template>
  <div>
    <witDataCardFour
      title="<span style='color: #ff0000'>异常率</span>"
      :rate="5.8"
    />
  </div>
</template>

<script lang="ts" setup>
// 支持HTML格式的标题
</script>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `title` | [`String`] | `'标题'` | 卡片标题，支持HTML格式 |
| `rate` | [`String`, `Number`] | `0` | 显示的数值，支持数字或字符串类型 |
| `pic` | [`String`] | 内置拦截图标 | 卡片中显示的图片路径 |

## 功能特性

- **数据展示**：支持数值、标题和图片的组合展示
- **视觉设计**：采用独特的背景图片和渐变文字效果，提升视觉吸引力
- **HTML支持**：标题属性支持HTML格式，可实现丰富的文本样式
- **图片自定义**：允许自定义卡片中的图片，适应不同业务场景
- **固定尺寸**：采用固定的宽高设计，确保在大屏展示中的一致性

## 实现原理

1. **布局结构**：采用相对定位的容器，包含背景层和内容层，实现视觉层次感
2. **背景效果**：使用背景图片实现卡片的基础视觉效果，通过z-index控制层级
3. **图片展示**：提供默认图片，并支持通过prop自定义图片
4. **文字样式**：数值采用渐变文字效果，通过background-clip: text实现
5. **HTML支持**：使用v-html指令实现标题的HTML内容渲染
6. **样式隔离**：使用scoped属性确保样式仅应用于当前组件

:::tip

- 组件默认使用内置的拦截图标，可通过pic属性自定义图片路径
- rate属性支持数字或字符串类型，组件会自动转换为字符串显示
- title属性支持HTML格式，可以使用简单的HTML标签自定义标题样式
- 组件采用固定尺寸设计（宽度131px，高度151px），适合在网格布局中使用
- 背景图片使用绝对路径，确保在不同环境下的正确加载
- 渐变文字效果在部分旧浏览器中可能不支持，建议在现代浏览器中使用
:::