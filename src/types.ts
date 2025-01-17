import { z } from "zod";

export interface RuleGenerator {
    fileName?: string;
    generate: () => GeneratedPartial;
}

export interface Rule {
    name: string;
    rule: string;
}

export interface GeneratedPartial {
    output: string;
}

const ShadeSchema = z.object({
    '50': z.string(),
    '100': z.string(),
    '200': z.string(),
    '300': z.string(),
    '400': z.string(),
    '500': z.string(),
    '600': z.string(),
    '700': z.string(),
    '800': z.string(),
    '900': z.string(),
    '950': z.string(),
});

const ColorsSchema = z.record(z.union([z.string(), ShadeSchema]));

export type Colors = z.infer<typeof ColorsSchema>;
export type ColorName = keyof Colors;
export type Shades = Colors[ColorName];

const OpacitySchema = z.array(z.array(z.number()));

export const ConfigSchema = z.object({
    breakpoints: z.record(z.number()).optional(),
    colors: ColorsSchema.optional(),
    opacity: OpacitySchema.optional(),
});

export type UserConfig = z.infer<typeof ConfigSchema>;

