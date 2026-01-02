# witContextMenu 上下文菜单 %{#witContextMenu}%

`witContextMenu`是一个基于 `@imengyu/vue3-context-menu` 封装的上下文菜单组件，提供了丰富的菜单选项和灵活的配置方式。组件支持菜单分组、分隔线、自定义图标等功能，可用于实现右键菜单、下拉菜单等交互场景。

## 用法实列 %{#dome}%

```vue
<template>
  <div>
    <el-button
      @contextmenu.prevent="onContextMenu"
      type="primary"
    >
      右键点击我打开上下文菜单
    </el-button>
    
    <!-- 上下文菜单组件 -->
    <witContextMenu
      v-model:show="showContextMenu"
      :options="menuOptions"
      :x="menuX"
      :y="menuY"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { MenuOptions } from '@imengyu/vue3-context-menu'

const showContextMenu = ref(false)
const menuX = ref(0)
const menuY = ref(0)

// 菜单选项配置
const menuOptions = reactive<MenuOptions>({
  items: [
    {
      label: '复制',
      onClick: () => {
        console.log('复制操作')
        showContextMenu.value = false
      }
    },
    {
      label: '粘贴',
      onClick: () => {
        console.log('粘贴操作')
        showContextMenu.value = false
      }
    },
    {
      separator: true // 分隔线
    },
    {
      label: '编辑',
      children: [
        {
          label: '重命名',
          onClick: () => {
            console.log('重命名操作')
            showContextMenu.value = false
          }
        },
        {
          label: '删除',
          onClick: () => {
            console.log('删除操作')
            showContextMenu.value = false
          }
        }
      ]
    }
  ]
})

// 右键点击事件处理
const onContextMenu = (event: MouseEvent) => {
  menuX.value = event.clientX# witQrCode 二维码组件 %{#witQrCode}%

`witQrCode`是一个基于 `vue-qr` 封装的二维码生成组件，提供了简洁的API和灵活的配置选项，支持生成自定义样式的二维码。组件内部集成了 `vue-qr` 的核心功能，可用于生成包含文本、URL等信息的二维码。

## 用法实列 %{#dome}%

### 基础用法
```vue
<template>
  <div>
    <!-- 基础二维码 -->
    <wit-qr-code
      :text="qrText"
      :size="200"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 二维码内容
const qrText = ref('https://www.wit-ui.com')
</script>
```

### 自定义样式
```vue
<template>
  <div>
    <!-- 自定义颜色和大小 -->
    <wit-qr-code
      :text="qrText"
      :size="250"
      :colorDark="#000000"
      :colorLight="#ffffff"
      :margin="10"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 二维码内容
const qrText = ref('https://www.wit-ui.com')
</script>
```

### 带logo的二维码
```vue
<template>
  <div>
    <!-- 带logo的二维码 -->
    <wit-qr-code
      :text="qrText"
      :size="200"
      :logoSrc="logoUrl"
      :logoScale="0.2"
      :logoMargin="2"
      :logoBackgroundColor="#ffffff"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 二维码内容
const qrText = ref('https://www.wit-ui.com')
// Logo图片URL
const logoUrl = ref('https://www.wit-ui.com/logo.png')
</script>
```

## API

### 属性

| 属性名 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `text` | `String` | `''` | 二维码内容 |
| `size` | `Number` | `200` | 二维码尺寸 |
| `colorDark` | `String` | `'#000000'` | 二维码前景色 |
| `colorLight` | `String` | `'#ffffff'` | 二维码背景色 |
| `margin` | `Number` | `0` | 二维码外边距 |
| `logoSrc` | `String` | `''` | Logo图片URL |
| `logoScale` | `Number` | `0.2` | Logo缩放比例 |
| `logoMargin` | `Number` | `0` | Logo外边距 |
| `logoBackgroundColor` | `String` | `'#ffffff'` | Logo背景色 |
| `logoCornerRadius` | `Number` | `0` | Logo圆角半径 |
| `dotScale` | `Number` | `1` | 二维码点缩放比例 |
| `autoColor` | `Boolean` | `true` | 是否自动调整颜色 |
| `binarize` | `Boolean` | `false` | 是否二值化处理 |
| `binarizeThreshold` | `Number` | `128` | 二值化阈值 |
| `backgroundSrc` | `String` | `''` | 背景图片URL |
| `gifBackgroundSrc` | `String` | `''` | GIF背景图片URL |
| `whiteMargin` | `Boolean` | `true` | 是否显示白色外边距 |
| `callback` | `Function` | `() => {}` | 生成完成回调函数 |

### 事件

| 事件名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `rendered` | 二维码渲染完成时触发 | 二维码URL |

:::tip
1. 组件内部使用了 `vue-qr` 库，更多详细配置可参考该库的官方文档。
2. 支持通过 `text` 属性设置二维码内容，可以是文本、URL等。
3. 可通过 `size` 属性调整二维码的尺寸，默认值为200px。
4. 支持自定义二维码颜色、Logo、背景图片等样式。
5. 当使用GIF背景图片时，需要确保浏览器支持GIF动画。
:::
  menuY.value = event.clientY
  showContextMenu.value = true
}
</script>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witContextMenu`                | 上下文菜单主组件                    |
| `witContextMenuGroup`           | 菜单分组组件                        |
| `witContextMenuItem`            | 菜单项组件                          |
| `witContextMenuSeparator`       | 菜单分隔线组件                      |

### 类型

| 类型名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `MenuOptions`                   | 菜单配置选项类型                    |

### MenuOptions 配置项

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `items`                         | `Array`         | `[]`         | 菜单项数组                          |
| `zIndex`                        | `Number`        | `1000`       | 菜单层级                            |
| `showMask`                      | `Boolean`       | `false`      | 是否显示遮罩层                      |
| `maskClickClose`                | `Boolean`       | `true`       | 点击遮罩层是否关闭菜单              |
| `customClass`                   | `String`        | `''`         | 自定义菜单类名                      |
| `minWidth`                      | `Number`        | `120`        | 菜单最小宽度                        |

### 菜单项配置

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `label`                         | `String`        | `''`         | 菜单项文本                          |
| `icon`                          | `String`        | `''`         | 菜单项图标                          |
| `onClick`                       | `Function`      | `() => {}`   | 点击菜单项回调函数                  |
| `disabled`                      | `Boolean`       | `false`      | 是否禁用菜单项                      |
| `hidden`                        | `Boolean`       | `false`      | 是否隐藏菜单项                      |
| `children`                      | `Array`         | `[]`         | 子菜单项数组                        |
| `separator`                     | `Boolean`       | `false`      | 是否为分隔线                        |
| `customClass`                   | `String`        | `''`         | 自定义菜单项类名                    |

## 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `show-change`                   | 菜单显示状态变化时触发              | 当前显示状态（Boolean）      |
| `close`                         | 菜单关闭时触发                      | -                            |
| `open`                          | 菜单打开时触发                      | -                            |

:::tip
1. 组件内部使用了 `@imengyu/vue3-context-menu` 库，更多详细配置可参考该库的官方文档。
2. 支持通过 `v-model:show` 双向绑定控制菜单的显示与隐藏。
3. 可通过 `x` 和 `y` 属性设置菜单显示的位置坐标。
4. 支持多级子菜单和菜单项分组，可通过 `children` 和 `witContextMenuGroup` 实现。
5. 可通过自定义 `icon` 属性为菜单项添加图标，支持使用 Font Awesome、Element Plus 等图标库。
:::