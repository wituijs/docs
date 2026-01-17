# witBsHeaderOne 报表头部 %{#witBsHeaderOne}%

`witBsHeaderOne`是一个集成标题显示、时间显示和全屏切换功能的报表头部组件，采用渐变文字效果和自定义背景图片，适用于各种数据报表页面的顶部展示。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <witBsHeaderOne title="销售报表" />
    
    <!-- 自定义样式 -->
    <witBsHeaderOne 
      title="库存分析"
      fontSize="40px"
      height="70px"
      timeRight="40px"
      timeTop="40px"
    />
    
    <!-- 监听菜单点击事件 -->
    <witBsHeaderOne 
      title="用户画像"
      @tabClick="handleTabClick"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const handleTabClick = (index: number) => {
  console.log('Tab clicked:', index)
  // 处理标签点击事件
}
</script>
```

## API

### 属性

| 属性名 | 类型 | 默认值 | 描述 |
| :----- | :--- | :----- | :--- |
| `title` | `String` | `'xxx'` | 报表标题文本 |
| `centerImg` | `String` | `tbzhong1.png` | 中心背景图片路径 |
| `fontSize` | `String` | `'48px'` | 标题字体大小 |
| `height` | `String` | `'80px'` | 头部组件高度 |
| `timeRight` | `String` | `'56px'` | 时间显示距离右侧的距离 |
| `timeTop` | `String` | `'56px'` | 时间显示距离顶部的距离 |
| `fullScreenRight` | `String` | `'10px'` | 全屏按钮距离右侧的距离 |
| `fullScreenTop` | `String` | `'50px'` | 全屏按钮距离顶部的距离 |
| `leftFontSize` | `String` | `'32px'` | 时间组件左侧字体大小 |
| `rightTopFontSize` | `String` | `'14px'` | 时间组件右上角字体大小 |
| `rightBottomFontSize` | `String` | `'16px'` | 时间组件右下角字体大小 |

### 事件

| 事件名 | 描述 | 参数 |
| :----- | :--- | :--- |
| `tabClick` | 点击标题区域时触发 | 点击的标签索引（Number） |

## 功能特性

- **标题显示**：支持自定义标题文本和字体大小，采用渐变文字效果增强视觉吸引力
- **时间显示**：集成 `witTime` 组件，实时显示当前时间
- **全屏切换**：集成 `witBsFullScreen` 组件，支持页面全屏功能
- **灵活布局**：可自定义各元素的位置和尺寸，适应不同的设计需求
- **响应式设计**：适配不同屏幕尺寸的显示需求

## 实现原理

1. **布局结构**：采用相对定位的容器包裹标题、时间和全屏按钮三个主要元素
2. **视觉效果**：标题使用渐变文字效果，通过 `background-clip: text` 实现
3. **组件集成**：引入并使用 `witTime` 和 `witBsFullScreen` 子组件实现时间显示和全屏功能
4. **状态管理**：使用 `ref` 管理当前激活的标签索引
5. **生命周期管理**：在组件挂载后设置定时器，定期更新激活的标签索引

:::tip
1. 组件默认使用内置的背景图片 `tbzhong1.png`，可通过 `centerImg` 属性自定义
2. 标题文字使用了渐变效果，确保在不同背景下都有良好的可读性
3. 时间显示和全屏按钮的位置可以通过相应的属性进行调整
4. 组件会自动每隔30分钟更新激活的标签索引，可根据需求修改定时器间隔
5. 点击标题区域会触发 `tabClick` 事件，可用于实现标签切换等功能
:::