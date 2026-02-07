import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"开发配置建议","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md"}');
const _sfc_main = { name: "getting-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jianyi" tabindex="-1">开发配置建议 <a class="header-anchor" href="#jianyi" aria-label="Permalink to &quot;开发配置建议 %{#jianyi}%&quot;">​</a></h1><ul><li>M1 + 8G 以上配置 Mac 电脑 （强烈推荐使用 Apple Mac Studio 或 Apple MacBook Pro）</li><li>windows11 + i7 + 16G 内存 + 固态硬盘</li><li>开发工具 Vscode 或 WebStorm（请勿使用其他工具）</li><li>浏览器调试工具(edge &gt; 99.0.1150.39 或 chrome &gt; 99.0.1150.39)</li></ul><h2 id="bibei" tabindex="-1">前端开发必备软件 <a class="header-anchor" href="#bibei" aria-label="Permalink to &quot;前端开发必备软件 %{#bibei}%&quot;">​</a></h2><ul><li>vscode</li><li>git</li><li>node.js 20以上</li></ul><h2 id="shuoming" tabindex="-1">vscode插件安装说明 <a class="header-anchor" href="#shuoming" aria-label="Permalink to &quot;vscode插件安装说明 %{#shuoming}%&quot;">​</a></h2><ul><li>windows11安装node：<a href="https://nodejs.org/download/release/v20.19.1/node-v20.19.1-x64.msi" target="_blank" rel="noreferrer">node-v20.19.1-x64</a></li><li>vscode中文版插件：Chinese (Simplified)（可不安装）</li><li>vscode快速生成语法糖模板: element-plus-helper（vue页面中输入wit-指令即可快速生成语法糖模板/输入el-快速生成代码）（必须安装）</li><li>vscode代码校验: Eslint（必须安装）</li><li>css编译时格式校验: stylelint（必须安装）</li><li>vue3 Ts格式化: Vue - Official（必须安装）</li><li>import 引入自动补全: Auto Import（必须安装）</li><li>自动补全 html 标签: Auto Close Tag（推荐安装）</li><li>自动重命名 html 标签: Auto Rename Tag（推荐安装）</li><li>查看你引入的依赖模块大小: Import Cost（可不安装）</li><li>查查看 git 提交历史: Git History（可不安装）</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#7B7F8B", "--shiki-light": "#A0ADA0" })}"># 克隆项目</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#62E884", "--shiki-light": "#59873A" })}">git</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> clone</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> https://www.....com/wit-ui/wit-pharm-main.git</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#7B7F8B", "--shiki-light": "#A0ADA0" })}"># 安装pnpm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#62E884", "--shiki-light": "#59873A" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> install</span><span style="${ssrRenderStyle({ "--shiki-dark": "#BF9EEE", "--shiki-light": "#A65E2B" })}"> -g</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#7B7F8B", "--shiki-light": "#A0ADA0" })}"># 安装依赖（pnpm、yarn、cnpm、npm均可，推荐用pnpm）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#62E884", "--shiki-light": "#59873A" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> i</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#7B7F8B", "--shiki-light": "#A0ADA0" })}"># 本地开发</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#62E884", "--shiki-light": "#59873A" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> run</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#7B7F8B", "--shiki-light": "#A0ADA0" })}"># 打包生产环境</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#62E884", "--shiki-light": "#59873A" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> run</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> build:pro</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#7B7F8B", "--shiki-light": "#A0ADA0" })}"># 打包测试环境</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#62E884", "--shiki-light": "#59873A" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> run</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> build:test</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#7B7F8B", "--shiki-light": "#A0ADA0" })}"># 打包开发环境</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-dark": "#62E884", "--shiki-light": "#59873A" })}">pnpm</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> run</span><span style="${ssrRenderStyle({ "--shiki-dark": "#E7EE98", "--shiki-light": "#B56959" })}"> build:dev</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果在本地调试微前端应用时，须要在主应用的 <code>env.development</code> 文件里配置 <code>VITE_APP_WUJIE_HOST</code> 参数为本地子应用ip地址，带http协议与端口。此配置，只有开发环境有效，生产与测试环境无须配置无效。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gettingStarted as default
};
