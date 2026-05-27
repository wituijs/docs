# witColorPicker Color Picker %{#witColorPicker}%

`witColorPicker` is a color picker component that provides preset color options for users to quickly select colors, suitable for theme configuration, style customization and other scenarios.

## Usage Example %{#dome}%

```vue
<template>
  <div class="color-picker-container">
    <!-- Basic usage -->
    <witColorPicker 
      v-model="selectedColor"
      @change="handleColorChange"
    />
    
    <!-- Custom size -->
    <witColorPicker 
      v-model="selectedColor"
      :size="'large'"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import witColorPicker from '@/library/components/witColorPicker'

const selectedColor = ref('#16baa9')

const handleColorChange = (color: string) => {
  console.log('Selected color:', color)
}
</script>

<style scss>
.color-picker-container {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witColorPicker`                | Color picker component, provides preset color options    |
