# witLink 智能链接 %{#witLink}%

`witLink` 是一个智能链接组件，能够自动识别内部路由链接和外部链接，并根据链接类型渲染为不同的组件形式。内部链接使用 `router-link` 实现，外部链接使用原生 `a` 标签实现，并自动添加适当的安全属性。

## 用法实例 %{#demo}%

```vue
<template>
  <div>
    <!-- 内部路由链接 -->
    <witLink to="/home">
      首页
    </witLink>
    
    <!-- 外部链接 -->
    <witLink to="https://www.example.com">
      外部网站
    </witLink>
    
    <!-- 带target属性的内部链接 -->
    <witLink to="/about" target="_blank">
      关于我们 (新窗口打开)
    </witLink>
    
    <!-- 带图标和文本的链接 -->
    <witLink to="/docs">
      <el-icon><Document /></el-icon>
      <span>文档中心</span>
    </witLink>
  </div>
</template>

<script lang="ts" setup>
import { Document } from '@element-plus/icons-vue'
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `to`                   | [`String`]      | -                          | 链接地址，必填项                               |
| `target`               | [`String`]      | `''`                       | 链接打开方式，仅对内部链接有效                 |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `default`              | 链接显示的内容                                   |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `...router-link.events`| 内部链接继承 `router-link` 的所有事件           | -                            |
| `...a.events`          | 外部链接继承原生 `a` 标签的所有事件             | -                            |

:::tip
- 组件会自动识别链接是否为外部链接（通过判断链接是否以 http://、https://、mailto: 等协议开头）
- 外部链接会自动添加 `target="_blank"` 和 `rel="noopener"` 属性，提高安全性
- 内部链接支持 `router-link` 的所有属性，如 `active-class`、`exact-active-class` 等
- 可以在插槽中放置任意内容，如文本、图标等
:::