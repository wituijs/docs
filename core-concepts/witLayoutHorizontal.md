# witLayoutHorizontal 水平布局 %{#witLayoutHorizontal}%

`witLayoutHorizontal`是一个基于 Element Plus 封装的水平布局组件，提供简洁的顶部导航布局结构，包含头部区域和主内容区域，支持固定头部和标签栏显示控制。

## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <witLayoutHorizontal />
</template>

<script lang="ts" setup>
// 导入组件
import { witLayoutHorizontal } from '@wit-ui/components'
</script>
```

### 自定义配置

```vue
<template>
  <witLayoutHorizontal
    :collapse="false"
    :fixed-header="true"
    :show-tabs="true"
    device="desktop"
  />
</template>

<script lang="ts" setup>
// 导入组件
import { witLayoutHorizontal } from '@wit-ui/components'
</script>
```

## API

### 组件

| 属性名        | 类型    | 默认值   | 描述                     |
| :------------ | :------ | :------- | :----------------------- |
| `collapse`    | Boolean | `false`  | 是否折叠侧边栏           |
| `fixedHeader` | Boolean | `true`   | 是否固定头部             |
| `showTabs`    | Boolean | `true`   | 是否显示标签栏           |
| `device`      | String  | `desktop`| 设备类型，可选值：'desktop'、'mobile' |

### 插槽

暂无插槽

### 事件

暂无事件

## 功能特性 %{#feature}%

1. **简洁的水平布局结构**：提供清晰的顶部导航布局，包含头部区域和主内容区域
2. **固定头部支持**：可配置头部是否固定在页面顶部
3. **标签栏控制**：支持显示或隐藏标签栏
4. **响应式设计**：适配不同设备类型
5. **样式定制**：提供CSS变量支持自定义样式

## 实现原理 %{#principle}%

`witLayoutHorizontal`组件采用Flex布局实现整体结构，主要包含以下部分：

1. **外层容器**：使用`wit-layout-horizontal`类作为根容器，控制整体布局
2. **头部区域**：包含`wit-layout-header`类，用于放置导航栏和标签栏
3. **主内容区域**：包含`wit-main`类，用于展示页面主要内容

组件通过接收props来控制布局行为，如是否固定头部、是否显示标签栏等，并通过计算属性动态添加CSS类来实现不同的布局效果。

## 样式结构 %{#style}%

```scss
.wit-layout-horizontal {
  :deep() {
    .wit-main {
      width: 100% !important;
      margin: auto !important;
    }
  }

  .wit-tabs-horizontal {
    background: var(--el-color-white);
  }

  .wit-nav {
    .fold-unfold {
      display: none;
    }
  }
}
```

组件使用SCSS语法编写样式，通过`:deep()`选择器穿透作用域，确保子组件样式正确应用。主要样式特点：

1. **主内容区域**：设置宽度100%，居中显示
2. **标签栏**：使用白色背景
3. **导航栏**：隐藏折叠/展开按钮

## 提示信息 %{#tips}%

:::tip
1. 组件默认启用固定头部和标签栏显示
2. 在移动设备上使用时，建议设置`device="mobile"`以获得更好的适配效果
3. 组件依赖于`wit-header`和`wit-app-main`等子组件，使用时确保这些组件已正确导入
4. 可以通过覆盖CSS变量来自定义组件样式
:::