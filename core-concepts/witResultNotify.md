# witResultNotify 结果通知组件 %{#witResultNotify}%

`witResultNotify` 是一个基于 Vue 3 开发的结果通知组件，用于显示操作结果（如导入、批量处理等）的成功和失败信息。组件提供了清晰的视觉反馈和操作按钮，支持自定义成功和失败数量的展示。

## 用法实列 %{#dome}%

### 基础用法
```vue
<template>
  <div>
    <el-button @click="showNotify" type="primary">
      显示导入结果
    </el-button>
    
    <!-- 结果通知组件 -->
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

### 仅成功结果
```vue
<template>
  <div>
    <el-button @click="showSuccessNotify" type="success">
      显示成功结果
    </el-button>
    
    <!-- 仅显示成功结果 -->
    <wit-result-notify
      v-model="successVisible"
      :success="200"
      :error="0"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const successVisible = ref(false)

const showSuccessNotify = () => {
  successVisible.value = true
}
</script>
```

### 仅失败结果
```vue
<template>
  <div>
    <el-button @click="showErrorNotify" type="danger">
      显示失败结果
    </el-button>
    
    <!-- 仅显示失败结果 -->
    <wit-result-notify
      v-model="errorVisible"
      :success="0"
      :error="10"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const errorVisible = ref(false)

const showErrorNotify = () => {
  errorVisible.value = true
}
</script>
```

## API

### 属性

| 属性名 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `v-model` | `Boolean` | `false` | 控制组件的显示与隐藏 |
| `success` | `Number` | `0` | 成功的数量 |
| `error` | `Number` | `0` | 失败的数量 |

### 事件

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `update:modelValue` | 组件显示状态变化时触发 | 当前显示状态（Boolean） |

## 插槽

该组件不提供自定义插槽。

:::tip
1. 组件使用了 `wit-icon` 组件显示成功或错误图标，确保项目中已正确配置该组件。
2. 组件默认显示在页面右上角，使用 `fixed` 定位。
3. 点击"确定"或"取消"按钮都会关闭通知组件。
4. 当 `error` 属性为 0 时，只会显示成功信息，不会显示失败相关内容。
5. 组件使用了 Element Plus 的颜色变量和字体大小，确保项目中已引入 Element Plus 样式。
:::