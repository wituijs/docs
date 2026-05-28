# witPlayer 视频播放器组件 %{#witPlayer}%

`witPlayer`是一个轻量级视频播放器组件，支持 MP4、HLS/M3U8、直播流，完美适配移动端。体积小巧仅12KB（Gzipped），零依赖，100% TypeScript编写，提供简洁易用的API接口。[查看效果>>](https://www.wit-ui.com/witplayer/#demo)

## 特性 %{#features}%

- **多格式支持**：支持 MP4、HLS/M3U8、FLV 等主流视频格式
- **直播支持**：完美支持 HLS 直播流，低延迟播放
- **移动端适配**：触摸交互流畅，响应式布局
- **轻量易用**：体积小巧，API 简洁，快速集成
- **弹幕支持**：支持发送弹幕功能

## 用法实例 %{#dome}%

### 基础用法

```html
<!-- 1. 引入播放器 -->
<script src="./witplayer.js"></script>

<!-- 2. 创建容器 -->
<div id="player"></div>

<!-- 3. 初始化播放器 -->
<script>
  const player = new witplayer({
    container: '#player',
    src: 'video.m3u8',
    isM3u8: true
  })
</script>
```

### MP4视频播放

```html
<script>
  const player = new witplayer({
    container: '#player',
    src: 'video.mp4',
    isM3u8: false
  })
</script>
```

### 直播流播放

```html
<script>
  const player = new witplayer({
    container: '#player',
    src: 'https://example.com/live/stream.m3u8',
    isM3u8: true,
    live: true
  })
</script>
```

## API

### 初始化配置

| 属性名 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `container` | [`String, HTMLElement`] | - | 播放器容器，支持选择器字符串或DOM元素 |
| `src` | [`String`] | - | 视频地址 |
| `isM3u8` | [`Boolean`] | `false` | 是否为M3U8格式 |
| `live` | [`Boolean`] | `false` | 是否为直播流 |
| `autoplay` | [`Boolean`] | `false` | 是否自动播放 |
| `poster` | [`String`] | - | 视频封面图 |
| `volume` | [`Number`] | `1` | 初始音量（0-1） |

### 方法

| 方法名 | 描述 | 参数 |
| :------ | :------ | :------ |
| `play()` | 播放视频 | - |
| `pause()` | 暂停视频 | - |
| `stop()` | 停止播放 | - |
| `seek(time)` | 跳转到指定时间点 | `time`: 时间（秒） |
| `setVolume(value)` | 设置音量 | `value`: 音量值（0-1） |
| `sendDanmaku(text)` | 发送弹幕 | `text`: 弹幕内容 |
| `destroy()` | 销毁播放器实例 | - |

### 事件

| 事件名 | 描述 | 回调参数 |
| :------ | :------ | :------ |
| `play` | 视频开始播放时触发 | - |
| `pause` | 视频暂停时触发 | - |
| `ended` | 视频播放结束时触发 | - |
| `error` | 播放出错时触发 | `error`: 错误信息 |
| `timeupdate` | 播放时间更新时触发 | `currentTime`: 当前播放时间 |

:::tip
1. 播放器支持HLS/M3U8格式需要浏览器支持或引入hls.js库
2. 移动端自动适配触摸交互，支持手势控制
3. 播放器体积小巧，仅12KB（Gzipped），零依赖
4. 完整的TypeScript类型定义，提供更好的开发体验
5. 更多配置选项和高级用法请参考官方文档
:::
