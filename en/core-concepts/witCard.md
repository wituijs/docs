# witCard Card Component %{#witCard}%

`witCard` is an enhanced card component based on Element Plus ElCard component, adds skeleton screen functionality, supports custom shadows, titles, and content layout, suitable for management system interfaces that require elegant loading state display.

## Usage Example %{#dome}%

```vue
<template>
  <div class="card-container">
    <!-- Basic card -->
    <witCard title="Basic Card">
      <div>This is the card content</div>
    </witCard>
    
    <!-- Card with shadow -->
    <witCard title="Card with Shadow" shadow="hover">
      <div>Shadow appears on mouse hover</div>
    </witCard>
    
    <!-- Card with skeleton screen -->
    <witCard title="Card with Skeleton Screen" skeleton skeleton-rows="3">
      <div v-if="!loading">
        <p>Content displayed after skeleton screen loading completes</p>
        <p>Can contain multiple lines of text or other elements</p>
        <p>Skeleton screen will automatically hide after 500 milliseconds</p>
      </div>
    </witCard>
    
    <!-- Card with header and footer slots -->
    <witCard>
      <template #header>
        <div class="card-header">
          <span>Custom Header</span>
          <el-button size="small" type="primary">Action Button</el-button>
        </div>
      </template>
      <div>Card content area</div>
      <template #footer>
        <div class="card-footer">
          <el-button size="small">Cancel</el-button>
          <el-button size="small" type="primary">Confirm</el-button>
        </div>
      </template>
    </witCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)

// Simulate data loading
setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
}
</style>
```

## API

### Component

| Component Name                  | Description                                |
| :------------------------------ | :---------------------------------- |
| `witCard`                       | Enhanced card component, supports skeleton screen functionality      |

### Properties

| Property Name                   | Type            | Default Value       | Description                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `shadow`                        | `String`        | `'never'`    | Card shadow effect, optional values: `'always'`, `'hover'`, `'never'` |
| `skeleton`                      | `Boolean`       | `false`      | Whether to show skeleton screen                      |
| `skeletonRows`                  | `Number`        | `5`          | Number of skeleton screen rows (actual display count will be 1 more than passed value) |
| `title`                         | `String`        | `''`         | Card title                            |
| `bodyStyle`                     | `Object`        | -            | Card content area style                    |
| `bodyClass`                     | `String`/`Array`/`Object` | -        | Card content area class name                    |

### Methods

| Method Name                     | Description                                | Parameter Type                          |
| :------------------------------ | :---------------------------------- | :-------------------------------- |
| -                               | -               | -            | This component does not require method calls                  |

### Events

| Event Name                      | Description                                | Parameters                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| -                               | -               | -            | This component does not trigger custom events            |

## Features

### Skeleton Screen Loading
- Supports displaying skeleton screen loading state
- Configurable skeleton screen row count
- Automatically hides skeleton screen after 500 milliseconds
- Skeleton screen supports animation effects

### Shadow Effects
- Provides three shadow modes: always show, show on mouse hover, never show
- Default no shadow, maintains clean style
- Flexible configuration based on needs

### Slot Support
- Supports custom header slot (#header)
- Supports custom content slot (default slot)
- Supports custom footer slot (#footer)
- Slot content is fully customizable, meeting various layout needs

### Style Customization
- Supports setting content area style
- Supports setting content area class name
- Inherits all style features of Element Plus card component
- Icons use gradient color effects, enhancing visual experience

:::tip
1. Skeleton screen functionality automatically hides after 500 milliseconds by default, time can be adjusted based on actual needs.
2. The number of skeleton screen rows displayed will be 1 more than the `skeletonRows` value passed.
3. When using custom header slot, the `title` property will be ignored.
4. You can customize card content area style through `bodyStyle` and `bodyClass`.
5. The component inherits all properties of Element Plus ElCard, refer to Element Plus documentation for more features.
:::
