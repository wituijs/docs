# witDataCardThree 数据卡片组件 %{#witDataCardThree}%

`witDataCardThree`是一个集成了环形进度图的数据卡片组件，采用卡片式设计，支持显示标题、百分比数值和单位，具有美观的背景图片和渐变文字效果。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <witDataCardThree title="完成率" :rate="85" unit="%" />
    
    <!-- 自定义图片 -->
    <witDataCardThree title="使用率" :rate="65" unit="%" pic="/assets/images/usage.png" />
    
    <!-- HTML标题 -->
    <witDataCardThree :title="'<span style=\'color:#65FFDD\'>覆盖率</span>'" :rate="92.5" unit="%" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `title`                | [`String`]      | `'标题'`                   | 卡片标题，支持HTML格式                         |
| `rate`                 | [`String, Number`] | `0`                    | 百分比数值                                     |
| `unit`                 | [`String`]      | `'%'`                      | 数值单位                                       |
| `pic`                  | [`String`]      | `''`                       | 环形进度图中心显示的图片路径                   |

## 功能特性

- **数据可视化**：集成环形进度图，直观展示百分比数据
- **信息展示**：支持同时展示标题、核心数值和单位
- **视觉设计**：采用卡片式布局，搭配背景图片和渐变文字效果
- **HTML支持**：标题属性支持HTML格式，可自定义样式
- **图片自定义**：支持设置环形进度图中心的图片
- **响应式设计**：自适应容器宽度，保持良好的显示效果

## 实现原理

1. **布局结构**：采用相对定位容器，包含背景层和内容层
2. **组件集成**：内部使用 witProgressChart 组件实现环形进度图
3. **进度图配置**：
   - 进度颜色：`#65FFDD`
   - 背景颜色：`#003A73`
   - 显示数值：rate 属性值
   - 隐藏标题：showTitle 设为 false
4. **文字样式**：核心数值采用白色到青色的渐变文字效果
5. **HTML支持**：使用 v-html 指令渲染标题，支持HTML格式
6. **样式隔离**：使用 scoped 样式确保组件样式不影响其他元素

:::tip
- 组件内部依赖 witProgressChart 组件，请确保项目中已正确引入
- title 属性支持HTML格式，可以使用简单的HTML标签自定义样式
- rate 属性支持字符串或数字类型，内部会自动转换为数值进行显示
- pic 属性用于设置环形进度图中心的图片，需要提供完整的图片路径
- 组件高度固定为 182px，宽度自适应父容器
:::