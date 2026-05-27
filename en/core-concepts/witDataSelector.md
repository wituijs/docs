# witDataSelector Data Selector %{#witDataSelector}%

`witDataSelector` is a powerful data selector component that implements multiple data type selection functions based on dialog. The component supports left-right split layout (pending/selected), provides search, pagination, filtering, multi-select and other functions, suitable for various data type selection scenarios such as hospital drugs, departments, doctors, patients, diagnoses, etc.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <el-button type="primary" @click="openDataSelector">
      Select Hospital Drug
    </el-button>
    
    <el-button type="primary" @click="openDeptSelector">
      Select Department
    </el-button>
    
    <!-- Hospital drug selector -->
    <witDataSelector
      v-model="selectedDrugs"
      ref="drugSelectorRef"
      :disabled-item="disabledDrugs"
    />
    
    <!-- Department selector -->
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

// Open hospital drug selector
const openDataSelector = () => {
  drugSelectorRef.value.open({
    selectorType: 1, // 1: Hospital drug
    showDrugType: false,
    isShowHosp: false
  })
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Array`]       | `[]`                       | Selected data array                                     |
| `disabledItem`         | [`Array`]       | `[]`                       | Disabled item ID list                                     |

### Methods

| Method Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `open`                 | Open selector dialog                               | Configuration object             |
