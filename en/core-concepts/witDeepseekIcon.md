# witDeepseekIcon DeepSeek AI Icon Component %{#witDeepseekIcon}%

`witDeepseekIcon` is an icon component for integrating DeepSeek AI functionality, provides an entry point for AI assistant, clicking opens the AI medication assistant interface.

## Usage Example %{#dome}%

```vue
<template>
  <div class="header-right">
    <witDeepseekIcon />
  </div>
</template>

<script lang="ts" setup>
// Component requires no additional dependencies, use directly
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| None                     | -               | -                          | Component requires no additional property configuration                           |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component handles click events internally, no external listening needed             | -                            |

:::tip
1. Component uses Lottie animation effects, need to ensure witLottiePlayer component is correctly configured in the project.
2. Component internally integrates aiMedicationAssistant component, clicking the icon triggers opening the AI medication assistant functionality.
3. Component defaults to left-aligned flex layout, style class is `im primary flex left-center`.
:::
