# witColorfulCard 彩色卡片 %{#witColorfulCard}%

`witColorfulCard` 是一个基于 Element Plus `ElCard` 封装的彩色卡片组件，支持自定义渐变色背景、图标、标题和阴影效果，提供精美的视觉展示效果，适用于数据统计卡片、功能入口等场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="card-container">
    <!-- 基础用法 -->
    <witColorfulCard 
      color-from="#409EFF" 
      color-to="#67C23A"
      title="基础卡片"
    >
      <div>卡片内容</div>
    </witColorfulCard>
    
    <!-- 带图标的卡片 -->
    <witColorfulCard 
      color-from="#E6A23C" 
      color-to="#F56C6C"
      title="带图标卡片"
      icon="el-icon-data-line"
    >
      <div>卡片内容</div>
    </witColorfulCard>
    
    <!-- 自定义样式卡片 -->
    <witColorfulCard 
      :style="{ background: 'linear-gradient(135deg, #909399 0%, #606266 100%)' }"
      title="自定义样式"
      shadow="hover"
    >
      <div>卡片内容</div>
    </witColorfulCard>
  </div>
</template>

<script lang="ts" setup>
import witColorfulCard from '@/library/components/witColorfulCard'
</script>

<style scss>
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witColorfulCard`               | 彩色卡片组件，支持渐变背景和图标    |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `colorFrom`                     | `String`        | `''`         | 渐变背景起始颜色                    |
| `colorTo`                       | `String`        | `''`         | 渐变背景结束颜色                    |
| `shadow`                        | `String`        | `'never'`    | 卡片阴影效果（never/always/hover）  |
| `title`                         | `String`        | `''`         | 卡片标题                            |
| `icon`                          | `String`        | `''`         | 卡片图标（使用 Element Plus 图标名）|
| `style`                         | `Object`        | `{}`         | 自定义卡片样式                      |
| `...ElCard.props`               | `Object`        | -            | 继承 Element Plus ElCard 的所有属性 |

## 功能特性

### 渐变背景
- 支持通过 `colorFrom` 和 `colorTo` 配置线性渐变背景
- 渐变角度固定为 120 度，提供美观的视觉效果
- 可通过 `style` 属性完全自定义背景样式

### 图标支持
- 支持配置 Element Plus 图标库中的任意图标
- 图标默认显示在卡片右上角，带有旋转角度和放大效果
- 增强卡片的视觉识别度和美观性

### 阴影效果
- 提供三种阴影模式：never（无阴影）、always（始终显示）、hover（鼠标悬停时显示）
- 默认使用 never 模式，保持简洁的视觉效果
- 可根据使用场景选择合适的阴影效果

### 内容定制
- 支持自定义卡片标题
- 支持通过插槽自定义卡片内容
- 支持通过 `header` 插槽自定义卡片头部

### 样式继承
- 继承 Element Plus ElCard 的所有属性和事件
- 保持与 Element Plus 组件库的一致性
- 可利用 ElCard 的所有特性，如边框、圆角等

:::tip
1. 卡片默认文字颜色为白色，适合深色渐变背景
2. 图标默认大小为 60px，位置在右上角并旋转 15 度
3. 建议使用对比鲜明的渐变颜色组合，以提升文字可读性
4. 卡片默认最小高度为 120px，可通过样式自定义
5. 当同时设置 `style` 和 `colorFrom`/`colorTo` 时，`style` 优先级更高
:::