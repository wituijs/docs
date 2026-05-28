# witPlayer Video Player Component %{#witPlayer}%

`witPlayer` is a lightweight video player component that supports MP4, HLS/M3U8, and live streaming, perfectly adapted for mobile devices. Compact size of only 12KB (Gzipped), zero dependencies, 100% TypeScript, providing a simple and easy-to-use API interface. [View Demo>>](https://www.wit-ui.com/witplayer/#demo)

## Features %{#features}%

- **Multi-format Support**: Supports mainstream video formats including MP4, HLS/M3U8, FLV, etc.
- **Live Streaming Support**: Perfect support for HLS live streaming with low latency playback
- **Mobile Adaptation**: Smooth touch interaction, responsive layout
- **Lightweight and Easy**: Compact size, simple API, quick integration
- **Danmaku Support**: Supports sending danmaku (bullet comments) functionality

## Usage Example %{#dome}%

### Basic Usage

```html
<!-- 1. Include the player -->
<script src="./witplayer.js"></script>

<!-- 2. Create container -->
<div id="player"></div>

<!-- 3. Initialize player -->
<script>
  const player = new witplayer({
    container: '#player',
    src: 'video.m3u8',
    isM3u8: true
  })
</script>
```

### MP4 Video Playback

```html
<script>
  const player = new witplayer({
    container: '#player',
    src: 'video.mp4',
    isM3u8: false
  })
</script>
```

### Live Stream Playback

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

### Initialization Configuration

| Property Name | Type | Default Value | Description |
| :------ | :------ | :------ | :------ |
| `container` | [`String, HTMLElement`] | - | Player container, supports selector string or DOM element |
| `src` | [`String`] | - | Video URL |
| `isM3u8` | [`Boolean`] | `false` | Whether it is M3U8 format |
| `live` | [`Boolean`] | `false` | Whether it is a live stream |
| `autoplay` | [`Boolean`] | `false` | Whether to autoplay |
| `poster` | [`String`] | - | Video poster image |
| `volume` | [`Number`] | `1` | Initial volume (0-1) |

### Methods

| Method Name | Description | Parameters |
| :------ | :------ | :------ |
| `play()` | Play video | - |
| `pause()` | Pause video | - |
| `stop()` | Stop playback | - |
| `seek(time)` | Jump to specified time point | `time`: Time (seconds) |
| `setVolume(value)` | Set volume | `value`: Volume value (0-1) |
| `sendDanmaku(text)` | Send danmaku | `text`: Danmaku content |
| `destroy()` | Destroy player instance | - |

### Events

| Event Name | Description | Callback Parameters |
| :------ | :------ | :------ |
| `play` | Triggered when video starts playing | - |
| `pause` | Triggered when video is paused | - |
| `ended` | Triggered when video playback ends | - |
| `error` | Triggered when playback error occurs | `error`: Error message |
| `timeupdate` | Triggered when playback time updates | `currentTime`: Current playback time |

:::tip
1. Player support for HLS/M3U8 format requires browser support or including hls.js library
2. Mobile devices automatically adapt touch interaction with gesture control support
3. Player is lightweight at only 12KB (Gzipped) with zero dependencies
4. Complete TypeScript type definitions for better development experience
5. For more configuration options and advanced usage, please refer to the official documentation
:::
