# witAvatar User Avatar Component %{#witAvatar}%

`witAvatar` is a user avatar component that integrates avatar display, username display, and dropdown menu functionality, supports password modification and logout operations, and can control company information display based on system configuration.

## Usage Example %{#dome}%

```vue
<template>
  <witAvatar />
</template>

<script lang="ts" setup>
import witAvatar from '@/library/components/witAvatar'
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witAvatar`                     | User avatar component, includes avatar, username and operation menu |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| -                               | -               | -            | Component has no custom properties, relies on state management to get user information |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -                                   | -                                 |

### Events

| Event Name                      | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -                                   | -                            |

## Features

### User Information Display
- Displays user avatar image
- Shows user nickname
- Controls avatar display based on system configuration (company info switch)

### Operation Menu
- Password modification function entry
- Logout function entry
- Dropdown menu interaction effects
- Menu item active state feedback

### Internationalization Support
- Integrates internationalization translation functionality
- Supports multi-language switching
- Menu item text automatically adapts to language environment

### System Configuration Integration
- Reads system configuration to control company information display
- Supports locally stored configuration information
- Automatically initializes configuration when component loads

### Password Modification Feature
- Integrates password modification dialog component
- Supports password modification interaction flow

### Logout Feature
- Calls user state management logout method
- Redirects to login page
- Refreshes page to ensure state reset

:::tip
1. Component depends on user state management and system configuration management
2. Avatar display is controlled by `sys_config:login_switch_company` in system configuration
3. After logout, automatically redirects to login page and refreshes the page
4. Password modification feature needs to be used with `updatePassword` component
5. Component supports responsive layout, adapts to different screen sizes
:::
