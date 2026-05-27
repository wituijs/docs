# Getter %{#getters}%

<VueSchoolLink
  href="https://vueschool.io/lessons/getters-in-pinia"
  title="Learn all about getters in Pinia"
/>

Getters are exactly equivalent to [computed values](https://vuejs.org/guide/essentials/computed.html) for the store's state. They can be defined with the `getters` property in `defineStore()`. **It is recommended** to use arrow functions, and they will receive `state` as the first parameter:

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
```

Most of the time, getters only depend on state, but sometimes they may use other getters. Therefore, even when defining getters with regular functions, we can access the **entire store instance** through `this`, **but (in TypeScript) the return type must be defined**. This is to avoid a known TypeScript limitation, **but this doesn't affect getters defined with arrow functions, nor getters that don't use `this`**.

```ts
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // Automatically infers return type as number
    doubleCount(state) {
      return state.count * 2
    },
    // Return type **must** be explicitly set
    doublePlusOne(): number {
      // Autocomplete and type annotation for the entire store ✨
      return this.doubleCount + 1
    },
  },
})
```

Then you can directly access the getter on the store instance:

```vue
<script setup>
import { useCounterStore } from './counterStore'

const store = useCounterStore()
</script>

<template>
  <p>Double count is {{ store.doubleCount }}</p>
</template>
```

## Accessing other getters %{#accessing-other-getters}%

Like computed properties, you can combine multiple getters. Through `this`, you can access any other getter. Even if you're not using TypeScript, you can use [JSDoc](https://jsdoc.app/tags-returns.html) to let your IDE provide type hints.

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    // Type is automatically inferred because we're not using `this`
    doubleCount: (state) => state.count * 2,
    // Here we need to add the type ourselves (using JSDoc in JS)
    // Can use this to reference getter
    /**
     * Returns count value multiplied by 2 plus 1
     *
     * @returns {number}
     */
    doubleCountPlusOne() {
      // Autocomplete ✨
      return this.doubleCount + 1
    },
  },
})
```

## Passing arguments to getters %{#passing-arguments-to-getters}%

*Getters* are just **computed** properties behind the scenes, so you cannot pass any arguments to them. However, you can return a function from the *getter* that can accept any arguments:

```js
export const useUserListStore = defineStore('userList', {
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
  },
})
```

And use it in a component:

```vue
<script setup>
import { useUserListStore } from './store'
const userList = useUserListStore()
const { getUserById } = storeToRefs(userList)
// Note, you need to use `getUserById.value` to access
// the function in <script setup>
</script>

<template>
  <p>User 2: {{ getUserById(2) }}</p>
</template>
```

Note that when you do this, **getters will no longer be cached**, they are just functions you call. However, you can cache some results inside the getter itself, although this is not common, there is evidence that it performs better:

```js
export const useUserListStore = defineStore('userList', {
  getters: {
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active)
      return (userId) => activeUsers.find((user) => user.id === userId)
    },
  },
})
```

## Accessing other stores' getters %{#accessing-other-stores-getters}%

To use another store's getter, simply use it inside the *getter*:

```js
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```

## Usage with `setup()` %{#usage-with-setup}%

As a property of the store, you can directly access any getter (exactly like state properties):

```vue
<script setup>
const store = useCounterStore()
store.count = 3
store.doubleCount // 6
</script>
```

## Usage with the Options API %{#usage-with-the-options-api}%

<VueSchoolLink
  href="https://vueschool.io/lessons/access-pinia-getters-in-the-options-api"
  title="Access Pinia Getters via the Options API"
/>

In the following example, you can assume the relevant store has already been created:

```js
// Example file path:
// ./src/stores/counter.js

import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
})
```

### With `setup()` %{#with-setup}%

While not every developer uses the Composition API, the `setup()` hook can still make Pinia easier to use with the Options API. And no extra mapping helper functions are needed!

```vue
<script>
import { useCounterStore } from '../stores/counter'

export default defineComponent({
  setup() {
    const counterStore = useCounterStore()

    return { counterStore }
  },
  computed: {
    quadrupleCounter() {
      return this.counterStore.doubleCount * 2
    },
  },
})
</script>
```

This is useful when migrating components from Options API to Composition API, but **should only be a migration step**, try not to mix both API styles in the same component.

### Without `setup()` %{#without-setup}%

You can use the `mapState()` function from the [previous section's state](./state.md#options-api) to map them as getters:

```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // Allows accessing this.doubleCount in the component
    // Same as reading from store.doubleCount
    ...mapState(useCounterStore, ['doubleCount']),
    // Same as above, but register it as this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'doubleCount',
      // You can also write a function to get access to the store
      double: store => store.doubleCount,
    }),
  },
}
```
