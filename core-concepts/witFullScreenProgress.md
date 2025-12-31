# witFullScreenProgress 全屏进度指示器 %{#witFullScreenProgress}%

`witFullScreenProgress` 是一个基于 Vue 3 和 Element Plus 构建的全屏遮罩式进度指示器组件，用于在数据加载、文件导入等耗时操作中提供视觉反馈。组件支持自动增长进度、自定义提示文本和错误状态显示。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <el-button @click="startProgress">开始加载</el-button>
    <el-button @click="stopProgress">完成加载</el-button>
    <el-button @click="errorProgress">加载错误</el-button>
    
    <wit-full-screen-progress ref="progressRef" :tip="customTip" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { WitFullScreenProgress } from './plugins/witFullScreenProgress'

const progressRef = ref()
const customTip = ref('正在处理数据，请稍候...')

// 开始进度
const startProgress = () => {
  progressRef.value?.start()
}

// 完成进度
const stopProgress = () => {
  progressRef.value?.stop()
}

// 显示错误
const errorProgress = () => {
  progressRef.value?.error()
}
</script>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `WitFullScreenProgress`         | 全屏进度指示器组件                  |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `tip`                           | `String`        | `正在为您导入数据中，请稍后…` | 进度提示文本                        |

### 方法

| 方法名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `start()`                       | 开始进度指示，进度条自动增长        | -                            |
| `stop()`                        | 完成进度指示，进度条到100%后关闭    | -                            |
| `error()`                       | 显示错误状态，进度条变红            | -                            |

## 类型定义

### ProgressColor

```typescript
export type ProgressColor = {
  color: string;
  percentage: number;
};
```

### ProgressFn

```typescript
export type ProgressFn = (percentage: number) => string;
```

### ProgressProps

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `type`                          | `String`        | `line`       | 进度条类型（line/circle/dashboard） |
| `percentage`                    | `Number`        | `0`          | 百分比（0-100）                     |
| `status`                        | `String`        | `''`         | 状态（success/warning/exception）   |
| `indeterminate`                 | `Boolean`       | `false`      | 是否为 indeterminate 状态           |
| `duration`                      | `Number`        | `3`          | 动画 duration                       |
| `strokeWidth`                   | `Number`        | `6`          | 进度条宽度                          |
| `strokeLinecap`                 | `String`        | `round`      | 进度条端点形状                      |
| `textInside`                    | `Boolean`       | `false`      | 文本是否在进度条内                  |
| `width`                         | `Number`        | `126`        | 圆形进度条直径                      |
| `showText`                      | `Boolean`       | `true`       | 是否显示文本                        |
| `color`                         | `String/Array/Function` | `''` | 进度条颜色                          |
| `striped`                       | `Boolean`       | `false`      | 是否有条纹                          |
| `stripedFlow`                   | `Boolean`       | `false`      | 是否条纹流动                        |
| `format`                        | `Function`      | (percentage: number) => string | 自定义文本格式                |

:::tip
1. `witFullScreenProgress` 提供了全屏遮罩式的进度指示，适用于数据加载、文件导入等耗时操作。
2. 组件内部使用了 Element Plus 的 Progress 组件，并添加了全屏遮罩和自动增长逻辑。
3. 调用 `start()` 方法后，进度条会自动增长到 95% 并暂停，等待调用 `stop()` 或 `error()` 方法。
4. 调用 `stop()` 方法后，进度条会直接跳转到 100%，然后在 500ms 后关闭。
5. 调用 `error()` 方法后，进度条会显示错误状态，并在 500ms 后关闭。
:::