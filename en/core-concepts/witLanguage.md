# witLanguage Language Switch Component %{#witLanguage}%

`witLanguage` is a component used for system language switching, implemented based on Element Plus's Dropdown component, supports quick switching between Chinese and English, automatically updates system language settings and page titles, ensuring global language consistency.

## Usage Example %{#dome}%

```vue
<template>
  <div class="app-container">
    <!-- Use language switch component in page header -->
    <div class="header-actions">
      <witLanguage />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.header-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| No additional property configuration          | -               | -                          | Component manages all states and behaviors internally                     |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| None                     | Component does not provide slot functionality                             |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component does not trigger external events                             | -                            |

## Features

1. **Language Switching**: Supports quick switching between Simplified Chinese (zh) and English (en)
2. **State Management**: Manages language settings through settingsStore, ensuring global consistency
3. **Title Update**: Automatically updates page title to corresponding language after switching
4. **Auto Refresh**: Automatically refreshes page when switching language on login/register pages, ensuring language settings take full effect
5. **Icon Display**: Uses translation icon (ri-translate-2) to intuitively represent language switching functionality
6. **Theme Integration**: Supports system theme styles, maintaining visual consistency

## Usage Tips

:::tip
- Component depends on settingsStore's `changeLanguage` method to update global language settings
- Language switching will automatically update Vue I18n's locale value, achieving real-time interface text switching
- Page title is obtained through `getPageTitle` utility function, ensure this function is correctly configured
- Currently component only supports Simplified Chinese (zh) and English (en) language options
- Component is implemented based on Element Plus's Dropdown component, can customize its appearance through global styles
- When switching language on login and register pages, component will automatically refresh the page to ensure language settings take full effect
:::

## Core Implementation

The core functionality implementation of the component includes:

```typescript
// Handle language switch command
const handleCommand = (language: string) => {
  changeLanguage(language)  // Update language settings in settingsStore
  locale.value = language   // Update Vue I18n's locale value
  document.title = getPageTitle(route.meta.title)  // Update page title
  
  // Auto refresh when switching language on login/register page
  if (route.path === '/login' || route.path === '/register') location.reload()
}
```

## Dependencies

- **settingsStore**: Used to manage global language settings and state
- **Vue I18n**: Provides internationalization support, manages application's language environment
- **useRoute**: Used to get current route information, determine if page refresh is needed
- **getPageTitle**: Used to generate page titles in different languages
- **Element Plus Dropdown**: Provides dropdown menu functionality
- **wit-icon**: Used to display translation icon
