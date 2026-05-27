# witColorfulCard Colorful Card %{#witColorfulCard}%

`witColorfulCard` is a colorful card component based on Element Plus `ElCard`, supports custom gradient background, icon, title and shadow effects, provides beautiful visual display effects, suitable for data statistics cards, feature entries and other scenarios.

## Usage Example %{#dome}%

```vue
<template>
  <div class="card-container">
    <!-- Basic usage -->
    <witColorfulCard 
      color-from="#409EFF" 
      color-to="#67C23A"
      title="Basic Card"
    >
      <div>Card content</div>
    </witColorfulCard>
    
    <!-- Card with icon -->
    <witColorfulCard 
      color-from="#E6A23C" 
      color-to="#F56C6C"
      title="Card with Icon"
      icon="el-icon-data-line"
    >
      <div>Card content</div>
    </witColorfulCard>
    
    <!-- Custom style card -->
    <witColorfulCard 
      :style="{ background: 'linear-gradient(135deg, #909399 0%, #606266 100%)' }"
      title="Custom Style"
      shadow="hover"
    >
      <div>Card content</div>
    </witColorfulCard>
  </div>
</template>

<script lang="ts" setup>
import witColorfulCard from '@/library/components/witColorfulCard'
</script>

<style scss>
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `colorFrom`            | [`String`]      | -                          | Gradient start color                                       |
| `colorTo`              | [`String`]      | -                          | Gradient end color                                       |
| `title`                | [`String`]      | `''`                       | Card title                                       |
| `icon`                 | [`String`]      | `''`                       | Icon class name                                       |
| `shadow`               | [`String`]      | `'always'`                 | Shadow display mode: 'always', 'hover', 'never'                  |
