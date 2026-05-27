# Plugins %{#plugins}%

Thanks to the underlying API support, Pinia stores now fully support extensions. Here's what you can extend:

- Add new properties to stores
- Add new options when defining stores
- Add new methods to stores
- Wrap existing methods
- Change or even cancel actions
- Implement side effects like [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Apply plugins **only** to specific stores

Plugins are added to the pinia instance via `pinia.use()`. The simplest example is adding a static property to all stores by returning an object.

```js
import { createPinia } from 'pinia'

// A property named `secret` will be added to every created store.
// After installing this plugin, the plugin can be saved in different files
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

const pinia = createPinia()
// Pass the plugin to Pinia
pinia.use(SecretPiniaPlugin)

// In another file
const store = useStore()
store.secret // 'the cake is a lie'
```

This is useful for adding global objects like routers, modals, or toast managers.

## Introduction %{#introduction}%

A Pinia plugin is a function that can optionally return properties to add to the store. It receives an optional parameter, the *context*.

```js
export function myPiniaPlugin(context) {
  context.pinia // The pinia created with `createPinia()`. 
  context.app // The current app created with `createApp()` (Vue 3 only).
  context.store // The store this plugin wants to extend
  context.options // The optional object passed to `defineStore()` when defining the store.
  // ...
}
```

Then pass this function to `pinia` using `pinia.use()`:

```js
pinia.use(myPiniaPlugin)
```

Plugins will only apply to stores created **after `pinia` is passed to the app**, otherwise they won't take effect.

## Augmenting a Store %{#augmenting-a-store}%

You can add specific properties to every store by returning an object containing those properties in a plugin:

```js
pinia.use(() => ({ hello: 'world' }))
```

You can also set the property directly on the `store`, but **if possible, use the return object method so they can be automatically tracked by devtools**:

```js
pinia.use(({ store }) => {
  store.hello = 'world'
})
```

Any properties returned by the plugin will be automatically tracked by devtools, so if you want to debug the `hello` property in devtools, to make devtools track `hello`, make sure to add it to `store._customProperties` **in dev mode**:

```js
// Example above
pinia.use(({ store }) => {
  store.hello = 'world'
  // Make sure your build tool can handle this, webpack and vite should handle it by default.
  if (process.env.NODE_ENV === 'development') {
    // Add the keys you set in the store
    store._customProperties.add('hello')
  }
})
```

It's worth noting that every store is wrapped with [`reactive`](https://vuejs.org/api/reactivity-core.html#reactive), so it can automatically unwrap any Ref it contains (`ref()`, `computed()`...).

```js
const sharedRef = ref('shared')
pinia.use(({ store }) => {
  // Each store has its own `hello` property
  store.hello = ref('secret')
  // It will be automatically unwrapped
  store.hello // 'secret'

  // All stores share the value of the `shared` property
  store.shared = sharedRef
  store.shared // 'shared'
})
```

This is why you can access all computed properties without `.value`, and why they are reactive.

### Adding new state %{#adding-new-state}%

If you want to add new state properties to the store or properties used during server-side rendering hydration, **you must add them in two places**.

- On `store`, so you can access it with `store.myState`.
- On `store.$state`, so it can be used in devtools and **properly serialized during SSR**.

Additionally, you'll likely use `ref()` (or other reactivity APIs) to share the same value across different reads:

```js
import { toRef, ref } from 'vue'

pinia.use(({ store }) => {
  // To properly handle SSR, we need to ensure we're not overwriting any
  // existing value
  if (!Object.prototype.hasOwnProperty(store.$state, 'hasError')) {
    // Define hasError in the plugin, so each store has its own
    // hasError state
    const hasError = ref(false)
    // Set the variable on `$state`, allowing it to be serialized during SSR.
    store.$state.hasError = hasError
  }
  // We need to transfer the ref from state to store
  // This way, both store.hasError and store.$state.hasError can access
  // and share the same variable
  // See https://vuejs.org/api/reactivity-utilities.html#toref
  store.hasError = toRef(store.$state, 'hasError')

  // In this case, it's better not to return `hasError`
  // as it will be displayed in the `state` section of devtools
  // If we return it, devtools will display it twice.
})
```

Note that in a plugin, state mutations or additions (including calling `store.$patch()`) happen before the store is hydrated, **so they won't trigger any subscription functions**.

:::warning
If you are using **Vue 2**, Pinia, like Vue, is subject to the [same reactivity limitations](https://v2.vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats). When creating new state properties like `secret` and `hasError`, you need to use `Vue.set()` (Vue 2.7) or `set()` from `@vue/composition-api` (Vue < 2.7).

```js
import { set, toRef } from '@vue/composition-api'
pinia.use(({ store }) => {
  if (!Object.prototype.hasOwnProperty(store.$state, 'hello')) {
    const secretRef = ref('secret')
    // If this data is to be used during SSR
    // you should set it on the `$state` property
    // so it will be serialized and received during hydration
    set(store.$state, 'secret', secretRef)
    // Set directly on the store so you can access it.
    // Both ways work: `store.$state.secret` / `store.secret`.
    set(store, 'secret', secretRef)
    store.secret // 'secret'
  }
})
```

:::

## Adding new external properties %{#adding-new-external-properties}%

When adding external properties, class instances from third-party libraries, or non-reactive simple values, you should wrap them with `markRaw()` before passing them to pinia. Here's an example of adding a router to every store:

```js
import { markRaw } from 'vue'
// Adjust according to your router location
import { router } from './router'

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
```

## Calling `$subscribe` inside plugins %{#calling-subscribe-inside-plugins}%

You can also use [store.$subscribe](./state.md#subscribing-to-the-state) and [store.$onAction](./actions.md#subscribing-to-actions) in plugins.

```ts
pinia.use(({ store }) => {
  store.$subscribe(() => {
    // React to store changes
  })
  store.$onAction(() => {
    // React to store actions
  })
})
```

## Adding new options %{#adding-new-options}%

When defining a store, you can create new options to use them in plugins. For example, you can create a `debounce` option that allows you to debounce any action.

```js
defineStore('search', {
  actions: {
    searchContacts() {
      // ...
    },
  },

  // This will be read by a plugin later
  debounce: {
    // Debounce action searchContacts by 300ms
    searchContacts: 300,
  },
})
```

Then, the plugin can read this option to wrap the action and replace the original action:

```js
// Use any debounce library
import debounce from 'lodash/debounce'

pinia.use(({ options, store }) => {
  if (options.debounce) {
    // We're overwriting these actions with new ones
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce[action]
      )
      return debouncedActions
    }, {})
  }
})
```

Note that when using setup syntax, custom options are passed as the 3rd argument:

```js
defineStore(
  'search',
  () => {
    // ...
  },
  {
    // This will be read by a plugin later
    debounce: {
      // Debounce action searchContacts by 300ms
      searchContacts: 300,
    },
  }
)
```

## TypeScript

All the above features have type support, so you never need to use `any` or `@ts-ignore`.

### Typing plugins %{#typing-plugins}%

A Pinia plugin can be typed as follows:

```ts
import { PiniaPluginContext } from 'pinia'

export function myPiniaPlugin(context: PiniaPluginContext) {
  // ...
}
```

### Typing new store properties %{#typing-new-store-properties}%

When adding new properties to the store, you should also extend the `PiniaCustomProperties` interface.

```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    // By using a setter, we can allow both strings and references.
    set hello(value: string | Ref<string>)
    get hello(): string

    // You can also define simpler values
    simpleNumber: number

    // Add router (#adding-new-external-properties)
    router: Router
  }
}
```

Then, you can safely write and read it:

```ts
pinia.use(({ store }) => {
  store.hello = 'Hola'
  store.hello = ref('Hola')

  store.simpleNumber = Math.random()
  // @ts-expect-error: we haven't typed this correctly
  store.simpleNumber = ref(Math.random())
})
```

`PiniaCustomProperties` is a generic type that allows you to reference store properties. Consider this example, how to type when copying initial options to `$options` (this only works for option stores):

```ts
pinia.use(({ options }) => ({ $options: options }))
```

We can type this using the 4 generic types of `PiniaCustomProperties`:

```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties<Id, S, G, A> {
    $options: {
      id: Id
      state?: () => S
      getters?: G
      actions?: A
    }
  }
}
```

:::tip
When extending types in generics, their names must **match exactly as in the source code**. `Id` cannot be named `id` or `I`, `S` cannot be named `State`. Here's what each letter means:

- S: State
- G: Getters
- A: Actions
- SS: Setup Store / Store

:::

### Typing new state %{#typing-new-state}%

When adding new state properties (including both `store` and `store.$state`), you need to add the type to `PiniaCustomStateProperties`. Unlike `PiniaCustomProperties`, it only accepts the `State` generic:

```ts
import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomStateProperties<S> {
    hello: string
  }
}
```

### Typing new creation options %{#typing-new-creation-options}%

When creating new options for `defineStore()`, you should extend `DefineStoreOptionsBase`. Unlike `PiniaCustomProperties`, it only exposes two generics: State and Store types, allowing you to limit the available types for definition options. For example, you can use action names:

```ts
import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    // Any action can define a debounce millisecond number
    debounce?: Partial<Record<keyof StoreActions<Store>, number>>
  }
}
```

:::tip
There's also a `StoreGetters` type that can extract *getters* from a store type. You can also extend options for *setup store* or *option store* by extending `DefineStoreOptions` or `DefineSetupStoreOptions` types.
:::

## Nuxt.js %{#nuxt-js}%

When using pinia in Nuxt, you must first create a [Nuxt plugin](https://nuxt.com/docs/guide/directory-structure/plugins). This way you can access the `pinia` instance:

```ts
// plugins/myPiniaPlugin.js
import { PiniaPluginContext } from 'pinia'
import { Plugin } from '@nuxt/types'

function MyPiniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation) => {
    // React to store changes
    console.log(`[🍍 ${mutation.storeId}]: ${mutation.type}.`)
  })

  // Note that if you're using TS, you must add types.
  return { creationTime: new Date() }
}

const myPlugin: Plugin = ({ $pinia }) => {
  $pinia.use(MyPiniaPlugin)
}

export default myPlugin
```

Note the above example uses TypeScript. If you're using a `.js` file, you must remove the type annotations `PiniaPluginContext` and `Plugin` and their import statements.
