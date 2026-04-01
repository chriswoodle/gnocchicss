#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import { App } from './app.js';

const cli = meow(`
  Usage
    $ gnocchicss [options]

  Options
    --config, -c  Path to config file (JS/TS/JSON)
    --out, -o     Output directory (default: gnocchi-output)

  Examples
    $ gnocchicss
    $ gnocchicss --config gnocchi.config.js --out src/styles
`, {
    importMeta: import.meta,
    flags: {
        config: {
            type: 'string',
            shortFlag: 'c',
        },
        out: {
            type: 'string',
            shortFlag: 'o',
            default: 'gnocchi-output',
        },
    },
});

render(<App configPath={cli.flags.config} outDir={cli.flags.out} />);
