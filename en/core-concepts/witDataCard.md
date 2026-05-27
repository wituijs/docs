# witDataCard Data Card Component %{#witDataCard}%

`witDataCard` is a data card component for displaying key data indicators, adopts card-style design, supports displaying title, subtitle, value and growth rate information, has beautiful background images and gradient text effects.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witDataCard title="Sales" subtitle="This Month" :num="1258000" :rate="12.5" />
    
    <!-- Custom unit -->
    <witDataCard title="Users" subtitle="New" :num="8500" :rate="-3.2" unit="people" />
    
    <!-- Full configuration -->
    <witDataCard title="Orders" subtitle="Today" :num="328" :rate="8.9" :over="1000" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `title`                | [`String`]      | `'Title'`                   | Card title                                       |
| `subtitle`             | [`String`]      | `'Subtitle'`                 | Card subtitle                                     |
| `num`                  | [`String, Number`] | `0`                    | Display value                                     |
| `rate`                 | [`String, Number`] | `0`                    | Growth rate, displayed as percentage                       |
| `unit`                 | [`String`]      | `'%'`                      | Value unit                                       |
| `over`                 | [`Number`]      | `0`                        | Over value (not directly displayed in UI in current version)           |

## Features

- **Data Display**: Supports simultaneous display of title, subtitle, core value and growth rate
- **Visual Design**: Adopts card-style layout, paired with background images and gradient text effects, enhances visual appeal
- **Dynamic Styles**: Growth rate automatically shows different colors based on positive/negative values (positive red, negative green)
- **Custom Unit**: Supports setting any data unit, meets different business scenario needs
- **Responsive Design**: Adapts to container width, maintains good display effect

## Implementation Principle

1. **Layout Structure**: Uses relative positioning container, contains background layer and content layer
2. **Background Effect**: Uses background images to achieve card visual effects
3. **Text Styles**:
   - Core value uses gradient text effect, enhances visual prominence
   - Growth rate automatically applies different colors based on value positive/negative
4. **Data Processing**:
   - Automatically converts values to number type for comparison
   - Growth rate automatically adds arrow indicators (positive value up arrow, negative value down arrow)
5. **Style Isolation**: Uses scoped styles to ensure component styles don't affect other elements

:::tip
- Growth rate shows red up arrow when positive, green down arrow when negative
- Core value uses gradient text effect, implemented with `background-clip: text`
- Component height is fixed at 81px, width adapts to parent container
:::
