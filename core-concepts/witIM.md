# witIM 即时通讯组件 %{#witIM}%

`witIM`是一个集成在系统右侧工具栏的即时通讯入口组件，提供聊天功能的快捷访问，并实时显示未读消息数量。组件支持WebSocket实时消息更新和API数据获取，实现了高效的即时通讯体验。

## 用法实例 %{#dome}%

```vue
<template>
  <div class="app-container">
    <!-- 右侧工具栏中使用 -->
    <div class="right-toolbar">
      <witIM />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
</script>

<style scoped>
.right-toolbar {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| 无额外属性配置          | -               | -                          | 组件内部管理所有状态和行为                     |

## 插槽

无

## 事件

无

## 功能特性

1. **未读消息提示**：自动显示未读消息数量，提供直观的消息通知
2. **实时消息更新**：通过WebSocket接收实时消息通知，动态更新未读数量
3. **聊天窗口打开**：点击组件时，居中打开聊天应用窗口
4. **环境适配**：根据开发/生产环境自动选择不同的聊天应用域名
5. **主题样式**：集成系统主题，保持视觉一致性

## 使用提示

:::tip
- 组件依赖socketStore和userStore进行状态管理，需确保这些store已正确配置
- 未读消息数量通过`getMyUnread` API接口获取，需确保该接口可用
- 实时消息通知通过WebSocket实现，需确保socket连接正常
- 组件使用`openCenteredPopup`工具函数打开聊天窗口，默认尺寸为1080x680像素
- 聊天窗口URL会自动添加认证参数，确保用户身份验证
- 未读消息数量显示采用红色气泡样式，提高视觉辨识度
- 组件内部会在挂载时自动发送WebSocket订阅请求，无需手动操作
:::

## 核心实现

组件的核心功能实现包括：

```typescript
// 获取未读消息数量
async function getMyUnreadFun() {
  const { data } = await getMyUnread()
  num.value = Number(data)
}

// 监听WebSocket消息
watch(
  () => socketStore.message,
  (newValue) => {
    let msgObj = toRaw(newValue)
    if (msgObj?.type === 'unreadCount') {
      num.value = Number(msgObj.data)
    }
  },
  { immediate: true, deep: true }
)

// 打开聊天窗口
function handleOpen() {
  const domain = process.env.NODE_ENV === 'development' ? $bd(window.g.wujieURL) : `${window.location.protocol}//${window.location.host}`
  let newWindow = openCenteredPopup(`${domain}/wit-im/#/home/chat?source=Authorization`, 1080, 680)
}
```

## 依赖说明

- **socketStore**：管理WebSocket连接和消息
- **userStore**：获取当前用户信息
- **getMyUnread API**：获取未读消息数量
- **openCenteredPopup**：居中打开新窗口的工具函数
- **wit-icon**：用于显示IM图标