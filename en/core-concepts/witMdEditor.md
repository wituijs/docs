# witMdEditor Markdown Editor %{#witMdEditor}%

`witMdEditor` is a Markdown editor component based on `md-editor-v3`, supports real-time preview, syntax highlighting, two-way data binding and other features, suitable for scenarios that need to integrate Markdown editing functionality in applications.

## Usage Example %{#dome}%

```vue
<template>
  <div style="height: 500px;">
    <witMdEditor v-model="content" @getPosition="handleGetPosition" />
    <div class="mt-4">
      <h3>Preview Content:</h3>
      <div v-html="htmlContent"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { marked } from 'marked'

const content = ref('# Hello World\n\nThis is a Markdown editor example')
const htmlContent = computed(() => marked(content.value))

const handleGetPosition = (position: any) => {
  console.log('Current cursor position:', position)
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`String`]      | `''`                       | Markdown content, for two-way binding                   |

## Events

| Event Name               | Description                                        | Parameters                         |
| :--------------------- | :------------------------------------------ | :--------------------------- |
| `update:modelValue`    | Triggered when editor content changes                          | Latest Markdown content         |
| `getPosition`          | Triggered when getting cursor position                          | Cursor position info object             |

:::tip
1. `witMdEditor` is a component based on `md-editor-v3`, supports all properties and events of `md-editor-v3`, can pass additional properties through `v-bind="$attrs"`
2. Component default height is 100%, can control editor height through outer container
3. If you need to customize toolbar or editor behavior, can directly use `md-editor-v3` component
4. To convert Markdown to HTML for display, can use third-party libraries like `marked` for conversion
:::
