---
layout: home

title: Wit-ui
titleTemplate: "Precise Skill boundaries, AI intelligent filling, screenshot to code, 8x development efficiency. Large-scale system Monorepo modular micro-frontend architecture, fully decoupled, independent deployment, not limited by frontend technology frameworks. Manage multiple projects in one codebase, each project is an independent frontend application. Wit-ui supports desktop/web/mini-program/mobile/web scaffolding: quickly build enterprise-level mid-backend frontend solutions."

hero:
  name: Wit-ui
  text: "Precise Skill boundaries\nAI intelligent filling Screenshot to code\n8x development efficiency"
  tagline: "Fully decoupled, independent deployment, not limited by frontend technology frameworks.\nManage multiple projects in one codebase, each project is an independent frontend application."
  image:
    src: /logokai.png
    alt: Wit-ui
    id: "image-src-kai"
  actions:
    - theme: brand
      text: Get Started
      link: /en/introduction.html
    - theme: alt
      text: Demo
      link: http://demo.wit-ui.com/wit-pharm-main/
    - theme: cta mastering-pinia
      text: " "
      link: https://www.wit-ui.com/pricing.html
    - theme: cta vueschool
      text: Watch Video Introduction
      link: https://www.bilibili.com/video/BV1bD2UBiEMS/
    - theme: cta vueschool
      text: Screenshot to Code Demo
      link: https://www.bilibili.com/video/BV1cCGb6SEN5/

features:
  - title: 💡 Mainstream Frontend Architecture
    details: Using the latest frontend architecture Vue3+Pinia+Vite+TS+Element-plus, supporting JavaScript and TypeScript with precise Skills control, boosting development efficiency by 8-10x.
  - title: ⚙️ Automatic Intelligence
    details: Automatic component importing, intelligent TS syntax error checking and hints for better development experience, declarative Skill boundaries, screenshot to code for production.
  - title: 🛠️ Dozens of Common Components
    details: Unified search area and table area components for various big data displays, consistent UI style, code format and rendering performance optimization.
  - title: 📰 Dozens of Product Interaction Effects
    details: No need for design mockups or product prototypes, frontend can write pages directly, saving project time. Complex page interactions with just a few lines of code.
  - title: 🖼️ Beautiful UI and Smart Business Components
    details: 5 layouts, 3 themes, countless color combinations covering most use cases, with dashboard templates and portal templates for maximum efficiency.
  - title: 💻 Monorepo Unified Management and Efficient Reuse
    details: Monorepo uses pnpm workspaces to centralize main app, multiple micro-apps, and shared component libraries in one repository.
---

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import HomeSponsors from '@theme/components/HomeSponsors.vue'

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
