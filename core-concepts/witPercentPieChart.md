# witPercentPieChart 百分比环形图 %{#witPercentPieChart}%

`witPercentPieChart` 是一个基于 ECharts 实现的百分比环形图组件，用于直观展示百分比数据，结合了环形进度图和中心数字显示，具有渐变文字效果和响应式设计。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- 基础用法 -->
    <witPercentPieChart 
      :precent="75" 
      label="完成率" 
      height="200px"
    />
    
    <!-- 自定义字体大小 -->
    <witPercentPieChart 
      :precent="45" 
      label="使用率" 
      precent-font-size="40px"
      label-font-size="16px"
      height="250px"
    />
    
    <!-- 自定义图表尺寸 -->
    <witPercentPieChart 
      :precent="90" 
      label="达标率" 
      :pie-width="'60%'"
      :pie-height="'80%'"
      width="300px"
      height="200px"
    />
    
    <!-- HTML标签支持 -->
    <witPercentPieChart 
      :precent="65" 
      label="<span style='color: #FFD166;'>增长率</span>" 
      height="200px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 动态数据
const dynamicPrecent = ref(30)

// 模拟数据变化
setInterval(() => {
  dynamicPrecent.value = (dynamicPrecent.value + 10) % 100
}, 2000)
</script>

<style>
.chart-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
}
</style>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `precent`              | [`Number`]      | `0`                        | 显示的百分比数值（0-100）                      |
| `label`                | [`String`]      | `'默认'`                   | 显示的标签文本，支持 HTML 格式                  |
| `precentFontSize`      | [`String`]      | `'30px'`                   | 百分比数值的字体大小                            |
| `labelFontSize`        | [`String`]      | `'14px'`                   | 标签文本的字体大小                              |
| `pieWidth`             | [`String`]      | `'50%'`                    | 环形图的宽度比例                                |
| `pieHeight`            | [`String`]      | `'100%'`                   | 环形图的高度比例                                |
| `width`                | [`String`]      | `'100%'`                   | 组件容器的宽度                                 |
| `height`               | [`String`]      | `'100%'`                   | 组件容器的高度                                 |

## 功能特性

- **环形进度展示**：使用环形图直观展示百分比数据
- **中心数字显示**：在环形图中心显示百分比数值，具有渐变文字效果
- **自定义标签**：支持自定义标签文本，且支持 HTML 格式
- **灵活的尺寸控制**：可自定义图表尺寸、字体大小等样式
- **响应式设计**：自适应容器大小变化，保持良好的显示效果
- **无交互干扰**：环形图本身不响应鼠标事件，避免干扰其他交互

## 实现原理

1. **图表初始化**：使用 ECharts 库初始化图表实例，绑定到 DOM 元素
2. **多层环形结构**：通过 ECharts 的 series 配置实现多层环形效果，包括背景环、进度环、中心阴影环和外边框环
3. **渐变文字效果**：使用 CSS 线性渐变实现百分比文字的渐变效果
4. **响应式处理**：使用 ResizeObserver 监听容器大小变化，自动调整图表尺寸
5. **HTML 支持**：通过 v-html 指令支持标签文本的 HTML 格式渲染

## 注意事项

:::tip
- 组件依赖 ECharts 库，使用前需确保已安装相关依赖
- precent 属性值应在 0-100 之间，超出范围会自动截断
- label 属性支持 HTML 格式，可以通过内联样式自定义标签样式
- 可通过调整 precentFontSize 和 labelFontSize 属性控制文字大小
- pieWidth 和 pieHeight 属性控制环形图在容器中的比例，建议根据实际需求调整
- 组件使用了自定义字体 "pangmenzhengdao"，如未安装可能会显示默认字体
:::