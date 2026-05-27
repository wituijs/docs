# witColumnBar Column Layout Sidebar %{#witColumnBar}%

`witColumnBar` is a column layout sidebar component based on Element Plus, supports multiple theme styles, collapse functionality and route navigation, provides flexible sidebar layout solutions. The component uses combination of Tabs and Menu, supports responsive design, can customize styles and behaviors as needed.

## Usage Example %{#dome}%

```vue
<template>
  <witColumnBar />
</template>

<script lang="ts" setup>
// Component automatically uses global route configuration and settings state
</script>
```

## API

### Properties

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| None                     | -               | -                          | Component gets configuration from global state internally, no need to pass properties manually     |

### Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| None                     | Component internal structure is fixed, does not provide external slots               |

### Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `...ElTabs.events`     | Inherits all events from Element Plus Tabs              | -                            |
| `...ElMenu.events`     | Inherits all events from Element Plus Menu              | -                            |

## Theme Styles

Component supports multiple column layout styles, configured through `theme.columnStyle`:

- `vertical`: Vertical style
- `horizontal`: Horizontal style
- `card`: Card style
- `arrow`: Arrow style
- `semicircle`: Semicircle style

## Features

:::tip
Component automatically integrates with route configuration and settings state, no manual configuration needed.
:::
