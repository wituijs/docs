# witTitle Title Component %{#witTitle}%

`witTitle` is a component for displaying page or module titles, adopts three-part background image splicing design, supports custom background, size, font size and date formatting display, suitable for various scenarios that need beautiful title bars.

## Usage Example %{#dome}%

```vue
<template>
  <div>
    <!-- Basic usage -->
    <witTitle left="Basic Title" />
    
    <!-- Display year -->
    <witTitle left="Annual Report" dateType="year" />
    
    <!-- Display current month -->
    <witTitle left="Monthly Report" dateType="month-the" />
    
    <!-- Display last month -->
    <witTitle left="Last Month Report" dateType="month" />
    
    <!-- Custom size and font -->
    <witTitle 
      left="Custom Title"
      height="50px"
      leftFontSize="24px"
      rightFontSize="18px"
    />
    
    <!-- With tip information -->
    <witTitle 
      left="Title with Tip" 
      tip="This is a title example with tip information"
    />
    
    <!-- Custom right content -->
    <witTitle left="Title with Action Button">
      <template #right>
        <el-button type="primary" size="small">
          Action Button
        </el-button>
      </template>
    </witTitle>
  </div>
</template>

<script lang="ts" setup>
// Component requires no additional import, use directly
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `left`                 | [`String`]      | `''`                       | Left title text                                       |
| `right`                | [`String`]      | `''`                       | Right text (auto-generated date if empty)                                     |
| `dateType`             | [`String`]      | `''`                       | Date type: 'year', 'month', 'month-the'                           |
| `height`               | [`String`]      | `'40px'`                   | Component height                                       |
| `leftFontSize`         | [`String`]      | `'18px'`                   | Left text font size                                       |
| `rightFontSize`        | [`String`]      | `'14px'`                   | Right text font size                                       |
| `tip`                  | [`String`]      | `''`                       | Tip information                                       |
