# witLanguage 语言切换组件 %{#witLanguage}%

`witLanguage`是一个用于系统语言切换的组件，基于Element Plus的Dropdown组件实现，支持中英文两种语言的快速切换，自动更新系统语言设置和页面标题，确保全局语言一致性。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="app-container">
    <!-- 在页面头部使用语言切换组件 -->
    <div class="header-actions">
      <witLanguage />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.header-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| 无额外属性配置          | -               | -                          | 组件内部管理所有状态和行为                     |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| 无                     | 组件不提供插槽功能                             |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| 无                     | 组件不触发外部事件                             | -                            |

## 功能特性

1. **语言切换**：支持中文简体(zh)和English(en)两种语言的快速切换
2. **状态管理**：通过settingsStore管理语言设置，确保全局一致性
3. **标题更新**：切换语言后自动更新页面标题为对应语言
4. **自动刷新**：在登录/注册页面切换语言时自动刷新页面，确保语言设置完全生效
5. **图标显示**：使用翻译图标(ri-translate-2)直观表示语言切换功能
6. **主题集成**：支持系统主题样式，保持视觉一致性

## 使用提示

:::tip
- 组件依赖settingsStore的`changeLanguage`方法来更新全局语言设置
- 语言切换会自动更新Vue I18n的locale值，实现界面文本的实时切换
- 页面标题通过`getPageTitle`工具函数获取，需确保该函数已正确配置
- 当前组件仅支持中文简体(zh)和English(en)两种语言选项
- 组件基于Element Plus的Dropdown组件实现，可通过全局样式自定义其外观
- 在登录和注册页面切换语言时，组件会自动刷新页面以确保语言设置完全生效
:::

## 核心实现

组件的核心功能实现包括：

```typescript
// 处理语言切换命令
const handleCommand = (language: string) => {
  changeLanguage(language)  // 更新settingsStore中的语言设置
  locale.value = language   // 更新Vue I18n的locale值
  document.title = getPageTitle(route.meta.title)  // 更新页面标题
  
  // 在登录/注册页面切换语言时自动刷新
  if (route.path === '/login' || route.path === '/register') location.reload()
}
```

## 依赖说明

- **settingsStore**：用于管理全局语言设置和状态
- **Vue I18n**：提供国际化支持，管理应用的语言环境
- **useRoute**：用于获取当前路由信息，判断是否需要刷新页面
- **getPageTitle**：用于生成不同语言的页面标题
- **Element Plus Dropdown**：提供下拉菜单功能
- **wit-icon**：用于显示翻译图标