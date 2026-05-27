# witDataCardTwo Data Card Component %{#witDataCardTwo}%

`witDataCardTwo` is a data card component for displaying key data indicators, adopts vertical layout, supports displaying values, units and titles, provides default and red theme styles, has beautiful background images and gradient text effects.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witDataCardTwo title="Completion Rate" :rate="85.6" unit="%" />
    
    <!-- Red theme -->
    <witDataCardTwo title="Growth Rate" :rate="12.8" unit="%" theme="red" />
    
    <!-- Custom height -->
    <witDataCardTwo title="Users" :rate="12500" unit="people" height="160px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `title`                | [`String`]      | `'Title'`                  | Card title                                       |
| `rate`                 | [`String, Number`] | `0`                    | Display value                                     |
| `unit`                 | [`String`]      | `'%'`                      | Value unit                                       |
| `height`               | [`String`]      | `'138px'`                  | Card height                                       |
| `theme`                | [`String`]      | `''`                       | Theme style, options: 'red' (red theme)            |

## Features

- **Data Display**: Supports displaying value, unit and title simultaneously
- **Dual Theme Support**: Provides default and red theme styles to meet different scenario needs
- **Visual Design**: Adopts vertical layout with background images and gradient text effects to enhance visual appeal
- **Height Customization**: Supports custom card height to adapt to different layout needs
- **Responsive Design**: Adapts to container width, maintains good display effect
