import { defineConfig, HeadConfig } from "vitepress";
import { zhSearch } from "./zh";

export const META_IMAGE = "";
export const isProduction =
  process.env.NETLIFY && process.env.CONTEXT === "production";

if (process.env.NETLIFY) {
  console.log("Netlify build", process.env.CONTEXT);
}

const productionHead: HeadConfig[] = [];

const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
  str
    .normalize("NFKD")
    // Remove accents
    .replace(rCombining, "")
    // Remove control characters
    .replace(rControl, "")
    // Replace special characters
    .replace(rSpecial, "-")
    // ensure it doesn't start with a number
    .replace(/^(\d)/, "_$1");

export const sharedConfig = defineConfig({
  // base: "./",
  lang: "zh-CN",
  outDir: "dist",
  title: "Wit-ui",
  appearance: "dark",

  markdown: {
    theme: {
      dark: "dracula-soft",
      light: "vitesse-light",
    },

    attrs: {
      leftDelimiter: "%{",
      rightDelimiter: "}%",
    },

    anchor: {
      slugify,
    },
  },

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],

    [
      "meta",
      { name: "wwads-cn-verify", content: "5878a7ab84fb43402106c575658472fa" },
    ],

    [
      "meta",
      {
        property: "og:type",
        content: "website",
      },
    ],

    [
      "meta",
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content: META_IMAGE,
      },
    ],

    // 百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?ac8827940afef25b13b258620ac158e2";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],

    ...(isProduction ? productionHead : []),
  ],

  themeConfig: {
    logo: "/logo.png",
    outline: [2, 3],

    socialLinks: [
      // { icon: 'x', link: 'https://twitter.com/posva' },
      {
        icon: "github",
        link: "https://github.com/wituijs/docs",
      },
      // {
      //   icon: 'discord',
      //   link: 'https://chat.vuejs.org',
      // },
    ],

    footer: {
      copyright: "Copyright © 2024 Wit-ui All Rights Reserved",
      message: "湘ICP备2024070110号",
    },

    editLink: {
      pattern: "https://github.com/wituijs/docs",
      text: "Suggest changes",
    },

    search: {
      provider: "algolia",
      options: {
        appId: "VSBV9FTW22",
        apiKey: "d3ec1a7ab9681dad7978e5d762a27666",
        indexName: "www_wit_ui_com_vsbv9ftw22_pages",
        locales: { ...zhSearch },
      },
    },

    carbonAds: {
      code: "CEBICK3I",
      // custom: 'CEBICK3M',
      placement: "routervuejsorg",
    },
  },
});
