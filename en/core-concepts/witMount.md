# witMount Application Mount Component %{#witMount}%

`witMount` is an application mount component based on WujieVue micro-frontend framework, used to initialize and manage micro-app loading configuration, supports dynamic application URL setting and preloading functionality, achieves seamless integration between main application and micro-apps.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Use at application entry, automatically initializes all micro-app configurations -->
    <witMount />
  </div>
</template>

<script lang="ts" setup>
// Component requires no additional configuration, automatically reads configuration from global app list
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| None                     | -               | -                          | Component requires no external properties, automatically obtains from global configuration        |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| None                     | Component does not provide slots                                 |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component does not trigger additional events                             | -                            |

:::tip
Component depends on the following configuration and environment:
1. Global app list `apps`, containing micro-app names, URL paths and preload configuration
2. WujieVue micro-frontend framework, providing `setupApp` and `preloadApp` core methods
3. Development environment depends on global variable `window.g.wujieURL` as URL prefix
4. Production environment uses current page's protocol and domain as URL prefix

The `preload` property in app configuration determines whether the app will be preloaded when component mounts, to improve user experience.
:::
