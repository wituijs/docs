# witDataCardSeven Data Card (Version 7) %{#witDataCardSeven}%

`witDataCardSeven` is a concise data card component, adopts background image design, used to display combination information of title, icon and key values. The component supports custom size, title and unit, has gradient text effects.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div>
    <witDataCardSeven
      :value="123456.78"
      title="Payment Amount"
      unit="yuan"
    />
  </div>
</template>

<script lang="ts" setup>
// No need to import default resources, component has built-in
</script>
```

### Custom Size

```vue
<template>
  <div>
    <witDataCardSeven
      :value="87654.32"
      title="Expense Amount"
      unit="yuan"
      width="250px"
      height="120px"
    />
  </div>
</template>

<script lang="ts" setup>
// Custom card size
</script>
```

### Different Units

```vue
<template>
  <div>
    <witDataCardSeven
      :value="98.5"
      title="Completion Rate"
      unit="%"
    />
  </div>
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `value`                | [`Number`]      | `0`                        | Display value                                       |
| `title`                | [`String`]      | `''`                       | Card title                                       |
| `unit`                 | [`String`]      | `''`                       | Value unit                                       |
| `width`                | [`String`]      | `'200px'`                  | Card width                                       |
| `height`               | [`String`]      | `'100px'`                  | Card height                                       |
