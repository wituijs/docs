# witDeepseek AI对话框 %{#witDeepseek}%

`witDeepseek`是一个AI对话框类似聊天界面的业务组件，可高度定制化开发的打字效果组件，组件里面集成了AI对接方法，可以配置密钥与Api，默认流输出方式。支持 Markdown 渲染 和 动态打字效果。[查看效果>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## 用法实列 %{#dome}%

```vue
<template>
  <div>
    <witDeepseek ref="witDeepseekRef" />
  </div>
</template>

<script lang="ts" setup>
const witDeepseekRef = ref<any>()
const handleOpen = () => {
  nextTick(() => {
    witDeepseekRef.value.open()
  })
}
</script>
```

## Method

| 方法              | 描述                                        | 参数                         |
| :---------------- | :------------------------------------------ | ---------------------------- |
| `open`           | 打开对话框                                |                              |

:::tip
用法实列只展示部分字段，还有更多的属性字段与组件不做一一讲解，本框架不加密，都是源码有注释，请看源码更全面！
:::
