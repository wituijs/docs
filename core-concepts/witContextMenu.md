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
  menuX.value = event.clientX
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