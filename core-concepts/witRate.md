# witRate 数据指标展示组件 %{#witRate}%

`witRate`是一个用于展示关键数据指标的组件，支持显示数值、环比变化、单位和图标等信息。组件采用渐变文字效果和背景图片设计，具有现代化的视觉风格，适用于数据仪表盘、报表展示等场景。

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <witRate
    :rate="85.5"
    :mom="-2.3"
    label="市场占有率"
  />
</template>

<script lang="ts" setup>
// 组件会自动导入
</script>
```

### 显示图标模式

```vue
<template>
  <witRate
    mode="icon"
    imgType="drug"
    :rate="1250"
    unit="万元"
    label="药品销售额"
    :isShowTop="false"
  />
</template>

<script lang="ts" setup>
// 组件会自动导入
</script>
```

### 自定义尺寸和字体

```vue
<template>
  <witRate
    :rate="92"
    :mom="5.8"
    label="客户满意度"
    width="200px"
    height="160px"
    rateTextFontSize="36px"
    labelTextFontSize="18px"
  />
</template>

<script lang="ts" setup>
// 组件会自动导入
</script>
```

### 隐藏顶部环比信息

```vue
<template>
  <witRate
    :rate="2850"
    unit="人"
    label="月活跃用户"
    :isShowTop="false"
  />
</template>

<script lang="ts" setup>
// 组件会自动导入
</script>
```

## API

| 属性名                | 类型            | 默认值         | 描述                                           |
| :-------------------- | :-------------- | :------------- | :--------------------------------------------- |
| `width`               | `String`        | `'167px'`      | 组件宽度                                       |
| `height`              | `String`        | `'139px'`      | 组件高度                                       |
| `imgType`             | `String`        | `'cost'`       | 图标类型，可选值：car, cost, disease, drug, hospital, inHospital, pie |
| `rate`                | `Number/String` | `0`            | 主要数值                                       |
| `mom`                 | `Number/String` | `0`            | 环比变化值                                     |
| `label`               | `String`        | `''`           | 标签文本，支持 HTML                            |
| `topLabel`            | `String`        | `'较上月'`     | 顶部环比标签文本                               |
| `unit`                | `String`        | `'%'`          | 数值单位                                       |
| `mode`                | `String`        | `'value'`      | 显示模式，'value' 显示数值，其他值显示图标      |
| `isShowTop`           | `Boolean`       | `true`         | 是否显示顶部环比信息                           |
| `rateTextFontSize`    | `String`        | `'30px'`       | 主要数值字体大小                               |
| `labelTextFontSize`   | `String`        | `'15px'`       | 标签文本字体大小                               |
| `valueBottom`         | `String`        | `'10px'`       | 数值区域底部边距                               |
| `imgBottom`           | `String`        | `'10px'`       | 图标区域底部边距                               |
| `topLabelFontSize`    | `String`        | `'14px'`       | 顶部标签字体大小                               |
| `rateTextTop`         | `String`        | `'0px'`        | 数值区域顶部边距                               |

## 功能特性

1. **双模式显示**：支持数值模式和图标模式两种显示方式
2. **环比变化展示**：可显示与上月相比的变化率，自动判断正负并显示不同图标
3. **丰富的图标库**：内置7种不同类型的图标，满足多种业务场景需求
4. **自定义样式**：支持调整字体大小、边距、尺寸等样式属性
5. **渐变文字效果**：主要数值采用蓝色到白色的渐变文字效果，增强视觉吸引力
6. **HTML 支持**：label 属性支持 HTML 内容，可实现富文本显示
7. **响应式设计**：支持自定义宽度和高度，适应不同的布局需求
8. **灵活的布局控制**：提供多个边距属性，可精确控制各元素的位置

## 实现原理

1. **组件结构**：采用绝对定位和 z-index 控制元素层级，背景图片位于底层，内容区域位于上层
2. **条件渲染**：根据 isShowTop 和 mode 属性判断显示不同的内容组合
3. **动态样式**：使用 v-bind 将属性值绑定到样式中，实现灵活的样式控制
4. **图标管理**：通过对象映射管理不同类型的图标资源，便于扩展和维护
5. **数值格式化**：自动处理数值和单位的显示，支持数字和字符串类型的数值输入
6. **环比判断**：根据 mom 值的正负自动显示不同的图标（上升或下降）

## 样式结构

组件采用以下样式设计：

1. **容器布局**：`.witRate` 类，使用 flex 布局和相对定位
2. **背景图片**：`.bg` 类，绝对定位，使用背景图片填充
3. **内容区域**：`.con` 类，相对定位，包含所有显示内容
4. **环比信息**：`.compare` 类，显示顶部的环比变化信息
5. **图标显示**：`.cost-img` 类，显示图标模式下的图标
6. **数值文本**：`.rate-text` 类，采用渐变文字效果，使用 pangmenzhengdao 字体
7. **标签文本**：`.label` 类，显示底部的标签信息

## 支持的图标类型

组件内置了7种图标类型，分别对应不同的业务场景：

- `car`：车辆相关
- `cost`：成本相关（默认）
- `disease`：疾病相关
- `drug`：药品相关
- `hospital`：医院相关
- `inHospital`：住院相关
- `pie`：图表相关

:::tip
1. **字体依赖**：组件使用了 `pangmenzhengdao` 字体，确保系统中已安装该字体
2. **HTML 内容**：label 属性支持 HTML 内容，但需注意避免注入恶意代码
3. **数值范围**：rate 和 mom 属性支持数字和字符串类型，但建议使用数字类型以确保正确的比较
4. **图标扩展**：如需添加新的图标类型，可在组件内部的 typeList 对象中添加
5. **样式定制**：通过调整各种边距和字体大小属性，可以实现丰富的布局效果
6. **背景图片**：组件使用了背景图片，如需修改请调整 CSS 中的 background 属性
7. **单位显示**：unit 属性会直接显示在数值后面，建议使用简短的单位符号
:::