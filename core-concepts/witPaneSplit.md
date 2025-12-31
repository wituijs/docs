# witPaneSplit 面板分割组件 %{#witPaneSplit}%

`witPaneSplit`是一个基于 Vue 3 开发的面板分割组件，支持水平和垂直两种分割模式，可通过拖拽调整两个面板的大小比例，适用于需要分栏布局的场景，如代码编辑器、文档阅读器等。

## 用法实列 %{#dome}%

### 基本用法（垂直分割）

```vue
<template>
  <div style="height: 400px;">
    <witPaneSplit>
      <template #one>
        <div class="panel">左侧面板</div>
      </template>
      <template #two>
        <div class="panel">右侧面板</div>
      </template>
    </witPaneSplit>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.panel {
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

#one {
  background-color: #f0f2f5;
}

#two {
  background-color: #ffffff;
}
</style>
```

### 水平分割

```vue
<template>
  <div style="height: 400px;">
    <witPaneSplit :horizontal="true">
      <template #one>
        <div class="panel">上方面板</div>
      </template>
      <template #two>
        <div class="panel">下方面板</div>
      </template>
    </witPaneSplit>
  </div>
</template>
```

### 自定义分割比例

```vue
<template>
  <div style="height: 400px;">
    <witPaneSplit ratio="3/7">
      <template #one>
        <div class="panel">左侧面板（30%）</div>
      </template>
      <template #two>
        <div class="panel">右侧面板（70%）</div>
      </template>
    </witPaneSplit>
  </div>
</template>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `horizontal`           | [`Boolean`]     | `false`                    | 是否水平分割，false 为垂直分割                 |
| `ratio`                | [`String`]      | `1/1`                      | 初始分割比例，格式为 "x/y"，如 "3/7"            |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `one`                  | 第一个面板的内容                               |
| `two`                  | 第二个面板的内容                               |

:::tip
1. 组件需要外层容器设置固定高度或宽度，以便正确计算面板尺寸
2. 拖拽调整大小时，面板内容会自动添加禁止选择文本的样式（forbid-select）
3. 组件使用 flex 布局实现面板分割，通过 flex-grow 属性控制面板比例
4. 分割比例参数 ratio 支持 "x/y" 格式，如 "1/1"、"2/3" 等，若格式不正确则默认使用 1/1 比例
5. 组件支持垂直和水平两种分割模式，通过 horizontal 属性切换
:::