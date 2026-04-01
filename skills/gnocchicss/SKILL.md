---
name: gnocchicss
description: Write styles using GnocchiCSS — a utility-first CSS framework for Sass that provides SCSS mixins instead of utility classes.
---

TRIGGER when: writing SCSS/Sass styles, creating Vue/React components with styles, or the user asks about gnocchicss utilities.
DO NOT TRIGGER when: writing plain CSS without Sass, or working on non-styling code.

## What is GnocchiCSS

GnocchiCSS is a utility-first CSS framework for Sass that generates SCSS mixins instead of utility classes. Instead of `class="p-4 bg-blue-500"`, you write:

```scss
@use "gnocchicss" as *;

.element {
  @include p-4;
  @include bg-blue-500;
}
```

## How to Import

Always import gnocchicss with the wildcard namespace:

```scss
@use "gnocchicss" as *;
```

## Mixin Naming Convention

Mixin names follow Tailwind-like naming but are used as `@include` directives:

### Spacing (base unit: 0.25rem)
- `p-{n}`, `px-{n}`, `py-{n}`, `pt-{n}`, `pr-{n}`, `pb-{n}`, `pl-{n}`, `ps-{n}`, `pe-{n}` - padding
- `m-{n}`, `mx-{n}`, `my-{n}`, `mt-{n}`, `mr-{n}`, `mb-{n}`, `ml-{n}`, `ms-{n}`, `me-{n}` - margin
- `m-auto`, `mx-auto`, `my-auto` etc. - auto margin
- `-m-{n}`, `-mt-{n}` etc. - negative margins
- `space-x-{n}`, `space-y-{n}` - space between children
- `gap-{n}`, `gap-x-{n}`, `gap-y-{n}` - flex/grid gap
- Sizes: 0, px, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

### Colors
Format: `{utility}-{color}-{shade}` or `{utility}-{color}-{shade}/{opacity}`

Color utilities: `bg-`, `text-`, `border-`, `divide-`

Special colors: `inherit`, `current`, `transparent`, `black`, `white`

Color families (each with shades 50-950): slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

Opacity: append `/{0-100}` in increments of 5 (e.g., `bg-blue-500/50`)

Examples:
```scss
@include bg-blue-500;
@include text-slate-700;
@include border-gray-200;
@include bg-black/50;        // 50% opacity black
@include text-red-600/75;    // 75% opacity
```

### Layout
- Display: `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `inline-grid`, `table`, `hidden`, `contents`
- Position: `static`, `relative`, `absolute`, `fixed`, `sticky`
- Inset: `top-{n}`, `right-{n}`, `bottom-{n}`, `left-{n}`, `inset-{n}`, `inset-x-{n}`, `inset-y-{n}` (supports fractions and negative values)
- Z-index: `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-auto`
- Overflow: `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll` (with `-x`/`-y` variants)
- Visibility: `visible`, `invisible`
- Float: `float-left`, `float-right`, `float-none`
- Box: `box-border`, `box-content`
- Aspect: `aspect-auto`, `aspect-square`, `aspect-video`
- Container: `container`, `container-sm`, `container-md`, `container-lg`, `container-xl`, `container-2xl`

### Flexbox & Grid
- `flex`, `flex-1`, `flex-auto`, `flex-initial`, `flex-none`
- `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse`
- `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`
- `flex-grow`, `flex-grow-0`, `flex-shrink`, `flex-shrink-0`
- `items-start`, `items-center`, `items-end`, `items-stretch`, `items-baseline`
- `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`
- `grid`, `grid-flow-row`, `grid-flow-col`, `grid-flow-dense`
- `order-{0-12}`, `order-first`, `order-last`, `order-none`

### Sizing
- Width: `w-auto`, `w-0`, `w-px`, `w-full`, `w-screen`, `w-min`, `w-max`, `w-fit`, `w-{size}`, `w-{fraction}` (1/2, 1/3, 2/3, 1/4, 3/4, etc.)
- Height: `h-auto`, `h-0`, `h-px`, `h-full`, `h-screen`, `h-min`, `h-max`, `h-fit`, `h-{size}`, `h-{fraction}`
- Size (width + height): `size-{n}`
- Min/Max: `min-w-{value}`, `max-w-{value}`, `min-h-{value}`, `max-h-{value}`

### Typography
- Font size: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` through `text-9xl`
- Font weight: `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`
- Line height: `leading-{3-10}`, `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`
- Text decoration: `underline`, `overline`, `line-through`, `no-underline`
- Text transform: `uppercase`, `lowercase`, `capitalize`, `normal-case`

### Borders
- Width: `border`, `border-0`, `border-2`, `border-4`, `border-8` (with `-t`/`-r`/`-b`/`-l` variants)
- Radius: `rounded`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`, `rounded-none` (with `-t`/`-r`/`-b`/`-l`/`-tl`/`-tr`/`-bl`/`-br` variants)
- Style: `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`
- Divide: `divide-x`, `divide-y`, `divide-x-{n}`, `divide-y-{n}`, `divide-{color}-{shade}`

### Effects
- Opacity: `opacity-{0-100}` (in increments of 5)
- Shadow: `shadow`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`, `shadow-none`
- Blend: `bg-blend-{mode}`, `mix-blend-{mode}`

## Responsive Design

Use breakpoint mixins with `@content` blocks (mobile-first, min-width):

```scss
.element {
  @include flex-col;       // Mobile default
  @include gap-4;

  @include sm {            // >= 640px
    @include flex-row;
  }
  @include md {            // >= 768px
    @include gap-6;
  }
  @include lg {            // >= 1024px
    @include gap-8;
  }
  @include xl {            // >= 1280px
    @include max-w-6xl;
  }
  @include 2xl {           // >= 1536px
    @include max-w-7xl;
  }
}
```

## State / Pseudo-class Mixins

```scss
.button {
  @include bg-blue-500;
  @include text-white;

  @include hover {
    @include bg-blue-600;
  }
  @include focus {
    @include outline;
  }
  @include active {
    @include bg-blue-700;
  }
}
```

## Complete Example

```scss
@use "gnocchicss" as *;

.card {
  @include bg-white;
  @include rounded-lg;
  @include shadow-md;
  @include p-6;
  @include border;
  @include border-gray-200;

  @include hover {
    @include shadow-lg;
  }

  @include md {
    @include p-8;
  }
}

.card-title {
  @include text-xl;
  @include font-bold;
  @include text-slate-900;
  @include mb-2;
}

.card-body {
  @include text-base;
  @include text-slate-600;
  @include leading-relaxed;
}

.button-primary {
  @include inline-flex;
  @include items-center;
  @include gap-2;
  @include px-4;
  @include py-2;
  @include bg-blue-500;
  @include text-white;
  @include font-medium;
  @include rounded-md;

  @include hover {
    @include bg-blue-600;
  }

  @include focus {
    @include outline;
  }
}

.grid-layout {
  @include grid;
  @include gap-6;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }
  @include lg {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Setup

### Vite Plugin (recommended)
```ts
// vite.config.ts
import { gnocchicssPlugin } from 'gnocchicss';

export default defineConfig({
  plugins: [
    gnocchicssPlugin({
      // optional config overrides
      colors: { brand: { 500: '#ff6600' } },
      breakpoints: { sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 },
    }),
  ],
});
```

### CLI
```bash
npx gnocchicss --config gnocchi.config.mjs --out src/styles
```

## Key Rules When Writing GnocchiCSS

1. Always use `@include` - these are Sass mixins, not CSS classes
2. Always import with `@use "gnocchicss" as *;` at the top of SCSS files
3. Responsive breakpoints wrap content: `@include md { @include flex-row; }`
4. States wrap content: `@include hover { @include bg-blue-600; }`
5. You can mix gnocchicss mixins with regular CSS properties freely
6. Negative values use a leading dash: `@include -mt-4;`
7. Opacity on colors uses slash notation in the mixin name: `@include bg-blue-500/50;`
8. The spacing scale base unit is 0.25rem (4px), so `p-4` = 1rem = 16px
