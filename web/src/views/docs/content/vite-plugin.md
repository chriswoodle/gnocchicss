# Vite Plugin

The GnocchiCSS Vite plugin is the recommended way to use GnocchiCSS in Vite-powered projects. It compiles your configuration at build start and provides the generated SCSS as a virtual module.

## Installation

```bash
npm install -D gnocchicss @gnocchicss/core sass-embedded
```

Or with yarn:

```bash
yarn add -D gnocchicss @gnocchicss/core sass-embedded
```

## Setup

Add the plugin to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import { gnocchicssPlugin } from 'gnocchicss';

export default defineConfig({
    plugins: [
        gnocchicssPlugin({
            colors: {
                primary: '#3b82f6',
                secondary: '#8b5cf6',
                success: '#22c55e',
                danger: '#ef4444',
            },
        }),
    ],
});
```

The plugin accepts a `UserConfig` object directly — the same configuration format used by the CLI and core library.

## Usage

Once the plugin is configured, import `gnocchicss` in any SCSS file or `<style>` block:

```scss
@use 'gnocchicss' as *;

.button {
    @include px-4;
    @include py-2;
    @include bg-primary;
    @include text-white;
    @include rounded-md;
    @include border-none;
}
```

```demo
<button style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border-radius: 0.375rem; border: none; font-weight: 600; cursor: pointer;">Click me</button>
<button style="padding: 0.5rem 1rem; background: #8b5cf6; color: white; border-radius: 0.375rem; border: none; font-weight: 600; cursor: pointer;">Secondary</button>
<button style="padding: 0.5rem 1rem; background: #ef4444; color: white; border-radius: 0.375rem; border: none; font-weight: 600; cursor: pointer;">Danger</button>
```

### With Vue

```vue
<style lang="scss" scoped>
@use 'gnocchicss' as *;

.card {
    @include p-6;
    @include bg-white;
    @include rounded-lg;
    @include shadow-md;
}
</style>
```

```demo
<div style="padding: 1.5rem; background: white; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1); max-width: 320px;">
    <h4 style="margin: 0 0 0.5rem; font-weight: 700; color: #1f2937;">Vue Card</h4>
    <p style="margin: 0; color: #4b5563;">A scoped card component with padding, white background, rounded corners, and shadow.</p>
</div>
```

### With React (CSS Modules)

```scss
/* Button.module.scss */
@use 'gnocchicss' as *;

.button {
    @include px-4;
    @include py-2;
    @include bg-primary;
    @include text-white;
}
```

## How It Works

The plugin operates in two phases:

1. **Build start** — Your configuration is compiled into a set of virtual SCSS files containing all utility mixins.
2. **SCSS resolution** — A custom Sass importer intercepts `@use 'gnocchicss'` and resolves it to the generated virtual files.

Because the files are virtual, nothing is written to disk. The generated SCSS is held in memory and served directly to the Sass compiler.

## Configuration Options

The plugin accepts the full `UserConfig` schema:

```typescript
interface UserConfig {
    colors?: Record<string, string | Shades>;
    breakpoints?: Record<string, number>;
    opacity?: number[][];
}
```

### Colors

Define custom colors as simple hex values or full shade scales:

```typescript
gnocchicssPlugin({
    colors: {
        brand: '#6366f1',
        neutral: {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '200': '#e5e5e5',
            '300': '#d4d4d4',
            '400': '#a3a3a3',
            '500': '#737373',
            '600': '#525252',
            '700': '#404040',
            '800': '#262626',
            '900': '#171717',
            '950': '#0a0a0a',
        },
    },
})
```

### Breakpoints

Define responsive breakpoints (in pixels):

```typescript
gnocchicssPlugin({
    breakpoints: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
    },
})
```

## Framework Examples

### Vue + Vite

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { gnocchicssPlugin } from 'gnocchicss';

export default defineConfig({
    plugins: [
        vue(),
        gnocchicssPlugin({
            colors: {
                primary: '#3b82f6',
            },
        }),
    ],
});
```

### React + Vite

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { gnocchicssPlugin } from 'gnocchicss';

export default defineConfig({
    plugins: [
        react(),
        gnocchicssPlugin({
            colors: {
                primary: '#3b82f6',
            },
        }),
    ],
});
```
