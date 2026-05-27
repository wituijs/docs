# witDataCardFour Data Card (Version 4) %{#witDataCardFour}%

`witDataCardFour` is a data card component for displaying key data indicators, supports combination display of images, values and titles, has unique visual design and gradient text effects. The component adopts fixed size design, suitable for dashboard data display scenarios.

## Usage Example %{#dome}%

### Basic Usage

```vue
<template>
  <div>
    <witDataCardFour
      title="Interception Rate"
      :rate="89.5"
    />
  </div>
</template>

<script lang="ts" setup>
// No need to import default image, component has built-in
</script>
```

### Custom Image

```vue
<template>
  <div>
    <witDataCardFour
      title="Pass Rate"
      :rate="76.2"
      pic="/@/assets/custom-image.png"
    />
  </div>
</template>

<script lang="ts" setup>
// Import custom image
import customImage from '/@/assets/custom-image.png'
</script>
```

### HTML Title

```vue
<template>
  <div>
    <witDataCardFour
      title="<span style='color: #ff0000'>Error Rate</span>"
      :rate="5.8"
    />
  </div>
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `title`                | [`String`]      | `'Title'`                  | Card title, supports HTML format                         |
| `rate`                 | [`String, Number`] | `0`                    | Display value                                     |
| `pic`                  | [`String`]      | Built-in image             | Image path                                       |
