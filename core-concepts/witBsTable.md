# witBsTable 表格 %{#witBsTable}%

`witBsTable`是一个基于 Element Plus 封装的表格组件，专为大屏数据展示设计，支持自动滚动、自定义渲染和特殊样式效果，适用于各类数据报表和监控页面。

## 用法实例 %{#dome}%

```vue
<template>
  <div style="height: 500px;">
    <!-- 基础用法 -->
    <witBsTable
      :tableData="tableData"
      :columns="columns"
    />
    
    <!-- 自定义列渲染 -->
    <witBsTable
      :tableData="tableData"
      :columns="customColumns"
    >
      <!-- 自定义单元格内容 -->
      <template #status="{ row }">
        <el-tag :type="row.status === 'success' ? 'success' : 'warning'">
          {{ row.status === 'success' ? '已完成' : '进行中' }}
        </el-tag>
      </template>
      
      <!-- 自定义表头 -->
      <template #nameHeader="{ column }">
        <span>{{ column.label }} <el-icon><ArrowUp /></el-icon></span>
      </template>
    </witBsTable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 基础表格数据
const tableData = ref([
  { id: 1, name: '药品A', count: 120, status: 'success' },
  { id: 2, name: '药品B', count: 80, status: 'warning' },
  { id: 3, name: '药品C', count: 150, status: 'success' }
])

// 基础列配置
const columns = ref([
  { prop: 'id', label: 'ID', width: 80 },
  { prop: 'name', label: '名称', width: 120 },
  { prop: 'count', label: '数量', width: 100 },
  { prop: 'status', label: '状态', width: 120 }
])

// 自定义渲染列配置
const customColumns = ref([
  { prop: 'id', label: 'ID', width: 80 },
  { prop: 'name', label: '名称', width: 120, isRenderHeader: true },
  { prop: 'count', label: '数量', width: 100 },
  { prop: 'status', label: '状态', width: 120, render: true }
])
</script>
```

## API

### 属性

| 属性名 | 类型 | 默认值 | 描述 |
| :----- | :--- | :----- | :--- |
| `tableData` | `Array` | `[]` | 表格数据数组 |
| `columns` | `Array` | `[]` | 列配置数组 |

### 列配置项

| 属性名 | 类型 | 默认值 | 描述 |
| :----- | :--- | :----- | :--- |
| `prop` | `String` | - | 列数据的属性名 |
| `label` | `String` | - | 列标题 |
| `width` | `Number/String` | - | 列宽度 |
| `render` | `Boolean` | `false` | 是否允许自定义单元格渲染 |
| `isRenderHeader` | `Boolean` | `false` | 是否允许自定义表头渲染 |
| `isRenderFooter` | `Boolean` | `false` | 是否允许自定义表尾渲染 |
| `...ElTableColumn.props` | `Object` | - | 继承 Element Plus TableColumn 的所有属性 |

## 插槽

| 插槽名 | 描述 | 参数 |
| :----- | :--- | :--- |
| `prop` | 自定义对应列的单元格内容 | `{ row, scope, rowIndex }` |
| `propHeader` | 自定义对应列的表头内容 | `{ column }` |
| `propFooter` | 自定义对应列的表尾内容 | `{ column }` |

## 功能特性

- **自动滚动**：集成表格自动滚动功能，支持延迟配置
- **自定义渲染**：支持自定义表头、单元格和表尾内容
- **特殊样式**：专为大屏设计的透明背景和斑马纹效果
- **响应式设计**：自适应父容器高度，100% 填充
- **单元格提示**：内容过长时自动显示完整内容提示
- **事件支持**：继承 Element Plus Table 的所有事件

## 实现原理

1. **组件封装**：基于 Element Plus 的 el-table 组件进行封装，扩展了自定义渲染和特殊样式
2. **自动滚动**：通过 v-tableAutoScroll 指令实现表格内容自动滚动
3. **自定义渲染**：使用动态插槽技术实现表头、单元格和表尾的自定义渲染
4. **样式定制**：通过 :deep() 选择器修改 Element Plus 表格的默认样式，实现透明背景和斑马纹效果
5. **行样式**：通过 tableRowClassName 方法实现奇偶行不同背景色

:::tip
1. 组件需要设置固定高度的父容器，以便表格能够正确计算和显示滚动条
2. 列配置中的 render、isRenderHeader、isRenderFooter 属性控制是否启用对应位置的自定义渲染
3. 自定义渲染时，插槽名称与列的 prop 属性对应
4. 组件继承了 Element Plus Table 的所有属性和事件，可以根据需要灵活配置
5. 表格行高固定为 36px，表头高度自适应内容
:::