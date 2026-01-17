# witDataCardSix 数据卡片（第六版）%{#witDataCardSix}%

`witDataCardSix`是一个功能丰富的数据卡片组件，采用背景图片设计，用于展示关键数据指标及对比信息。组件支持自定义背景、尺寸和文本内容，具有渐变文字效果和动态的增减指示器。

## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <div>
    <witDataCardSix
      :value="123456.78"
      :value1="0.125"
      title1="总收入"
      title2="同比"
      unit="元"
    />
  </div>
</template>

<script lang="ts" setup>
// 无需导入默认资源，组件已内置
</script>
```

### 自定义背景

```vue
<template>
  <div>
    <witDataCardSix
      :value="87654.32"
      :value1="-0.058"
      title1="总支出"
      title2="同比"
      unit="元"
      backgroundImg="/@/assets/custom-background.png"
    />
  </div>
</template>

<script lang="ts" setup>
// 导入自定义背景图片
import customBackground from '/@/assets/custom-background.png'
</script>
```

### HTML标题

```vue
<template>
  <div>
    <witDataCardSix
      :value="56789.12"
      :value1="0.083"
      title1="<span style='color: #ffcc00'>净利润</span>"
      title2="同比"
      unit="元"
      width="350px"
      height="280px"
    />
  </div>
</template>

<script lang="ts" setup>
// 使用HTML标题和自定义尺寸
</script>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `value` | [`Number`] | `0` | 显示的主要数值 |
| `value1` | [`Number`] | `0` | 对比数值（用于计算增减百分比） |
| `title1` | [`String`] | `'默认'` | 主标题，支持HTML格式 |
| `title2` | [`String`] | `'默认'` | 对比标题 |
| `unit` | [`String`] | `'元'` | 数值单位 |
| `width` | [`String`] | `'313px'` | 卡片宽度 |
| `height` | [`String`] | `'257px'` | 卡片高度 |
| `backgroundImg` | [`String`] | 内置背景图片 | 卡片背景图片路径 |
| `paddingTop` | [`String`] | `'48px'` | 内容区域上内边距 |

## 功能特性

- **背景图片设计**：支持自定义背景图片，增强视觉吸引力
- **渐变文字效果**：主要数值采用渐变文字效果，提升视觉层次感
- **HTML标题支持**：主标题支持HTML格式，可实现丰富的文本样式
- **动态增减指示**：根据对比数值自动显示向上或向下的箭头图标
- **百分比转换**：自动将小数转换为百分比格式显示
- **灵活配置**：支持自定义尺寸、单位和内边距等多种样式
- **响应式设计**：适应不同屏幕尺寸的显示需求

## 实现原理

1. **背景图片实现**：通过CSS的background属性设置卡片背景图片，支持自定义路径
2. **渐变文字效果**：使用CSS的`background-clip: text`属性实现数值的渐变文字效果
3. **动态图标切换**：根据value1的正负值，通过条件渲染切换不同的箭头图标
4. **百分比转换**：使用`decimalToPercentage`工具函数将小数转换为百分比格式
5. **HTML支持**：使用v-html指令实现标题的HTML内容渲染
6. **样式绑定**：通过Vue的样式绑定实现动态的尺寸和背景图片调整

:::tip
- 组件默认使用内置的背景图片，可通过backgroundImg属性自定义
- value1属性用于表示对比数值，正数显示向上箭头，负数显示向下箭头
- 主标题支持HTML格式，可以使用简单的HTML标签自定义标题样式
- 组件依赖decimalToPercentage工具函数将小数转换为百分比显示
- 卡片尺寸可通过width和height属性自定义，默认尺寸为313px×257px
- 内容区域的上内边距可通过paddingTop属性调整，以适应不同的背景图片设计
:::