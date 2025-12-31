# witCount 数字计数器 %{#witCount}%

`witCount` 是一个数字动画计数器组件，用于实现数字从起始值到结束值的平滑过渡动画效果。组件支持自定义动画持续时间、小数位数、数字格式、前缀后缀等多种配置，适用于数据展示、统计数字、倒计时等场景。

## 用法实例 %{#dome}%

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <witCount
      :start-value="0"
      :end-value="1000"
      :duration="2000"
    />
    
    <!-- 带格式化的数字 -->
    <witCount
      :start-value="0"
      :end-value="12345.678"
      :duration="3000"
      :decimals="2"
      separator=","
      prefix="$"
      suffix=" USD"
    />
    
    <!-- 自定义缓动函数 -->
    <witCount
      :start-value="0"
      :end-value="500"
      :duration="1500"
      :use-easing="true"
      :easing-fn="[0.5, 0.2, 0.3, 1]"
    />
  </div>
</template>

<script lang="ts" setup>
// 无需额外导入，组件已全局注册
</script>
```

## API

### 组件

| 组件名                          | 描述                                |
| :------------------------------ | :---------------------------------- |
| `witCount`                      | 数字计数器主组件                    |

### 属性

| 属性名                          | 类型            | 默认值       | 描述                                |
| :------------------------------ | :-------------- | :----------- | :---------------------------------- |
| `startValue`                    | `Number`        | `0`          | 动画开始值                          |
| `endValue`                      | `Number`        | `20`         | 动画结束值                          |
| `duration`                      | `Number`        | `3000`       | 动画持续时间（毫秒）                |
| `autoplay`                      | `Boolean`       | `true`       | 是否自动开始动画                    |
| `decimals`                      | `Number`        | `0`          | 小数位数                            |
| `decimal`                       | `String`        | `.`          | 小数点符号                          |
| `separator`                     | `String`        | `,`          | 千位分隔符                          |
| `prefix`                        | `String`        | `''`         | 数字前缀                            |
| `suffix`                        | `String`        | `''`         | 数字后缀                            |
| `useEasing`                     | `Boolean`       | `true`       | 是否使用缓动函数                    |
| `easingFn`                      | `Array`         | `[0.2, 0.2, 0, 1]` | 自定义缓动函数参数              |

## 事件

| 事件名                          | 描述                                | 参数                         |
| :------------------------------ | :---------------------------------- | :--------------------------- |
| `update:modelValue`             | 组件值变化时触发                    | 当前数值（Number）           |

:::tip
1. 组件内部使用了 `useTransition` 钩子实现平滑过渡动画，支持自定义缓动函数。
2. 可通过 `prefix` 和 `suffix` 属性添加单位或符号，如："$1,000.00 USD"。
3. 支持自定义千位分隔符和小数点符号，适应不同地区的数字格式。
4. 可通过 `decimals` 属性控制显示的小数位数，默认不显示小数。
5. 当 `autoplay` 为 `true` 时，组件会在属性变化时自动开始动画。
:::