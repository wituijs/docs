# witEditor AI富文本 %{#witEditor}%

`witEditor`是一个面向 AI 的下一代富文本编辑器，双向数据绑定可以自动同步视图和数据模型，简化了开发过程‌，唯一一个完美兼容微前端框架的富文本。[查看效果>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## 用法实列 %{#dome}%

```vue
<template>
   <witEditor v-model="witEditorModel" :isOpenAi="true" :ai="ai" height="300" style="width: 100%" />
</template>

<script lang="ts" setup>
  const witEditorModel = ref('你好，世界！')
  
  // Openai（ChatGPT）密钥与model模型配置
  const ai = ref({
    models: {
        openai: {
          apiKey: 'sk-alQ96zbDn*****',
          model: 'gpt-4o-mini',
        },
      }
  })

  // 自定义大语言模型
  const ai = ref({
    models: {
        custom: {
          url: "http://127.0.0.1:8080/api/v1/ai/chat",
          headers: () => {
              return {
                  "jwt": "xxxx"
              }
          },
          wrapPayload: (message: string) => {
              return JSON.stringify({prompt: message})
          },
          parseMessage: (message: string) => {
              return {
                  role: "assistant",
                  content: message,
                  // index: number,
                  // //0 代表首个文本结果；1 代表中间文本结果；2 代表最后一个文本结果。
                  // status: 0|1|2,
              }
          },
          // protocol: "sse" | "websocket"
        } 
    }
  })
</script>
```

witEditor AI富文本组件继承了AiEditor组件所有属性与方法。

## API

| 属性名         | 类型        | 描述                                                 |
| :------------- | :---------- | :--------------------------------------------------- |
| `v-model` | [`string`] | 文本 |
| `simple` | [`boolean`] | 是否开启简易模式 |
| `enable` | [`boolean`] | 是否禁用 |
| `minHeight` | [`String, Number`] | 最小高度 |
| `height`  | [`String, Number`] | 固定高度 |
| `isOpenAi` | [`boolean`] | 是否开启AI功能 |
| `ai` | [`object`] | 相关apiKey密钥与model模型配置 |

:::tip
用法实列只展示部分字段，还有更多的属性字段与组件不做一一讲解，本框架不加密，都是源码有注释，请看源码更全面！
:::
