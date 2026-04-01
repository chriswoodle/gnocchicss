import { defineStore } from 'pinia';
import { usePrerenderStore } from './prerender';
import { prerender } from '@gnocchicss/core';

export const useRootStore = defineStore('root', {
    state: () => ({
        ready: false,
    }),
    actions: {
        async initialize() {
            if (this.ready) return;

            const prerenderStore = usePrerenderStore();
            const result = await prerender({});
            prerenderStore.setPrerenderResult(result.partials);
            
            this.ready = true;
        },
    },
}); 