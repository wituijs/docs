---
layout: home

title: Wit-ui
titleTemplate: 大型系统 Monorepo模块化微前端架构，完全解耦、独立部署、不受前端技术框架限制。一个代码库里统一管理多个项目，每个项目都是一个独立的前端应用，Wit-ui支持桌面端/web端/小程序端/移动端/web端脚手架：企业级中后台前端解决方案。

hero:
  name: Wit-ui
  text: "大型系统 \nMonorepo模块化微前端架构"
  tagline: "完全解耦、独立部署、不受前端技术框架限制。\n一个代码库里统一管理多个项目，每个项目都是一个独立的前端应用。"
  image:
    src: /logo.png
    alt: Wit-ui
  actions:
    - theme: brand
      text: 开始使用
      link: /introduction.html
    - theme: alt
      text: Demo 演示
      link: http://demo.wit-ui.com/wit-pharm-main/
    - theme: cta mastering-pinia
      text: ' '
      link: https://www.wit-ui.com/pricing.html
    - theme: cta vueschool
      text: 观看视频介绍
      link: https://www.bilibili.com/video/BV1bD2UBiEMS/
    # - theme: cta vue-mastery
    #   text: 获取 Pinia 速查表
    #   link: https://www.vuemastery.com/pinia?coupon=PINIA-DOCS&via=eduardo

features:
  - title: 💡 主流前端技术架构
    details: 采用最新前端架构Vue3+Pinia+Vite+TS+Element-plus，支持JavaScript、TypeScript，让开发效率提升8~10倍。
  - title: ⚙️ 自动智能化
    details: 各类组件自动化导入，智能化检查TS语法错误与提示都能给你更好的开发体验。
  - title: 🛠️ 集成常用组件多达几十种
    details: 统一的搜索区域组件与表格区域组件等各类大数据展示组件，统一UI风格，代码书写格式与渲染性能优化。
  - title: 📰 集成几十种产品页面交互效果
    details: 无须设计出效果图片，无须产品出原型图，前端直接写页面，节省项目快发时间，短短几行代码就能实现一个复杂的前端页面交互。
  - title: 🖼️ 精美UI界面与精巧业务交互组件
    details: 累计完成5种布局，3种主题，无数种颜色搭配，覆盖绝大多数使用场景，同时集成大屏模板与门户模板，大幅提升开发效率。
  - title: 💻 Monorepo架构统一管理与高效复用
    details: Monorepo通过pnpm workspaces将主应用、多个微应用以及共享的组件和工具库集中在一个代码仓库中。
---

<script setup>
import HomeSponsors from '.vitepress/theme/components/HomeSponsors.vue'
</script>

<HomeSponsors />
