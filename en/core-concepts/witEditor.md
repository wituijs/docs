# witEditor AI Rich Text Editor %{#witEditor}%

`witEditor` is a next-generation rich text editor oriented towards AI, two-way data binding can automatically synchronize views and data models, simplifying the development process. It's the only rich text editor that perfectly compatible with micro-frontend frameworks. [View Demo>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## Usage Example %{#dome}%

```vue
<template>
   <witEditor v-model="witEditorModel" :isOpenAi="true" :ai="ai" height="300" style="width: 100%" />
</template>

<script lang="ts" setup>
  const witEditorModel = ref('Hello, World!')
  
  // Openai (ChatGPT) key and model configuration
  const ai = ref({
    models: {
        openai: {
          apiKey: 'sk-alQ96zbDn*****',
          model: 'gpt-4o-mini',
        },
      }
  })

  // Custom large language model
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
                  // //0 represents first text result; 1 represents intermediate text result; 2 represents last text result.
                  // status: 0|1|2,
              }
          },
          // protocol: "sse" | "websocket"
        } 
    }
  })
</script>
```

The witEditor AI rich text component inherits all properties and methods from the AiEditor component.

## API

| Property Name         | Type        | Description                                                 |
| :------------- | :---------- | :--------------------------------------------------- |
| `v-model` | [`string`] | Text |
| `simple` | [`boolean`] | Whether to enable simple mode |
| `enable` | [`boolean`] | Whether to disable |
| `minHeight` | [`String, Number`] | Minimum height |
| `height`  | [`String, Number`] | Fixed height |
| `isOpenAi` | [`boolean`] | Whether to enable AI functionality |
| `ai` | [`object`] | Related apiKey and model configuration |

:::tip
The usage example only shows some fields. There are more property fields and components not explained one by one. This framework is not encrypted, all source code has comments, please check the source code for more comprehensive information!
:::
