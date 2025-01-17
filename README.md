# gnocchicss

A utility-first CSS framework for sass. 

Inspired by TailwindCSS.

## Installation

```bash
yarn add gnocchicss
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
  @extend .text-black;
  @extend .bg-magenta;
}
```

Or use them in your html directly:

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
    @extend sm {
        @extend .text-black;
    }
}
```

For `hover`:

```scss
.myclass {
    @extend .text-black;

    @extend hover {
        @extend .text-slate;
    }

    // Or just regular scss
    /*
        &:hover {
            @extend .text-slate;
        }
    */
}
```
