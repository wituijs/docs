# witBall 波浪球 %{#witBall}%

`witBall`是一个带有波浪动画效果的球形进度指示器组件，用于直观展示百分比或数值信息。组件通过CSS动画实现流畅的波浪效果，支持多种自定义配置选项，如颜色、尺寸、边框样式等。[查看组件效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs) [查看大屏效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/thqysjgpt)
## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <witBall value="65" unit="%" />
</template>

<script lang="ts" setup>
import { witBall } from '@wit-ui/components'
</script>
```

### 自定义配置

```vue
<template>
  <witBall
    width="150px"
    height="150px"
    ball-width="120px"
    ball-height="120px"
    border-color="#ff6b6b"
    border-box-shadow-color="#ff8e8e"
    water-color1="#ff6b6b"
    water-color2="#ee5a52"
    value="80"
    unit="%"
    font-size="36px"
  />
</template>

<script lang="ts" setup>
import { witBall } from '@wit-ui/components'
</script>
```

## API

### 组件

| 属性名                 | 类型    | 默认值                     | 描述                                           |
| :--------------------- | :------ | :------------------------- | :--------------------------------------------- |
| `width`                | String  | `'129px'`                  | 整个组件的宽度                                 |
| `height`               | String  | `'131px'`                  | 整个组件的高度                                 |
| `ballWidth`            | String  | `'105px'`                  | 球体的宽度                                     |
| `ballHeight`           | String  | `'105px'`                  | 球体的高度                                     |
| `borderColor`          | String  | `'#33ccff'`                | 球体边框颜色                                   |
| `borderBoxShadowColor` | String  | `'#41fdff'`                | 球体边框阴影颜色                               |
| `waterColor1`          | String  | `'#35ebfb'`                | 波浪上层颜色                                   |
| `waterColor2`          | String  | `'#2876f7'`                | 波浪下层颜色                                   |
| `ringImg`              | String  | 内置图片                   | 球体外部环形图片                               |
| `value`                | String  | `'0'`                      | 显示的数值，范围0-100                          |
| `unit`                 | String  | `''`                       | 数值单位                                       |
| `fontSize`             | String  | `'30px'`                   | 数值字体大小                                   |

### 插槽

暂无插槽

### 事件

暂无事件

## 功能特性 %{#feature}%

1. **波浪动画效果**：通过CSS动画实现流畅的双层波浪效果，直观展示数值
2. **自定义颜色方案**：支持自定义球体边框、阴影、波浪颜色等多种颜色
3. **灵活的尺寸配置**：可配置组件整体尺寸和球体尺寸
4. **数值显示**：支持显示数值和单位，可自定义字体大小
5. **响应式设计**：基于百分比控制波浪高度，适应不同尺寸的球体
6. **环形装饰**：支持自定义球体外部的环形图片装饰

## 实现原理 %{#principle}%

`witBall`组件采用CSS动画实现波浪效果，主要包含以下部分：

1. **外层容器**：使用`witBall`类作为根容器，设置整体尺寸和背景图片
2. **球体元素**：使用`wave-ball`类实现圆形球体，包含边框和阴影效果
3. **波浪效果**：通过`.wave::before`和`.wave::after`两个伪元素实现双层波浪，使用CSS动画`rotate`控制波浪的流动
4. **数值显示**：使用`.wave-text`类显示数值和单位，位于波浪上方
5. **波浪高度计算**：通过计算属性`top`基于传入的`value`值动态计算波浪的位置，公式为`100 - Number(props.value) + '%'`

组件使用了CSS变量和Vue的动态样式绑定功能，实现了高度可定制的视觉效果。

## 样式结构 %{#style}%

```scss
.witBall {
  // 外层容器样式，设置尺寸和背景图片
  .wave-ball {
    // 球体样式，设置边框、阴影和溢出隐藏
    .wave {
      // 波浪容器样式
      &::before, &::after {
        // 双层波浪实现，使用线性渐变和动画
      }
    }
    .wave-text {
      // 数值和单位样式，绝对定位在球体中心
    }
  }
}
```

组件的样式结构清晰，通过嵌套选择器组织不同层级的样式。主要使用了以下CSS特性：
- 线性渐变背景实现波浪颜色过渡
- `border-radius: 50%`实现圆形效果
- CSS动画`rotate`实现波浪流动效果
- 绝对定位实现元素的精确定位
- CSS变量和Vue动态样式绑定实现灵活定制

## 提示信息 %{#tips}%

:::tip
1. `value`属性应传入0-100之间的数值字符串，组件会根据该值计算波浪高度
2. 组件默认使用蓝色主题，可通过`waterColor1`和`waterColor2`自定义波浪颜色
3. 球体外部的环形图片可通过`ringImg`属性自定义，默认使用内置的蓝色环形图片
4. 数值单位可通过`unit`属性设置，如"%"、"个"等
5. 组件支持响应式设计，波浪高度会根据`value`值动态调整
6. 字体大小可通过`fontSize`属性自定义，单位字体大小会自动计算为`fontSize - 15px`
:::