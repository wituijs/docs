<template>

<a
    class="banner mp"
    href="https://github.com/wituijs/docs"
    target="_blank"
  >
    <span>
      <p class="extra-info">设计文档</p>
      <p class="heading">获取Wit-ui架构</p>
      <p class="extra-info">问题解答</p>
    </span>
  </a>


  <a
    class="banner mp"
    href="https://qm.qq.com/cgi-bin/qm/qr?k=64jaoJdFLor7Adjd6vVPNTrJh6uZEvIV&jump_from=webapi&authKey=sORB9CvduAj/DYPf9tqg6IR5XNj+Tbrl/MfWR+iBSN0Y1SZlH0njL0PcasQqusMK"
    target="_blank"
  >
    <span>
      <p class="extra-info">同道中人</p>
      <p class="heading">QQ技术交流群：379224645</p>
      <p class="extra-info">问题解答</p>
    </span>
  </a>

  <a
    class="banner cert"
    href="https://www.wit-ui.com/pricing.html"
    target="_blank"
  >
    <span>
      <p class="extra-info">获取源码</p>
      <p class="heading">作者微信：wit-ui</p>
      <p class="extra-info">问题解答</p>
    </span>
  </a>
</template>

<style scoped>
.banner {
  margin: 0.25rem 0;
  padding: 0.4rem 0;
  border-radius: 14px;
  position: relative;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  background-color: var(--vp-c-bg-alt);
  border: 2px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;
}

.banner:last-of-type {
  margin-bottom: 1rem;
}

.banner:hover {
  border: 2px solid var(--vp-c-brand-1);
}

.banner.cert:hover {
  border: 2px solid var(--vp-c-green-1);
}

.banner img {
  transition: transform 0.5s;
  transform: scale(1.25);
}
.banner:hover img {
  transform: scale(1.75);
}

.banner .extra-info {
  color: var(--vp-c-text-1);
  opacity: 0;
  font-size: 0.7rem;
  padding-left: 0.1rem;
  transition: opacity 0.5s;
}

.banner .heading {
  background-image: linear-gradient(
    120deg,
    var(--vp-c-brand-3) 16%,
    var(--vp-c-brand-2),
    var(--vp-c-brand-1)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.banner.cert .heading {
  background-image: linear-gradient(
    120deg,
    var(--vp-c-green-3) 16%,
    var(--vp-c-green-2),
    var(--vp-c-green-1)
  );
}

.banner:hover .extra-info {
  opacity: 0.9;
}
</style>

<style>
.VPDocAsideCarbonAds{
  display:none;
}
</style>