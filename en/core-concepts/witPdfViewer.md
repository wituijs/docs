# witPdfViewer PDF Viewer %{#witPdfViewer}%

`witPdfViewer` is a PDF document viewer component based on `vue-pdf-embed`, provides complete PDF document browsing functionality, including page navigation, zoom, print and download operations. The component adopts modern UI design, supports loading state display and custom styles, suitable for various scenarios that need to view PDF documents online.

## Usage Example %{#dome}%

```vue
<template>
  <div style="height: 600px; width: 100%;">
    <witPdfViewer
      :pdf-url="pdfUrl"
      :pdf-name="pdfName"
      :border="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const pdfUrl = ref('https://example.com/sample.pdf')
const pdfName = ref('Sample Document.pdf')
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witPdfViewer`                  | PDF viewer main component                    |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `pdfUrl`                        | `String`        | `''`         | PDF document URL address                 |
| `pdfName`                       | `String`        | `''`         | PDF document filename (for download)        |
| `border`                        | `Boolean`       | `false`      | Whether to show border                        |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| `pageZoomOut`                   | Zoom in PDF document                       | -                                 |
| `pageZoomIn`                    | Zoom out PDF document                       | -                                 |
| `prevPage`                      | Jump to previous page or first page                | `isFirst: Boolean`                |
| `nextPage`                      | Jump to next page or last page              | `isEnd: Boolean`                  |
| `handlePrint`                   | Print PDF document                       | -                                 |
