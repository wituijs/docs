# witLock Screen Lock Component %{#witLock}%

`witLock` is a fully functional screen lock component, provides manual lock screen and auto lock screen features, supports password unlock, wallpaper switch and timeout logout, used to protect system security.

## Usage Example %{#demo}%

```vue
<template>
  <div class="app-container">
    <!-- Use in right toolbar -->
    <div class="right-toolbar">
      <witLock />
    </div>
    
    <!-- Application content -->
    <main>
      <!-- Main page content -->
    </main>
  </div>
</template>

<script lang="ts" setup>
// No additional configuration needed, component will automatically integrate into the system
</script>
```

## API

### Properties

| Property Name            | Type            | Default Value                  | Description                                           |
| :--------------------- | :-------------- | :------------------------- | :--------------------------------------------- |
| No additional properties             | -               | -                          | Component does not require external property configuration, all features managed through store   |

### Slots

| Slot Name               | Description                                           |
| :--------------------- | :--------------------------------------------- |
| No available slots             | -                                              | Component is fully implemented internally, does not provide external slots                 |

### Events

| Event Name               | Description                                           | Parameters                         |
| :--------------------- | :--------------------------------------------- | :--------------------------- |
| No custom events           | -                                              | -                            | Component manages state through store, does not directly expose events      |

## Features

### 1. Manual Lock Screen
- Click the lock icon in the right toolbar to manually lock the screen
- After locking, displays lock screen interface, requires password to unlock

### 2. Auto Lock Screen
- Automatically locks screen based on system configured idle time
- Can configure idle time through `sys_config:login_switch_idle_lock_time` in `systemConfigStore`

### 3. Timeout Logout
- Automatically logs out after set time without operation
- Can configure timeout time through `sys_config:login_switch_idle_logout_time` in `systemConfigStore`

### 4. Password Unlock
- Supports unlocking with account password or phone number
- Password verification uses MD5 encryption to compare with user password
- Automatically unlocks and resets password input field after verification passes

### 5. Wallpaper Switch
- Provides multiple preset wallpapers to choose from
- Click "Switch Wallpaper" text to randomly change lock screen background
- Supports custom wallpaper images

### 6. Internationalization Support
- All text content supports multi-language switching
- Uses `translate` function to implement internationalization

## Usage Tips

:::tip
1. **Dependency Management**:
   - Component depends on `settingsStore`, `systemConfigStore` and `userStore` for state management
   - Ensure these stores are correctly configured and initialized

2. **Configuration Notes**:
   - Auto lock screen time and timeout logout time are managed through system configuration
   - Can modify `sys_config:login_switch_idle_lock_time` and `sys_config:login_switch_idle_logout_time` parameters in system configuration

3. **Style Customization**:
   - Lock screen interface supports responsive design, adapts to different screen sizes
   - Can customize colors, fonts and other styles through CSS variables

4. **Security**:
   - Password verification uses MD5 encryption, improving security
   - Cannot close by clicking modal or pressing ESC key when locked

5. **Event Listening**:
   - Component automatically listens to mouse movement, keyboard key and scroll events to reset timer
   - Automatically cleans up event listeners when page unloads

6. **Wallpaper Management**:
   - System has 11 default wallpapers built-in
   - Can customize wallpapers by replacing images in `/assets/lock_images/` directory
:::
