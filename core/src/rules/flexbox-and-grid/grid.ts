import { GeneratedPartial, Rule, RuleGenerator } from "../../types.js";
import { renderRules } from "../../utils.js";
import { MergedConfig } from "../../config.js";

export class Grid implements RuleGenerator {
    constructor(
        private readonly config: MergedConfig
    ) { }

    generate(): GeneratedPartial {
        const rules: Rule[] = [
            ...[
                { name: "grid-cols-1", rule: "grid-template-columns: repeat(1, minmax(0, 1fr));" },
                { name: "grid-cols-2", rule: "grid-template-columns: repeat(2, minmax(0, 1fr));" },
                { name: "grid-cols-3", rule: "grid-template-columns: repeat(3, minmax(0, 1fr));" },
                { name: "grid-cols-4", rule: "grid-template-columns: repeat(4, minmax(0, 1fr));" },
                { name: "grid-cols-5", rule: "grid-template-columns: repeat(5, minmax(0, 1fr));" },
                { name: "grid-cols-6", rule: "grid-template-columns: repeat(6, minmax(0, 1fr));" },
                { name: "grid-cols-7", rule: "grid-template-columns: repeat(7, minmax(0, 1fr));" },
                { name: "grid-cols-8", rule: "grid-template-columns: repeat(8, minmax(0, 1fr));" },
                { name: "grid-cols-9", rule: "grid-template-columns: repeat(9, minmax(0, 1fr));" },
                { name: "grid-cols-10", rule: "grid-template-columns: repeat(10, minmax(0, 1fr));" },
                { name: "grid-cols-11", rule: "grid-template-columns: repeat(11, minmax(0, 1fr));" },
                { name: "grid-cols-12", rule: "grid-template-columns: repeat(12, minmax(0, 1fr));" },
                { name: "grid-cols-none", rule: "grid-template-columns: none;" },
                { name: "grid-cols-subgrid", rule: "grid-template-columns: subgrid;" },
            ].map(r => ({ ...r, subsection: 'grid-cols', })),

            ...[
                { name: "col-auto", rule: "grid-column: auto;" },
                { name: "col-span-1", rule: "grid-column: span 1 / span 1;" },
                { name: "col-span-2", rule: "grid-column: span 2 / span 2;" },
                { name: "col-span-3", rule: "grid-column: span 3 / span 3;" },
                { name: "col-span-4", rule: "grid-column: span 4 / span 4;" },
                { name: "col-span-5", rule: "grid-column: span 5 / span 5;" },
                { name: "col-span-6", rule: "grid-column: span 6 / span 6;" },
                { name: "col-span-7", rule: "grid-column: span 7 / span 7;" },
                { name: "col-span-8", rule: "grid-column: span 8 / span 8;" },
                { name: "col-span-9", rule: "grid-column: span 9 / span 9;" },
                { name: "col-span-10", rule: "grid-column: span 10 / span 10;" },
                { name: "col-span-11", rule: "grid-column: span 11 / span 11;" },
                { name: "col-span-12", rule: "grid-column: span 12 / span 12;" },
                { name: "col-span-full", rule: "grid-column: 1 / -1;" },
            ].map(r => ({ ...r, subsection: 'col-span', })),

            ...[
                { name: "col-start-1", rule: "grid-column-start: 1;" },
                { name: "col-start-2", rule: "grid-column-start: 2;" },
                { name: "col-start-3", rule: "grid-column-start: 3;" },
                { name: "col-start-4", rule: "grid-column-start: 4;" },
                { name: "col-start-5", rule: "grid-column-start: 5;" },
                { name: "col-start-6", rule: "grid-column-start: 6;" },
                { name: "col-start-7", rule: "grid-column-start: 7;" },
                { name: "col-start-8", rule: "grid-column-start: 8;" },
                { name: "col-start-9", rule: "grid-column-start: 9;" },
                { name: "col-start-10", rule: "grid-column-start: 10;" },
                { name: "col-start-11", rule: "grid-column-start: 11;" },
                { name: "col-start-12", rule: "grid-column-start: 12;" },
                { name: "col-start-13", rule: "grid-column-start: 13;" },
                { name: "col-start-auto", rule: "grid-column-start: auto;" },
            ].map(r => ({ ...r, subsection: 'col-start', })),

            ...[
                { name: "col-end-1", rule: "grid-column-end: 1;" },
                { name: "col-end-2", rule: "grid-column-end: 2;" },
                { name: "col-end-3", rule: "grid-column-end: 3;" },
                { name: "col-end-4", rule: "grid-column-end: 4;" },
                { name: "col-end-5", rule: "grid-column-end: 5;" },
                { name: "col-end-6", rule: "grid-column-end: 6;" },
                { name: "col-end-7", rule: "grid-column-end: 7;" },
                { name: "col-end-8", rule: "grid-column-end: 8;" },
                { name: "col-end-9", rule: "grid-column-end: 9;" },
                { name: "col-end-10", rule: "grid-column-end: 10;" },
                { name: "col-end-11", rule: "grid-column-end: 11;" },
                { name: "col-end-12", rule: "grid-column-end: 12;" },
                { name: "col-end-13", rule: "grid-column-end: 13;" },
                { name: "col-end-auto", rule: "grid-column-end: auto;" },
            ].map(r => ({ ...r, subsection: 'col-end', })),

            ...[
                { name: "grid-rows-1", rule: "grid-template-rows: repeat(1, minmax(0, 1fr));" },
                { name: "grid-rows-2", rule: "grid-template-rows: repeat(2, minmax(0, 1fr));" },
                { name: "grid-rows-3", rule: "grid-template-rows: repeat(3, minmax(0, 1fr));" },
                { name: "grid-rows-4", rule: "grid-template-rows: repeat(4, minmax(0, 1fr));" },
                { name: "grid-rows-5", rule: "grid-template-rows: repeat(5, minmax(0, 1fr));" },
                { name: "grid-rows-6", rule: "grid-template-rows: repeat(6, minmax(0, 1fr));" },
                { name: "grid-rows-7", rule: "grid-template-rows: repeat(7, minmax(0, 1fr));" },
                { name: "grid-rows-8", rule: "grid-template-rows: repeat(8, minmax(0, 1fr));" },
                { name: "grid-rows-9", rule: "grid-template-rows: repeat(9, minmax(0, 1fr));" },
                { name: "grid-rows-10", rule: "grid-template-rows: repeat(10, minmax(0, 1fr));" },
                { name: "grid-rows-11", rule: "grid-template-rows: repeat(11, minmax(0, 1fr));" },
                { name: "grid-rows-12", rule: "grid-template-rows: repeat(12, minmax(0, 1fr));" },
                { name: "grid-rows-none", rule: "grid-template-rows: none;" },
                { name: "grid-rows-subgrid", rule: "grid-template-rows: subgrid;" },
            ].map(r => ({ ...r, subsection: 'grid-rows', })),

            ...[
                { name: "row-auto", rule: "grid-row: auto;" },
                { name: "row-span-1", rule: "grid-row: span 1 / span 1;" },
                { name: "row-span-2", rule: "grid-row: span 2 / span 2;" },
                { name: "row-span-3", rule: "grid-row: span 3 / span 3;" },
                { name: "row-span-4", rule: "grid-row: span 4 / span 4;" },
                { name: "row-span-5", rule: "grid-row: span 5 / span 5;" },
                { name: "row-span-6", rule: "grid-row: span 6 / span 6;" },
                { name: "row-span-7", rule: "grid-row: span 7 / span 7;" },
                { name: "row-span-8", rule: "grid-row: span 8 / span 8;" },
                { name: "row-span-9", rule: "grid-row: span 9 / span 9;" },
                { name: "row-span-10", rule: "grid-row: span 10 / span 10;" },
                { name: "row-span-11", rule: "grid-row: span 11 / span 11;" },
                { name: "row-span-12", rule: "grid-row: span 12 / span 12;" },
                { name: "row-span-full", rule: "grid-row: 1 / -1;" },
            ].map(r => ({ ...r, subsection: 'row-span', })),

            ...[
                { name: "row-start-1", rule: "grid-row-start: 1;" },
                { name: "row-start-2", rule: "grid-row-start: 2;" },
                { name: "row-start-3", rule: "grid-row-start: 3;" },
                { name: "row-start-4", rule: "grid-row-start: 4;" },
                { name: "row-start-5", rule: "grid-row-start: 5;" },
                { name: "row-start-6", rule: "grid-row-start: 6;" },
                { name: "row-start-7", rule: "grid-row-start: 7;" },
                { name: "row-start-8", rule: "grid-row-start: 8;" },
                { name: "row-start-9", rule: "grid-row-start: 9;" },
                { name: "row-start-10", rule: "grid-row-start: 10;" },
                { name: "row-start-11", rule: "grid-row-start: 11;" },
                { name: "row-start-12", rule: "grid-row-start: 12;" },
                { name: "row-start-13", rule: "grid-row-start: 13;" },
                { name: "row-start-auto", rule: "grid-row-start: auto;" },
            ].map(r => ({ ...r, subsection: 'row-start', })),

            ...[
                { name: "row-end-1", rule: "grid-row-end: 1;" },
                { name: "row-end-2", rule: "grid-row-end: 2;" },
                { name: "row-end-3", rule: "grid-row-end: 3;" },
                { name: "row-end-4", rule: "grid-row-end: 4;" },
                { name: "row-end-5", rule: "grid-row-end: 5;" },
                { name: "row-end-6", rule: "grid-row-end: 6;" },
                { name: "row-end-7", rule: "grid-row-end: 7;" },
                { name: "row-end-8", rule: "grid-row-end: 8;" },
                { name: "row-end-9", rule: "grid-row-end: 9;" },
                { name: "row-end-10", rule: "grid-row-end: 10;" },
                { name: "row-end-11", rule: "grid-row-end: 11;" },
                { name: "row-end-12", rule: "grid-row-end: 12;" },
                { name: "row-end-13", rule: "grid-row-end: 13;" },
                { name: "row-end-auto", rule: "grid-row-end: auto;" },
            ].map(r => ({ ...r, subsection: 'row-end', })),

            ...[
                { name: "grid-flow-row", rule: "grid-auto-flow: row;" },
                { name: "grid-flow-col", rule: "grid-auto-flow: column;" },
                { name: "grid-flow-dense", rule: "grid-auto-flow: dense;" },
                { name: "grid-flow-row-dense", rule: "grid-auto-flow: row dense;" },
                { name: "grid-flow-col-dense", rule: "grid-auto-flow: column dense;" },
            ].map(r => ({ ...r, subsection: 'grid-flow', })),

            ...[
                { name: "auto-cols-auto", rule: "grid-auto-columns: auto;" },
                { name: "auto-cols-min", rule: "grid-auto-columns: min-content;" },
                { name: "auto-cols-max", rule: "grid-auto-columns: max-content;" },
                { name: "auto-cols-fr", rule: "grid-auto-columns: minmax(0, 1fr);" },
            ].map(r => ({ ...r, subsection: 'auto-cols', })),

            ...[
                { name: "auto-rows-auto", rule: "grid-auto-rows: auto;" },
                { name: "auto-rows-min", rule: "grid-auto-rows: min-content;" },
                { name: "auto-rows-max", rule: "grid-auto-rows: max-content;" },
                { name: "auto-rows-fr", rule: "grid-auto-rows: minmax(0, 1fr);" },
            ].map(r => ({ ...r, subsection: 'auto-rows', })),
        ].map(r => ({ ...r, category: 'flexbox-and-grid', section: 'grid' }));

        return {
            rules,
            output: renderRules(rules)
        }
    }
}