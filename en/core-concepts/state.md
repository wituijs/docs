# State %{#state}%

<VueSchoolLink
  href="https://vueschool.io/lessons/access-state-from-a-pinia-store"
  title="Learn all about state in Pinia"
/>

In most cases, state is the core of your store. People usually start by defining the state that represents their app. In Pinia, state is defined as a function that returns the initial state. This allows Pinia to support both server-side and client-side.

```js
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // Recommended to use arrow function for complete type inference
  state: () => {
    return {
      // All these properties will have their types automatically inferred
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})
```

:::tip
If you are using Vue 2, the data you create in `state` follows the same rules as `data` in Vue instances, meaning the state object must be plain, and when you want to **add new properties** to it, you need to call `Vue.set()`. **Reference: [Vue#data](https://v2.vuejs.org/v2/api/#data)**.
:::

## TypeScript %{#typescript}%

You don't need much effort to make your state TS compatible. Ensure strict mode is enabled, or at least noImplicitThis, and Pinia will automatically infer your state types! However, in some cases, you should help it with some conversions:
```ts
const useStore = defineStore('storeId', {
  state: () => {
    return {
      // For initializing empty lists
      userList: [] as UserInfo[],
      // For data that hasn't been loaded yet
      user: null as UserInfo | null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
```

If you prefer, you can define state with an interface and add the return type of `state()`.

```ts
interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

const useStore = defineStore('storeId', {
  state: (): State => {
    return {
      userList: [],
      user: null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
```

## Accessing `state` %{#accessing-the-state}%

By default, you can access state through the `store` instance and directly read and write to it.

```js
const store = useStore()

store.count++
```

## Resetting state %{#resetting-the-state}%

When using the [Options API](/en/core-concepts/index.md#option-stores), you can reset state to its initial value by calling the store's `$reset()` method.

```js
const store = useStore()

store.$reset()
```

Inside `$reset()`, the `state()` function is called to create a new state object and replace the current state.

In [Setup Stores](/core-concepts/index.md#setup-stores), you need to create your own `$reset()` method:

```ts
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    count.value = 0
  }

  return { count, $reset }
})
```

### Usage with the Options API %{#usage-with-the-options-api}%

<VueSchoolLink
  href="https://vueschool.io/lessons/access-pinia-state-in-the-options-api"
  title="Access Pinia State via the Options API"
/>

In the following example, you can assume the relevant store has already been created:

```js
// Example file path:
// ./src/stores/counter.js

import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
})
```

If you can't use the Composition API, but you can use `computed`, `methods`, etc., you can use the `mapState()` helper function to map state properties to read-only computed properties:

```js
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // Can access this.count in the component
    // Same as reading from store.count
    ...mapState(useCounterStore, ['count'])
    // Same as above, but register it as this.myOwnName
    ...mapState(useCounterStore, {
      myOwnName: 'count',
      // You can also write a function to get access to the store
      double: store => store.count * 2,
      // It can access `this`, but it won't be typed...
      magicValue(store) {
        return store.someGetter + this.count + this.double
      },
    }),
  },
}
```

#### Modifiable state %{#modifiable-state}%

If you want to modify these state properties (e.g., if you have a form), you can use `mapWritableState()` instead. Note that you cannot pass a function like with `mapState()`:

```js
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    // Can access this.count in the component and allow setting it.
    // this.count++
    // Same as reading from store.count
    ...mapWritableState(useCounterStore, ['count'])
    // Same as above, but register it as this.myOwnName
    ...mapWritableState(useCounterStore, {
      myOwnName: 'count',
    }),
  },
}
```

:::tip
For collections like arrays, you don't necessarily need to use `mapWritableState()`, `mapState()` also allows you to call methods on the collection, unless you want to replace the entire array with `cartItems = []`.
:::

## Mutating the state %{#mutating-the-state}%

<!-- TODO: disable this with `strictMode` -->

Besides directly changing the store with `store.count++`, you can also call the `$patch` method. It allows you to change multiple properties at the same time with a `state` patch object:

```js
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})
```

However, with this syntax, some mutations are really hard to implement or time-consuming: any collection modification (e.g., adding, removing an element from an array, or doing `splice` operations) requires you to create a new collection. Therefore, the `$patch` method also accepts a function to group these mutations that are difficult to implement with a patch object:

```js
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

<!-- TODO: disable this with `strictMode`, `{ noDirectPatch: true }` -->

The main difference between the two ways of mutating the store is that `$patch()` allows you to group multiple changes into a single entry in devtools. Also note that **directly modifying `state`, `$patch()` will also appear in devtools**, and can be time-traveled (not yet in Vue 3).

## Replacing `state` %{#replacing-the-state}%

You **cannot completely replace** the store's state because that would break its reactivity. However, you can *patch* it.

```js
// This doesn't actually replace `$state`
store.$state = { count: 24 }
// It calls `$patch()` internally:
store.$patch({ count: 24 })
```

You can also set the initial state for the entire application by mutating the `state` of the `pinia` instance. This is commonly used for the hydration process in SSR.

```js
pinia.state.value = {}
```

## Subscribing to the state %{#subscribing-to-the-state}%

Similar to Vuex's [subscribe method](https://vuex.vuejs.org/en/api/index.html#subscribe), you can watch the state and its changes through the store's `$subscribe()` method. The advantage of using `$subscribe()` over a regular `watch()` is that *subscriptions* only trigger once after *patch* (e.g., when using the function version above).

```js
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // same as cartStore.$id
  mutation.storeId // 'cart'
  // only available when mutation.type === 'patch object'
  mutation.payload // patch object passed to cartStore.$patch()

  // Persist the entire state to local storage whenever it changes.
  localStorage.setItem('cart', JSON.stringify(state))
})
```

By default, *state subscriptions* are bound to the component that added them (if the store is inside the component's `setup()`). This means they will be automatically removed when that component is unmounted. If you want to keep them after the component is unmounted, pass `{ detached: true }` as the second argument to *detach* the *state subscription* from the current component:

```vue
<script setup>
const someStore = useSomeStore()
// This subscription will be retained even after the component is unmounted
someStore.$subscribe(callback, { detached: true })
</script>
```

:::tip
You can use the `watch()` function on the `pinia` instance to watch the entire state.

```js
watch(
  pinia.state,
  (state) => {
    // Persist the entire state to local storage whenever it changes.
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```

:::
