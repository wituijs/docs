# witRightTools Right Toolbar Component %{#witRightTools}%

`witRightTools` is a right toolbar component that integrates multiple system tools, includes site selection, search functionality, theme settings, fullscreen toggle and other tools, supports horizontal/vertical layout switching, suitable for top or sidebar toolbars in management systems.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Vertical layout right toolbar -->
    <witRightTools />
    
    <!-- Horizontal layout right toolbar -->
    <witRightTools :isHorizontal="true" />
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component automatically shows corresponding tools based on system settings
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witRightTools`                 | Right toolbar main component, integrates multiple system tools  |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `isHorizontal`                  | `Boolean`       | `false`      | Whether to use horizontal layout                    |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -               | -            | This component requires no method calls                  |

### Events

| Event Name                      | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -               | -            | This component does not trigger custom events            |

## Features

### Tool Integration
- Integrates site selector (wit-select-site)
- Integrates search functionality (witSearchFunction)
- Integrates color picker (wit-color-picker)
- Integrates theme switch (wit-theme)
- Integrates lock screen (wit-lock)
- Integrates fullscreen toggle (wit-fullscreen)
- Integrates notification center (wit-notice)
- Integrates instant messaging (wit-IM)
- Integrates AI assistant entry (witDeepseekIcon)
