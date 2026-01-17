# witMapMarkerTwo 地图标记组件（版本二） %{#witMapMarkerTwo}%

`witMapMarkerTwo` 是一个基于 Vue 3 和 TypeScript 开发的轻量级地图标记组件，是 witMapMarker 的简化版本，具有以下特点：
- 支持自定义标记点图标
- 鼠标悬停时具有平滑的缩放动画效果
- 支持自定义标记点位置（通过 left 和 top 属性）
- 提供索引标识，便于父组件识别和控制
- 与父组件通信，支持外部控制显示/隐藏状态
- 轻量级设计，专注于标记点的核心功能

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarkerTwo
      left="20%"
      top="30%"
      @mouseenterfun="handleMarkerEnter"
      @mouseLeavefun="handleMarkerLeave"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

function handleMarkerEnter(index) {
  console.log('鼠标进入标记点:', index)
}

function handleMarkerLeave(index) {
  console.log('鼠标离开标记点:', index)
}
</script>
```

### 自定义图标和索引

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarkerTwo
      left="40%"
      top="50%"
      :zimg="customMarkerImage"
      :indexkey="1"
      @mouseenterfun="handleMarkerEnter"
      @mouseLeavefun="handleMarkerLeave"
    />
    
    <witMapMarkerTwo
      left="60%"
      top="25%"
      :zimg="anotherMarkerImage"
      :indexkey="2"
      @mouseenterfun="handleMarkerEnter"
      @mouseLeavefun="handleMarkerLeave"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import customMarkerImage from '/@/assets/custom-marker.png'
import anotherMarkerImage from '/@/assets/another-marker.png'

function handleMarkerEnter(index) {
  console.log('鼠标进入标记点:', index)
}

function handleMarkerLeave(index) {
  console.log('鼠标离开标记点:', index)
}
</script>
```

### 外部控制显示状态

```vue
<template>
  <div style="position: relative; width: 500px; height: 300px; border: 1px solid #ccc;">
    <witMapMarkerTwo
      ref="markerRef"
      left="50%"
      top="40%"
      :indexkey="0"
    />
    
    <div style="margin-top: 10px;">
      <el-button @click="showMarker">激活标记</el-button>
      <el-button @click="hideMarker">取消激活</el-button>
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
| `indexkey`             | [`Number`]      | `0`                        | 标记点索引，用于父组件识别不同标记点           |

### 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `mouseenterfun`        | 鼠标进入标记点时触发                           | indexkey: Number（标记点索引） |
| `mouseLeavefun`        | 鼠标离开标记点时触发                           | indexkey: Number（标记点索引） |

### 方法

| 方法名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `handleMouseEnter`     | 激活标记点（显示放大动画）                     | type: any（1表示手动触发）    |
| `handleMouseLeave`     | 取消激活标记点（显示缩小动画）                 | type: any（1表示手动触发）    |

## 功能特性

### 标记点功能
- 支持自定义标记点图标，可传入任意图片路径
- 标记点位置通过 left 和 top 属性精确控制，支持百分比和像素单位
- 提供索引标识，便于父组件识别和控制多个标记点

### 视觉效果
- 鼠标悬停时标记点放大，具有平滑的缩放动画
- 鼠标离开时标记点缩小，恢复原始大小
- 动画持续时间 0.5 秒，使用 `ease` 缓动函数

### 交互功能
- 支持鼠标悬停交互，触发相应事件
- 与父组件通信，发送鼠标进入和离开事件，并传递索引信息
- 支持外部控制标记点的激活状态

### 技术特性
- 基于 Vue 3 Composition API 开发
- TypeScript 提供类型安全
- 轻量级设计，专注于标记点的核心功能
- 样式隔离，避免与其他组件冲突

## 实现原理

### 组件结构
- 外部容器：`.witMapMarker` - 使用绝对定位，控制标记点位置
- 标记图标：`img` - 显示标记点图标，绑定事件和动画类

### 交互实现
- 鼠标进入图标时，调用 `handleMouseEnter` 方法，激活标记点并触发 `mouseenterfun` 事件
- 鼠标离开图标时，调用 `handleMouseLeave` 方法，取消激活标记点并触发 `mouseLeavefun` 事件
- 通过 `type` 参数区分手动触发和外部触发，外部触发时不发送事件

### 动画效果
- 使用 CSS `@keyframes` 定义缩放动画：`markerScale`（放大）和 `markerScale1`（缩小）
- 通过动态切换 `active1` 和 `active2` 类名触发动画
- 动画持续时间 0.5 秒，使用 `ease` 缓动函数

### 组件通信
- 通过事件与父组件通信，通知鼠标进入和离开事件，并传递索引信息
- 使用 `defineExpose` 暴露 `handleMouseEnter` 和 `handleMouseLeave` 方法
- 支持父组件通过 ref 调用这些方法，控制标记点状态

### 样式实现
- 标记点使用绝对定位，通过 `left` 和 `top` 属性控制位置
- 图标设置为指针样式，提示可交互
- 使用 `object-fit: contain` 确保图标保持原始比例

:::tip
1. `left` 和 `top` 属性支持百分比和像素值，建议使用百分比以实现响应式布局
2. `indexkey` 属性用于标识不同的标记点，父组件可以通过这个索引区分和控制标记点
3. 自定义图标时，建议使用与默认图标尺寸相近的图片（约 35x25px）以获得最佳效果
4. 通过调用暴露的 `handleMouseEnter` 和 `handleMouseLeave` 方法，可以实现外部控制标记点的激活状态
5. 与 witMapMarker 相比，witMapMarkerTwo 去掉了内置的弹出菜单功能，更轻量级，菜单功能可由父组件实现
:::