# witCard 卡片组件 %{#witCard}%

`witCard` 是一个基于 Element Plus ElCard 组件的增强型卡片组件，添加了骨架屏功能，支持自定义阴影、标题和内容布局，适用于需要优雅加载状态展示的管理系统界面。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="card-container">
    <!-- 基本卡片 -->
    <witCard title="基本卡片">
      <div>这是卡片的内容</div>
    </witCard>
    
    <!-- 带阴影的卡片 -->
    <witCard title="带阴影的卡片" shadow="hover">
      <div>鼠标悬停时显示阴影</div>
    </witCard>
    
    <!-- 带骨架屏的卡片 -->
    <witCard title="带骨架屏的卡片" skeleton skeleton-rows="3">
      <div v-if="!loading">
        <p>骨架屏加载完成后显示的内容</p>
        <p>可以包含多行文本或其他元素</p>
        <p>骨架屏会自动在500毫秒后隐藏</p>
      </div>
    </witCard>
    
    <!-- 带头部和底部插槽的卡片 -->
    <witCard>
      <template #header>
        <div class="card-header">
          <span>自定义头部</span>
          <el-button size="small" type="primary">操作按钮</el-button>
        </div>
      </template>
      <div>卡片内容区域</div>
      <template #footer>
        <div class="card-footer">
          <el-button size="small">取消</el-button>
          <el-button size="small" type="primary">确定</el-button>
        </div>
      </template>
    </witCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)

// 模拟数据加载
setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
}
</style>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witCard`                       | 增强型卡片组件，支持骨架屏功能      |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `shadow`                        | `String`        | `'never'`    | 卡片阴影效果，可选值：`'always'`、`'hover'`、`'never'` |
| `skeleton`                      | `Boolean`       | `false`      | 是否显示骨架屏                      |
| `skeletonRows`                  | `Number`        | `5`          | 骨架屏显示的行数（实际显示数量会比传入数量多1） |
| `title`                         | `String`        | `''`         | 卡片标题                            |
| `bodyStyle`                     | `Object`        | -            | 卡片内容区域样式                    |
| `bodyClass`                     | `String`/`Array`/`Object` | -        | 卡片内容区域类名                    |

### 方法

| 方法名                          | 描述                                | 参数类型                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -               | -            | 该组件无需调用方法                  |

### 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -               | -            | 该组件不触发自定义事件            |

## 功能特性

### 骨架屏加载
- 支持显示骨架屏加载状态
- 可配置骨架屏行数
- 自动在500毫秒后隐藏骨架屏
- 骨架屏支持动画效果

### 阴影效果
- 提供三种阴影模式：始终显示、鼠标悬停显示、从不显示
- 默认不显示阴影，保持简洁风格
- 可根据需求灵活配置

### 插槽支持
- 支持自定义头部插槽（#header）
- 支持自定义内容插槽（默认插槽）
- 支持自定义底部插槽（#footer）
- 插槽内容完全自定义，满足各种布局需求

### 样式定制
- 支持设置内容区域样式
- 支持设置内容区域类名
- 继承 Element Plus 卡片组件的所有样式特性
- 图标使用渐变色效果，增强视觉体验

:::tip
1. 骨架屏功能默认在500毫秒后自动隐藏，可根据实际需求调整时间。
2. 骨架屏显示的行数会比传入的 `skeletonRows` 数量多1行。
3. 当使用自定义头部插槽时，`title` 属性将被忽略。
4. 可以通过 `bodyStyle` 和 `bodyClass` 自定义卡片内容区域的样式。
5. 组件继承了 Element Plus ElCard 的所有属性，可参考 Element Plus 文档使用更多功能。
:::