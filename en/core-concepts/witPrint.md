# witPrint Print Tool Component %{#witPrint}%

`witPrint` is a print tool component based on native JavaScript, supports printing DOM elements or HTML strings, provides flexible configuration options and rich features. The component uses iframe to isolate print content, avoiding affecting original page styles and structure.

## Usage Example %{#dome}%

### Print DOM Element
```javascript
import { Print } from '@/plugins/witPrint'

// Print DOM element with specified ID
Print('#print-content')

// Or print DOM element object
const printElement = document.getElementById('print-content')
Print(printElement)
```

### Print HTML String
```javascript
import { Print } from '@/plugins/witPrint'

// Print HTML string
Print(`
  <div>
    <h1>Print Title</h1>
    <p>Print content...</p>
  </div>
`)
```

### Use in Vue Component
```vue
<template>
  <div>
    <el-button @click="handlePrint" type="primary">Print Content</el-button>
    
    <div id="print-content">
      <h1>Print Title</h1>
      <p>This is the content to print...</p>
      <table>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Print } from '@/plugins/witPrint'

const handlePrint = () => {
  Print('#print-content')
}
</script>
```

## API

| Parameter            | Type            | Description                                           |
| :--------------------- | :-------------- | :--------------------------------------------- |
| `target`               | `String/HTMLElement` | DOM element selector or element object to print                   |
| `options`              | `Object`        | Print configuration options                           |
