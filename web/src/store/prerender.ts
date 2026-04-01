import { defineStore } from 'pinia';
import type { GeneratedPartial } from '@gnocchicss/core';

interface PrerenderResult {
    ruleFileName: string;
    result: GeneratedPartial;
}

export const usePrerenderStore = defineStore('prerender', {
    state: () => ({
        prerenderResult: null as PrerenderResult[] | null,
    }),
    actions: {
        setPrerenderResult(generated: PrerenderResult[]) {
            this.prerenderResult = generated;
        },
    },
}); 