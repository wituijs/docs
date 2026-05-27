# Using a Store Outside of a Component %{#using-a-store-outside-of-a-component}%

Pinia stores rely on the `pinia` instance to share the same store instance across all calls. Most of the time, simply calling your defined `useStore()` function works out of the box. For example, in `setup()`, you don't need to do anything else. But outside of components, things are a bit different.
Actually, `useStore()` automatically injects the `pinia` instance from your `app`. This means if the `pinia` instance cannot be automatically injected, you must manually provide it to the `useStore()` function.
You can solve this problem in different ways depending on your application.

## Single Page Applications %{#single-page-applications}%

If you're not doing any SSR (Server-Side Rendering), any call to `useStore()` will work correctly after installing the pinia plugin with `app.use(pinia)`:

```js
import { useUserStore } from '@/stores/user'
import { createApp } from 'vue'
import App from './App.vue'

// ❌  Fails because it's called before creating pinia
const userStore = useUserStore()

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// ✅ Works because the pinia instance is now active
const userStore = useUserStore()
```

The easiest way to ensure the pinia instance is active is to put the `useStore()` call inside a function that will only execute after pinia is installed.

Let's look at an example of using a store in Vue Router's navigation guards.

```js
import { createRouter } from 'vue-router'
const router = createRouter({
  // ...
})

// ❌ This will fail due to import order
const store = useStore()

router.beforeEach((to, from, next) => {
  // We want to use the store here
  if (store.isLoggedIn) next()
  else next('/login')
})

router.beforeEach((to) => {
  // ✅ This works because the router starts navigating after it's mounted,
  // and Pinia is already installed at that time.
  const store = useStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})
```

## SSR Apps %{#ssr-apps}%

When dealing with server-side rendering, you will have to pass the `pinia` instance to `useStore()`. This prevents pinia from sharing global state between different application instances.
