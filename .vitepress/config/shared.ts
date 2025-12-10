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

    // 爱站统计
    [
      "script",
      {},
      `
      !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3OJP1VqIt9Kt7AgH",ck:"3OJP1VqIt9Kt7AgH"});
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
        appId: "JBX2ZJ89K9",
        apiKey: "78a0466ad2b7506c2112531f76b2a921",
        indexName: "wit-ui",
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
