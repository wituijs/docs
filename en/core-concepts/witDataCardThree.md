# witDataCardThree Data Card Component %{#witDataCardThree}%

`witDataCardThree` is a data card component integrated with ring progress chart, adopts card-style design, supports displaying title, percentage value and unit, has beautiful background images and gradient text effects.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witDataCardThree title="Completion Rate" :rate="85" unit="%" />
    
    <!-- Custom image -->
    <witDataCardThree title="Usage Rate" :rate="65" unit="%" pic="/assets/images/usage.png" />
    
    <!-- HTML title -->
    <witDataCardThree :title="'<span style=\'color:#65FFDD\'>Coverage Rate</span>'" :rate="92.5" unit="%" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `title`                | [`String`]      | `'Title'`                  | Card title, supports HTML format                         |
| `rate`                 | [`String, Number`] | `0`                    | Percentage value                                     |
| `unit`                 | [`String`]      | `'%'`                      | Value unit                                       |
| `pic`                  | [`String`]      | `''`                       | Image path displayed in ring progress chart center                   |

## Features

- **Data Visualization**: Integrated ring progress chart, intuitively displays percentage data
- **Information Display**: Supports displaying title, core value and unit simultaneously
- **Visual Design**: Adopts card-style layout with background images and gradient text effects
- **HTML Support**: Title property supports HTML format for custom styling
- **Image Customization**: Supports setting image in ring progress chart center
- **Responsive Design**: Adapts to container width, maintains good display effect
