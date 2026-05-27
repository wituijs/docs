# witConfirm Confirmation Dialog %{#witConfirm}%

`witConfirm` is a confirmation dialog component based on Element Plus, supports three theme styles: success, error, and pending, provides clear and concise visual feedback. The component inherits all properties from Element Plus Dialog, while providing the ability to customize the footer button area.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <el-button type="primary" @click="showConfirm = true">
      Show Success Message
    </el-button>
    <el-button type="danger" @click="showError = true">
      Show Error Message
    </el-button>
    <el-button type="warning" @click="showPending = true">
      Show Pending Message
    </el-button>
    
    <!-- Success message -->
    <witConfirm
      v-model="showConfirm"
      theme="success"
      title="Operation Successful"
      content="Your operation has been completed successfully"
    >
      <template #footer>
        <el-button @click="showConfirm = false">OK</el-button>
      </template>
    </witConfirm>
    
    <!-- Error message -->
    <witConfirm
      v-model="showError"
      theme="error"
      title="Operation Failed"
      content="Your operation could not be completed, please check and try again"
    >
      <template #footer>
        <el-button @click="showError = false">OK</el-button>
      </template>
    </witConfirm>
    
    <!-- Pending message -->
    <witConfirm
      v-model="showPending"
      theme="pending"
      title="Processing"
      content="System is processing your request, please wait"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showConfirm = ref(false)
const showError = ref(false)
const showPending = ref(false)
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Boolean`]     | `false`                    | Controls dialog visibility, supports v-model two-way binding |
| `theme`                | [`String`]      | `'success'`                | Dialog theme, options: 'success', 'error', 'pending' |
| `title`                | [`String`]      | `''`                       | Dialog title                                     |
| `content`              | [`String`]      | `''`                       | Dialog content                                     |
| `...ElDialog.props`    | [`Object`]      | -                          | Inherits all properties from Element Plus Dialog            |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| `footer`               | Custom dialog footer button area                         |
