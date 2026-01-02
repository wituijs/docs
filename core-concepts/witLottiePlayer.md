# witLottiePlayer Lottie动画播放器 %{#witLottiePlayer}%

`witLottiePlayer` 是一个基于 vue3-lottie 封装的 Lottie 动画播放器组件，用于在 Vue 3 项目中展示高质量的动画效果。组件支持本地和远程 Lottie JSON 数据，可自定义动画的宽度和高度。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 使用本地Lottie数据 -->
    <witLottiePlayer
      :json-local-data="localAnimationData"
      :width="300"
      :height="300"
    />
    
    <!-- 使用远程Lottie数据 -->
    <witLottiePlayer
      :json-remote-data="'https://assets9.lottiefiles.com/packages/lf20_suhe7qtm.json'"
      :width="400"
      :height="400"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 本地Lottie动画数据示例
const localAnimationData = ref({
  v: "5.7.10",
  fr: 30,
  ip: 0,
  op: 90,
  w: 300,
  h: 300,
  nm: "Animation",
  ddd: 0,
  assets: [],
  layers: []
})
</script>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witLottiePlayer`               | Lottie动画播放器主组件              |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `jsonLocalData`                 | `Object`        | `{}`         | 本地Lottie动画JSON数据              |
| `jsonRemoteData`                | `String`        | `'https://assets9.lottiefiles.com/packages/lf20_suhe7qtm.json'` | 远程Lottie动画JSON文件URL |
| `width`                         | `String/Number` | `0`          | 动画宽度                            |
| `height`                        | `String/Number` | `0`          | 动画高度                            |

## 功能特性

### 动画数据支持
- 支持本地Lottie JSON数据
- 支持远程Lottie JSON文件URL
- 当同时提供本地和远程数据时，优先使用本地数据

### 尺寸控制
- 支持数字类型的尺寸设置（像素）
- 支持字符串类型的尺寸设置（如 '100%', '200px'）
- 默认为0，使用动画原始尺寸

### 样式定制
- 自定义动画容器背景色
- 支持通过CSS进一步定制样式

:::tip
1. 组件基于 vue3-lottie 库封装，使用前需确保已安装该依赖。
2. Lottie 动画数据需符合 Bodymovin 导出的 JSON 格式。
3. 当同时提供 `jsonLocalData` 和 `jsonRemoteData` 时，本地数据会优先使用。
4. 若不设置 width 和 height，动画将使用其原始尺寸。
5. 可通过 CSS 为组件添加额外的样式，如边框、阴影等。
:::