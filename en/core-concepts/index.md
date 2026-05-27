# witSearch Search Component %{#witSearch}%

`witSearch` is one of the most used core components in backend systems. To unify search area styles and interactions, you can render beautiful search component views by configuring simple JSON objects. It's easy to use with two-way data binding, WYSIWYG, reducing 90% of repetitive work. [View Demo>>](http://demo.wit-ui.com/wit-pharm-main/index.html#/test-page1)

## Usage Example %{#dome}%

```vue
<template>
  <div class="test-container">
    <witSearch
      ref="witSearchRef"
      v-model="searchForm"
      :is-cache="true"
      :search-data="searchData"
      search-name="test-page"
      :searching="tableLoading"
      :autoLoad="false"
      @search="query"
    />
  </div>
</template>
<script lang="ts" setup>
  // Assemble form data
  const searchForm = ref<any>({
    dateRange: '',
    cardIssuingInstitution: 2,
    // Initial value object
    clearDefault: {},
  })

  // This large object builds the search area view
  const searchData = reactive<any>({
    searchListButtons: [
      // Search button on the right side of search area
      {
        label: 'Search',
        isShowLoading: true, // Whether to show loading on search button
        attrs: {
          type: 'primary',
        },
        events: {
          click: search, // Click event
        },
      }
    ],
    searchList: [
        // Left side of search area
        {
          type: 'date-picker', // Component type
          field: 'dateRange', // Field bound to searchForm
          label: 'Date Range',
          isOutBorder: true, // Whether to show outer border
          attrs: {
            type: 'daterange',
            width: 240,
            placeholder: 'Please select',
            clearable: true,
          },
        },
        {
          type: 'select',
          field: 'cardIssuingInstitution',
          label: 'Card Issuing Institution',
          valueField: 'institutionCode',
          labelField: 'institutionName',
          isOutBorder: true, // Whether to show outer border
          isRequired: true, // Whether it's required
          options: [
            {
              institutionCode: 1,
              institutionName: 'Yifeng Pharmacy',
            },
            {
              institutionCode: 2,
              institutionName: 'Qianjin Pharmacy',
            },
            {
              institutionCode: 3,
              institutionName: 'Laobaixing Pharmacy',
            }
          ],
          attrs: {
            width: 200,
            clearable: true,
            collapseTags: true,
          }
        },
        ...
      ]
  })
</script>
<style lang="scss" scoped>
.test-container{
  // ...
}
</style>
```

The search area component integrates dozens of business components and basic components, meeting 99.9% of business interaction needs. You can also customize business components and integrate them into the `witSearch` component.

## API

| Property | Type | Description |
| :------ | :------ | :------ |
| `v-model` | [`object`] | Two-way data binding for backend data interaction |
| `searchData` | [`object`] | Used to render search area UI components |
| `isCache` | [`boolean`] | Whether to cache search data |
| `searchName` | [`string`] | Unique key name for localStorage cache |
| `searching` | [`boolean`] | Whether to show search loading |
| `autoLoad` | [`boolean`] | Whether to execute search command immediately on page load |
| `popoverWidth` | [`Number`] | Filter condition popup width |
| `labelWidth` | [`String`] | Form label width |
| `showResult` | [`boolean`] | Whether to show filter condition results |
| `border` | [`boolean`] | Whether to add bottom gray line |
| `@search` | [`Function`] | Callback function when search button is clicked |

:::tip
The usage example only shows some fields. There are more property fields and components not explained one by one. This framework is not encrypted, all source code has comments, please check the source code for more comprehensive information!
:::
