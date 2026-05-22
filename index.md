---
layout: home

title: Wit-ui
titleTemplate: 精准Skill锁边界 AI智能填充 截图即代码 让开发效率×8，大型系统 Monorepo模块化微前端架构，完全解耦、独立部署、不受前端技术框架限制。一个代码库里统一管理多个项目，每个项目都是一个独立的前端应用，Wit-ui支持桌面端/web端/小程序端/移动端/web端脚手架：快速构成企业级中后台前端解决方案。

hero:
  name: Wit-ui
  text: "精准Skill锁边界\nAI智能填充 截图即代码\n让开发效率×8"
  tagline: "完全解耦、独立部署、不受前端技术框架限制。\n一个代码库里统一管理多个项目，每个项目都是一个独立的前端应用。"
  image:
    src: /logokai.png
    alt: Wit-ui
    id: "image-src-kai"
  actions:
    - theme: brand
      text: 开始使用
      link: /introduction.html
    - theme: alt
      text: Demo 演示
      link: http://demo.wit-ui.com/wit-pharm-main/
    - theme: cta mastering-pinia
      text: " "
      link: https://www.wit-ui.com/pricing.html
    - theme: cta vueschool
      text: 观看视频介绍
      link: https://www.bilibili.com/video/BV1bD2UBiEMS/
    # - theme: cta vue-mastery
    #   text: 获取 Pinia 速查表
    #   link: https://www.vuemastery.com/pinia?coupon=PINIA-DOCS&via=eduardo

features:
  - title: 💡 主流前端技术架构
    details: 采用最新前端架构Vue3+Pinia+Vite+TS+Element-plus，支持JavaScript、TypeScript，精准Skills控制，让开发效率提升8~10倍。
  - title: ⚙️ 自动智能化
    details: 各类组件自动化导入，智能化检查TS语法错误与提示都能给你更好的开发体验，声明式Skill定边界，截图即代码上生产。
  - title: 🛠️ 集成常用组件多达几十种
    details: 统一的搜索区域组件与表格区域组件等各类大数据展示组件，统一UI风格，代码书写格式与渲染性能优化。
  - title: 📰 集成几十种产品页面交互效果
    details: 无须设计出效果图片，无须产品出原型图，前端直接写页面，节省项目快发时间，短短几行代码就能实现一个复杂的前端页面交互。
  - title: 🖼️ 精美UI界面与精巧业务交互组件
    details: 累计完成5种布局，3种主题，无数种颜色搭配，覆盖绝大多数使用场景，同时集成大屏模板与门户模板，大幅提升开发效率。
  - title: 💻 Monorepo架构统一管理与高效复用
    details: Monorepo通过pnpm workspaces将主应用、多个微应用以及共享的组件和工具库集中在一个代码仓库中。
---

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import HomeSponsors from '.vitepress/theme/components/HomeSponsors.vue'

const eyeState = ref(0)
const isBlinking = ref(false)
const rotation = ref(0)

// 执行单次眨眼动画
async function blinkOnce() {
  isBlinking.value = true

  // 闭眼
  eyeState.value = 1
  await sleep(260) // 闭眼持续时间

  // 睁眼
  eyeState.value = 0
  await sleep(260) // 睁眼持续时间

  isBlinking.value = false
}

// 随机时间后触发眨眼
function scheduleBlink() {
  if (isBlinking.value) return

  // 随机间隔时间（1-3秒）
  const randomDelay = 1000 + Math.random() * 2000
  setTimeout(() => {
    doubleBlink().then(scheduleBlink)
  }, randomDelay)
}

// 执行连续两次眨眼
async function doubleBlink() {
  if (isBlinking.value) return

  await blinkOnce()
  await sleep(50) // 两次眨眼之间的间隔
  await blinkOnce()
}

// 辅助函数：模拟sleep
function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

watch(eyeState, (newState) => {
  if (newState === 1) {
    // 闭眼时
    if (document.querySelector('#image-src-kai') &&  document.querySelector('#image-src-bi')){
      document.querySelector('#image-src-kai').style.display = 'none'
      document.querySelector('#image-src-bi').style.display = 'block'
    }
  } else {
    // 睁眼时
    if (document.querySelector('#image-src-kai') &&  document.querySelector('#image-src-bi')){
     document.querySelector('#image-src-kai').style.display = 'block'
     document.querySelector('#image-src-bi').style.display = 'none'
    }
  }
})

onMounted(() => {
  if(!document.querySelector('.image-src-bi')) {
    const container = document.querySelector('.image-container');
    const firstChild = container.firstElementChild;
    const img = document.createElement('img');
    img.src = '/logobi.png';  
    img.alt = 'Wit-ui';
    img.className = 'VPImage image-src';
    img.id = 'image-src-bi';

    const secondChild = firstChild.nextElementSibling;
    container.insertBefore(img, secondChild);
  }
  scheduleBlink()
})
</script>

<HomeSponsors />
