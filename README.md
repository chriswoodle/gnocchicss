# GnocchiCSS

A utility-first CSS framework for Sass. Write expressive, composable styles using SCSS mixins instead of class names.

> **Status:** Experimental — under active development.

[![CI](https://github.com/chriswoodle/gnocchicss/actions/workflows/ci.yml/badge.svg)](https://github.com/chriswoodle/gnocchicss/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.txt)

## Features

- **Sass-native** — generates SCSS mixins you `@use` directly, no PostCSS or runtime required
- **60+ utility generators** — layout, flexbox, grid, spacing, typography, colors, effects, and more
- **Responsive mixins** — `@include sm { ... }` instead of class prefixes
- **State mixins** — `@include hover { ... }`, `@include focus { ... }`
- **Customizable** — configure colors, breakpoints, and opacity via a simple config object
- **Vite plugin** — zero-config integration with virtual Sass modules
- **Standalone CLI** — generate SCSS files without a bundler
- **Type-safe config** — validated at runtime with Zod

## Quick Start

### Vite Plugin

```bash
npm install gnocchicss @gnocchicss/core sass-embedded
```

```ts
// vite.config.ts
import { gnocchicssPlugin } from 'gnocchicss';

export default defineConfig({
  plugins: [gnocchicssPlugin()],
});
```

```scss
// styles.scss
@use "gnocchicss" as *;

.card {
  @include p-4;
  @include bg-white;
  @include rounded-lg;
  @include shadow;

  @include sm {
    @include p-8;
  }

  @include hover {
    @include bg-slate-50;
  }
}
```

### CLI

```bash
npm install @gnocchicss/cli @gnocchicss/core sass-embedded
```

```bash
# Generate with defaults
npx gnocchicss

# Custom config and output directory
npx gnocchicss --config gnocchi.config.mjs --out src/styles
```

## Configuration

Pass a config object to the Vite plugin or export one from your config file:

```js
// gnocchi.config.mjs
export default {
  colors: {
    brand: '#ff6600',
    accent: {
      50: '#eff6ff',
      500: '#3b82f6',
      950: '#172554',
    },
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};
```

**Defaults** include a comprehensive color palette, 5 breakpoints (sm through 2xl), and opacity values from 0–100.

## Contributing

```bash
# Install dependencies
yarn

# Setup VS Code TypeScript SDK
yarn dlx @yarnpkg/sdks vscode

# Build
yarn build

# Run tests
yarn test
```

## License

[MIT](LICENSE.txt) — Copyright 2025 GnocchiCSS