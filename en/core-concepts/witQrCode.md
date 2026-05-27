# witQrCode QR Code Generator %{#witQrCode}%

`witQrCode` is a QR code generation component based on `vue-qr`, provides a simple and easy-to-use API to generate various styles of QR codes. The component supports custom QR code content, size, color, margin and other properties, suitable for scenarios where QR codes need to be displayed on pages.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witQrCode value="https://www.example.com" />
    
    <!-- Custom size and color -->
    <witQrCode 
      value="https://www.example.com" 
      :size="200"
      color="#000000"
      background="#ffffff"
    />
    
    <!-- QR code with logo -->
    <witQrCode 
      value="https://www.example.com" 
      :size="200"
      logoSrc="/path/to/logo.png"
      :logoScale="0.2"
    />
  </div>
</template>

<script lang="ts" setup>
import witQrCode from '@/plugins/witQrCode'
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witQrCode`                     | QR code generator main component                  |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `value`                         | `String`        | `''`         | QR code content (URL, text, etc.)           |
| `size`                          | `Number`        | `150`        | QR code size (width and height are the same)              |
| `level`                         | `String`        | `'M'`        | Error correction level (L, M, Q, H)              |
| `background`                    | `String`        | `'#ffffff'`  | Background color                              |
| `color`                         | `String`        | `'#000000'`  | Foreground color                              |
| `margin`                        | `Number`        | `10`         | Margin                                |
| `logoSrc`                       | `String`        | `''`         | Logo image address                       |
| `logoScale`                     | `Number`        | `0.2`        | Logo scale ratio                       |
| `logoMargin`                    | `Number`        | `0`          | Logo margin                           |
| `logoBackgroundColor`           | `String`        | `'#ffffff'`  | Logo background color                         |
| `logoCornerRadius`              | `Number`        | `0`          | Logo corner radius                       |
| `whiteMargin`                   | `Boolean`       | `true`       | Whether to show white margin                    |
| `dotScale`                      | `Number`        | `1`          | Dot scale ratio                        |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| `getQrDataURL`                  | Get QR code Data URL               | -                                 |

## Features

### Content Support
- Supports text content
- Supports URL links
- Supports arbitrary string data

### Style Customization
- Custom QR code size
- Custom foreground and background colors
- Custom margin size
- Supports different error correction levels
