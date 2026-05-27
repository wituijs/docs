# witBsTabs Dashboard Tabs Component %{#witBsTabs}%

`witBsTabs` is a tabs component for dashboard report display, supports manual switching and auto-carousel functionality, has modern visual design and smooth interaction experience.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witBsTabs v-model="activeTab" :pane="tabList" />
    
    <!-- Custom font size -->
    <witBsTabs v-model="activeTab" :pane="tabList" fontSize="16px" />
    
    <!-- Disable auto-carousel -->
    <witBsTabs v-model="activeTab" :pane="tabList" :isSetInterval="false" @change="handleTabChange" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeTab = ref(0)
const tabList = ref(['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'])

const handleTabChange = () => {
  console.log('Tab switched', activeTab.value)
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Number`]      | `0`                        | Currently active tab index, supports v-model two-way binding   |
| `pane`                 | [`Array<String>`] | `[]`                     | Tab content array                                 |
| `fontSize`             | [`String`]      | `'14px'`                   | Tab text size                                 |
| `isSetInterval`        | [`Boolean`]     | `true`                     | Whether to enable auto-carousel functionality                           |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| `update:modelValue`    | Triggered when tab switches, updates v-model binding value           | New tab index (Number)     |
| `change`               | Triggered when tab switches                               | -                            |

## Features

1. **Auto-carousel**: Supports automatic tab switching at intervals
2. **Manual Switching**: Click tabs to switch manually
3. **Modern Design**: Gradient background and smooth animations
