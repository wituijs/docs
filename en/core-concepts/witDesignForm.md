# witDesignForm Form Designer %{#witDesignForm}%

`witDesignForm` is a visual form designer component library built based on Vue 3 and Element Plus, provides two core functions: form design and form rendering. The component supports drag-and-drop form design, rich form controls, layout settings, form validation and other features, can be used to quickly build various complex forms.

## Usage Example %{#dome}%

### Form Designer (DesignForm)

```vue
<template>
  <div class="design-form-container">
    <DesignForm
      v-model="formConfig"
      :fields="customFields"
      @save="handleSave"
      @preview="handlePreview"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DesignForm, basicFields } from './plugins/witDesignForm'

const formConfig = ref({
  fields: [],
  config: {
    labelWidth: 100,
    labelPosition: 'right'
  }
})

// Custom fields
const customFields = ref([
  ...basicFields,
  // Can add custom fields
])

// Save form configuration
const handleSave = (config) => {
  console.log('Form configuration saved:', config)
  // Save to backend or local storage
}

// Preview form
const handlePreview = (config) => {
  console.log('Preview form:', config)
  // Open preview window
}
</script>
```

## API

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| `modelValue`           | [`Object`]      | `{}`                       | Form configuration object, supports v-model                           |
| `fields`               | [`Array`]       | `basicFields`              | Available field list                                     |
