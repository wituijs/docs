# witDataCardSeven 数据卡片（第七版）%{#witDataCardSeven}%

`witDataCardSeven`是一个简洁的数据卡片组件，采用背景图片设计，用于展示标题、图标和关键数值的组合信息。组件支持自定义尺寸、标题和单位，具有渐变文字效果。

## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <div>
    <witDataCardSeven
      :value="123456.78"
      title="收款金额"
      unit="元"
    />
  </div>
</template>

<script lang="ts" setup>
// 无需导入默认资源，组件已内置
</script>
```

### 自定义尺寸

```vue
<template>
  <div>
    <witDataCardSeven
      :value="87654.32"
      title="支出金额"
      unit="元"
      width="250px"
      height="120px"
    />
  </div>
</template>

<script lang="ts" setup>
// 自定义卡片尺寸
</script>
```

### 不同单位

```vue
<template>
  <div>
    <witDataCardSeven
      :value="98.5"
      title="完成率"
      unit="%"
    />
  </div>
</template>

<script lang="ts" setup>
// 使用百分比单位
</script>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `value` | [`Number`] | `0` | 显示的数值 |
| `title` | [`String`] | `'默认'` | 卡片标题 |
| `unit` | [`String`] | `'元'` | 数值单位 |
| `width` | [`String`] | `'212px'` | 卡片宽度 |
| `height` | [`String`] | `'106px'` | 卡片高度 |

## 功能特性

- **背景图片设计**：采用背景图片实现卡片的基础视觉效果
- **渐变文字效果**：数值采用渐变文字效果，提升视觉吸引力
- **图标集成**：内置收款图标，增强数据的直观表达
- **灵活配置**：支持自定义尺寸、标题和单位
- **简洁布局**：采用垂直布局，信息层次清晰
- **响应式设计**：适应不同屏幕尺寸的显示需求

## 实现原理

1. **背景图片实现**：通过CSS的background属性设置卡片背景图片，使用绝对路径确保正确加载
2. **渐变文字效果**：使用CSS的`background-clip: text`属性实现数值的渐变文字效果
3. **布局结构**：采用Flex布局实现内部元素的垂直排列和对齐
4. **样式绑定**：通过Vue的样式绑定实现动态的尺寸调整
5. **图标集成**：直接在模板中嵌入收款图标，确保视觉一致性

:::tip
- 组件默认使用内置的小背景图片，无需额外配置
- 数值和单位都采用渐变文字效果，增强视觉层次感
- 卡片尺寸可通过width和height属性自定义，默认尺寸为212px×106px
- 单位属性支持多种类型，如元、%、件等，可根据业务需求灵活配置
- 标题和图标的布局采用居中对齐，确保视觉平衡
- 组件依赖固定的图标资源，确保项目中存在对应的图标文件
:::