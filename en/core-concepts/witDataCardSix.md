# witDataCardSix Data Card (Version 6) %{#witDataCardSix}%

`witDataCardSix` is a feature-rich data card component, adopts background image design, used to display key data indicators and comparison information. The component supports custom background, size and text content, has gradient text effects and dynamic increase/decrease indicators.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div>
    <witDataCardSix
      :value="123456.78"
      :value1="0.125"
      title1="Total Revenue"
      title2="Year-over-year"
      unit="yuan"
    />
  </div>
</template>

<script lang="ts" setup>
// No need to import default resources, component has built-in
</script>
```

### Custom Background

```vue
<template>
  <div>
    <witDataCardSix
      :value="87654.32"
      :value1="-0.058"
      title1="Total Expenses"
      title2="Year-over-year"
      unit="yuan"
      backgroundImg="/@/assets/custom-background.png"
    />
  </div>
</template>

<script lang="ts" setup>
// Import custom background image
import customBackground from '/@/assets/custom-background.png'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `value`                | [`Number`]      | `0`                        | Main value                                       |
| `value1`               | [`Number`]      | `0`                        | Comparison value (positive for increase, negative for decrease)            |
| `title1`               | [`String`]      | `''`                       | Main title                                       |
| `title2`               | [`String`]      | `''`                       | Subtitle                                       |
| `unit`                 | [`String`]      | `''`                       | Value unit                                       |
| `backgroundImg`        | [`String`]      | Built-in image             | Background image path                                 |
