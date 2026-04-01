<script setup lang="ts">
import { computed } from 'vue';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js/lib/core';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import css from 'highlight.js/lib/languages/css';
import { useHead } from '@unhead/vue';

hljs.registerLanguage('scss', scss);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('json', json);
hljs.registerLanguage('css', css);

const DEMO_PLACEHOLDER_PREFIX = '<!--DEMO:';
const DEMO_PLACEHOLDER_SUFFIX = ':DEMO-->';
const demoBlocks: string[] = [];

const marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            if (lang === 'demo') {
                const index = demoBlocks.length;
                demoBlocks.push(code);
                return `${DEMO_PLACEHOLDER_PREFIX}${index}${DEMO_PLACEHOLDER_SUFFIX}`;
            }
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
    }),
);

function renderMarkdown(content: string): string {
    demoBlocks.length = 0;
    let html = marked.parse(content) as string;
    // Replace demo placeholder <pre> blocks with raw HTML demo blocks
    html = html.replace(
        /<pre><code class="hljs language-demo"><!--DEMO:(\d+):DEMO-->\s*<\/code><\/pre>/g,
        (_, index) => `<div class="demo-block">${demoBlocks[Number(index)]}</div>`,
    );
    return html;
}

const props = defineProps<{
    content: string;
    title: string;
}>();

const html = computed(() => renderMarkdown(props.content));

useHead({
    title: computed(() => `${props.title} - GnocchiCSS Docs`),
    meta: [
        { name: 'description', content: computed(() => `GnocchiCSS documentation: ${props.title}`) },
    ],
});
</script>

<template>
    <article class="doc-page" v-html="html"></article>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.doc-page {
    max-width: 800px;
    @include text-forest-green;
    @include leading-relaxed;

    :deep(h1) {
        @include text-5xl;
        @include font-extrabold;
        @include mb-6;
        letter-spacing: -1px;
        @include uppercase;
        @include text-forest-green;
    }

    :deep(h2) {
        @include text-3xl;
        @include font-bold;
        @include mt-10;
        @include mb-4;
        @include text-forest-green;
        @include pb-2;
        @include border-b-2;
        @include border-solid;
        @include border-sage-green;
    }

    :deep(h3) {
        @include text-xl;
        @include font-bold;
        @include mt-8;
        @include mb-3;
        @include text-forest-green;
    }

    :deep(p) {
        @include mb-4;
    }

    :deep(a) {
        @include text-sage-green;
        @include font-semibold;
        @include underline;
        text-underline-offset: 2px;

        &:hover {
            @include text-forest-green;
        }
    }

    :deep(code) {
        font-family: 'DM Mono', 'Space Mono', monospace;
        @include bg-lime-green;
        @include text-forest-green;
        padding: 0.15em 0.4em;
        @include text-sm;
        @include font-medium;
    }

    :deep(pre) {
        @include bg-forest-green;
        @include text-cream;
        @include p-4;
        @include mb-6;
        @include overflow-x-auto;
        @include border-4;
        @include border-solid;
        @include border-forest-green;
        @include leading-normal;

        code {
            @include bg-transparent;
            color: inherit;
            @include p-0;
            @include text-sm;
        }

        .hljs-keyword,
        .hljs-selector-tag,
        .hljs-selector-class {
            color: #A7C957;
        }

        .hljs-string,
        .hljs-attr {
            color: #F2E8CF;
        }

        .hljs-number,
        .hljs-literal {
            color: #BC4749;
        }

        .hljs-built_in,
        .hljs-type,
        .hljs-selector-id {
            color: #d4a656;
        }

        .hljs-comment {
            color: #6A994E;
            font-style: italic;
        }

        .hljs-function,
        .hljs-title {
            color: #e0c990;
        }

        .hljs-variable,
        .hljs-attribute {
            color: #c9d1a0;
        }

        .hljs-meta,
        .hljs-selector-pseudo {
            color: #8abf5e;
        }

        .hljs-property {
            color: #c9d1a0;
        }

        .hljs-symbol {
            color: #BC4749;
        }
    }

    :deep(ul),
    :deep(ol) {
        @include mb-4;
        @include pl-6;

        li {
            @include mb-1;
        }
    }

    :deep(table) {
        @include w-full;
        border-collapse: collapse;
        @include mb-6;
        @include border-2;
        @include border-solid;
        @include border-forest-green;

        th, td {
            @include p-3;
            text-align: left;
            @include border;
            @include border-solid;
            @include border-sage-green;
        }

        th {
            @include bg-forest-green;
            @include text-cream;
            @include font-bold;
        }

        tr:nth-child(even) {
            @include bg-lime-green;
        }
    }

    :deep(strong) {
        @include font-bold;
    }

    :deep(hr) {
        @include border-none;
        @include border-t-2;
        @include border-solid;
        @include border-sage-green;
        @include my-8;
    }

    :deep(.demo-block) {
        @include p-6;
        @include bg-cream;
        @include border-4;
        @include border-solid;
        @include border-sage-green;
        @include mb-6;
        @include flex;
        flex-wrap: wrap;
        @include gap-4;
        @include items-start;
    }
}
</style>
