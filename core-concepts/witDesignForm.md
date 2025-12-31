# witDesignForm 表单设计器 %{#witDesignForm}%

`witDesignForm` 是一个基于 Vue 3 和 Element Plus 构建的可视化表单设计器组件库，提供了表单设计和表单渲染两大核心功能。组件支持拖拽式表单设计、丰富的表单控件、布局设置、表单验证等功能，可用于快速构建各类复杂表单。

## 用法实例 %{#dome}%

### 表单设计器（DesignForm）

```vue
<template>
  <div class="design-form-container">
    <DesignForm
      v-model="formConfig"
      :fields="customFields"
      @save="handleSave"
      @preview="handlePreview"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DesignForm, basicFields } from './plugins/witDesignForm'

const formConfig = ref({
  fields: [],
  config: {
    labelWidth: 100,
    labelPosition: 'right'
  }
})

// 自定义字段
const customFields = ref([
  ...basicFields,
  // 可添加自定义字段
])

// 保存表单配置
const handleSave = (config) => {
  console.log('表单配置已保存:', config)
  // 保存到后端或本地存储
}

// 预览表单
const handlePreview = (config) => {
  console.log('预览表单:', config)
  // 打开预览窗口
}
</script>

<style scoped>
.design-form-container {
  width: 100%;
  height: 800px;
}
</style>
```

### 表单生成器（GenerateForm）

```vue
<template>
  <div class="generate-form-container">
    <GenerateForm
      v-model="formData"
      :config="formConfig"
      :rules="formRules"
      @submit="handleSubmit"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { GenerateForm } from './plugins/witDesignForm'

// 从后端或本地存储获取的表单配置
const formConfig = ref({
  fields: [
    {
      type: 'input',
      label: '姓名',
      field: 'name',
      placeholder: '请输入姓名',
      required: true
    },
    {
      type: 'select',
      label: '性别',
      field: 'gender',
      options: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' }
      ]
    },
    {
      type: 'date-picker',
      label: '出生日期',
      field: 'birthday',
      valueFormat: 'YYYY-MM-DD'
    }
  ],
  config: {
    labelWidth: 120,
    labelPosition: 'left'
  }
})

// 表单数据
const formData = ref({
  name: '',
  gender: '',
  birthday: ''
})

// 表单验证规则
const formRules = ref({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ]
})

// 提交表单
const handleSubmit = (data) => {
  console.log('表单提交:', data)
  // 处理表单提交逻辑
}
</script>

<style scoped>
.generate-form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `DesignForm`                    | 表单设计器组件，用于可视化设计表单  |
| `GenerateForm`                  | 表单生成器组件，用于渲染设计好的表单|

### 导出配置

| 配置名                          | 类型            | 描述                                |
| :------------------------------ | :-------------- | :---------------------------------- |
| `basicFields`                   | `Array`         | 基础表单字段配置列表                |
| `advanceFields`                 | `Array`         | 高级表单字段配置列表                |
| `layoutFields`                  | `Array`         | 布局字段配置列表                    |

### DesignForm 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `modelValue`                    | `Object`        | `{ fields: [], config: {} }` | 表单配置数据                        |
| `fields`                        | `Array`         | `[]`         | 可用的表单字段列表                  |
| `defaultConfig`                 | `Object`        | `{}`         | 默认表单配置                        |
| `readOnly`                      | `Boolean`       | `false`      | 是否只读模式                        |

### DesignForm 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `update:modelValue`             | 表单配置变化时触发                  | 最新的表单配置对象           |
| `save`                          | 保存按钮点击时触发                  | 当前表单配置对象             |
| `preview`                       | 预览按钮点击时触发                  | 当前表单配置对象             |
| `add-field`                     | 添加字段时触发                      | 添加的字段配置               |
| `remove-field`                  | 删除字段时触发                      | 删除的字段索引               |

### GenerateForm 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `modelValue`                    | `Object`        | `{}`         | 表单数据对象                        |
| `config`                        | `Object`        | `{}`         | 表单配置对象                        |
| `rules`                         | `Object`        | `{}`         | 表单验证规则                        |
| `disabled`                      | `Boolean`       | `false`      | 是否禁用表单                        |
| `loading`                       | `Boolean`       | `false`      | 是否加载中状态                      |

### GenerateForm 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `update:modelValue`             | 表单数据变化时触发                  | 最新的表单数据对象           |
| `submit`                        | 表单提交时触发                      | 当前表单数据对象             |
| `reset`                         | 表单重置时触发                      | -                            |
| `validate`                      | 表单验证时触发                      | 验证结果                     |

## 字段类型

### 基础字段（basicFields）

| 字段类型                        | 描述                                |
| :------------------------------ | :---------------------------------- |
| `input`                         | 单行文本输入框                      |
| `textarea`                      | 多行文本输入框                      |
| `select`                        | 下拉选择框                          |
| `radio`                         | 单选框                              |
| `checkbox`                      | 多选框                              |
| `switch`                        | 开关                                |
| `slider`                        | 滑块                                |
| `number`                        | 数字输入框                          |

### 高级字段（advanceFields）

| 字段类型                        | 描述                                |
| :------------------------------ | :---------------------------------- |
| `date-picker`                   | 日期选择器                          |
| `datetime-picker`               | 日期时间选择器                      |
| `time-picker`                   | 时间选择器                          |
| `upload`                        | 文件上传                            |
| `rate`                          | 评分                                |
| `color-picker`                  | 颜色选择器                          |
| `transfer`                      | 穿梭框                              |
| `cascader`                      | 级联选择器                          |

### 布局字段（layoutFields）

| 字段类型                        | 描述                                |
| :------------------------------ | :---------------------------------- |
| `row`                           | 行布局                              |
| `column`                        | 列布局                              |
| `divider`                       | 分割线                              |
| `space`                         | 间距                                |
| `card`                          | 卡片                                |

## 表单配置

### 表单配置项

| 配置项                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `labelWidth`                    | `Number/String` | `100`        | 标签宽度                            |
| `labelPosition`                 | `String`        | `'right'`    | 标签位置（left/right/top）          |
| `size`                          | `String`        | `'default'`  | 表单尺寸（large/default/small）     |
| `hideRequiredAsterisk`          | `Boolean`       | `false`      | 是否隐藏必填字段的星号              |
| `showMessage`                   | `Boolean`       | `true`       | 是否显示验证消息                    |
| `inline`                        | `Boolean`       | `false`      | 是否为行内表单                      |

### 字段配置项

| 配置项                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `type`                          | `String`        | `'input'`    | 字段类型                            |
| `label`                         | `String`        | `''`         | 字段标签                            |
| `field`                         | `String`        | `''`         | 字段名                              |
| `placeholder`                   | `String`        | `''`         | 占位符                              |
| `required`                      | `Boolean`       | `false`      | 是否必填                            |
| `disabled`                      | `Boolean`       | `false`      | 是否禁用                            |
| `readonly`                      | `Boolean`       | `false`      | 是否只读                            |
| `defaultValue`                  | `Any`           | `undefined`  | 默认值                              |
| `width`                         | `Number/String` | `undefined`  | 字段宽度                            |
| `options`                       | `Array`         | `[]`         | 选择器选项（select/radio/checkbox）|
| `rules`                         | `Array`         | `[]`         | 字段验证规则                        |

:::tip
1. `witDesignForm` 提供了可视化表单设计和表单渲染两大核心功能，可快速构建各类复杂表单。
2. 支持丰富的字段类型，包括基础字段、高级字段和布局字段，满足各种表单需求。
3. 表单配置采用 JSON 格式，便于存储和传输，支持动态加载和渲染。
4. 集成了 Element Plus 组件库，提供一致的 UI 风格和良好的用户体验。
5. 支持自定义字段扩展，可根据业务需求添加特定的表单控件。
:::