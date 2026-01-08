# witLayoutVertical 垂直布局 %{#witLayoutVertical}%

`witLayoutVertical`是一个基于 Element Plus 封装的垂直布局组件，提供完整的左侧导航栏布局结构，包含侧边栏、头部导航、标签栏和主内容区域，支持侧边栏折叠、固定头部、标签栏显示控制等功能。

## 用法实列 %{#dome}%

### 基础用法

```vue
<template>
  <witLayoutVertical />
</template>

<script lang="ts" setup>
// 导入组件
import { witLayoutVertical } from '@wit-ui/components'
</script>
```

### 自定义配置

```vue
<template>
  <witLayoutVertical
    :collapse="false"
    :fixed-header="true"
    :show-tabs="true"
    :show-header="true"
    device="desktop"
  />
</template>

<script lang="ts" setup>
// 导入组件
import { witLayoutVertical } from '@wit-ui/components'
</script>
```

## API

### 组件

| 属性名        | 类型    | 默认值   | 描述                     |
| :------------ | :------ | :------- | :----------------------- |
| `collapse`    | Boolean | `false`  | 是否折叠侧边栏           |
| `fixedHeader` | Boolean | `true`   | 是否固定头部             |
| `showTabs`    | Boolean | `true`   | 是否显示标签栏           |
| `showHeader`  | Boolean | `true`   | 是否显示头部导航         |
| `device`      | String  | `desktop`| 设备类型，可选值：'desktop'、'mobile' |

### 插槽

暂无插槽

### 事件

暂无事件

## 功能特性 %{#feature}%

1. **完整的垂直布局结构**：包含侧边栏、头部导航、标签栏和主内容区域
2. **侧边栏折叠功能**：支持侧边栏的展开和折叠，提升屏幕空间利用率
3. **固定头部支持**：可配置头部是否固定在页面顶部
4. **标签栏控制**：支持显示或隐藏标签栏
5. **头部导航控制**：支持显示或隐藏头部导航
6. **响应式设计**：适配不同设备类型，移动端有遮罩层点击折叠功能
7. **状态样式适配**：根据不同配置自动应用相应的样式类

## 实现原理 %{#principle}%

`witLayoutVertical`组件采用Flex布局实现整体结构，主要包含以下部分：

1. **外层容器**：使用`wit-layout-vertical`类作为根容器，控制整体布局
2. **侧边栏**：集成`wit-side-bar`组件，提供导航菜单功能
3. **移动端遮罩层**：在移动端且侧边栏展开时显示，点击可折叠侧边栏
4. **主内容区域**：包含头部导航、标签栏和主内容，根据配置显示不同状态

组件通过接收props来控制布局行为，并使用类名动态切换不同的布局状态。移动端遮罩层功能通过监听点击事件调用`foldSideBar`方法实现，该方法来自`settingsStore`状态管理。

## 样式结构 %{#style}%

```scss
.wit-layout-vertical {
  .wit-layout-header {
    padding-top: var(--el-nav-height);
  }
  &.no-header {
    .wit-layout-header {
      padding-top: 0;
    }
  }
}
```

组件使用SCSS语法编写样式，主要控制头部区域的内边距，当隐藏头部时移除内边距。组件会根据不同的配置动态添加以下类名：

1. `fixed`：当`fixedHeader`为`true`时添加
2. `no-tabs-bar`：当`showTabs`为`false`时添加
3. `no-header`：当`showHeader`为`false`时添加
4. `is-collapse-main`：当侧边栏折叠时添加
5. `is-no-tabs`：当不显示标签栏时添加
6. `fixed-header`：当固定头部时添加

## 提示信息 %{#tips}%

:::tip
1. 组件默认启用固定头部和显示标签栏
2. 在移动设备上，侧边栏展开时会显示遮罩层，点击遮罩层可折叠侧边栏
3. 组件依赖于`wit-side-bar`、`wit-nav`、`wit-tabs`和`wit-app-main`等子组件，使用时确保这些组件已正确导入
4. 可以通过覆盖CSS变量和类名来自定义组件样式
5. `foldSideBar`方法来自`settingsStore`状态管理，用于控制侧边栏的折叠/展开状态
:::