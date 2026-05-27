# Development Configuration Recommendations %{#jianyi}%

- M1 + 8G or higher configuration Mac computer (strongly recommend using Apple Mac Studio or Apple MacBook Pro)
- Windows 11 + i7 + 16G RAM + SSD
- Development tools: VSCode or WebStorm (please do not use other tools)
- Browser debugging tools (edge > 99.0.1150.39 or chrome > 99.0.1150.39)

## Essential Software for Frontend Development %{#bibei}%

- vscode
- git
- node.js 20 or above

## VSCode Plugin Installation Instructions %{#shuoming}%

- Windows 11 install node: [node-v20.19.1-x64](https://nodejs.org/download/release/v20.19.1/node-v20.19.1-x64.msi)
- VSCode Chinese language plugin: Chinese (Simplified) (optional)
- VSCode quick syntax sugar template generation: element-plus-helper (enter wit- command in vue page to quickly generate syntax sugar template / enter el- to quickly generate code) (must install)
- VSCode code linting: Eslint (must install)
- CSS compilation format validation: stylelint (must install)
- Vue3 TS formatting: Vue - Official (must install)
- Import auto-completion: Auto Import (must install)
- Auto-complete HTML tags: Auto Close Tag (recommended)
- Auto-rename HTML tags: Auto Rename Tag (recommended)
- View imported dependency module sizes: Import Cost (optional)
- View git commit history: Git History (optional)

```bash
# Clone project
git clone https://www.....com/wit-ui/wit-pharm-main.git

# Install pnpm
npm install -g pnpm

# Install dependencies (pnpm, yarn, cnpm, npm all work, pnpm recommended)
pnpm i

# Local development
pnpm run dev

# Build production environment
pnpm run build:pro

# Build test environment
pnpm run build:test

# Build development environment
pnpm run build:dev

```

:::tip
When debugging micro-frontend applications locally, you need to configure the `VITE_APP_WUJIE_HOST` parameter in the main application's `env.development` file to the local sub-application IP address, including http protocol and port. This configuration is only effective in development environment, no need to configure for production and test environments.
:::
