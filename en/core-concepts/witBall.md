# witBall Wave Ball %{#witBall}%

`witBall` is a spherical progress indicator component with wave animation effects, used to visually display percentage or numerical information. The component implements smooth wave effects through CSS animations, supports various custom configuration options such as colors, sizes, border styles, etc. [View Component Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/dpzjcs) [View Dashboard Demo>>](http://demo.wit-ui.com/wit-pharm-report/#/proCodeReportViewer/thqysjgpt)

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witBall value="65" unit="%" />
</template>

<script lang="ts" setup>
import { witBall } from '@wit-ui/components'
</script>
```

### Custom Configuration

```vue
<template>
  <witBall
    width="150px"
    height="150px"
    ball-width="120px"
    ball-height="120px"
    border-color="#ff6b6b"
    border-box-shadow-color="#ff8e8e"
    water-color1="#ff6b6b"
    water-color2="#ee5a52"
    value="80"
    unit="%"
    font-size="36px"
  />
</template>

<script lang="ts" setup>
import { witBall } from '@wit-ui/components'
</script>
```

## API

### Component

| Property Name            | Type    | Default Value                  | Description                                           |
| :--------------------- | :------ | :------------------------- | :--------------------------------------------- |
| `width`                | String  | `'129px'`                  | Width of the entire component                                 |
| `height`               | String  | `'131px'`                  | Height of the entire component                                 |
| `ballWidth`            | String  | `'105px'`                  | Width of the ball                                     |
