# witLogo System Logo Component %{#witLogo}%

`witLogo` is the system's Logo component, used to display system title and hospital logo in the application header, supports multiple layout styles, automatically adapts to different theme configurations.

## Usage Example %{#demo}%

```vue
<template>
  <div class="app-header">
    <!-- Use in application header -->
    <witLogo />
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component automatically gets configuration from store
</script>
```

## API

### Properties

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| No additional properties             | -               | -                          | Component requires no external property configuration, all configuration obtained from store     |

### Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| No available slots             | -                                              | Component is fully implemented internally, does not provide external slots                 |

### Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| No custom events           | -                                              | -                            | Component manages state through store, does not directly expose events      |

## Features

### 1. Multi-layout Support
- Supports horizontal layout (horizontal)
- Supports vertical layout (vertical)
- Supports column layout (column)
- Supports comprehensive layout (comprehensive)

### 2. Dynamic Logo Display
- Prioritizes displaying hospital logo (obtained from `userStore.userInfo.user.hospitalInfo?.logo`)
- If no hospital logo, displays default system logo
- Logo image automatically adapts to container size

### 3. System Title Display
- Displays system title (obtained from `settingsStore.title`)
- Title style automatically adjusts based on layout type

### 4. Responsive Design
- Automatically adjusts styles based on layout type
- Maintains good display effect at different screen sizes
