# witDeepseekIcon DeepSeek AI 图标组件 %{#witDeepseekIcon}%

`witDeepseekIcon`是一个用于集成DeepSeek AI功能的图标组件，提供了AI助手的入口，点击后可以打开AI药物助手界面。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="header-right">
    <witDeepseekIcon />
  </div>
</template>

<script lang="ts" setup>
// 组件无需额外引入依赖，直接使用即可
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| 无                     | -               | -                          | 组件无需额外属性配置                           |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| 无                     | 组件内部处理点击事件，无需外部监听             | -                            |

:::tip
1. 组件使用了Lottie动画效果，需要确保项目中已正确配置witLottiePlayer组件。
2. 组件内部集成了aiMedicationAssistant组件，点击图标后会触发打开AI药物助手的功能。
3. 组件默认使用左对齐的弹性布局，样式类为`im primary flex left-center`。
:::