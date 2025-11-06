# witSteps 步骤条 %{#witSteps}%

`witSteps`引导用户按照流程完成任务的分步导航条， 可根据应用场景设定步骤。[查看效果>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## 用法实列 %{#dome}%

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
    title: "首次提交",
    subtitle: "刘思行（医生）",
    date: "2022/10/22  22:21",
  },
  {
    title: "打回修改",
    subtitle: "李玉（药师）",
    date: "2022/10/22  22:21",
    isRx: true,
    replay:
      "处方【CF120240301182748】中【氨茶碱注射液】本院规定：慢性病患者在门诊处方量不得超过1日用量。",
  },
  {
    title: "提交修改",
    subtitle: "刘思行（医生）",
    date: "2022/10/22  22:21",
    replay: "病人病情需要。",
  },
  {
    title: "打回双签",
    subtitle: "李玉（药师）",
    date: "2022/10/22  22:21",
    replay: "不合理。",
  },
  {
    title: "双签通过",
    subtitle: "李玉（药师）",
    date: "2022/10/22  22:21",
    replay: "病人病情需要。",
  },
]);
</script>
```

witSteps 步骤条组件继承了继承了 element-plus 中 el-steps 步骤条组件所有属性与方法。

## API

| 属性名        | 类型        | 描述                                                            |
| :------------ | :---------- | :-------------------------------------------------------------- |
| `stepList`    | [`object`]  | 步骤条数据内容                                                  |
| `direction`   | [`string`]  | 方向，默认 horizontal                                           |
| `disabled`    | [`boolean`] | 是否禁用，默认 false                                            |
| `isView`      | [`boolean`] | 是否为预览状态，默认 false                                      |
| `width`       | [`string`]  | 宽度，默认 auto                                                 |
| `mode`        | [`string`]  | 模式，默认 normal，可选值['normal','node']，node 模式可点击节点 |
| `simpleSmall` | [`boolean`] | 是否应用简洁风格                                                |

## Events

| 事件名  | 说明           |
| :------ | :------------- |
| `click` | 步骤条点击回调 |

## Slots

| 插槽名        | 说明           |
| :------------ | :------------- |
| `title`       | 自定义标题     |
| `description` | 自定义描述文案 |

:::tip
用法实列只展示部分字段，还有更多的属性字段与组件不做一一讲解，本框架不加密，都是源码有注释，请看源码更全面！
:::
