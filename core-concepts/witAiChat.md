# witAiChat AI对话框 %{#witAiChat}%

`witAiChat`是一个AI对话框类似聊天界面的业务组件，可高度定制化开发的打字效果组件，组件里面集成了AI对接方法，可以配置密钥与Api，默认流输出方式。支持 Markdown 渲染 和 动态打字效果。[查看效果>>](http://demo.wit-ui.com/wit-pharm-main/#/index)

## 用法实列 %{#dome}%

```vue
<template>
  <div>
    <witAiChat
      ref="witAiChatRef"
      assistantId="1"
      :conversationId="conversationId"
      :messages="currentConversation.messages"
      :isNew="isNew"
      :problem="commonProblem"
      @create="handleCreateConversation"
    />
  </div>
</template>

<script lang="ts" setup>
const witAiChatRef = ref<any>()
aiChatRef.value.handleStop() // 停止回答
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `isNew`                | [`Boolean`]     | `false`                    | 是否为新会话                                   |
| `assistantId`          | [`String`]      | `''`                       | 智能体ID                                       |
| `conversationId`       | [`String`]      | `''`                       | 会话id                                         |
| `isHistory`            | [`Boolean`]     | `false`                    | 是否有历史记录                                 |
| `messages`             | [`Array`]       | `() => []`                 | 消息列表                                       |
| `completionsParams`    | [`Object`]      | `() => {}`                 | 补全参数                                       |
| `drugName`             | [`String`]      | `''`                       | 药品名称                                       |
| `problem`              | [`Array`]       | `() => []`                 | 猜您想问，不传调接口随机3个问题                 |
| `comment`              | [`Boolean`]     | `false`                    | AI点评                                         |
| `isDeep`               | [`Boolean`]     | `false`                    | 是否展示深度分析                               |
| `isSuggest`            | [`Boolean`]     | `true`                     | 是否展示建议                                   |
| `inputBg`              | [`String`]      | `'var(--el-base-background)'` | 输入框背景色                                 |
| `specialType`          | [`String`]      | `''`                       | 特殊类型                                       |
| `reviewRegistrationForm` | [`Object`]    | `() => {}`                 | 审核登记表单                                   |


## Method

| 方法              | 描述                                        | 参数                         |
| :---------------- | :------------------------------------------ | ---------------------------- |
| `handleStop`           | 停止回答                                |                              |
| `messageFormat`        | 格式化消息                              |                              |
| `scrollToBottom`       | 滚动到底部                              |                              |
| `sendAiComment`        | 发送消息                                |                              |

:::tip
用法实列只展示部分字段，还有更多的属性字段与组件不做一一讲解，本框架不加密，都是源码有注释，请看源码更全面！
:::