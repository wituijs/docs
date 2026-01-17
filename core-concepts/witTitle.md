# witTitle 标题组件 %{#witTitle}%

`witTitle`是一个用于展示页面或模块标题的组件，采用三部分背景图片拼接设计，支持自定义背景、尺寸、字体大小和日期格式化显示，适用于各类需要美观标题栏的场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <witTitle left="基础标题" />
    
    <!-- 显示年份 -->
    <witTitle left="年度报表" dateType="year" />
    
    <!-- 显示当前月份 -->
    <witTitle left="月度报表" dateType="month-the" />
    
    <!-- 显示上月 -->
    <witTitle left="上月报表" dateType="month" />
    
    <!-- 自定义尺寸和字体 -->
    <witTitle 
      left="自定义标题"
      height="50px"
      leftFontSize="24px"
      rightFontSize="18px"
    />
    
    <!-- 带提示信息 -->
    <witTitle 
      left="带提示的标题" 
      tip="这是一个带有提示信息的标题示例"
    />
    
    <!-- 自定义右侧内容 -->
    <witTitle left="带操作按钮的标题">
      <template #right>
        <el-button type="primary" size="small">
          操作按钮
        </el-button>
      </template>
    </witTitle>
  </div>
</template>

<script lang="ts" setup>
// 组件无需额外导入，直接使用即可
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `left`                 | [`String`]      | `''`                       | 左侧标题文本                                   |
| `dateType`             | [`String`]      | `''`                       | 日期类型，可选值：'year'（年）、'month'（上月）、'month-the'（当月） |
| `leftImg`              | [`String`]      | 内置图片                   | 左侧背景图片                                   |
| `leftImgWidth`         | [`String`]      | `'227px'`                  | 左侧背景图片宽度                               |
| `rightImgWidth`        | [`String`]      | `'226px'`                  | 右侧背景图片宽度                               |
| `height`               | [`String`]      | `'45px'`                   | 组件高度                                       |
| `rightImg`             | [`String`]      | 内置图片                   | 右侧背景图片                                   |
| `centerImg`            | [`String`]      | 内置图片                   | 中间背景图片                                   |
| `titleImgWidth`        | [`String`]      | `'35px'`                   | 标题前点图片宽度                               |
| `leftFontSize`         | [`String`]      | `'20px'`                   | 左侧文本字体大小                               |
| `rightFontSize`        | [`String`]      | `'16px'`                   | 右侧文本字体大小                               |
| `tip`                  | [`String`]      | `''`                       | 左侧文本的提示信息，为空时不显示提示           |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `right`                | 自定义右侧内容区域                               |

## 功能特性

- **三部分背景设计**：采用左、中、右三部分背景图片拼接，实现美观的标题栏效果
- **灵活的日期显示**：支持显示当前年份、当前月份和上月份，满足不同时间维度的需求
- **自定义样式**：支持自定义组件高度、字体大小、背景图片和图片尺寸
- **提示信息功能**：左侧文本支持添加提示信息，提升用户体验
- **右侧插槽扩展**：支持通过插槽自定义右侧内容，如操作按钮等
- **响应式设计**：中间背景图片自动拉伸，适应不同宽度的容器

## 实现原理

1. **背景图片拼接**：使用三个div元素分别加载左、中、右三部分背景图片，实现完整标题栏
2. **日期处理**：使用moment.js库根据dateType属性格式化日期显示
3. **动态样式绑定**：利用Vue 3的v-bind语法实现CSS属性的动态绑定，支持自定义样式
4. **提示功能**：集成Element Plus的Tooltip组件，根据tip属性显示提示信息
5. **插槽机制**：提供right插槽，允许用户自定义右侧内容

:::tip
- 组件依赖moment.js库进行日期处理，请确保项目中已正确安装
- 背景图片路径使用了项目内的绝对路径，使用时注意路径配置
- 当同时设置dateType和right插槽时，插槽内容会覆盖日期显示
- 提示信息支持HTML内容，可通过raw-content属性启用
- 建议根据实际需求调整背景图片尺寸，确保拼接效果美观
:::