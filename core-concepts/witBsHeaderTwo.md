# witBsHeaderTwo 报表头部 %{#witBsHeaderTwo}%

`witBsHeaderTwo`是一个集成标题显示、副标题菜单、时间显示和全屏切换功能的报表头部组件，采用渐变文字效果和自定义背景图片，适用于需要多标签切换的复杂数据报表页面。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <witBsHeaderTwo title="综合分析报表" />
    
    <!-- 显示副标题菜单 -->
    <witBsHeaderTwo 
      title="药品使用分析"
      :hasSubtitle="true"
    />
    
    <!-- 监听菜单点击事件 -->
    <witBsHeaderTwo 
      title="数据监控"
      :hasSubtitle="true"
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
| `title` | `String` | `'xxx'` | 报表主标题文本 |
| `hasSubtitle` | `Boolean` | `true` | 是否显示副标题菜单 |

### 事件

| 事件名 | 描述 | 参数 |
| :----- | :--- | :--- |
| `tabClick` | 点击标题或菜单时触发 | 点击的标签索引（Number） |

## 功能特性

- **主标题显示**：支持自定义主标题文本，采用渐变文字效果增强视觉吸引力
- **副标题菜单**：可选择是否显示副标题菜单，支持多标签切换功能
- **时间显示**：集成 `witTime` 组件，实时显示当前时间
- **全屏切换**：集成 `witBsFullScreen` 组件，支持页面全屏功能
- **交互反馈**：菜单选中状态有明显的视觉反馈，提升用户体验
- **灵活配置**：可根据需求显示或隐藏副标题菜单

## 实现原理

1. **布局结构**：采用相对定位的容器包裹标题、菜单、时间和全屏按钮等元素
2. **视觉效果**：标题使用渐变文字效果，通过 `background-clip: text` 实现
3. **组件集成**：引入并使用 `witTime` 和 `witBsFullScreen` 子组件实现时间显示和全屏功能
4. **状态管理**：使用 `ref` 管理当前激活的标签索引
5. **条件渲染**：根据 `hasSubtitle` 属性条件性显示副标题菜单
6. **生命周期管理**：在组件挂载后设置定时器，可用于定期更新数据或状态

:::tip
1. 组件使用内置的背景图片和菜单图标，确保视觉风格统一
2. 菜单选中状态会切换不同的背景图片，提供清晰的视觉反馈
3. 可通过 `hasSubtitle` 属性控制是否显示副标题菜单
4. 点击标题或菜单项都会触发 `tabClick` 事件，可用于实现页面内容切换
5. 组件默认包含时间显示和全屏切换功能，无需额外配置
:::