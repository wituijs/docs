# witPrint 打印工具组件 %{#witPrint}%

`witPrint`是一个基于原生JavaScript实现的打印工具组件，支持打印DOM元素或HTML字符串，提供了灵活的配置选项和丰富的功能特性。组件通过iframe实现打印内容的隔离，避免影响原有页面样式和结构。

## 用法实列 %{#dome}%

### 打印DOM元素
```javascript
import { Print } from '@/plugins/witPrint'

// 打印指定ID的DOM元素
Print('#print-content')

// 或打印DOM元素对象
const printElement = document.getElementById('print-content')
Print(printElement)
```

### 打印HTML字符串
```javascript
import { Print } from '@/plugins/witPrint'

// 打印HTML字符串
Print(`
  <div>
    <h1>打印标题</h1>
    <p>打印内容...</p>
  </div>
`)
```

### Vue组件中使用
```vue
<template>
  <div>
    <el-button @click="handlePrint" type="primary">打印内容</el-button>
    
    <div id="print-content">
      <h1>打印标题</h1>
      <p>这是需要打印的内容...</p>
      <table>
        <tr>
          <th>列1</th>
          <th>列2</th>
        </tr>
        <tr>
          <td>数据1</td>
          <td>数据2</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Print } from '@/plugins/witPrint'

const handlePrint = () => {
  Print('#print-content', {
    title: '自定义打印标题',
    onStart: () => {
      console.log('打印开始')
    },
    onEnd: () => {
      console.log('打印结束')
    }
  })
}
</script>
```

## API

### 组件/函数

| 名称 | 描述 |
| :--- | :--- |
| `Print` | 打印工具函数，用于打印DOM元素或HTML字符串 |

### 类型

| 类型名 | 描述 |
| :--- | :--- |
| `PrintOptions` | 打印配置选项类型 |

### PrintOptions 配置项

```typescript
interface PrintOptions {
  /**
   * 打印标题
   * @default document.title
   */
  title?: string;
  
  /**
   * 打印前回调函数
   */
  onStart?: () => void;
  
  /**
   * 打印后回调函数
   */
  onEnd?: () => void;
  
  /**
   * 是否打印背景
   * @default false
   */
  background?: boolean;
  
  /**
   * 是否自动关闭打印窗口
   * @default true
   */
  autoClose?: boolean;
  
  /**
   * 打印样式
   */
  styles?: string[];
  
  /**
   * 打印延迟时间(ms)
   * @default 1000
   */
  delay?: number;
  
  /**
   * 是否忽略表单状态
   * @default false
   */
  ignoreFormValues?: boolean;
  
  /**
   * 忽略打印的元素选择器
   */
  noPrint?: string;
}
```

### 方法

| 方法名 | 描述 | 参数 |
| :--- | :--- | :--- |
| `Print` | 打印函数 | `dom: string | HTMLElement` - 要打印的DOM元素或选择器<br>`options?: PrintOptions` - 打印配置选项 |

## 功能特性

1. **多类型支持**：支持打印DOM元素、HTML字符串和Vue组件内容
2. **元素排除**：可通过配置排除不需要打印的元素
3. **表单状态处理**：自动处理表单元素的选中状态
4. **样式隔离**：通过iframe实现打印内容与原页面样式隔离
5. **自动清理**：打印完成后自动清理生成的iframe元素

:::tip
1. 当打印包含表单元素时，组件会自动处理单选框、复选框和下拉选择框的选中状态。
2. 可通过`noPrint`属性排除不需要打印的元素，添加`no-print`类名的元素将不会被打印。
3. 支持CSS选择器，如`#id`、`.class`、`tag`等，用于指定要打印的DOM元素。
4. 打印样式默认继承原页面的样式，也可通过`styles`配置自定义打印样式。
5. 打印前可通过`onStart`回调函数执行一些预处理操作，打印后通过`onEnd`回调函数执行清理工作。
:::