# Introduction %{#introduction}%

<!-- <VueSchoolLink
  href="https://vueschool.io/lessons/introduction-to-Wit-ui"
  title="Get started with Wit-ui"
/> -->

<MasteringPiniaLink
  href="https://play.gumlet.io/embed/6938e0277aaaf18e07cbd40b"
  mp-link="https://www.bilibili.com/video/BV1bD2UBiEMS/"
  title="Watch Video Introduction"
/>

Wit-ui originated around September 2019 from a digital project for a chain pharmacy, including PMS system, WMS system, CRM system, MES system, SCM system and other system integrations, as well as P2P platform, P2C platform, video knowledge payment platform. The carriers included WEB, mobile, desktop, advertising machines, etc. Due to the large number of system platforms, tight schedule and heavy tasks, we finally decided to adopt **micro-frontend architecture**, where each module was developed by different teams into sub-applications, and finally integrated into a main application. This is what we call complete decoupling, independent deployment, and not limited by frontend technology frameworks. It supports a large-scale system frontend architecture solution where multiple sub-systems are integrated into one main system. The main application architecture and sub-application architecture were both completed by the author Wit alone, and later the author Wit organized and extracted it to finally form the micro-frontend architecture product series: Wit-ui, including WEB, mobile, desktop and other frontend architectures.

## Why Should You Use Wit-ui? %{#why-should-i-use-Wit-ui}%

Wit-ui series provides efficient and unified architecture solutions for various platforms:<br><br><strong>Web:</strong>Adopts the latest frontend architecture Vue3+Pinia+Vite+TS+Element-plus, supports JavaScript and TypeScript, improving development efficiency by 8-10 times.<br><br><strong>Desktop:</strong>Uses [Nwjs](https://nwjs.io/) (supports Windows XP system) or [Electron](https://www.electronjs.org/) architecture to build the main process, the rendering process is completed by Vue+Element-ui, frontend engineers can seamlessly develop desktop applications.<br><br><strong>Mobile:</strong>Uses [Uniapp](https://doc.dcloud.net.cn/uni-app-x/), a cross-platform framework technology, also uses Vue syntax, the same frontend architecture, the same development method, frontend engineers can seamlessly develop mobile applications, supports Android/Apple/HarmonyOS/Mini-program development. If you pursue ultimate mobile performance and cross-platform technology architecture, you can use [Flutter](https://docs.flutter.cn/).<br><br>Wit-ui series architecture also has the following features:

- Exquisite pages and interactions: Hundreds of exquisite pages and dozens of product interactions, designed and reviewed by the former Tencent Honor of Kings product manager.
- Backend business interfaces: Over 400 backend API interfaces from scratch to product launch.
- Automation and intelligence: Various components are automatically imported, intelligent TS syntax error checking and prompts can give you a better development experience.
- Integrated dozens of common components: Unified search area components and table area components and other big data display components, unified UI style, code writing format and rendering performance optimization.
- Integrated dozens of product page interaction effects: No need for designers to produce too many effect images, no need for product managers to produce too many prototype diagrams, frontend can directly write pages, saving project development time, just a few lines of code can achieve a complex frontend page interaction.
- Beautiful UI interface and clever business interaction components: Completed 5 layouts, 3 themes, countless color combinations, covering most usage scenarios, while integrating dashboard templates and portal templates, greatly improving development efficiency.
- Modular micro-frontend architecture: Can break down a huge system into small modules, completed by different teams, reducing complexity, complete decoupling, independent deployment, not limited by frontend technology frameworks.
- Devtools support
  - Track actions and mutations timeline
  - Display the stores used in components
  - Time travel for easier debugging
- Hot module replacement
  - Modify stores without reloading the page
  - Maintain current state during development
- Desktop and mobile: Supports full updates and silent incremental updates

## Basic Example %{#basic-example}%

Here is the most basic Vue3 template format in Wit-ui architecture:

```vue {5,20-22}
<template>
  <div class="test-container">
    <el-button type="success" @click="handleConfirm">
      <!-- Starts with wit, auto-imported component, no manual import needed, icon is iconfont font icon library icon--> 
      <wit-icon icon="icon-confirm" />
      <span>{{ text }}</span>
    </el-button>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'Test',
})
// No need to manually import ref, fully auto-imported, use directly!
const text = ref<string>('Confirm Dialog')

// Functions like $baseConfirm are global hooks functions, auto-injected, no need for manual provide and inject, call directly!
// Isn't it cool!
const handleConfirm = () => {
  $baseConfirm('Are you sure you want to delete the current item?', 'Confirm deletion?', () => {
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

Does it feel familiar? Yes, it's that simple, no duplicate code at all!

## Why Named _Wit-ui_? %{#why-Wit-ui}%

Wit means intelligent and wise. Most of the repetitive work in Wit-ui architecture is automatically and intelligently completed. There are also hundreds of exquisite interactive pages that don't need to be manually designed or prototyped. Basically everything you can think of and can't think of is there, so it's called Wit-ui. It's a collective name for a series of architectures.

## Comparison with Other Architectures %{#comparison}%

- Wit-ui architecture has beautiful UI
- Rich business components
- Diversified layouts
- Convenient debugging environment
- Precise syntax prompts
- Diversified interaction effects
- One language for all platform products, multi-platform support...

## Demo Address %{#demo}%

- 💻 [Demo Address](http://demo.wit-ui.com/wit-pharm-main/)
- ✅ [Get Wit-ui Architecture](https://www.wit-ui.com/pricing.html)
