# witCity City Selection Component %{#witCity}%

`witCity` is a city selection component based on Element Plus, supports two modes: by province and by city, provides convenient city selection functionality. The component has built-in national city data, supports quick city location by letter.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <witCity v-model="selectedCity" />
    <p>Selected city code: {{ selectedCity }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedCity = ref('110000') // Default selection Beijing
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`String`]      | `undefined`                | City code, for two-way binding, e.g.: '110000' (Beijing)   |

## Events

| Event Name               | Description                                        | Parameters                         |
| :--------------------- | :------------------------------------------ | :--------------------------- |
| `update:modelValue`    | Triggered when city selection changes                          | Selected city code               |

:::tip
The component has built-in national city data, including provinces and cities. Supports two selection modes:
1. By province: First select province initial letter, then select specific province and city
2. By city: Directly locate and select city by initial letter
:::
