# witRate Data Indicator Display Component %{#witRate}%

`witRate` is a component for displaying key data indicators, supports displaying values, month-over-month changes, units and icons. The component adopts gradient text effects and background image design, has modern visual style, suitable for data dashboards, report displays and other scenarios.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witRate
    :rate="85.5"
    :mom="-2.3"
    label="Market Share"
  />
</template>

<script lang="ts" setup>
// Component will be auto-imported
</script>
```

### Display Icon Mode

```vue
<template>
  <witRate
    mode="icon"
    imgType="drug"
    :rate="1250"
    unit="million yuan"
    label="Drug Sales"
    :isShowTop="false"
  />
</template>

<script lang="ts" setup>
// Component will be auto-imported
</script>
```

### Custom Size and Font

```vue
<template>
  <witRate
    :rate="92"
    :mom="5.8"
    label="Customer Satisfaction"
    width="200px"
  />
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `rate`                 | [`Number`]      | `0`                        | Main value                                       |
| `mom`                  | [`Number`]      | `0`                        | Month-over-month change value (positive for increase, negative for decrease)            |
| `label`                | [`String`]      | `''`                       | Indicator label                                       |
| `unit`                 | [`String`]      | `''`                       | Value unit                                       |
| `mode`                 | [`String`]      | `'default'`                | Display mode: 'default', 'icon'                           |
| `imgType`              | [`String`]      | `''`                       | Icon type (icon mode)                                 |
| `width`                | [`String`]      | `'150px'`                  | Component width                                       |
| `isShowTop`            | [`Boolean`]     | `true`                     | Whether to show top indicator arrow                               |
