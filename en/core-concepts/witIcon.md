# witIcon Icon Component %{#witIcon}%

`witIcon` is a flexible icon component that supports two rendering modes: custom SVG icons and regular font icons, provides a unified icon usage interface, making it easy to uniformly manage and use various icon resources in projects.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Regular font icon -->
    <witIcon 
      icon="el-icon-edit" 
      size="24" 
      className="custom-icon"
    />
    
    <!-- Custom SVG icon -->
    <witIcon 
      icon="user" 
      :isCustomSvg="true" 
      size="32"
    />
    
    <!-- Icons of different sizes -->
    <div class="icon-group">
      <witIcon icon="el-icon-success" size="16" />
      <witIcon icon="el-icon-success" size="20" />
      <witIcon icon="el-icon-success" size="24" />
      <witIcon icon="el-icon-success" size="32" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.custom-icon {
  color: #409eff;
}

.icon-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `icon`                 | [`String`]      | -                          | Icon name or ID, required field                             |
| `isCustomSvg`          | [`Boolean`]     | `false`                    | Whether it's a custom SVG icon, default is false                 |
| `className`            | [`String`]      | `''`                       | Custom class name, used to add extra styles                     |
| `size`                 | [`String`]      | `''`                       | Icon size, supports px, rem and other unit strings                 |

## Slots

None

## Events

None

:::tip
- When using regular font icons (isCustomSvg=false), the `icon` property is directly used as the class attribute value of the i tag
- When using custom SVG icons (isCustomSvg=true), the component will reference the SVG element with ID `#wit-icon-{icon}` through the `<use>` tag
- Custom SVG icons need to ensure the corresponding SVG symbol is already defined in the page
- Component will automatically add `wit-icon` class name for custom SVG icons, convenient for unified style management
:::
