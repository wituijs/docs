# witLayoutVertical Vertical Layout %{#witLayoutVertical}%

`witLayoutVertical` is a vertical layout component based on Element Plus, provides complete left sidebar navigation layout structure, includes sidebar, header navigation, tab bar and main content area, supports sidebar collapse, fixed header, tab bar display control and other features.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witLayoutVertical />
</template>

<script lang="ts" setup>
// Import component
import { witLayoutVertical } from '@wit-ui/components'
</script>
```

### Custom Configuration

```vue
<template>
  <witLayoutVertical
    :collapse="false"
    :fixed-header="true"
    :show-tabs="true"
    :show-header="true"
    device="desktop"
  />
</template>

<script lang="ts" setup>
// Import component
import { witLayoutVertical } from '@wit-ui/components'
</script>
```

## API

### Component

| Property Name        | Type    | Default Value   | Description                     |
| :------------ | :------ | :------- | :----------------------- |
| `collapse`    | Boolean | `false`  | Whether to collapse sidebar           |
| `fixedHeader` | Boolean | `true`   | Whether to fix header             |
| `showTabs`    | Boolean | `true`   | Whether to show tab bar           |
| `showHeader`  | Boolean | `true`   | Whether to show header navigation         |
| `device`      | String  | `desktop`| Device type, options: 'desktop', 'mobile' |
