# CLI

The GnocchiCSS CLI generates SCSS and CSS files from your configuration. Use it in projects where a build plugin isn't available, or in CI pipelines to produce static stylesheets.

## Installation

```bash
npm install -g @gnocchicss/cli
```

Or as a dev dependency:

```bash
npm install -D @gnocchicss/cli
```

## Usage

```bash
gnocchicss [options]
```

### Options

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--config` | `-c` | Path to a config file (JS, TS, or JSON) | — |
| `--out` | `-o` | Output directory for generated files | `gnocchi-output` |

### Examples

Generate with default settings:

```bash
gnocchicss
```

Generate with a custom config and output directory:

```bash
gnocchicss --config gnocchi.config.js --out src/styles
```

## Config File

The CLI accepts configuration in JS, TS, or JSON format. The config file should export a `UserConfig` object:

**gnocchi.config.js**
```javascript
export default {
    colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        success: '#22c55e',
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

**gnocchi.config.json**
```json
{
    "colors": {
        "primary": "#3b82f6",
        "secondary": "#8b5cf6"
    }
}
```

## Output

The CLI generates a set of SCSS and compiled CSS files in the output directory. These files contain all the utility mixins defined by your configuration and can be imported directly into your project:

```scss
@use 'gnocchi-output/index' as *;

.my-component {
    @include p-4;
    @include text-primary;
}
```