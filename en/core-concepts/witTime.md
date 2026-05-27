# witTime Time Display Component %{#witTime}%

`witTime` is a component for displaying current time, date and week, adopts flexible layout design, supports custom font sizes and styles, suitable for various scenarios that need to display time information.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witTime />
    
    <!-- Custom font sizes -->
    <witTime 
      leftFontSize="36px"
      rightTopFontSize="14px"
      rightBottomFontSize="12px"
    />
    
    <!-- Compact layout -->
    <witTime 
      leftFontSize="24px"
      rightTopFontSize="12px"
      rightBottomFontSize="10px"
    />
  </div>
</template>

<script lang="ts" setup>
// Component requires no additional import, use directly
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `leftFontSize`         | [`String`]      | -                          | Font size for left time text                         |
| `rightTopFontSize`     | [`String`]      | -                          | Font size for right top week text                     |
| `rightBottomFontSize`  | [`String`]      | -                          | Font size for right bottom date text                     |

## Features

- **Real-time Display**: Automatically updates current time every second, ensures time accuracy
- **Complete Time Information**: Displays time (HH:mm:ss), week and date (YYYY.MM.DD) simultaneously
- **Flexible Font Control**: Supports setting font sizes for left time and right date/week separately
- **Clean Layout**: Large font on left for time, small font on right for date and week, clear visual hierarchy
- **Built-in Clock Icon**: Right area includes clock icon, enhances visual recognition
