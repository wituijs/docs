# witDataCardFive Data Card (Version 5) %{#witDataCardFive}%

`witDataCardFive` is a feature-rich data card component, supports ring chart and image two display modes, used to display key data indicators. The component adopts modern border design and gradient text effects, suitable for various dashboard data display scenarios.

## Usage Example %{#dome}%

### Ring Chart Mode

```vue
<template>
  <div>
    <witDataCardFive
      type="1"
      :rate="78.5"
      title1="Overall Completion Rate"
      title2="Year-over-year growth 12%"
      color="#5BFFF5"
    />
  </div>
</template>

<script lang="ts" setup>
// No need to import default resources, component has built-in
</script>
```

### Image Mode

```vue
<template>
  <div>
    <witDataCardFive
      type="2"
      :rate="92.3"
      title1="Satisfaction Score"
      leftImg="/@/assets/custom-image.png"
    />
  </div>
</template>

<script lang="ts" setup>
// Import custom image
import customImage from '/@/assets/custom-image.png'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `type`                 | [`String`]      | `'1'`                      | Display mode: '1' ring chart, '2' image                   |
| `rate`                 | [`String, Number`] | `0`                    | Display value                                     |
| `title1`               | [`String`]      | `''`                       | Main title                                       |
| `title2`               | [`String`]      | `''`                       | Subtitle                                       |
| `color`                | [`String`]      | `'#5BFFF5'`                | Ring chart color                                       |
| `leftImg`              | [`String`]      | Built-in image             | Image path (image mode)                                 |
