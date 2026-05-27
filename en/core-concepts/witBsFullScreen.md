# witBsFullScreen Fullscreen Toggle Component %{#witBsFullScreen}%

`witBsFullScreen` is a simple fullscreen toggle component that provides fullscreen and exit fullscreen functionality, visually displays current state through icons. The component internally uses fullscreen related hooks, implements browser fullscreen API encapsulation.

## Usage Example %{#dome}%

### Basic Usage
```vue
<template>
  <div>
    <witBsFullScreen />
  </div>
</template>
```

### Custom Container
```vue
<template>
  <div class="custom-container">
    <h2>Sample Content</h2>
    <p>This is a page with fullscreen toggle functionality</p>
    <div class="fullscreen-button">
      <witBsFullScreen />
    </div>
  </div>
</template>

<style scoped>
.custom-container {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.fullscreen-button {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
```

## API

This component does not provide custom properties, simple and intuitive to use.

## Features

1. **Fullscreen Toggle**: Click to switch between fullscreen and normal mode
2. **Status Display**: Shows different icons based on current fullscreen state
3. **Simple Integration**: No configuration needed, ready to use
