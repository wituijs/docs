# witFooter 页脚组件 %{#witFooter}%

`witFooter`是一个显示系统版权信息的页脚组件，自动显示当前年份和系统标题，可通过配置控制显示状态。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="app-container">
    <main class="app-main">
      <!-- 主要内容区域 -->
    </main>
    <witFooter />
  </div>
</template>

<script lang="ts" setup>
// 组件会自动从 settingsStore 获取配置信息，无需额外配置
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| 无                     | -               | -                          | 组件无需额外属性配置                           |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| 无                     | 组件不提供插槽                                 |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| 无                     | 组件不触发外部事件                             | -                            |

## 功能说明

1. **版权信息**：自动显示当前年份和版权符号
2. **系统标题**：从 `settingsStore` 获取系统标题并显示
3. **显示控制**：通过 `settingsStore` 中的 `theme.showFooter` 控制组件显示/隐藏
4. **响应式设计**：适配不同屏幕尺寸
5. **主题集成**：使用 Element Plus CSS 变量，支持主题切换

## 使用提示

:::tip
1. 组件依赖 `settingsStore` 来获取系统标题和显示状态配置
2. 当前年份会自动更新，无需手动维护
3. 组件使用了 Element Plus 的 CSS 变量，如 `--el-footer-height`、`--el-color-grey` 等，可通过主题配置进行自定义
4. 组件默认会添加底部边框和圆角，与系统整体风格保持一致
5. 版权图标使用了 `ri-copyright-line`，需要确保已正确配置图标库
:::