# @gnocchicss/cli

CLI tool for [GnocchiCSS](https://github.com/chriswoodle/gnocchicss). Generates SCSS files from a custom config.

## Installation

```bash
yarn add @gnocchicss/cli sass-embedded
```

## Usage

```bash
# Generate with default config
gnocchicss

# Custom config and output directory
gnocchicss --config gnocchi.config.mjs --out src/styles
```

## Options

| Option | Alias | Description | Default |
| --- | --- | --- | --- |
| `--config` | `-c` | Path to config file (JS/MJS/JSON) | None (uses defaults) |
| `--out` | `-o` | Output directory | `gnocchi-output` |

## Config file

```js
// gnocchi.config.mjs
export default {
  colors: {
    'brand': '#ff6600',
    'accent': '#0066ff',
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
  },
};
```

JSON configs are also supported:

```json
{
  "colors": {
    "brand": "#ff6600",
    "accent": "#0066ff"
  }
}
```
