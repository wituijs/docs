# witImageViewer 图片查看器 %{#witImageViewer}%

`witImageViewer` 是一个功能强大的图片查看器组件，基于 Element Plus 图标库开发，支持图片缩放、旋转、移动、切换等多种操作，适用于需要查看和操作图片的场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <witImageViewer
      :url-list="imageList"
      :width="'800px'"
      :height="'600px'"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 图片列表数据
const imageList = ref([
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg'
])
</script>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witImageViewer`                | 图片查看器主组件                    |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `urlList`                       | `Array`         | `[]`         | 图片URL列表                         |
| `width`                         | `String`        | `'100%'`     | 查看器宽度                          |
| `height`                        | `String`        | `'100%'`     | 查看器高度                          |

### 功能特性

### 图片操作
- 支持鼠标滚轮缩放图片
- 支持点击按钮放大/缩小图片
- 支持左右旋转图片
- 支持拖拽移动图片
- 支持还原图片初始状态

### 图片切换
- 支持左右切换图片
- 显示当前图片索引和总数
- 支持循环切换（第一张图片的上一张是最后一张，最后一张的下一张是第一张）

### 界面布局
- 顶部图片显示区域
- 中间图片索引显示
- 底部操作按钮栏

:::tip
1. 组件使用 Element Plus 图标库，使用前需确保已安装并注册 Element Plus。
2. 图片缩放范围为 0.1 到 5 倍，超过范围将不再响应操作。
3. 拖拽功能在鼠标按下图片时激活，鼠标抬起或离开容器时取消。
4. 旋转角度以 90 度为单位，支持左右旋转。
5. 当只有一张图片时，切换按钮将失效。
:::