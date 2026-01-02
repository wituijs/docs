# witQrCode 二维码生成器 %{#witQrCode}%

`witQrCode` 是一个基于 `vue-qr` 封装的二维码生成组件，提供了简单易用的 API 来生成各种样式的二维码。该组件支持自定义二维码内容、尺寸、颜色、边距等属性，适用于需要在页面中展示二维码的场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基本用法 -->
    <witQrCode value="https://www.example.com" />
    
    <!-- 自定义尺寸和颜色 -->
    <witQrCode 
      value="https://www.example.com" 
      :size="200"
      color="#000000"
      background="#ffffff"
    />
    
    <!-- 带 logo 的二维码 -->
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

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witQrCode`                     | 二维码生成器主组件                  |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `value`                         | `String`        | `''`         | 二维码内容（URL、文本等）           |
| `size`                          | `Number`        | `150`        | 二维码尺寸（宽高相同）              |
| `level`                         | `String`        | `'M'`        | 容错级别（L、M、Q、H）              |
| `background`                    | `String`        | `'#ffffff'`  | 背景色                              |
| `color`                         | `String`        | `'#000000'`  | 前景色                              |
| `margin`                        | `Number`        | `10`         | 边距                                |
| `logoSrc`                       | `String`        | `''`         | Logo 图片地址                       |
| `logoScale`                     | `Number`        | `0.2`        | Logo 缩放比例                       |
| `logoMargin`                    | `Number`        | `0`          | Logo 边距                           |
| `logoBackgroundColor`           | `String`        | `'#ffffff'`  | Logo 背景色                         |
| `logoCornerRadius`              | `Number`        | `0`          | Logo 圆角半径                       |
| `whiteMargin`                   | `Boolean`       | `true`       | 是否显示白色边距                    |
| `dotScale`                      | `Number`        | `1`          | 点的缩放比例                        |

### 方法

| 方法名                          | 描述                                | 参数类型                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| `getQrDataURL`                  | 获取二维码的 Data URL               | -                                 |

## 功能特性

### 内容支持
- 支持文本内容
- 支持 URL 链接
- 支持任意字符串数据

### 样式自定义
- 自定义二维码尺寸
- 自定义前景色和背景色
- 自定义边距大小
- 支持不同容错级别

### Logo 支持
- 支持添加 Logo 图片
- 自定义 Logo 大小和位置
- 自定义 Logo 边距和背景色
- 自定义 Logo 圆角

### 数据获取
- 支持获取二维码的 Data URL
- 可用于保存或分享二维码

:::tip
1. 组件是对 `vue-qr` 的封装，所有 `vue-qr` 支持的属性都可以直接使用。
2. 容错级别越高，二维码中纠错码的比例越大，二维码越密集，但同时也越容易被正确扫描。
3. Logo 图片大小不宜过大，建议缩放比例在 0.1-0.3 之间，否则可能影响二维码的扫描识别。
4. 建议使用高对比度的颜色组合，如黑色前景色和白色背景色，以提高二维码的扫描成功率。
5. 如需保存二维码，可以通过 `getQrDataURL` 方法获取 Data URL，然后创建图片下载链接。
:::