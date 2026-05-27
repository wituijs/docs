# witDivider Divider Component %{#witDivider}%

`witDivider` is an enhanced divider component based on Element Plus Divider, provides three display modes: normal divider, blockquote and fieldset, supports multiple theme styles, provides more flexible separation and content organization for page layouts.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Normal divider mode -->
    <p>Content above</p>
    <witDivider content-position="center">Divider</witDivider>
    <p>Content below</p>
    
    <!-- Blockquote mode -->
    <witDivider blockquote type="primary">
      <p>This is a quoted content</p>
      <p>Can contain multiple lines of text and other elements</p>
    </witDivider>
    
    <!-- Blockquote with border -->
    <witDivider blockquote type="success" is-border>
      <p>This is a blockquote with border</p>
      <p>Supports different theme colors</p>
    </witDivider>
    
    <!-- Fieldset mode -->
    <witDivider fieldset title="Fieldset Title">
      <p>Fieldset content area</p>
      <p>Can place forms, lists and other content</p>
    </witDivider>
  </div>
</template>

<script lang="ts" setup>
// Component requires no additional dependencies, use directly
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `blockquote`           | [`Boolean`]     | `false`                    | Whether to use blockquote mode                             |
| `fieldset`             | [`Boolean`]     | `false`                    | Whether to use fieldset mode                             |
| `type`                 | [`String`]      | `'primary'`                | Theme type, options: 'primary', 'success', 'warning', 'danger', 'info' |
| `isBorder`             | [`Boolean`]     | `false`                    | Whether to show border in blockquote mode                       |
| `title`                | [`String`]      | `''`                       | Title in fieldset mode                             |
| `...ElDivider.props`   | [`Object`]      | -                          | Inherits all properties from Element Plus Divider           |
