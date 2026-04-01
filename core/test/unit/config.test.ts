import { describe, it, expect } from 'vitest';
import { mergeDefaultConfig } from '../../src/config.js';
import * as constants from '../../src/constants.js';

describe('mergeDefaultConfig', () => {
    it('should return all defaults when called with no arguments', () => {
        const config = mergeDefaultConfig();

        expect(config.breakpoints).toEqual(constants.BREAKPOINTS);
        expect(config.colors).toEqual(constants.COLORS);
        expect(config.opacity).toEqual(constants.OPACITY);
    });

    it('should return all defaults when called with empty object', () => {
        const config = mergeDefaultConfig({});

        expect(config.breakpoints).toEqual(constants.BREAKPOINTS);
        expect(config.colors).toEqual(constants.COLORS);
        expect(config.opacity).toEqual(constants.OPACITY);
    });

    it('should merge custom breakpoints with defaults', () => {
        const config = mergeDefaultConfig({
            breakpoints: { xs: 480 },
        });

        expect(config.breakpoints).toEqual({
            ...constants.BREAKPOINTS,
            xs: 480,
        });
    });

    it('should allow overriding a default breakpoint', () => {
        const config = mergeDefaultConfig({
            breakpoints: { sm: 500 },
        });

        expect(config.breakpoints.sm).toBe(500);
        expect(config.breakpoints.md).toBe(constants.BREAKPOINTS.md);
    });

    it('should merge custom colors with defaults', () => {
        const config = mergeDefaultConfig({
            colors: { brand: '#ff6600' },
        });

        expect(config.colors.brand).toBe('#ff6600');
        expect(config.colors.slate).toEqual(constants.COLORS.slate);
    });

    it('should allow overriding a default color with a shade map', () => {
        const customRed = {
            '50': '#fff0f0',
            '100': '#ffe0e0',
            '200': '#ffc0c0',
            '300': '#ffa0a0',
            '400': '#ff8080',
            '500': '#ff6060',
            '600': '#ff4040',
            '700': '#ff2020',
            '800': '#ff0000',
            '900': '#dd0000',
            '950': '#bb0000',
        };

        const config = mergeDefaultConfig({
            colors: { red: customRed },
        });

        expect(config.colors.red).toEqual(customRed);
    });

    it('should append custom opacity values to defaults', () => {
        const config = mergeDefaultConfig({
            opacity: [[33, 0.33]],
        });

        expect(config.opacity).toEqual([...constants.OPACITY, [33, 0.33]]);
    });

    it('should not modify defaults when no user config fields are set', () => {
        const before = { ...constants.BREAKPOINTS };
        mergeDefaultConfig({});
        expect(constants.BREAKPOINTS).toEqual(before);
    });

    it('should preserve all default colors when adding a new one', () => {
        const config = mergeDefaultConfig({
            colors: { brand: '#123456' },
        });

        const defaultColorNames = Object.keys(constants.COLORS);
        for (const name of defaultColorNames) {
            expect(config.colors[name]).toEqual(constants.COLORS[name]);
        }
    });
});
