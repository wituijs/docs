# 开发配置建议 %{#jianyi}%

- M1 + 8G 以上配置 Mac 电脑 （强烈推荐使用 Apple Mac Studio 或 Apple MacBook Pro）
- windows11 + i7 + 16G 内存 + 固态硬盘
- 开发工具 Vscode 或 WebStorm（请勿使用其他工具）
- 浏览器调试工具(edge > 99.0.1150.39 或 chrome > 99.0.1150.39)

## 前端开发必备软件 %{#bibei}%

- vscode
- git
- node.js 18以上

## vscode插件安装说明 %{#shuoming}%

- windows11安装node：[node-v18.20.4-x64](https://nodejs.org/download/release/v18.20.4/node-v18.20.4-x64.msi)
- vscode中文版插件：Chinese (Simplified)（可不安装）
- vscode快速生成语法糖模板: element-plus-helper（vue页面中输入wit-指令即可快速生成语法糖模板/输入el-快速生成代码）（必须安装）
- vscode代码校验: Eslint（必须安装）
- css编译时格式校验: stylelint（必须安装）
- vue3 Ts格式化: Vue - Official（必须安装）
- import 引入自动补全: Auto Import（必须安装）
- 自动补全 html 标签: Auto Close Tag（推荐安装）
- 自动重命名 html 标签: Auto Rename Tag（推荐安装）
- 查看你引入的依赖模块大小: Import Cost（可不安装）
- 查查看 git 提交历史: Git History（可不安装）

```bash
# 克隆项目
git clone https://www.....com/wit-ui/wit-pharm-main.git

# 安装pnpm
npm install -g pnpm

# 安装依赖（pnpm、yarn、cnpm、npm均可，推荐用pnpm）
pnpm i

# 本地开发
pnpm run dev

# 打包生产环境
pnpm run build:pro

# 打包测试环境
pnpm run build:test

# 打包开发环境
pnpm run build:dev

```

:::tip
如果在本地调试微前端应用时，须要在主应用的 `env.development` 文件里配置 `VITE_APP_WUJIE_HOST` 参数为本地子应用ip地址，带http协议与端口。此配置，只有开发环境有效，生产与测试环境无须配置无效。
:::