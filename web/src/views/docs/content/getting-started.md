# Getting Started

GnocchiCSS is a utility-first SASS framework that brings compile-time checking and extensibility to your styles. Unlike class-based utility frameworks, GnocchiCSS uses SCSS mixins — giving you the power of utilities with the safety of your compiler.

## Installation

Install the core package and the compiler:

```bash
npm install gnocchicss @gnocchicss/core sass-embedded
```

Or with yarn:

```bash
yarn add gnocchicss @gnocchicss/core sass-embedded
```

## Basic Usage

Once installed, you can import GnocchiCSS in any SCSS file and start using utility mixins:

```scss
@use 'gnocchicss' as *;

.card {
    @include p-4;
    @include bg-white;
    @include text-black;
    @include rounded-lg;
    @include border-2;
    @include border-solid;
    @include border-gray-200;
}
```

```demo
<div style="padding: 1rem; background: white; color: black; border-radius: 0.5rem; border: 2px solid #e5e7eb; max-width: 320px;">
    <h4 style="margin: 0 0 0.5rem; font-weight: 700;">Card Title</h4>
    <p style="margin: 0; color: #374151;">This is what the <code>.card</code> mixin produces — padding, background, border, and rounded corners.</p>
</div>
```

This compiles to standard CSS at build time.

## Configuration

GnocchiCSS is configured through a plain object that lets you customize colors, breakpoints, and opacity scales.

```typescript
import { UserConfig } from '@gnocchicss/core';

const config: UserConfig = {
    colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        danger: '#ef4444',
    },
    breakpoints: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
    },
};
```

Colors can be simple hex strings or full shade objects with keys from `50` to `950`:

```typescript
const config: UserConfig = {
    colors: {
        brand: {
            '50': '#eff6ff',
            '100': '#dbeafe',
            '200': '#bfdbfe',
            '300': '#93c5d6',
            '400': '#60a5fa',
            '500': '#3b82f6',
            '600': '#2563eb',
            '700': '#1d4ed8',
            '800': '#1e40af',
            '900': '#1e3a8a',
            '950': '#172554',
        },
    },
};
```

## Integration

GnocchiCSS works anywhere SCSS is supported. For the best experience, use one of the official integrations:

- **Vite** — Use the [Vite Plugin](/docs/vite-plugin) for zero-config setup with hot reload support.
- **CLI** — Use the [CLI](/docs/cli) to generate standalone SCSS/CSS files for any project.

## What's Next

- Browse the [Cheatsheet](/cheatsheet) to see every available utility mixin.
- Read about the [Vite Plugin](/docs/vite-plugin) for seamless framework integration.
- Learn about the [CLI](/docs/cli) for standalone usage and CI pipelines.
