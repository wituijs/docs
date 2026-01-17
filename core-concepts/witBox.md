# witBox 装饰性容器组件 %{#witBox}%

`witBox`是一个具有特殊装饰效果的容器组件，用于包裹内容并提供视觉上的边框装饰。组件采用蓝色边框装饰设计，在容器的四个角有明显的视觉强调，适用于需要突出显示的内容区域。

## 用法实例 %{#dome}%

### 基础用法
```vue
<template>
  <witBox>
    <div style="padding: 20px;">
      <h3>这是一个装饰性容器</h3>
      <p>容器内部可以放置任何内容，如文本、图片、表单等</p>
    </div>
  </witBox>
</template>
```

### 自定义尺寸
```vue
<template>
  <div style="display: flex; gap: 20px;">
    <witBox width="300px" height="200px">
      <div style="padding: 20px;">
        <h4>固定宽度容器</h4>
        <p>宽度300px，高度200px</p>
      </div>
    </witBox>
    
    <witBox width="50%" height="100%">
      <div style="padding: 20px; height: 100%; display: flex; flex-direction: column; justify-content: center;">
        <h4>百分比宽度容器</h4>
        <p>宽度50%，高度100%</p>
      </div>
    </witBox>
  </div>
</template>
```

### 嵌套使用
```vue
<template>
  <witBox width="600px" height="400px">
    <div style="padding: 20px; height: 100%; display: flex; flex-direction: column; gap: 20px;">
      <h3>嵌套容器示例</h3>
      
      <div style="display: flex; gap: 20px; flex: 1;">
        <witBox style="flex: 1;">
          <div style="padding: 15px; height: 100%;">
            <h4>左侧子容器</h4>
            <p>这是左侧子容器的内容</p>
          </div>
        </witBox>
        
        <witBox style="flex: 1;">
          <div style="padding: 15px; height: 100%;">
            <h4>右侧子容器</h4>
            <p>这是右侧子容器的内容</p>
          </div>
        </witBox>
      </div>
    </div>
  </witBox>
</template>
```

## API

| 属性名 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `width` | [`String`] | `'100%'` | 容器宽度，支持像素值和百分比 |
| `height` | [`String`] | `'100%'` | 容器高度，支持像素值和百分比 |

## 插槽

| 插槽名 | 描述 |
| :------ | :------ |
| `default` | 容器的主要内容区域，可以放置任何HTML或Vue组件 |

## 功能特性

### 1. 装饰性边框设计
组件采用特殊的边框装饰设计，在容器的四个角有蓝色边框强调，增强视觉层次感。

### 2. 灵活的尺寸配置
支持通过`width`和`height`属性自定义容器尺寸，可使用像素值或百分比，适应不同的布局需求。

### 3. 内容自适应
容器内部的内容区域会自动适应容器尺寸，通过padding属性提供适当的内边距。

### 4. 嵌套支持
组件可以嵌套使用，创建复杂的布局结构，内层容器会继承外层容器的设计风格。

## 实现原理

### 1. 结构设计
组件采用三层嵌套结构：
- 最外层容器(.witBox)：设置整体尺寸和背景色
- 中间层(.witBox-padding)：提供内边距并设置上下边框
- 底部装饰层(.witBox-footer)：实现底部左右角的边框装饰

### 2. 边框装饰实现
使用CSS伪元素(::before和::after)实现四个角的边框装饰：
- 顶部左右角：通过.witBox的::before和::after实现
- 底部左右角：通过.witBox-footer的::before和::after实现

### 3. 样式隔离
使用Vue的scoped属性确保组件样式不会影响其他元素，同时使用CSS变量(var(--el-padding))保持与Element Plus设计系统的一致性。

## 样式结构

```scss
.witBox {
  position: relative;
  overflow: hidden;
  background: rgba(31, 205, 255, 0.1);
  .witBox-padding {
    height: 100%;
    padding: var(--el-padding);
    border-top: rgba(31, 205, 255, 0.2) 1px solid;
    border-bottom: rgba(31, 205, 255, 0.2) 1px solid;
  }
}
.witBox::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 11px;
  content: '';
  border-top: 3px solid #1fcdff;
}
.witBox::after {
  position: absolute;
  top: 0;
  right: 0;
  width: 11px;
  content: '';
  border-top: 3px solid #1fcdff;
}
.witBox .witBox-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.witBox .witBox-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 11px;
  content: '';
  border-bottom: 3px solid #1fcdff;
}
.witBox .witBox-footer::after {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 11px;
  content: '';
  border-bottom: 3px solid #1fcdff;
}
```

## 提示信息

:::tip
1. 组件默认宽度和高度均为100%，会自动填充父容器的尺寸。
2. 可以通过直接设置style属性覆盖默认尺寸，例如: `<witBox style="width: 500px;">`
3. 容器内部内容的布局由用户自行控制，建议使用适当的padding或margin来调整内容与边框的距离。
4. 组件使用了Element Plus的CSS变量(var(--el-padding))，如果项目中未使用Element Plus，可能需要手动调整padding值。
5. 容器背景色为半透明的蓝色(rgba(31, 205, 255, 0.1))，可以根据需要通过style属性自定义背景色。
:::