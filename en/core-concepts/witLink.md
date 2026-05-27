# witLink Smart Link %{#witLink}%

`witLink` is a smart link component that automatically identifies internal route links and external links, and renders different component forms based on link type. Internal links use `router-link`, external links use native `a` tag, and automatically adds appropriate security attributes.

## Usage Example %{#demo}%

```vue
<template>
  <div>
    <!-- Internal route link -->
    <witLink to="/home">
      Home
    </witLink>
    
    <!-- External link -->
    <witLink to="https://www.example.com">
      External Website
    </witLink>
    
    <!-- Internal link with target attribute -->
    <witLink to="/about" target="_blank">
      About Us (Open in new window)
    </witLink>
    
    <!-- Link with icon and text -->
    <witLink to="/docs">
      <el-icon><Document /></el-icon>
      <span>Documentation Center</span>
    </witLink>
  </div>
</template>

<script lang="ts" setup>
import { Document } from '@element-plus/icons-vue'
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `to`                   | [`String`]      | -                          | Link address, required field                               |
| `target`               | [`String`]      | `''`                       | Link open method, only valid for internal links                 |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| `default`              | Link display content                                   |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `...router-link.events`| Internal links inherit all events from `router-link`           | -                            |
| `...a.events`          | External links inherit all events from native `a` tag             | -                            |

:::tip
- Component automatically identifies if link is external (by checking if link starts with http://, https://, mailto: etc.)
- External links automatically add `target="_blank"` and `rel="noopener"` attributes for improved security
:::
