# witDataSelector 数据选择器 %{#witDataSelector}%

`witDataSelector` 是一个功能强大的数据选择器组件，基于对话框实现了多种类型数据的选择功能。组件支持左右分栏布局（待选项/已选项），提供搜索、分页、筛选、多选等功能，适用于医院药品、科室、医生、患者、诊断等多种数据类型的选择场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <el-button type="primary" @click="openDataSelector">
      选择医院药品
    </el-button>
    
    <el-button type="primary" @click="openDeptSelector">
      选择科室
    </el-button>
    
    <!-- 医院药品选择器 -->
    <witDataSelector
      v-model="selectedDrugs"
      ref="drugSelectorRef"
      :disabled-item="disabledDrugs"
    />
    
    <!-- 科室选择器 -->
    <witDataSelector
      v-model="selectedDepts"
      ref="deptSelectorRef"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedDrugs = ref([])
const selectedDepts = ref([])
const disabledDrugs = ref(['DRUG001', 'DRUG002'])

const drugSelectorRef = ref()
const deptSelectorRef = ref()

// 打开医院药品选择器
const openDataSelector = () => {
  drugSelectorRef.value.open({
    selectorType: 1, // 1: 医院药品
    showDrugType: false,
    isShowHosp: false
  })
}

// 打开科室选择器
const openDeptSelector = () => {
  deptSelectorRef.value.open({
    selectorType: 2, // 2: 科室
    showDrugType: false,
    isShowHosp: true
  })
}
</script>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witDataSelector`               | 数据选择器主组件                    |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `modelValue`                    | `Array`         | `[]`         | 已选择的数据列表                    |
| `clearModel`                    | `Boolean`       | `false`      | 是否清除模型数据                    |
| `isOpIp`                        | `String`        | `''`         | 门诊/住院标识（1：门诊，2：住院）   |
| `specialModel`                  | `String`        | `''`         | 专项类型标识                        |
| `disabledItem`                  | `Array`         | `[]`         | 禁用的项目列表（根据code字段）      |

### 方法

| 方法名                          | 描述                                | 参数类型                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| `open`                          | 打开选择器对话框                    | `options: Object`                 |
| `close`                         | 关闭选择器对话框                    | -                                 |
| `save`                          | 保存选择结果                        | -                                 |
| `query`                         | 查询数据                            | -                                 |

### 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `update:modelValue`             | 选择结果变化时触发                  | 已选择的数据列表（Array）    |
| `close`                         | 对话框关闭时触发                    | -                            |
| `save`                          | 保存按钮点击时触发                  | 已选择的数据列表（Array）    |

### 打开参数（open方法options）

| 参数名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `selectorType`                  | `Number`        | `1`          | 选择器类型（1-24，对应不同数据类型）|
| `showDrugType`                  | `Boolean`       | `false`      | 是否显示药品类别筛选                |
| `isShowHosp`                    | `Boolean`       | `false`      | 是否显示医院信息列                  |
| `labelName`                     | `String`        | `''`         | 自定义标签名称                      |

### 选择器类型（selectorType）

| 类型值 | 名称           | 描述                          |
| :----- | :------------- | :---------------------------- |
| `1`    | 医院药品       | 医院药品数据选择              |
| `2`    | 科室           | 科室数据选择                  |
| `3`    | 科室组         | 科室组数据选择                |
| `4`    | 医生           | 医生数据选择                  |
| `5`    | 通用名         | 药品通用名选择                |
| `8`    | 患者           | 患者数据选择                  |
| `9`    | 药师           | 药师数据选择                  |
| `11`   | 细菌           | 细菌数据选择                  |
| `13`   | 患者配额       | 药品配额患者选择              |
| `14`   | 适应症         | 适应症数据选择                |
| `22`   | 诊断           | 诊断数据选择                  |
| `24`   | 医院药品(通用名)| 按通用名选择医院药品          |

## 功能特性

### 搜索功能
- 支持关键词搜索
- 支持按不同字段搜索（根据选择类型自动调整）
- 支持回车搜索和清除搜索

### 筛选功能
- 支持药品类别筛选（cascader组件）
- 支持科室类型筛选
- 支持ICD类型筛选（西医/中医）
- 支持匹配状态筛选

### 数据展示
- 左右分栏布局（待选项/已选项）
- 支持分页加载
- 支持表格列自定义
- 支持扩展行展示详情
- 支持复选框选择和全选

### 数据操作
- 支持单选/多选
- 支持从待选项添加到已选项
- 支持从已选项移除
- 支持保存选择结果
- 支持禁用特定项目

:::tip
1. 组件支持24种不同的数据选择类型，可通过`selectorType`参数指定。
2. 左右表格的列配置会根据选择类型自动调整，也可通过代码自定义。
3. 可通过`disabledItem`属性禁用特定项目，避免被选择。
4. 组件内部集成了多种API调用，根据选择类型自动请求对应接口。
5. 支持扩展行功能，可展示更详细的数据信息。
:::