# witImageViewer Image Viewer %{#witImageViewer}%

`witImageViewer` is a powerful image viewer component based on Element Plus icon library, supports image zoom, rotate, move, switch and other operations, suitable for scenarios that need to view and manipulate images.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <witImageViewer
      :url-list="imageList"
      :width="'800px'"
      :height="'600px'"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Image list data
const imageList = ref([
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg'
])
</script>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witImageViewer`                | Image viewer main component                    |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `urlList`                       | `Array`         | `[]`         | Image URL list                         |
| `width`                         | `String`        | `'100%'`     | Viewer width                          |
| `height`                        | `String`        | `'100%'`     | Viewer height                          |

### Features

### Image Operations
- Supports mouse wheel zoom
- Supports click button to zoom in/out
