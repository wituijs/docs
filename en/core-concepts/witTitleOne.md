# witTitleOne Title Number Component %{#witTitleOne}%

`witTitleOne` is a component for displaying titles with icons and key numbers, adopts left icon title, right number unit layout design, supports custom images, height, title, subtitle, number and unit, suitable for various scenarios that need to highlight key indicators.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witTitleOne 
      title="Outpatient Volume"
      num="12,000"
    />
    
    <!-- With subtitle -->
    <witTitleOne 
      title="Outpatient Volume"
      subtitle="This Month Statistics"
      num="12,000"
    />
    
    <!-- Custom unit -->
    <witTitleOne 
      title="Sales"
      num="500,000"
      unit="yuan"
    />
    
    <!-- Custom height -->
    <witTitleOne 
      title="Visits"
      height="70px"
      num="8,500"
    />
    
    <!-- Using number type -->
    <witTitleOne 
      title="Appointments"
      num="3456"
    />
    
    <!-- Custom image -->
    <witTitleOne 
      title="Inpatients"
      imgUrl="/path/to/your/image.png"
      num="230"
    />
  </div>
</template>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `title`                | [`String`]      | `''`                       | Main title                                       |
| `subtitle`             | [`String`]      | `''`                       | Subtitle                                       |
| `num`                  | [`String, Number`] | `''`                    | Display number                                       |
| `unit`                 | [`String`]      | `''`                       | Number unit                                       |
| `height`               | [`String`]      | `'60px'`                   | Component height                                       |
| `imgUrl`               | [`String`]      | Built-in image             | Icon image path                                       |
