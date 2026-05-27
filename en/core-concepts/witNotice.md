# witNotice Notification Component %{#witNotice}%

`witNotice` is a notification center component, displayed in the right toolbar, provides viewing and management functions for multiple types of notifications, supports pagination loading, real-time notifications and click to jump to detail pages, helping users stay informed of system messages in a timely manner.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage, will automatically display in right toolbar -->
    <witNotice />
  </div>
</template>

<script lang="ts" setup>
// Component will automatically get configuration from store and initialize
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| None                     | -               | -                          | Component does not require external properties                            |

## Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| None                     | Component does not provide slots                                 |

## Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| None                     | Component communicates with other components through event bus                  | -                            |

:::tip
Component supports the following features:
1. **Multi-type Notifications**: Supports three types of notifications: spot check review, home pharmacy, and resident pharmacist workstation
2. **Real-time Updates**: Monitors message changes through WebSocket, automatically updates notification list
3. **Pagination Loading**: Automatically loads more notifications when scrolling to bottom
4. **Unread Prompt**: Uses Badge to display unread notification count
5. **Click to Jump**: Click notification item to jump to corresponding detail page
6. **Internationalization Support**: Uses translate function to support multi-language display

Component depends on `showNotice` configuration in settingsStore to determine whether to display notification functionality.
:::

## Features

1. **Notification Category Display**: Divides notifications into different tabs for easy categorization
2. **Unread Count Display**: Shows unread notification count on notification icon
3. **Scroll Loading**: Supports loading more historical notifications when scrolling to bottom
4. **Real-time Notifications**: Receives real-time messages through WebSocket and updates notification list
5. **Detail Jump**: Click notification item to jump to related business detail page
6. **Read Mark**: Automatically marks as read after viewing notification

## Core Code Analysis

```javascript
// Load notification data
const fetchData = async (messageType: string, isCountTotal: boolean = false) => {
  loading.value = true
  let params = Object.assign({}, queryParams)
  params.messageType = messageType
  const { data } = await sysMessages(params)
  
  // Update corresponding notification list based on message type
  switch (messageType) {
    case '1':
      spotNoticesList.value = data.records
      badge.value = isCountTotal ? (badge.value += data.total) : badge.value
      break
    case '25':
      homePharmacyNoticesList.value = data.records
      badge.value = isCountTotal ? (badge.value += data.total) : badge.value
      break
  }
  loading.value = false
  queryParams.total = data.total
}

// WebSocket real-time notification listener
watch(
  () => socketStore.message,
  (newValue, oldValue) => {
    let msgObj = toRaw(newValue)
    if (msgObj?.newsType === '99999') {
      fetchDataAll()  // Reload all notifications when receiving real-time message
    }
  },
  {
    immediate: true,
    deep: true,
  }
)
```
