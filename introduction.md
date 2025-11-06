# 简介 %{#introduction}%

<!-- <VueSchoolLink
  href="https://vueschool.io/lessons/introduction-to-Wit-ui"
  title="Get started with Wit-ui"
/> -->

<MasteringWit-uiLink
  href="https://play.gumlet.io/embed/651ecf274c2f339c6860e36b"
  mp-link="https://masteringWit-ui.com/lessons/the-what-and-why-of-state-management-and-stores"
  title="Create your own Wit-ui from scratch"
/>

Wit-ui 起始于 2019 年 9 月左右的一次某家连锁大药房的数字化项目，包括PMS系统，WMS系统，CRM系统，MES系统，SCM系统等系统集成，还包括P2P平台，P2C平台，视频知识付费平台的搭建，其中载体包括WEB，移动端，桌面端，广告机等，由于系统平台多而庞大，时间紧任务重，我们最终决定采用**微前端架构**，各模块有不同团队开发成子应用，最后集成到一个主应用里面，也就是我们说的，完全解耦、独立部署、不受前端技术框架限制。支持多个子系统集成于一个主系统的大型系统前端架构方案。其中主应用架构与子应用架构均由作者Wit独自完成，后来由作者Wit将其整理与抽离成最终形成微前端架构产品系列：Wit-ui，包含了WEB，移动端，桌面端等前端架构。

## 为什么你应该使用 Wit-ui？ %{#why-should-i-use-Wit-ui}%

Wit-ui系列架构web端，采用最新前端架构Vue3+Pinia+Vite+TS+Element-plus，支持JavaScript、TypeScript，让开发效率提升8~10倍。桌面端使用[Nwjs](https://nwjs.io/)（支持windows xp系统）或[Electron](https://www.electronjs.org/)架构搭建主进程，渲染进程是由Vue+Element-ui完成，前端工程师也可以无缝对接开发桌面应用，移动端使用[Uniapp x](https://doc.dcloud.net.cn/uni-app-x/)（跨平台应用开发引擎，uts语言开发移动原生应用，同样是vue语法，前端工程师也可以无缝对接开发移动应用，uts在iOS平台编译为swift、在Android平台编译为kotlin、在Web和小程序平台编译为js、在鸿蒙next平台上编译为ArkTS。从而，前端开发人员即可开发多端应用了。Wit-ui系列架构，还有如下功能：

- 精致页面与交互：几百个精致页面与几十种产品交互，由原腾讯王者荣耀的产品经理设计指导评审。
- 后台业务接口：有400多个后台API接口从0开始到产品上线。
- 自动智能化：各类组件自动化导入，智能化检查TS语法错误与提示都能给你更好的开发体验。
- 集成常用组件多达几十种：统一的搜索区域组件与表格区域组件等各类大数据展示组件，统一UI风格，代码书写格式与渲染性能优化。
- 集成几十种产品页面交互效果：无须设计人员出过多的效果图片，无须产品人员出过多的原型图，前端直接写页面，节省项目快发时间，短短几行代码就能实现一个复杂的前端页面交互。
- 精美UI界面与精巧业务交互组件：累计完成5种布局，3种主题，无数种颜色搭配，覆盖绝大多数使用场景，同时集成大屏模板与门户模板，大幅提升开发效率。
- 模块化微前端架构：可将一个庞大的系统，拆除一个个小模块，分不同小组完成，降低复杂程度，完全解耦、独立部署、不受前端技术框架限制。
- Devtools 支持
  - 追踪 actions、mutations 的时间线
  - 在组件中展示它们所用到的 Store
  - 让调试更容易的 Time travel
- 热更新
  - 不必重载页面即可修改 Store
  - 开发时可保持当前的 State
- 桌面端与移动端：支持全量更新与静默的增量更新

## 基础示例 %{#basic-example}%

下面就是Wit-ui架构中最基本的vue3模板格式：

```vue {5,20-22}
<template>
  <div class="test-container">
    <el-button type="success" @click="handleConfirm">
      <!-- 以wit开头，自动导入组件无须手动导入，icon为iconfont字体图标库图标--> 
      <wit-icon icon="icon-confirm" />
      <span>{{ text }}</span>
    </el-button>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'Test',
})
// 无须手动导入ref，全自动导入，直接使用！
const text = ref<string>('确认提示框')

// $baseConfirm等函数为全局hooks函数，自动注入，无须手动provide与inject，直接调用！
// 是不是很爽呢！
const handleConfirm = () => {
  $baseConfirm('您确定要删除当前项吗', '是否确定删除？', () => {
    // ...
  })
}
</script>
<style lang="scss" scoped>
.test-container{
  // ...
}
</style>
```

是不是很熟悉的感觉，是的，就是那么简单，没有半点重复的代码！

## 为什么取名 _Wit-ui_？ %{#why-Wit-ui}%

Wit是智能的，智慧的意思， 而Wit-ui架构大部分重复的工作，都是自动智能化完成，还有几百个精美的交互页面，都不无须手动去设计与画原型图，基本上想到的与想不到的都有，所以叫做Wit-ui，它是一系列架构的统称。

## 对比其他架构 %{#comparison}%

- Wit-ui架构ui精美
- 业务组件丰富
- 布局多样化
- 便捷的调试环境
- 精准的语法提示
- 交互效果多样化
- 一种语言写全端产品，多端支持...

## 演示地址 %{#demo}%

- 💻 [演示地址](http://demo.wit-ui.com/wit-pharm-main/)
- ✅ [获取Wit-ui架构](https://www.wit-ui.com/pricing.html)
