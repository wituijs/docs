# witMapTwo 地图标记组件（版本二） %{#witMapTwo}%

`witMapTwo` 是一个基于 Vue 3 和 TypeScript 开发的交互式地图标记组件，是 witMap 的增强版本，具有以下特点：
- 使用背景图片实现地图展示，更灵活的样式控制
- 支持自定义地图图片尺寸（宽度和高度）
- 可在地图上添加多个标记点
- 提供自动轮播功能，循环展示标记点信息
- 支持自定义标记点图标
- 提供菜单插槽，可在地图外展示当前选中标记的详细信息
- 区分手动触发和自动轮播，优化用户体验

## 用法实例 %{#dome}%

### 基础用法

```vue
<template>
  <div style="width: 800px; height: 400px;">
    <witMapTwo
      :positions="mapPositions"
    >
      <template #menu="{ data }">
        <div class="map-menu" v-if="data">
          <h3>{{ data.title }}</h3>
          <p>这是{{ data.title }}的详细信息</p>
        </div>
      </template>
    </witMapTwo>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mapPositions = ref([
  { left: '20%', top: '30%', title: '北京' },
  { left: '40%', top: '50%', title: '上海' },
  { left: '60%', top: '40%', title: '广州' },
  { left: '75%', top: '55%', title: '深圳' }
])
</script>

<style scoped>
.map-menu {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.map-menu h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #333;
}

.map-menu p {
  margin: 0;
  font-size: 14px;
  color: #666;
}
</style>
```

### 自定义地图尺寸和图片

```vue
<template>
  <div style="width: 1000px; height: 500px;">
    <witMapTwo
      :positions="mapPositions"
      :mimg="customMapImage"
      :zimg="customMarkerImage"
      :mimg-width="customMapWidth"
      :mimg-height="customMapHeight"
    >
      <template #menu="{ data }">
        <div class="map-menu" v-if="data">
          <h3>{{ data.title }}</h3>
        </div>
      </template>
    </witMapTwo>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import customMapImage from '/@/assets/custom-map.png'
import customMarkerImage from '/@/assets/custom-marker.gif'

const mapPositions = ref([
  { left: '20%', top: '30%', title: '北京' },
  { left: '40%', top: '50%', title: '上海' }
])

const customMapWidth = ref('900px')
const customMapHeight = ref('450px')
</script>
```

### 禁用自动轮播

```vue
<template>
  <div style="width: 800px; height: 400px;">
    <witMapTwo
      :positions="mapPositions"
      :is-set-interval="false"
    >
      <template #menu="{ data }">
        <div class="map-menu" v-if="data">
          <h3>{{ data.title }}</h3>
        </div>
      </template>
    </witMapTwo>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mapPositions = ref([
  { left: '20%', top: '30%', title: '北京' },
  { left: '40%', top: '50%', title: '上海' },
  { left: '60%', top: '40%', title: '广州' }
])
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `positions`            | [`Array`]       | `[]`                       | 标记点位置数组，每个元素包含left、top、title属性 |
| `mimg`                 | [`String`]      | 默认地图图片               | 地图背景图片路径                               |
| `zimg`                 | [`String`]      | 默认标记图片               | 标记点图标路径                                 |
| `width`                | [`String`]      | `'100%'`                   | 组件宽度                                       |
| `height`               | [`String`]      | `'100%'`                   | 组件高度                                       |
| `mimgWidth`            | [`String`]      | `'740px'`                  | 地图图片宽度                                   |
| `mimgHeight`           | [`String`]      | `'360px'`                  | 地图图片高度                                   |
| `isSetInterval`        | [`Boolean`]     | `true`                     | 是否启用自动轮播功能                           |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `menu`                 | 自定义菜单内容，提供data参数包含当前选中标记信息 |

## 功能特性

### 地图展示
- 使用背景图片实现地图展示，更灵活的样式控制
- 支持自定义地图图片宽度和高度
- 自适应容器尺寸，保持地图居中显示

### 标记点功能
- 可在地图任意位置添加标记点
- 支持自定义标记点图标
- 标记点位置通过left和top百分比控制

### 交互功能
- 支持鼠标悬停激活标记点
- 自动轮播标记点，循环展示
- 点击或悬停时可暂停自动轮播
- 区分手动触发和自动轮播，优化用户体验

### 自定义能力
- 支持自定义菜单内容，展示当前选中标记的详细信息
- 可配置地图图片尺寸
- 支持禁用自动轮播功能

### 技术特性
- 基于 Vue 3 Composition API 开发
- TypeScript 提供类型安全
- 组件间通信通过事件和 ref 实现
- 样式隔离，避免与其他组件冲突

## 实现原理

### 组件结构
- 外部容器：`.witMapTwo` - 使用背景图片实现地图，控制整体宽高
- 标记容器：`.witMapMarkerAll` - 容纳所有标记点
- 标记组件：`witMapMarkerTwo` - 渲染每个标记点
- 自定义菜单：`slot[name="menu"]` - 提供自定义内容入口，展示当前选中标记信息

### 数据处理
- 标记点数据通过 `positions` prop 传入
- 使用 `v-for` 遍历渲染多个标记点
- 通过 `ref` 获取子组件实例，控制标记点状态

### 自动轮播机制
- 使用 `setInterval` 实现定时切换
- 通过 `isManualTrigger` 变量区分手动触发和自动轮播
- 自动轮播时，只更新标记点状态，不影响手动操作
- 鼠标悬停时清除定时器，离开时重启定时器

### 组件通信
- 子组件通过 `@mouseenterfun` 和 `@mouseLeavefun` 事件通知父组件
- 父组件通过 `ref` 调用子组件方法
- 使用 `activeIndex` 控制当前激活的标记点，并传递给菜单插槽

### 样式实现
- 地图容器使用 `background` 属性设置地图图片
- 支持自定义地图图片的 `background-size`
- 标记点使用绝对定位，通过 `left` 和 `top` 控制位置

:::tip
1. `positions` 属性中的 `left` 和 `top` 值应为百分比字符串，如 `'20%'`
2. `mimgWidth` 和 `mimgHeight` 用于控制地图图片的实际尺寸，而非容器尺寸
3. 菜单插槽会接收当前选中标记点的数据，可用于展示详细信息
4. 默认自动轮播间隔为 5 秒，可在组件内部调整
5. 组件依赖 `witMapMarkerTwo` 子组件，请确保正确引入
6. 建议设置明确的容器宽高，以确保地图正确显示
:::