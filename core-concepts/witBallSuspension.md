# witBallSuspension 悬浮球 %{#witBallSuspension}%

`witBallSuspension`是一个基于 Pixi.js 和 GSAP 实现的悬浮球动画组件，用于创建带有动画效果的球体展示。组件支持两种类型的球体：普通随机移动的小球和带有文字的上下浮动的球，可用于数据可视化或装饰性效果。[查看组件效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs) [查看大屏效果>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/thqysjgpt)

## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <witBallSuspension
    :ball="ballConfig"
    width="100%"
    height="400px"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { witBallSuspension } from '@wit-ui/components'

// 示例配置
const ballConfig = ref({
  ballimg: [
    { img: '/path/to/ball1.png', diameter: 20 },
    { img: '/path/to/ball2.png', diameter: 15 }
  ],
  ballArry: [
    {
      x: 100,
      y: 100,
      width: 80,
      height: 80,
      img: '/path/to/text-ball.png',
      name: '示例文本',
      offset: 20,
      wordWrapWidth: 50
    }
  ]
})
</script>
```

### 自定义尺寸

```vue
<template>
  <witBallSuspension
    :ball="ballConfig"
    width="500px"
    height="300px"
    :p-width="800"
    :p-height="600"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { witBallSuspension } from '@wit-ui/components'

// 示例配置
const ballConfig = ref({
  ballArry: [
    {
      x: 200,
      y: 150,
      width: 100,
      height: 100,
      img: '/path/to/text-ball.png',
      name: '悬浮球',
      offset: 30,
      wordWrapWidth: 60
    }
  ]
})
</script>
```

## API

### 组件

| 属性名                 | 类型    | 默认值                     | 描述                                           |
| :--------------------- | :------ | :------------------------- | :--------------------------------------------- |
| `ball`                 | Object  | `{}`                       | 球体配置对象，包含 `ballimg` 和 `ballArry` 属性 |
| `width`                | String  | `'100%'`                   | 组件容器宽度                                   |
| `height`               | String  | `'100%'`                   | 组件容器高度                                   |
| `p_width`              | Number  | `50`                       | Pixi.js 应用的宽度                              |
| `p_height`             | Number  | `50`                       | Pixi.js 应用的高度                              |

### ball 对象结构

| 属性名                 | 类型    | 描述                                           |
| :--------------------- | :------ | :--------------------------------------------- |
| `ballimg`              | Array   | 普通小球配置数组，每项包含 `img`（图片路径）和 `diameter`（直径） |
| `ballArry`             | Array   | 带文字的球配置数组，每项包含位置、尺寸、图片、文字等信息 |

### ballArry 项结构

| 属性名                 | 类型    | 描述                                           |
| :--------------------- | :------ | :--------------------------------------------- |
| `x`                    | Number  | 球的 x 坐标                                     |
| `y`                    | Number  | 球的 y 坐标                                     |
| `width`                | Number  | 球的宽度                                       |
| `height`               | Number  | 球的高度                                       |
| `img`                  | String  | 球的图片路径                                    |
| `name`                 | String  | 球上显示的文字                                  |
| `offset`               | Number  | 上下浮动的偏移量                                |
| `wordWrapWidth`        | Number  | 文字换行宽度                                    |

### 插槽

暂无插槽

### 事件

暂无事件

## 功能特性 %{#feature}%

1. **双类型球体支持**：同时支持普通随机移动的小球和带有文字的浮动球
2. **物理碰撞效果**：普通小球会在边界内随机移动并发生碰撞反弹
3. **流畅动画效果**：使用 GSAP 实现带文字球体的平滑上下浮动动画
4. **自定义配置**：支持配置球体图片、尺寸、位置、动画参数等
5. **响应式设计**：可配置组件容器和 Pixi.js 应用的尺寸
6. **空状态处理**：当没有球体数据时显示友好的空状态提示
7. **资源管理**：自动加载和管理图片资源，支持动态更新数据

## 实现原理 %{#principle}%

`witBallSuspension`组件结合了 Pixi.js 和 GSAP 实现复杂的动画效果，主要实现原理如下：

1. **Pixi.js 应用初始化**：在组件挂载时创建 Pixi.js 应用，设置透明背景
2. **资源加载**：使用 Pixi.js 的 `Assets.load` 方法加载球体图片资源
3. **普通小球实现**：
   - 创建随机位置和速度的小球
   - 在 `app.ticker` 中更新小球位置
   - 实现边界碰撞检测和反弹逻辑
4. **带文字的球实现**：
   - 创建容器包含图片和文字
   - 使用 Pixi.js 的 `Text` 对象实现文字渲染
   - 使用 GSAP 创建上下浮动的动画效果
5. **数据监听**：监听 `ball` 属性变化，动态更新球体配置和动画
6. **资源清理**：当数据更新时，销毁旧的 Pixi.js 应用，避免内存泄漏

组件使用了容器化设计，将不同类型的球体分开管理，实现了代码的模块化和可维护性。

## 样式结构 %{#style}%

```scss
.BallSuspension {
  position: relative;
  overflow: hidden;
  .empty {
    width: 100%;
    height: 100%;
    text-align: center;
    .text-gray {
      color: var(--el-text-color-secondary);
    }
  }
}
```

组件的样式结构简洁，主要包含以下部分：
- 外层容器：使用相对定位和溢出隐藏
- 空状态提示：居中显示，使用次要文本颜色

## 提示信息 %{#tips}%

:::tip
1. 组件依赖 Pixi.js 和 GSAP 库，使用前请确保已正确安装
2. `ballimg` 用于配置普通随机移动的小球，`ballArry` 用于配置带文字的浮动球
3. 文字会根据 `wordWrapWidth` 自动换行，超出指定宽度的文字会被截断
4. Pixi.js 应用的尺寸（`p_width` 和 `p_height`）会影响动画的分辨率和性能
5. 图片路径需要正确配置，确保能够被 Pixi.js 正确加载
6. 当 `ballArry` 为空时，组件会显示空状态提示
:::