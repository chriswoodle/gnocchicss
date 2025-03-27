# gnocchicss

NOTE: This project is experimental and under active development. Use at your own risk.

A utility-first CSS framework for sass. 

Inspired by TailwindCSS.

## Installation

```bash
yarn add gnocchicss sass-embedded
```

## Usage with Vite

```ts
import gnocchicssPlugin from 'gnocchicss';

export default defineConfig({
  plugins: [gnocchicssPlugin()],
});
```
You can pass custom config to the plugin.

```ts
import gnocchicssPlugin from 'gnocchicss';

export default defineConfig({
  plugins: [gnocchicssPlugin({
    colors: {
      magenta: '#ff00ff',
    },
  })],
});
```

In your scss files, import the library and extend classes as needed:

```scss
@use "gnocchicss" as *;

.my-class {
  @include text-black;
  @include bg-magenta;
}
```

# Planned features
Use classes directly in html directly:
> TODO: feature planned
```html
<div class="text-black bg-magenta">Hello World</div>
```


# TailwindCSS compatibility

Gnocchicss is designed to be somewhat compatible with TailwindCSS. However, it is not a drop-in replacement.

Some features are not supported, such as arbitrary values, since GnocchiCss does not post process the CSS.

Prefixes are not supported such as `sm:` or `hover:`. 

Consider using the breakpoint or state mixins to achieve the same effect:

```scss
.myclass {
    @include sm {
        @include text-black;
    }
}
```

For `hover`:

```scss
.myclass {
    @include text-black;

    @include hover {
        @include text-slate;
    }

    // Or just regular scss
    /*
        &:hover {
            @include text-slate;
        }
    */
}
```