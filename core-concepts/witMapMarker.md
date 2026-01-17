# witMapMarker 地图标记组件 %{#witMapMarker}%

`witMapMarker` 是一个基于 Vue 3 和 TypeScript 开发的地图标记组件，主要用于在地图上显示可交互的标记点，具有以下特点：
- 支持自定义标记点图标
- 鼠标悬停时显示弹出菜单
- 提供平滑的缩放动画效果
- 支持自定义标记点位置（通过 left 和 top 属性）
- 支持多种弹出方向（上、下、左、右）
- 与父组件通信，支持外部控制显示/隐藏状态

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarker
      left="20%"
      top="30%"
    >
      <template #menu>
        <div class="marker-menu">
          <h4>标记点信息</h4>
          <p>这是一个地图标记点</p>
        </div>
      </template>
    </witMapMarker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.marker-menu {
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.marker-menu h4 {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #333;
}

.marker-menu p {
  margin: 0;
  font-size: 12px;
  color: #666;
}
</style>
```

### 自定义图标和位置

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarker
      left="40%"
      top="50%"
      :zimg="customMarkerImage"
      placement="bottom"
    >
      <template #menu>
        <div class="marker-menu">
          <h4>自定义标记</h4>
          <p>使用自定义图标和底部弹出</p>
        </div>
      </template>
    </witMapMarker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import customMarkerImage from '/@/assets/custom-marker.png'
</script>
```

### 外部控制显示状态

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarker
      ref="markerRef"
      left="60%"
      top="25%"
      placement="right"
    >
      <template #menu>
        <div class="marker-menu">
          <h4>外部控制</h4>
          <p>通过父组件控制显示状态</p>
        </div>
      </template>
    </witMapMarker>
    
    <div style="margin-top: 10px;">
      <el-button @click="showMarker">显示标记</el-button>
      <el-button @click="hideMarker">隐藏标记</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const markerRef = ref<any>(null)

function showMarker() {
  markerRef.value?.handleMouseEnter(0)
}

function hideMarker() {
  markerRef.value?.handleMouseLeave(0)
}
</script>
```

## API

### 属性

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `zimg`                 | [`String`]      | 默认钻石图标               | 标记点图标路径                                 |
| `left`                 | [`String`]      | `'0px'`                    | 标记点相对父容器的左位置，支持百分比或像素     |
| `top`                  | [`String`]      | `'0px'`                    | 标记点相对父容器的上位置，支持百分比或像素     |
| `placement`            | [`String`]      | `'top'`                    | 弹出菜单方向，可选值：'top'、'bottom'、'left'、'right' |

### 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `mouseenterfun`        | 鼠标进入标记点时触发                           | -                            |
| `mouseLeavefun`        | 鼠标离开标记点时触发                           | -                            |

### 方法

| 方法名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `handleMouseEnter`     | 显示弹出菜单                                   | type: any（1表示手动触发）    |
| `handleMouseLeave`     | 隐藏弹出菜单                                   | type: any（1表示手动触发）    |

### 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `menu`                 | 自定义弹出菜单内容                             |

## 功能特性

### 标记点功能
- 支持自定义标记点图标，可传入任意图片路径
- 标记点位置通过 left 和 top 属性精确控制，支持百分比和像素单位
- 标记点图标具有鼠标悬停效果，增强交互体验

### 弹出菜单
- 鼠标悬停时显示弹出菜单，提供详细信息展示
- 支持四种弹出方向（上、下、左、右），适应不同场景需求
- 弹出菜单内容完全可自定义，通过插槽实现

### 动画效果
- 标记点激活时（显示弹出菜单）有放大动画
- 标记点非激活时有缩小动画
- 动画平滑过渡，提升用户体验

### 组件通信
- 通过事件与父组件通信，通知鼠标进入和离开事件
- 暴露方法给父组件，支持外部控制弹出菜单的显示和隐藏
- 支持手动触发和外部触发两种模式

### 技术特性
- 基于 Vue 3 Composition API 开发
- TypeScript 提供类型安全
- 使用 Element Plus 的 `el-popover` 组件实现弹出功能
- 样式隔离，避免与其他组件冲突

## 实现原理

### 组件结构
- 外部容器：`.witMapMarker` - 使用绝对定位，控制标记点位置
- 弹出组件：`el-popover` - Element Plus 组件，实现弹出功能
- 标记图标：`img` - 显示标记点图标，绑定事件和动画类
- 自定义菜单：`slot[name="menu"]` - 提供自定义内容入口

### 交互实现
- 鼠标进入图标时，调用 `handleMouseEnter` 方法，显示弹出菜单并触发 `mouseenterfun` 事件
- 鼠标离开图标时，调用 `handleMouseLeave` 方法，隐藏弹出菜单并触发 `mouseLeavefun` 事件
- 通过 `type` 参数区分手动触发和外部触发，外部触发时不发送事件

### 动画效果
- 使用 CSS `@keyframes` 定义缩放动画：`markerScale`（放大）和 `markerScale1`（缩小）
- 通过动态切换 `active1` 和 `active2` 类名触发动画
- 动画持续时间 0.5 秒，使用 `ease` 缓动函数

### 样式定制
- 自定义弹出菜单样式，移除默认背景和边框
- 使用自定义三角形图标替代默认箭头
- 不同弹出方向使用不同的 CSS 转换
- 标记点图标设置为指针样式，提示可交互

### 组件暴露
- 使用 `defineExpose` 暴露 `handleMouseEnter` 和 `handleMouseLeave` 方法
- 支持父组件通过 ref 调用这些方法，控制标记点状态

:::tip
1. `left` 和 `top` 属性支持百分比和像素值，建议使用百分比以实现响应式布局
2. `placement` 属性控制弹出菜单的方向，可根据标记点在地图上的位置选择合适的方向
3. 自定义图标时，建议使用与默认图标尺寸相近的图片（约 35x25px）以获得最佳效果
4. 通过调用暴露的 `handleMouseEnter` 和 `handleMouseLeave` 方法，可以实现外部控制标记点的显示状态
5. `type` 参数为 1 时表示手动触发，会同时发送事件；为其他值时表示外部触发，不发送事件
:::