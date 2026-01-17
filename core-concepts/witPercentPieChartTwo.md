# witPercentPieChartTwo 垂直布局百分比环形图 %{#witPercentPieChartTwo}%

`witPercentPieChartTwo` 是一个基于 ECharts 实现的垂直布局百分比环形图组件，用于直观展示百分比数据。该组件采用环形图在上、文字说明在下的垂直布局，具有渐变文字效果和响应式设计。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="chart-container">
    <!-- 基础用法 -->
    <witPercentPieChartTwo 
      :precent="75" 
      label="完成率" 
      height="250px"
    />
    
    <!-- 自定义字体大小 -->
    <witPercentPieChartTwo 
      :precent="45" 
      label="使用率" 
      precent-font-size="40px"
      label-font-size="16px"
      height="300px"
    />
    
    <!-- 自定义标签间距 -->
    <witPercentPieChartTwo 
      :precent="90" 
      label="达标率" 
      :label-top="'20px'"
      height="250px"
    />
    
    <!-- 自定义图表尺寸 -->
    <witPercentPieChartTwo 
      :precent="65" 
      label="增长率" 
      :pie-width="'60%'"
      :pie-height="'70%'"
      width="300px"
      height="250px"
    />
    
    <!-- HTML标签支持 -->
    <witPercentPieChartTwo 
      :precent="80" 
      label="<span style='color: #FFD166;'>满意度</span>" 
      height="250px"
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
  gap: 30px;
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
| `labelTop`             | [`String`]      | `'10px'`                   | 标签与环形图之间的距离                           |
| `pieWidth`             | [`String`]      | `'50%'`                    | 环形图的宽度比例                                |
| `pieHeight`            | [`String`]      | `'100%'`                   | 环形图的高度比例                                |
| `width`                | [`String`]      | `'100%'`                   | 组件容器的宽度                                 |
| `height`               | [`String`]      | `'100%'`                   | 组件容器的高度                                 |

## 功能特性

- **垂直布局设计**：环形图在上，文字说明在下，符合常规阅读习惯
- **环形进度展示**：使用多层环形结构直观展示百分比数据
- **渐变文字效果**：百分比数字采用渐变文字效果，增强视觉吸引力
- **灵活的间距控制**：可通过 labelTop 属性自定义标签与环形图之间的距离
- **HTML 标签支持**：标签文本支持 HTML 格式，可自定义样式
- **响应式设计**：自适应容器大小变化，保持良好的显示效果
- **无交互干扰**：环形图本身不响应鼠标事件，避免干扰其他交互

## 实现原理

1. **图表初始化**：使用 ECharts 库初始化图表实例，绑定到 DOM 元素
2. **多层环形结构**：通过 ECharts 的 series 配置实现多层环形效果，包括背景环、进度环、中心阴影环和外边框环
3. **垂直布局**：使用 flex-column 和 up-center 类实现垂直居中布局
4. **渐变文字效果**：使用 CSS 线性渐变实现百分比文字的渐变效果
5. **响应式处理**：使用 ResizeObserver 监听容器大小变化，自动调整图表尺寸
6. **HTML 支持**：通过 v-html 指令支持标签文本的 HTML 格式渲染

## 注意事项

:::tip
- 组件依赖 ECharts 库，使用前需确保已安装相关依赖
- precent 属性值应在 0-100 之间，超出范围会自动截断
- label 属性支持 HTML 格式，可以通过内联样式自定义标签样式
- 可通过调整 labelTop 属性控制标签与环形图之间的距离
- pieWidth 和 pieHeight 属性控制环形图在容器中的比例，建议根据实际需求调整
- 组件使用了自定义字体 "pangmenzhengdao"，如未安装可能会显示默认字体
- 与 witPercentPieChart 的主要区别在于布局方式（垂直 vs 水平）和文字居中显示
:::