# witBsHeaderOne Report Header %{#witBsHeaderOne}%

`witBsHeaderOne` is a report header component that integrates title display, time display and fullscreen toggle functionality, adopts gradient text effects and custom background images, suitable for top display of various data report pages.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witBsHeaderOne title="Sales Report" />
    
    <!-- Custom style -->
    <witBsHeaderOne 
      title="Inventory Analysis"
      fontSize="40px"
      height="70px"
      timeRight="40px"
      timeTop="40px"
    />
    
    <!-- Listen menu click event -->
    <witBsHeaderOne 
      title="User Profile"
      @tabClick="handleTabClick"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const handleTabClick = (index: number) => {
  console.log('Tab clicked:', index)
  // Handle tab click event
}
</script>
```

## API

### Properties

| Property Name   | Type     | Default Value  | Description                     |
| :----- | :--- | :----- | :--- |
| `title` | `String` | `'xxx'` | Report title text |
| `centerImg` | `String` | `tbzhong1.png` | Center background image path |
| `fontSize` | `String` | `'48px'` | Title font size |
| `height` | `String` | `'80px'` | Header component height |
| `timeRight` | `String` | `'56px'` | Time display distance from right |
| `timeTop` | `String` | `'56px'` | Time display distance from top |

### Events

| Event Name   | Description       | Parameters       |
| :----- | :--- | :--- |
| `tabClick` | Triggered when tab is clicked | Tab index |
