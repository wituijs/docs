# witCount Number Counter %{#witCount}%

`witCount` is a number animation counter component, used to achieve smooth transition animation effects from start value to end value. The component supports custom animation duration, decimal places, number format, prefix, suffix and other configurations, suitable for data display, statistics, countdown and other scenarios.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witCount
      :start-value="0"
      :end-value="1000"
      :duration="2000"
    />
    
    <!-- Number with formatting -->
    <witCount
      :start-value="0"
      :end-value="12345.678"
      :duration="3000"
      :decimals="2"
      separator=","
      prefix="$"
      suffix=" USD"
    />
    
    <!-- Custom easing function -->
    <witCount
      :start-value="0"
      :end-value="500"
      :duration="1500"
      :use-easing="true"
      :easing-fn="[0.5, 0.2, 0.3, 1]"
    />
  </div>
</template>

<script lang="ts" setup>
// No additional import needed, component is globally registered
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witCount`                      | Number counter main component                    |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `startValue`                    | `Number`        | `0`          | Animation start value                          |
| `endValue`                      | `Number`        | `20`         | Animation end value                          |
| `duration`                      | `Number`        | `3000`       | Animation duration (milliseconds)                |
| `autoplay`                      | `Boolean`       | `true`       | Whether to auto start animation                    |
| `decimals`                      | `Number`        | `0`          | Decimal places                            |
| `decimal`                       | `String`        | `.`          | Decimal point symbol                          |
| `separator`                     | `String`        | `,`          | Thousand separator                          |
| `prefix`                        | `String`        | `''`         | Number prefix                            |
| `suffix`                        | `String`        | `''`         | Number suffix                            |
| `useEasing`                     | `Boolean`       | `true`       | Whether to use easing function                    |
| `easingFn`                      | `Array`         | `[0.2, 0.2, 0, 1]` | Custom easing function parameters              |

## Events

| Event Name                      | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `update:modelValue`             | Triggered when component value changes                    | Current number value (Number)           |

:::tip
1. Component uses `useTransition` hook internally to achieve smooth transition animation, supports custom easing functions.
2. Can add units or symbols through `prefix` and `suffix` properties, such as: "$1,000.00 USD".
3. Supports custom thousand separator and decimal point symbol, adapts to number formats in different regions.
4. Can control displayed decimal places through `decimals` property, default shows no decimals.
5. When `autoplay` is `true`, component will automatically start animation when properties change.
:::
