# witSelectSite Site Selection %{#witSelectSite}%

`witSelectSite` is a hospital site selector component based on Element Plus Select, used to switch the hospital site currently used by the user in multi-hospital systems. The component supports hospital list loading, site switching and user information update functions.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Site selection component -->
    <wit-select-site />
  </div>
</template>

<script lang="ts" setup>
// Component automatically loads accessible hospital list and handles site switching logic
</script>
```

## API

### Component

```vue
<wit-select-site />
```

### Properties

| Property Name   | Type    | Default Value | Description       |
| :------- | :------ | :----- | :--------- |
| None       | -       | -      | No custom properties |

### Slots

| Slot Name   | Description       |
| :------- | :--------- |
| None       | No custom slots |

### Events

| Event Name   | Description       | Parameters       |
| :------- | :--------- | :--------- |
| None       | No custom events | -          |

## Features

1. **Hospital List Loading**
   - Automatically fetches accessible hospital list from API when component mounts
   - Automatically sets current hospital as default selected value on initialization
