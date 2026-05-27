# witResultNotify Result Notification Component %{#witResultNotify}%

`witResultNotify` is a result notification component developed based on Vue 3, used to display success and failure information of operation results (such as import, batch processing, etc.). The component provides clear visual feedback and action buttons, supports custom display of success and failure counts.

## Usage Example %{#dome}%

### Basic Usage
```vue
<template>
  <div>
    <el-button @click="showNotify" type="primary">
      Show Import Result
    </el-button>
    
    <!-- Result notification component -->
    <wit-result-notify
      v-model="visible"
      :success="100"
      :error="5"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)

const showNotify = () => {
  visible.value = true
}
</script>
```

### Success Only Result
```vue
<template>
  <div>
    <el-button @click="showSuccessNotify" type="success">
      Show Success Result
    </el-button>
    
    <!-- Show success result only -->
    <wit-result-notify
      v-model="successVisible"
      :success="200"
      :error="0"
    />
  </div>
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Boolean`]     | `false`                    | Whether to show dialog, supports v-model                           |
| `success`              | [`Number`]      | `0`                        | Success count                                       |
| `error`                | [`Number`]      | `0`                        | Failure count                                       |
