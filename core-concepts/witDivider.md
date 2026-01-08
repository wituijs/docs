# witDivider 分隔线组件 %{#witDivider}%

`witDivider`是一个基于 Element Plus Divider 封装的增强版分隔线组件，提供了普通分隔线、引用块和字段集三种显示模式，支持多种主题样式，为页面布局提供更加灵活的分隔和内容组织方式。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 普通分隔线模式 -->
    <p>上方内容</p>
    <witDivider content-position="center">分隔线</witDivider>
    <p>下方内容</p>
    
    <!-- 引用块模式 -->
    <witDivider blockquote type="primary">
      <p>这是一段引用内容</p>
      <p>可以包含多行文本和其他元素</p>
    </witDivider>
    
    <!-- 带边框的引用块 -->
    <witDivider blockquote type="success" is-border>
      <p>这是一个带边框的引用块</p>
      <p>支持不同的主题颜色</p>
    </witDivider>
    
    <!-- 字段集模式 -->
    <witDivider fieldset title="字段集标题">
      <p>字段集内容区域</p>
      <p>可以放置表单、列表等内容</p>
    </witDivider>
  </div>
</template>

<script lang="ts" setup>
// 组件无需额外引入依赖，直接使用即可
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `blockquote`           | [`Boolean`]     | `false`                    | 是否使用引用块模式                             |
| `fieldset`             | [`Boolean`]     | `false`                    | 是否使用字段集模式                             |
| `type`                 | [`String`]      | `'primary'`                | 主题类型，可选值：'primary'、'success'、'warning'、'danger'、'info' |
| `isBorder`             | [`Boolean`]     | `false`                    | 引用块模式下是否显示边框                       |
| `title`                | [`String`]      | `''`                       | 字段集模式下的标题                             |
| `...ElDivider.props`   | [`Object`]      | -                          | 继承 Element Plus Divider 的所有属性           |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| `default`              | 分隔线内容（普通模式）/ 引用块内容（blockquote模式）/ 字段集内容（fieldset模式） |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `...ElDivider.events`  | 继承 Element Plus Divider 的所有事件           | -                            |

:::tip
1. 组件支持三种显示模式，通过 `blockquote` 和 `fieldset` 属性控制：
   - 普通模式：不设置 `blockquote` 和 `fieldset`
   - 引用块模式：设置 `blockquote` 为 `true`
   - 字段集模式：设置 `fieldset` 为 `true`

2. 引用块模式支持五种主题颜色，通过 `type` 属性设置，每种颜色对应不同的左侧边框颜色。

3. 引用块模式下可通过 `isBorder` 属性显示完整边框。

4. 字段集模式通过 `title` 属性设置标题。

5. 普通模式下继承了 Element Plus Divider 的所有属性，如：`content-position`、`direction`、`border-style` 等，可根据需求灵活配置。
:::