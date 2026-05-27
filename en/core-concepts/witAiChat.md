# witAiChat AI Dialog %{#witAiChat}%

`witAiChat` is an AI dialog business component similar to chat interface, a highly customizable typing effect component, integrates AI connection methods inside, can configure key and API, default stream output mode. Supports Markdown rendering and dynamic typing effects. [View Demo>>](http://demo.wit-ui.com/wit-pharm-main/#/index)

## Usage Example %{#dome}%

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
aiChatRef.value.handleStop() // Stop answering
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `isNew`                | [`Boolean`]     | `false`                    | Whether it is a new session                                   |
| `assistantId`          | [`String`]      | `''`                       | Agent ID                                       |
| `conversationId`       | [`String`]      | `''`                       | Session ID                                         |
| `isHistory`            | [`Boolean`]     | `false`                    | Whether there is history                                 |
| `messages`             | [`Array`]       | `() => []`                 | Message list                                       |
| `completionsParams`    | [`Object`]      | `() => {}`                 | Completion parameters                                       |
| `drugName`             | [`String`]      | `''`                       | Drug name                                       |
| `problem`              | [`Array`]       | `() => []`                 | Guess you want to ask, if not passed, call API to get 3 random questions                 |
| `comment`              | [`Boolean`]     | `false`                    | AI comment                                         |
| `isDeep`               | [`Boolean`]     | `false`                    | Whether to show deep analysis                               |
| `isSuggest`            | [`Boolean`]     | `true`                     | Whether to show suggestions                                   |
| `inputBg`              | [`String`]      | `'var(--el-base-background)'` | Input box background color                                 |
| `specialType`          | [`String`]      | `''`                       | Special type                                       |
| `reviewRegistrationForm` | [`Object`]    | `() => {}`                 | Review registration form                                   |

## Methods

| Method              | Description                                        | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `handleStop`           | Stop AI answering                               | -                            |
