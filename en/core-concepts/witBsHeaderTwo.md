# witBsHeaderTwo Report Header %{#witBsHeaderTwo}%

`witBsHeaderTwo` is a report header component that integrates title display, subtitle menu, time display and fullscreen toggle functionality, adopts gradient text effects and custom background images, suitable for complex data report pages that need multi-tab switching.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witBsHeaderTwo title="Comprehensive Analysis Report" />
    
    <!-- Show subtitle menu -->
    <witBsHeaderTwo 
      title="Drug Usage Analysis"
      :hasSubtitle="true"
    />
    
    <!-- Listen menu click event -->
    <witBsHeaderTwo 
      title="Data Monitoring"
      :hasSubtitle="true"
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
| `title` | `String` | `'xxx'` | Report main title text |
| `hasSubtitle` | `Boolean` | `true` | Whether to show subtitle menu |

### Events

| Event Name   | Description       | Parameters       |
| :----- | :--- | :--- |
| `tabClick` | Triggered when tab is clicked | Tab index |
