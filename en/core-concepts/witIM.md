# witIM Instant Messaging Component %{#witIM}%

`witIM` is an instant messaging entry component integrated in the system right toolbar, provides quick access to chat functionality, and displays unread message count in real-time. The component supports WebSocket real-time message updates and API data fetching, implements efficient instant messaging experience.

## Usage Example %{#dome}%

```vue
<template>
  <div class="app-container">
    <!-- Use in right toolbar -->
    <div class="right-toolbar">
      <witIM />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.right-toolbar {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| No additional properties          | -               | -                          | Component manages all states and behaviors internally                     |

## Slots

None

## Events

None

## Features

1. **Unread Message Notification**: Automatically displays unread message count, provides intuitive message notification
