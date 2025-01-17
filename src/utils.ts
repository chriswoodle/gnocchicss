import { Provider } from "@nestjs/common";
import { globSync } from "glob";
import * as path from "path";
import { Rule } from "./types.js";
import { pathToFileURL } from "node:url";

// Taken from @nestjs/common/constants
const INJECTABLE_WATERMARK = "__injectable__";

export function escapeName(name: string) {
    return name
        .replace(/\//g, "\\/") // escape slashes
        .replace(/^[0-9]/g, "\\$&") // escape numbers at the beginning of the name
        .replace(/\./g, "\\."); // escape dots
}

export function generateRule(name: string, rule: string) {
    const escapedName = escapeName(name);
    return [
        `@mixin ${escapedName}`,
        `{ ${rule} }`,
        `.${escapedName} { @include ${escapedName}; }`
    ];
}

export function renderRules(rules: Rule[]) {
    const columns = rules.map((rule) => generateRule(rule.name, rule.rule));
    const maxLengthFirstColumn = Math.max(...columns.map((column) => column[0].length));
    const maxLengthSecondColumn = Math.max(...columns.map((column) => column[1].length));
    const content = columns.map((column) =>
        column[0].padEnd(maxLengthFirstColumn, " ") + " "
        + column[1].padEnd(maxLengthSecondColumn, " ") + " "
        + column[2]);
    return content.join("\n");
}

export function addNegativeRules(rules: Rule[]) {
    return [...rules, ...rules.map((rule) => {
        const name = `-${rule.name}`;
        const negativeRule = rule.rule.replace(/(\d*\.?\d+)/g, '-$1');
        return { name, rule: negativeRule };
    })];
}

// Maps 0-1 to 00-FF
export function convertAlphaToHex(value: number) {
    return Math.round(value * 255).toString(16).padStart(2, '0');
}

// Convert PascalCase to kebab-case
export function convertPascalCaseToKebabCase(value: string) {
    return value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export async function getProvidersFromDirectory(dir: string) {
    const files = globSync('**/*.js', { cwd: dir, withFileTypes: true })
        .filter(file => !path.basename(path.dirname(file.fullpath())).startsWith('_'));

    const providers = await Promise.all(files
        .map(file => file.fullpath())
        .map<Promise<Provider | null>>(async file => {
            const resolvedPath = pathToFileURL(file).href;
            const module = await import(resolvedPath);
            const provider = Object.values(module).find(value => Reflect.hasMetadata(INJECTABLE_WATERMARK, value));
            if (provider) {
                return provider as Provider;
            }
            return null
        })
    );
    return providers.filter(Boolean);
}