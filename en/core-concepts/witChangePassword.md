# witChangePassword Password Change Component %{#witChangePassword}%

`witChangePassword` is a component for user password modification, includes password prompt and password change two dialogs, supports password complexity validation and auto-prompt functionality, suitable for management systems that require periodic password changes.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Password change component -->
    <witChangePassword />
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component automatically detects password status and shows prompt
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witChangePassword`             | Password change component, includes password prompt and change functionality |

### Properties

| Property Name                  | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| -                               | -               | -            | This component requires no property configuration                  |

### Methods

| Method Name                  | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -               | -            | This component requires no method calls                  |

### Events

| Event Name                  | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -               | -            | This component does not trigger custom events            |

## Features

### Password Prompt Functionality
- Automatically detects password status based on user information
- Supports three prompt types: simple password prompt, password expiring soon, password expired
