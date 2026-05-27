# witErrorLog Error Log Component %{#witErrorLog}%

`witErrorLog` is a component used to capture and display application exception errors. Through error log state management, it automatically displays error count badge, provides error detail viewing and log clearing functionality, helping developers discover and solve problems in the application in a timely manner.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Error log component will automatically display on the page -->
    <witErrorLog />
  </div>
</template>

<script lang="ts" setup>
// Component automatically captures exceptions in the application, no additional configuration needed
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| None                     | -               | -                          | Component requires no additional property configuration, works automatically                   |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component handles all interactions internally, no external event listening needed         | -                            |

:::tip
1. Component depends on `errorLogStore` state management, automatically captures exception errors in the application.
2. When an error occurs, a badge icon with error count will be displayed on the page.
3. Clicking the badge icon opens the error log dialog, displaying detailed error information.
4. Provides "Don't Show" button to clear current error logs.
5. Component uses `wit-dialog` and `wit-error-log-content` components to display error details.
:::
