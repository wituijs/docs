# witLayoutHorizontal Horizontal Layout %{#witLayoutHorizontal}%

`witLayoutHorizontal` is a horizontal layout component based on Element Plus, provides concise top navigation layout structure, includes header area and main content area, supports fixed header and tab bar display control.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <witLayoutHorizontal />
</template>

<script lang="ts" setup>
// Import component
import { witLayoutHorizontal } from '@wit-ui/components'
</script>
```

### Custom Configuration

```vue
<template>
  <witLayoutHorizontal
    :collapse="false"
    :fixed-header="true"
    :show-tabs="true"
    device="desktop"
  />
</template>

<script lang="ts" setup>
// Import component
import { witLayoutHorizontal } from '@wit-ui/components'
</script>
```

## API

### Component

| Property Name        | Type    | Default Value   | Description                     |
| :------------ | :------ | :------- | :----------------------- |
| `collapse`    | Boolean | `false`  | Whether to collapse sidebar           |
| `fixedHeader` | Boolean | `true`   | Whether to fix header             |
| `showTabs`    | Boolean | `true`   | Whether to show tab bar           |
| `device`      | String  | `desktop`| Device type, options: 'desktop', 'mobile' |

### Slots
