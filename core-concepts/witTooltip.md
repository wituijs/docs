# witTooltip 智能提示组件 %{#witTooltip}%

`witTooltip` 是一个基于 Element Plus 封装的智能提示组件，用于在文本内容溢出时自动显示 tooltip 提示。组件支持单行和多行文本的溢出检测，并提供了丰富的自定义配置选项。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <witTooltip content="这是一个基础的tooltip示例">
      这是一段可能会溢出的文本内容，如果容器宽度不足，将显示tooltip
    </witTooltip>
    
    <!-- 多行文本 -->
    <witTooltip 
      content="这是一个多行文本的tooltip示例，支持自定义显示行数"
      :lines="2"
    >
      这是一段可能会溢出的多行文本内容，如果容器宽度或高度不足，将显示tooltip。
      第二行文本用于测试多行溢出检测功能。
    </witTooltip>
    
    <!-- 粗体文本 -->
    <witTooltip 
      content="这是一个粗体文本的tooltip示例"
      :bold="true"
    >
      这是一段粗体文本，如果内容溢出将显示tooltip
    </witTooltip>
    
    <!-- 自定义主题 -->
    <witTooltip 
      content="这是一个自定义主题的tooltip示例"
      effect="light"
    >
      这是一段文本，tooltip将使用浅色主题
    </witTooltip>
  </div>
</template>

<script lang="ts" setup>
// 无需额外导入，组件已全局注册
</script>
```

## API

### 组件

```markdown
| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witTooltip`                    | 智能提示主组件                      |
```

### 属性

```markdown
| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `name`                          | `String`        | `''`         | 自定义内容类名                      |
| `bold`                          | `Boolean`       | `false`      | 是否使用粗体文本                    |
| `effect`                        | `String`        | `'dark'`     | 提示框主题（dark/light）            |
| `content`                       | `String, Number`| -            | 提示内容                            |
| `lines`                         | `Number`        | `1`          | 显示的文本行数                      |
| `teleported`                    | `Boolean`       | `false`      | 是否将提示框插入到body中            |
```

## 事件

```markdown
| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `mouseover`                     | 鼠标悬停时触发                      | 事件对象                     |
```

:::tip
1. 组件会智能判断文本是否溢出容器，只有在内容真正溢出时才会显示tooltip。
2. 当 `lines` 属性设置为大于1时，组件会启用多行文本溢出检测模式。
3. 组件继承了 Element Plus Tooltip 的部分属性，如 `effect`、`teleported` 等。
4. 可以通过 `name` 属性为提示内容添加自定义样式类。
5. 组件内部使用了 ResizeObserver 来监听容器尺寸变化，确保在窗口大小改变时也能正确检测溢出状态。
:::