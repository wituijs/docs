# witNav Navigation Component %{#witNav}%

`witNav` is an application navigation component that provides top navigation bar functionality, supports different layout modes, contains left panel (Logo and tabs) and right toolbar, implements route tab switching and navigation functionality.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witNav layout="comprehensive" />
    
    <!-- Custom layout -->
    <witNav layout="other-layout" />
  </div>
</template>

<script lang="ts" setup>
// Component automatically gets navigation data from route configuration and store
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `layout`               | [`String`]      | `''`                       | Layout type, affects navigation bar display style, such as 'comprehensive' |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| None                     | Component does not provide slots                                 |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component does not directly trigger events                             | -                            |

:::tip
Component supports different layout modes:
- Comprehensive layout (comprehensive): Shows tab navigation
- Other layouts: Shows simplified navigation bar

Tab clicks handle route navigation, supports external links and internal routes:
- External links: Open in new window
- Internal routes: Navigate to specified page or redirect to first child menu based on configuration

Component depends on route configuration and routesStore to get navigation data, ensure this data is correctly loaded.
:::

## Features

1. **Multi-layout Support**: Displays different navigation styles based on passed layout property
2. **Tab Navigation**: Shows route tabs in comprehensive layout, supports click switching
3. **Route Handling**: Handles internal route navigation and external link opening
4. **Responsive Design**: Automatically hides partial toolbar on small screen devices
5. **Internationalization Support**: Uses translate function to support multi-language display of navigation items
