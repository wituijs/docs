# witSearchFunction Quick Function Search %{#witSearchFunction}%

`witSearchFunction` is a quick function search component based on Element Plus tree selector, used to quickly search and locate route menu functions in applications. The component supports horizontal/vertical layout modes, provides tree structure display and quick positioning of route menus.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Vertical layout -->
    <wit-search-function />
    
    <!-- Horizontal layout -->
    <wit-search-function :is-horizontal="true" />
  </div>
</template>

<script lang="ts" setup>
// Component automatically gets data from routes and settings
</script>
```

## API

### Component

```vue
<wit-search-function
  :is-horizontal="false"
/>
```

### Properties

| Property Name           | Type      | Default Value  | Description                             |
| :--------------- | :-------- | :------ | :------------------------------- |
| `isHorizontal`   | `Boolean` | `false` | Whether to use horizontal layout, default vertical layout   |

### Slots

| Slot Name   | Description                     |
| :------- | :----------------------- |
| `default`| Custom tree node display content   |

### Events

| Event Name        | Description                     | Parameters                    |
| :------------ | :----------------------- | :---------------------- |
| `node-click`  | Triggered when tree node is clicked         | Selected node data          |
