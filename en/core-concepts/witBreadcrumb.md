# witBreadcrumb Breadcrumb Navigation %{#witBreadcrumb}%

`witBreadcrumb` is a smart breadcrumb navigation component based on Element Plus, automatically generates breadcrumb path based on current route, supports icon display and internationalization, suitable for management systems that need clear navigation hierarchy.

## Usage Example %{#dome}%

```vue
<template>
  <div class="app-container">
    <!-- Use witBreadcrumb component -->
    <witBreadcrumb />
    
    <!-- Page content -->
    <div class="page-content">
      <!-- Specific page content -->
    </div>
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component automatically generates breadcrumbs from routes
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex: 1;
  padding: 20px;
}
</style>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witBreadcrumb`                 | Smart breadcrumb navigation component                  |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| -                               | -               | -            | This component requires no property configuration, automatically generates data from routes |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -               | -            | This component requires no method calls                  |

### Events

| Event Name                      | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -               | -            | This component does not trigger custom events            |

## Features

### Automatic Route Parsing
- Automatically generates breadcrumb path from Vue Router route configuration
- Supports nested route structure
- Automatically handles route parameters

### Icon Support
- Can configure icons in route meta information
- Uses `wit-icon` component to render icons
- Icons are horizontally aligned with text

### Internationalization Support
- Integrates `i18n` internationalization functionality
- Translates route titles through `translate` function
- Supports multi-language switching

### Style Customization
- Based on Element Plus styles
- Custom breadcrumb separator (default "/")
- Height and style can be adjusted through CSS variables

:::tip
1. Component will automatically ignore route items where `meta.breadcrumbHidden` is `true`.
2. Ensure `meta.title` property is set for route items that need to be displayed in route configuration.
3. To display icons, add `icon` property in route `meta`, value is the icon name.
4. Component depends on Vue Router and i18n functionality, ensure they are correctly configured before use.
5. Breadcrumb item click behavior is handled by default by Element Plus's `el-breadcrumb-item` component.
:::
