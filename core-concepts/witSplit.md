# witSplit 面板分割组件 %{#witSplit}%

`witSplit` 是一个功能强大的面板分割组件，用于将页面内容水平或垂直分割为两个可调整大小的面板。组件支持通过拖拽分隔线来动态调整面板大小，适用于布局复杂的应用程序，如代码编辑器、数据仪表板、文件管理器等场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础水平分割 -->
    <witSplit
      v-model="splitRatio"
      :min="100"
      mode="horizontal"
      @getPosition="handlePosition"
    >
      <template #left>
        <div class="panel-content">左侧面板内容</div>
      </template>
      <template #right>
        <div class="panel-content">右侧面板内容</div>
      </template>
    </witSplit>
    
    <!-- 垂直分割 -->
    <witSplit
      v-model="verticalRatio"
      :min="150"
      mode="vertical"
      type="line"
    >
      <template #top>
        <div class="panel-content">顶部面板内容</div>
      </template>
      <template #bottom>
        <div class="panel-content">底部面板内容</div>
      </template>
    </witSplit>
    
    <!-- 自定义初始位置 -->
    <witSplit
      v-model="customRatio"
      :initPosition="200"
      :min="50"
      mode="horizontal"
      type="block"
    >
      <template #left>
        <div class="panel-content">左侧面板（初始宽度200px）</div>
      </template>
      <template #right>
        <div class="panel-content">右侧面板</div>
      </template>
    </witSplit>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const splitRatio = ref(0.5)
const verticalRatio = ref(0.4)
const customRatio = ref(0.3)

const handlePosition = (position: number) => {
  console.log('当前分割位置：', position)
}
</script>

<style scoped>
.panel-content {
  height: 100%;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 4px;
}
</style>
```

## API

### 组件

```markdown
| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witSplit`                      | 面板分割主组件                      |
```

### 属性

```markdown
| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `modelValue`                    | `Number`        | `0.5`        | 分割比例（0~1）                     |
| `initPosition`                  | `Number`        | `0`          | 初始位置（像素值）                  |
| `mode`                          | `String`        | `'horizontal'` | 分割模式（horizontal/vertical）    |
| `min`                           | `Number`        | `50`         | 最小面板尺寸（像素）                |
| `type`                          | `String`        | `'block'`    | 分割线类型（line/block）            |
```

## 事件

```markdown
| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `update:modelValue`             | 分割比例变化时触发                  | 当前分割比例（Number）       |
| `getPosition`                   | 拖拽结束时触发                      | 当前位置（Number，像素值）   |
```

### 插槽

```markdown
| 插槽名                          | 描述                                | 适用模式                     |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `left`                          | 左侧面板内容                        | horizontal                   |
| `right`                         | 右侧面板内容                        | horizontal                   |
| `top`                           | 顶部面板内容                        | vertical                     |
| `bottom`                        | 底部面板内容                        | vertical                     |
```

### 暴露的方法

```markdown
| 方法名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `init`                          | 初始化组件                          | -                            |
```

:::tip
1. 组件支持响应式布局，当容器大小变化时，面板会自动调整大小。
2. 可通过 `initPosition` 属性设置初始面板大小，优先级高于 `modelValue`。
3. 使用 `v-model` 双向绑定分割比例，便于在父组件中控制和获取当前分割状态。
4. 分割线类型 `type` 为 `line` 时显示细线条，为 `block` 时显示带样式的拖拽区域。
5. 组件内部使用 ResizeObserver 监听容器大小变化，确保面板尺寸始终保持正确比例。
:::