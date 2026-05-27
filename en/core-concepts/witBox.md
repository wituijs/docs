# witBox Decorative Container Component %{#witBox}%

`witBox` is a container component with special decorative effects, used to wrap content and provide visual border decoration. The component adopts blue border decoration design, with obvious visual emphasis on the four corners of the container, suitable for content areas that need to be highlighted.

## Usage Example %{#dome}%

### Basic Usage
```vue
<template>
  <witBox>
    <div style="padding: 20px;">
      <h3>This is a decorative container</h3>
      <p>Any content can be placed inside the container, such as text, images, forms, etc.</p>
    </div>
  </witBox>
</template>
```

### Custom Size
```vue
<template>
  <div style="display: flex; gap: 20px;">
    <witBox width="300px" height="200px">
      <div style="padding: 20px;">
        <h4>Fixed Width Container</h4>
        <p>Width 300px, Height 200px</p>
      </div>
    </witBox>
    
    <witBox width="50%" height="100%">
      <div style="padding: 20px; height: 100%; display: flex; flex-direction: column; justify-content: center;">
        <h4>Percentage Width Container</h4>
        <p>Width 50%, Height 100%</p>
      </div>
    </witBox>
  </div>
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `width`                | [`String`]      | `'100%'`                   | Container width                                       |
| `height`               | [`String`]      | `'100%'`                   | Container height                                       |
