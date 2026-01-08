# witNotice 通知组件 %{#witNotice}%

`witNotice`是一个通知中心组件，显示在右侧工具栏，提供多种类型通知的查看和管理功能，支持分页加载、实时通知和点击跳转详情页，帮助用户及时了解系统消息。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基本用法，会自动显示在右侧工具栏 -->
    <witNotice />
  </div>
</template>

<script lang="ts" setup>
// 组件会自动从store中获取配置并初始化
</script>
```

## API

| 属性名                 | 类型            | 默认值                     | 描述                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| 无                     | -               | -                          | 组件无需外部传入属性                            |

## 插槽

| 插槽名                 | 描述                                           |
| :--------------------- | :--------------------------------------------- |
| 无                     | 组件不提供插槽                                 |

## 事件

| 事件名                 | 描述                                           | 参数                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| 无                     | 组件通过事件总线与其他组件通信                  | -                            |

:::tip
组件支持以下功能特性：
1. **多类型通知**：支持抽查点评、居家药学、驻科药师工作站三种类型通知
2. **实时更新**：通过WebSocket监听消息变化，自动更新通知列表
3. **分页加载**：滚动到底部自动加载更多通知
4. **未读提示**：使用Badge显示未读通知数量
5. **点击跳转**：点击通知项可跳转到相应详情页
6. **国际化支持**：使用translate函数支持多语言显示

组件依赖settingsStore中的`showNotice`配置来决定是否显示通知功能。
:::

## 功能说明

1. **通知分类展示**：将通知分为不同标签页，方便用户分类查看
2. **未读数量显示**：在通知图标上显示未读通知数量
3. **滚动加载**：支持滚动到底部加载更多历史通知
4. **实时通知**：通过WebSocket接收实时消息并更新通知列表
5. **详情跳转**：点击通知项可跳转到相关业务详情页
6. **已读标记**：查看通知后自动标记为已读

## 核心代码解析

```javascript
// 加载通知数据
const fetchData = async (messageType: string, isCountTotal: boolean = false) => {
  loading.value = true
  let params = Object.assign({}, queryParams)
  params.messageType = messageType
  const { data } = await sysMessages(params)
  
  // 根据消息类型更新对应通知列表
  switch (messageType) {
    case '1':
      spotNoticesList.value = data.records
      badge.value = isCountTotal ? (badge.value += data.total) : badge.value
      break
    case '25':
      homePharmacyNoticesList.value = data.records
      badge.value = isCountTotal ? (badge.value += data.total) : badge.value
      break
  }
  loading.value = false
  queryParams.total = data.total
}

// WebSocket实时通知监听
watch(
  () => socketStore.message,
  (newValue, oldValue) => {
    let msgObj = toRaw(newValue)
    if (msgObj?.newsType === '99999') {
      fetchDataAll()  // 收到实时消息时重新加载所有通知
    }
  },
  {
    immediate: true,
    deep: true,
  }
)

// 查看通知详情
const toCheckInfo = (target?: any) => {
  switch (target.messageType) {
    case '1': //点评反馈
      router.push({ path: '/spotCheckComments/comment', query: getRouteParams(target) })
      proxy?.$WujieVue.bus.$emit('checkSpotCheckDetail', getRouteParams(target))
      break
    case '25': //居家药学
      sysMessagesHaveReaded({ id: target.id })
      fetchData('25', false)
      router.push({ path: '/homePharmacy/sickPatientsManagement', query: getRouteParams(target) })
      proxy?.$WujieVue.bus.$emit('handleHomePharmacyNotice', target)
      break
  }
}
```

## 依赖说明

| 依赖项                 | 用途                                           |
| :--------------------- | :--------------------------------------------- |
| Element Plus           | 提供Badge、Popover、Tabs等UI组件               |
| wit-icon               | 提供通知图标显示                               |
| useSettingsStore       | 获取通知显示配置                               |
| useSocketStore         | 接收WebSocket实时通知                          |
| sysMessages            | 获取通知列表API接口                            |
| sysMessagesHaveReaded  | 标记通知为已读API接口                          |
| translate              | 国际化翻译函数                                 |
| useRouter              | 处理路由跳转                                   |
| WujieVue               | 与微应用通信，发送事件                         |