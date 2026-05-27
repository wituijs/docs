# witTooltip Smart Tooltip Component %{#witTooltip}%

`witTooltip` is a smart tooltip component based on Element Plus, used to automatically display tooltip when text content overflows. The component supports single-line and multi-line text overflow detection, and provides rich custom configuration options.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witTooltip content="This is a basic tooltip example">
      This is text content that may overflow, if container width is insufficient, tooltip will be displayed
    </witTooltip>
    
    <!-- Multi-line text -->
    <witTooltip 
      content="This is a multi-line text tooltip example, supports custom display line count"
      :lines="2"
    >
      This is multi-line text content that may overflow, if container width or height is insufficient, tooltip will be displayed.
      Second line text for testing multi-line overflow detection.
    </witTooltip>
    
    <!-- Bold text -->
    <witTooltip 
      content="This is a bold text tooltip example"
      :bold="true"
    >
      This is bold text, if content overflows tooltip will be displayed
    </witTooltip>
    
    <!-- Custom theme -->
    <witTooltip 
      content="This is a custom theme tooltip example"
      effect="light"
    >
      This is text, tooltip will use light theme
    </witTooltip>
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
| `witTooltip`                    | Smart tooltip main component                      |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `content`                       | `String`        | `''`         | Tooltip content                            |
| `lines`                         | `Number`        | `1`          | Number of lines to display                            |
| `bold`                          | `Boolean`       | `false`      | Whether to use bold text                    |
| `effect`                        | `String`        | `'dark'`     | Tooltip theme: 'dark' or 'light'                          |
