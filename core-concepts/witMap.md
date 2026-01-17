# witMap 地图标记组件 %{#witMap}%

`witMap` 是一个基于 Vue 3 和 TypeScript 开发的交互式地图标记组件，具有以下特点：
- 支持自定义地图背景图片
- 可在地图上添加多个标记点
- 支持标记点的悬停交互效果
- 提供自动轮播功能，增强数据展示效果
- 支持自定义标记点图标
- 允许通过插槽自定义标记点弹出菜单内容

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <div style="width: 800px; height: 600px;">
    <witMap
      :positions="mapPositions"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mapPositions = ref([
  { left: '20%', top: '30%', title: '北京', placement: 'top' },
  { left: '40%', top: '50%', title: '上海', placement: 'bottom' },
  { left: '60%', top: '40%', title: '广州', placement: 'left' },
  { left: '75%', top: '55%', title: '深圳', placement: 'right' }
])
</script>
```

### 自定义地图和标记图片

```vue
<template>
  <div style="width: 800px; height: 600px;">
    <witMap
      :positions="mapPositions"
      :mimg="customMapImage"
      :zimg="customMarkerImage"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import customMapImage from '/@/assets/custom-map.png'
import customMarkerImage from '/@/assets/custom-marker.gif'

const mapPositions = ref([
  { left: '20%', top: '30%', title: '北京', placement: 'top' },
  { left: '40%', top: '50%', title: '上海', placement: 'bottom' }
])
</script>
```

### 自定义标记菜单

```vue
<template>
  <div style="width: 800px; height: 600px;">
    <witMap
      :positions="mapPositions"
      :is-set-interval="false"
    >
      <template #menu="{ data }">
        <div class="custom-menu">
          <h4>{{ data.title }}</h4>
          <p>这是自定义菜单内容</p>
          <el-button size="small" type="primary">查看详情</el-button>
        </div>
      </template>
    </witMap>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mapPositions = ref([
  { left: '20%', top: '30%', title: '北京', placement: 'top' },
  { left: '40%', top: '50%', title: '上海', placement: 'bottom' }
])
</script>

<style scoped>
.custom-menu {
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.custom-menu h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #333;
}

.custom-menu p {
  margin: 0 0 10px 0;
  font-size: 12px;
  color: #666;
}
</style>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `positions`            | [`Array`]       | `[]`                       | 标记点位置数组，每个元素包含left、top、title、placement属性 |
| `mimg`                 | [`String`]      | 默认地图图片               | 地图背景图片路径                               |
| `zimg`                 | [`String`]      | 默认标记图片               | 标记点图标路径                                 |
| `width`                | [`String`]      | `'100%'`                   | 组件宽度                                       |
| `height`               | [`String`]      | `'100%'`                   | 组件高度                                       |
| `isSetInterval`        | [`Boolean`]     | `true`                     | 是否启用自动轮播功能                           |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `menu`                 | 自定义标记点弹出菜单内容，提供data参数包含当前标记信息 |

## 功能特性

### 地图展示
- 支持自定义地图背景图片
- 自适应容器尺寸，保持图片比例
- 支持相对和绝对路径图片资源

### 标记点功能
- 可在地图任意位置添加标记点
- 支持自定义标记点图标
- 标记点位置通过left和top百分比控制

### 交互功能
- 支持鼠标悬停显示菜单
- 自动轮播标记点，循环展示
- 点击或悬停时可暂停自动轮播

### 自定义能力
- 支持自定义标记点弹出菜单内容
- 可配置标记点提示框位置（top、bottom、left、right）
- 支持禁用自动轮播功能

### 技术特性
- 基于 Vue 3 Composition API 开发
- TypeScript 提供类型安全
- 组件间通信通过事件和 ref 实现
- 样式隔离，避免与其他组件冲突

## 实现原理

### 组件结构
- 外部容器：`.witMap` - 控制整体宽高和定位
- 地图图片：`img` - 显示地图背景
- 标记组件：`witMapMarker` - 渲染每个标记点
- 自定义菜单：`slot[name="menu"]` - 提供自定义内容入口

### 数据处理
- 标记点数据通过 `positions` prop 传入
- 使用 `v-for` 遍历渲染多个标记点
- 通过 `ref` 获取子组件实例，控制标记点状态

### 自动轮播机制
- 使用 `setInterval` 实现定时切换
- 切换时调用子组件的 `handleMouseEnter` 和 `handleMouseLeave` 方法
- 鼠标悬停时清除定时器，离开时重启定时器

### 组件通信
- 子组件通过 `@mouseenterfun` 和 `@mouseLeavefun` 事件通知父组件
- 父组件通过 `ref` 调用子组件方法
- 使用 `activeIndex` 控制当前激活的标记点

### 样式实现
- 地图容器使用 `position: relative`
- 标记点使用绝对定位，通过 `left` 和 `top` 控制位置
- 图片使用 `object-fit: contain` 保持比例

:::tip
1. `positions` 属性中的 `left` 和 `top` 值应为百分比字符串，如 `'20%'`
2. `placement` 属性控制标记点提示框的位置，可选值：`'top'`、`'bottom'`、`'left'`、`'right'`
3. 默认地图图片和标记图片已内置，可通过 `mimg` 和 `zimg` 属性自定义
4. 自动轮播间隔为 5 秒，可在组件内部调整
5. 组件依赖 `witMapMarker` 子组件，请确保正确引入
6. 建议设置明确的宽高，以确保地图正确显示
:::