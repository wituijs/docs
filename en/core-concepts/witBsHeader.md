# witBsHeader Report Header Component %{#witBsHeader}%

`witBsHeader` is a complex report header component that integrates title display, subtitle menu, time display and fullscreen toggle functionality. The component adopts modern UI design, includes gradient text effects and custom background images, suitable for header display of various reports and data visualization pages.

## Usage Example %{#dome}%

### Basic Usage
```vue
<template>
  <witBsHeader 
    title="Drug Usage Monitoring System"
    :has-subtitle="true"
  />
</template>
```

### Custom Style
```vue
<template>
  <witBsHeader 
    title="Key Drug Monitoring"
    :has-subtitle="false"
    fontSize="42px"
    height="70px"
    timeRight="40px"
    timeTop="40px"
    leftFontSize="28px"
    rightTopFontSize="12px"
    rightBottomFontSize="14px"
  />
</template>
```

### Listen Menu Click Event
```vue
<template>
  <witBsHeader 
    title="Sunshine Drug Supervision Platform"
    :has-subtitle="true"
    @tabClick="handleTabClick"
  />
</template>

<script lang="ts" setup>
const handleTabClick = (activeIndex: number) => {
  console.log('Current active menu index:', activeIndex)
  // Switch different report content based on index
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `title`                | [`String`]      | `''`                       | Main title text                                       |
| `hasSubtitle`          | [`Boolean`]     | `false`                    | Whether to show subtitle menu                             |
| `fontSize`             | [`String`]      | `'36px'`                   | Main title font size                                       |
| `height`               | [`String`]      | `'60px'`                   | Component height                                       |
| `timeRight`            | [`String`]      | `'30px'`                   | Time display right position                                 |
| `timeTop`              | [`String`]      | `'30px'`                   | Time display top position                                 |
| `leftFontSize`         | [`String`]      | `'24px'`                   | Time left font size                                       |
| `rightTopFontSize`     | [`String`]      | `'14px'`                   | Time right top font size                                 |
| `rightBottomFontSize`  | [`String`]      | `'12px'`                   | Time right bottom font size                                 |
