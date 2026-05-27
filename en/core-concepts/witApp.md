# witApp Application Root Component %{#witApp}%

`witApp` is an application root component that implements global configuration management based on Element Plus's `el-config-provider`, including internationalization language settings and button style configuration, and integrates router view and PWA update notification features. This component serves as the application's entry container, unifying global configuration and layout structure.

## Usage Example %{#dome}%

```vue
<template>
  <witApp />
</template>

<script lang="ts" setup>
import witApp from '@/library/components/witApp'
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witApp`                        | Application root component, provides global configuration and router container  |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| -                               | -               | -            | Component has no custom properties                    |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -                                   | -                                 |

### Events

| Event Name                      | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -                                   | -                            |

## Features

### Global Configuration Management
- Integrates Element Plus's `el-config-provider` for unified global component configuration
- Configures button auto-insert space feature to improve Chinese typography aesthetics
- Automatically switches Element Plus localization settings based on current language environment

### Router View Container
- Serves as the application's root router container, rendering matched route components
- Supports all Vue Router configurations and features

### Internationalization Support
- Automatically detects current language environment (Chinese/English)
- Dynamically switches Element Plus language packs
- Seamlessly integrates with the application's i18n system

### PWA Update Notification
- Displays update notification component based on PWA configuration conditions
- Supports progressive web application version update management

:::tip
1. The component is the application's root component, typically only needs to be used once in the main entry file.
2. Language switching functionality depends on the application's i18n system, ensure Chinese and English language packs are correctly configured.
3. PWA update notification feature requires enabling `pwa` configuration in `/@/config`.
4. The component automatically sets button's `autoInsertSpace` to `true`, improving button text readability in Chinese environments.
5. As the root component, it wraps all page content, ensuring consistency of global configuration.
:::
