# witSteps Steps Component %{#witSteps}%

`witSteps` is a step navigation bar that guides users through tasks according to a process, steps can be set according to application scenarios. [View Demo>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## Usage Example %{#dome}%

```vue
<template>
  <wit-steps
    v-model="step"
    :stepList="stepList"
    direction="vertical"
    width="300px"
  >
    <template #title="{ item }">
      <div class="custom-step-title flex space-between">
        <span>{{ item.title }}</span>
        <span>{{ item.subtitle }}</span>
      </div>
    </template>
    <template #description="{ item }">
      <div class="custom-step-description">
        <div class="card flex" v-if="item.replay">
          <div class="desc">{{ item.replay }}</div>
        </div>
        <div class="date">{{ item.date }}</div>
      </div>
    </template>
  </wit-steps>
</template>

<script lang="ts" setup>
const step = ref<number>(5);
const stepList = ref<any>([
  {
    title: "First Submission",
    subtitle: "Liu Sixing (Doctor)",
    date: "2022/10/22  22:21",
  },
  {
    title: "Returned for Revision",
    subtitle: "Li Yu (Pharmacist)",
    date: "2022/10/22  22:21",
    isRx: true,
    replay:
      "Prescription [CF120240301182748] [Aminophylline Injection] hospital regulation: chronic disease patients' outpatient prescription should not exceed 1 day dosage.",
  },
  {
    title: "Submit Revision",
    subtitle: "Liu Sixing (Doctor)",
    date: "2022/10/22  22:21",
    replay: "Patient condition requires it.",
  },
  {
    title: "Returned for Double Signature",
    subtitle: "Li Yu (Pharmacist)",
    date: "2022/10/22  22:21",
    replay: "Unreasonable.",
  },
  {
    title: "Double Signature Approved",
    subtitle: "Li Yu (Pharmacist)",
    date: "2022/10/22  22:21",
    replay: "Patient condition requires it.",
  },
]);
</script>
```

The witSteps steps component inherits all properties and methods from the element-plus el-steps steps component.

## API

| Property Name        | Type        | Description                                                            |
| :------------ | :---------- | :-------------------------------------------------------------- |
| `stepList`    | [`object`]  | Steps data content                                                  |
| `direction`   | [`string`]  | Direction, default horizontal                                           |
| `disabled`    | [`boolean`] | Whether disabled, default false                                            |
| `isView`      | [`boolean`] | Whether in preview state, default false                                      |
| `width`       | [`string`]  | Width, default auto                                                 |
