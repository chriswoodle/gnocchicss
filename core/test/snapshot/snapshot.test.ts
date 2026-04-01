import { describe, it, expect } from 'vitest';
import { prerender } from '../../src/index.js';

describe('snapshot: generated output', () => {
    it('should match snapshot for default config', async () => {
        const { virtualFileMapping } = await prerender({});

        // Snapshot the index file (list of all partials)
        expect(virtualFileMapping['index.scss']).toMatchSnapshot('index.scss');

        // Snapshot each generated partial individually so diffs are easy to locate
        const partials = Object.keys(virtualFileMapping)
            .filter((key) => key !== 'index.scss')
            .sort();

        for (const fileName of partials) {
            expect(virtualFileMapping[fileName]).toMatchSnapshot(fileName);
        }
    });

    it('should match snapshot for custom config', async () => {
        const { virtualFileMapping } = await prerender({
            colors: {
                brand: '#ff6600',
                accent: {
                    '50': '#fdf4ff',
                    '100': '#fae8ff',
                    '200': '#f5d0fe',
                    '300': '#f0abfc',
                    '400': '#e879f9',
                    '500': '#d946ef',
                    '600': '#c026d3',
                    '700': '#a21caf',
                    '800': '#86198f',
                    '900': '#701a75',
                    '950': '#4a044e',
                },
            },
            breakpoints: {
                sm: 640,
                md: 768,
                lg: 1024,
            },
        });

        // Snapshot color-dependent partials with custom config
        const colorPartials = Object.keys(virtualFileMapping)
            .filter((key) =>
                key.includes('color') ||
                key.includes('background') ||
                key.includes('divide') ||
                key.includes('opacity') ||
                key.includes('breakpoint')
            )
            .sort();

        for (const fileName of colorPartials) {
            expect(virtualFileMapping[fileName]).toMatchSnapshot(fileName);
        }
    });
});
