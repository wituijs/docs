# Action %{#actions}%

<VueSchoolLink
  href="https://vueschool.io/lessons/synchronous-and-asynchronous-actions-in-pinia"
  title="Learn all about actions in Pinia"
/>

Actions are the equivalent of [methods](https://v3.vuejs.org/guide/data-methods.html#methods) in components. They can be defined with the `actions` property in `defineStore()`, **and they are the perfect place to define business logic.**

```js
export const useCounterStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})
```

Similar to [getters](./getters.md), actions can access the **entire store instance** through `this` and support **full type inference (and autocompletion ✨)**. **The difference is that `actions` can be asynchronous**, you can `await` inside them for any API call, as well as other actions! Here's an example using [Mande](https://github.com/posva/mande). Note that it doesn't matter what library you use, as long as you get a `Promise`, you can even use the native `fetch` function (in browsers):

```js
import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
    // ...
  }),

  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(`Welcome back ${this.userData.name}!`)
      } catch (error) {
        showTooltip(error)
        // Let the form component display the error
        return error
      }
    },
  },
})
```

You are also completely free to set any parameters you want and return any results. When calling an action, all types will be automatically inferred.

Actions can be called like functions or regular methods:

```vue
<script setup>
const store = useCounterStore()
// Call action as a method of the store
store.randomizeCounter()
</script>
<template>
  <!-- Even in templates -->
  <button @click="store.randomizeCounter()">Randomize</button>
</template>
```

## Accessing other stores' actions %{#accessing-other-stores-actions}%

To use another store, simply call it inside the *action*:

```js
import { useAuthStore } from './auth-store'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    preferences: null,
    // ...
  }),
  actions: {
    async fetchUserPreferences() {
      const auth = useAuthStore()
      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      } else {
        throw new Error('User must be authenticated')
      }
    },
  },
})
```

## Usage with the Options API %{#usage-with-the-options-api}%

<VueSchoolLink
  href="https://vueschool.io/lessons/access-pinia-actions-in-the-options-api"
  title="Access Pinia Getters via the Options API"
/>

In the following example, you can assume the relevant store has already been created:

```js
// Example file path:
// ./src/stores/counter.js

import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
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
  methods: {
    incrementAndPrint() {
      this.counterStore.increment()
      console.log('New Count:', this.counterStore.count)
    },
  },
})
</script>
```

### Without `setup()` %{#without-setup}%

If you don't like using the Composition API, you can also use the `mapActions()` helper function to map action properties to methods in your component.

```js
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  methods: {
    // Access this.increment() inside the component
    // Same as calling from store.increment()
    ...mapActions(useCounterStore, ['increment'])
    // Same as above, but register it as this.myOwnName()
    ...mapActions(useCounterStore, { myOwnName: 'increment' }),
  },
}
```

## Subscribing to actions %{#subscribing-to-actions}%

You can observe actions and their results through `store.$onAction()`. The callback function passed to it will be executed before the action itself. `after` handles promises after the action resolves, allowing you to execute a callback function after the action resolves. Similarly, `onError` allows you to execute a callback function when the action throws an error or rejects. These functions are very useful for tracking runtime errors, similar to [this tip in the Vue docs](https://v3.vuejs.org/guide/tooling/deployment.html#tracking-runtime-errors).

Here's an example that logs before running an action and after the action resolves/rejects.

```js
const unsubscribe = someStore.$onAction(
  ({
    name, // action name
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after action returns or resolves
    onError, // hook when action throws or rejects
  }) => {
    // Provide a shared variable for this specific action call
    const startTime = Date.now()
    // This will trigger before the "store" action executes
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // This will trigger after the action successfully completes
    // It awaits any returned promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // This will trigger if the action throws or returns a rejected promise
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// Manually remove the listener
unsubscribe()
```

By default, *action subscriptions* are bound to the component that added them (if the store is inside the component's `setup()`). This means they will be automatically removed when that component is unmounted. If you want to keep them after the component is unmounted, pass `true` as the second argument to the *action subscription* to detach it from the current component:

```vue
<script setup>
const someStore = useSomeStore()
// This subscription will be retained even after the component is unmounted
someStore.$onAction(callback, true)
</script>
```
