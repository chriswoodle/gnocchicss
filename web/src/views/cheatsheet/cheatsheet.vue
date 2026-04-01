<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import { prerender, type GeneratedPartial, type Rule } from '@gnocchicss/core';
import Fuse from 'fuse.js';
import Logo from '@/assets/logo-shadow.png';
import CategoryCard from '@/components/CategoryCard.vue';
import { usePrerenderStore } from '../../store/prerender';
import { useRootStore } from '../../store/root';
import JsonEditorVue from 'json-editor-vue';
import '@/styles/json-editor-theme.scss';

useHead({
    title: 'GnocchiCSS Cheatsheet',
    meta: [
        { name: 'description', content: 'A comprehensive cheatsheet for GnocchiCSS utility classes' },
    ],
})

interface RuleExpanded extends Rule {
    key: string;
}

interface Subsection {
    key: string;
    rules: RuleExpanded[];
}

interface Section {
    key: string;
    subsections: Record<string, Subsection>;
}

interface Category {
    key: string;
    sections: Record<string, Section>;
}

interface PrerenderPartial {
    result: GeneratedPartial;
    ruleFileName: string;
}

interface Config {
    colors?: Record<string, string>;
}

const groupedRules = ref<Record<string, Category>>({});
const searchQuery = ref('');
const filteredRules = ref<Record<string, Category>>({});
const fuse = ref<Fuse<any> | null>(null);
let debounceTimeout: number | null = null;
const showConfigEditor = ref(false);
const config = ref<string>(JSON.stringify({}));

// Simple debounce implementation
const debounce = (fn: () => void, delay: number) => {
    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
    }
    debounceTimeout = window.setTimeout(fn, delay);
};

// Flatten the rules structure for searching
const flattenRules = (rules: Record<string, Category>) => {
    const flattened: {
        type: string;
        name: string;
        value: string;
        category: string;
        section?: string;
        subsection?: string;
        rule?: RuleExpanded;
    }[] = [];
    Object.entries(rules).forEach(([category, categoryData]) => {
        flattened.push({
            type: 'category',
            name: category,
            value: category,
            category
        });

        Object.entries(categoryData.sections).forEach(([section, sectionData]) => {
            if (section) {
                flattened.push({
                    type: 'section',
                    name: section,
                    value: `${category} > ${section}`,
                    category,
                    section
                });
            }

            Object.entries(sectionData.subsections).forEach(([subsection, subsectionData]) => {
                if (subsection) {
                    flattened.push({
                        type: 'subsection',
                        name: subsection,
                        value: `${category} > ${section} > ${subsection}`,
                        category,
                        section,
                        subsection
                    });
                }

                subsectionData.rules.forEach(rule => {
                    flattened.push({
                        type: 'rule',
                        name: rule.name,
                        value: rule.rule,
                        category,
                        section,
                        subsection,
                        rule
                    });
                });
            });
        });
    });
    return flattened;
};

const updateFilteredResults = () => {
    if (!searchQuery.value) {
        filteredRules.value = groupedRules.value;
        return;
    }

    const query = searchQuery.value;
    const searchResults = fuse.value?.search(query) || [];

    const filtered: Record<string, Category> = {};
    const matchedItems = new Map();

    // Process search results
    searchResults.forEach(result => {
        const item = result.item;
        if (item.type !== 'category') {
            matchedItems.set(`${item.category}-${item.section}-${item.subsection}`, true);
        }
    });

    // Always include all categories, but filter their contents
    Object.entries(groupedRules.value).forEach(([category, categoryData]) => {
        const filteredSections: Record<string, Section> = {};

        Object.entries(categoryData.sections).forEach(([section, sectionData]) => {
            const filteredSubsections: Record<string, Subsection> = {};

            Object.entries(sectionData.subsections).forEach(([subsection, subsectionData]) => {
                // If no matches found, show all rules in the category
                if (matchedItems.size === 0 || matchedItems.has(`${category}-${section}-${subsection}`)) {
                    filteredSubsections[subsection] = {
                        key: subsectionData.key,
                        rules: [...subsectionData.rules]
                    };
                }
            });

            // Only include section if it has subsections with rules
            if (Object.keys(filteredSubsections).length > 0) {
                filteredSections[section] = {
                    key: sectionData.key,
                    subsections: filteredSubsections
                };
            }
        });

        // Only include category if it has sections with rules
        if (Object.keys(filteredSections).length > 0) {
            filtered[category] = {
                key: categoryData.key,
                sections: filteredSections
            };
        }
    });

    filteredRules.value = filtered;
};

// Watch for search query changes with debounce
watch(searchQuery, () => {
    console.log('searchQuery changed', searchQuery.value);
    debounce(updateFilteredResults, 300);
});

const rerenderWithConfig = async () => {
    const rootStore = useRootStore();
    const prerenderStore = usePrerenderStore();

    const result = await prerender(JSON.parse(config.value));

    prerenderStore.prerenderResult = result.partials;
    await load();
};

onMounted(() => {
    load();
});

async function load() {
    const prerenderStore = usePrerenderStore();
    const prerenderResult = prerenderStore.prerenderResult;

    console.log('prerenderResult', prerenderResult);

    if (!prerenderResult) {
        console.error('Prerender result not available');
        return;
    }

    // Group all rules by category, section, and subsection
    const grouped: Record<string, Category> = {};

    prerenderResult.forEach((partial: PrerenderPartial) => {
        partial.result.rules.forEach((rule: Rule) => {
            const category = rule.category || 'Uncategorized';
            const section = rule.section || '';
            const subsection = rule.subsection || '';

            if (!grouped[category]) {
                grouped[category] = {
                    key: category,
                    sections: {},
                };
            }
            if (!grouped[category].sections[section]) {
                grouped[category].sections[section] = {
                    key: section,
                    subsections: {},
                };
            }
            if (!grouped[category].sections[section].subsections[subsection]) {
                grouped[category].sections[section].subsections[subsection] = {
                    key: subsection,
                    rules: [],
                };
            }
            grouped[category].sections[section].subsections[subsection].rules.push({
                ...rule,
                key: `${category}-${section}-${subsection}-${rule.name}`
            });
        });
    });

    groupedRules.value = Object.freeze(grouped);
    filteredRules.value = grouped;

    // Cache flattened rules
    const flattened = Object.freeze(flattenRules(grouped));

    // Initialize Fuse.js
    fuse.value = new Fuse(flattened, {
        keys: ['name', 'value'],
        threshold: 0.4,
        distance: 50,
        includeScore: true,
        minMatchCharLength: 3,
    });
}

onUnmounted(() => {
    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
    }
});
</script>

<template>
    <div class="cheatsheet">
        <header class="cheatsheet-header">
            <div class="header-content">
                <img :src="Logo" alt="GnocchiCSS Logo" class="logo">
                <h1>GnocchiCSS Cheatsheet</h1>
                <p>A comprehensive reference for all GnocchiCSS utility mixins and classes</p>
            </div>
        </header>

        <section class="generated-partials">
            <div class="search-container">
                <div class="search-wrapper">
                    <input type="text" v-model="searchQuery" placeholder="Search categories, sections, and rules..."
                        class="search-input" />
                    <button v-if="searchQuery" @click="searchQuery = ''" class="clear-button" aria-label="Clear search">
                        ×
                    </button>
                </div>
            </div>
        </section>

        <section class="config-section">
            <button v-if="!showConfigEditor" class="config-toggle" @click="showConfigEditor = !showConfigEditor">
                Custom Configuration
            </button>

            <div v-if="showConfigEditor" class="config-editor">
                <div class="config-editor-header">
                    <h3>Custom Configuration</h3>
                    <button class="close-button" @click="showConfigEditor = false" aria-label="Close configuration">
                        ×
                    </button>
                </div>
                <p>Edit the configuration below and click "Apply" to update the cheatsheet.</p>
                <div class="config-editor-wrapper">
                    <json-editor-vue v-model="config" :mode="'text' as any" :indent="2" :show-btns="false"
                        class="json-editor" />
                </div>
                <button class="apply-config" @click="rerenderWithConfig" :disabled="!config">
                    Apply Configuration
                </button>
            </div>
        </section>

        <section class="generated-partials">
            <h2>Rules</h2>
            <div class="categories-grid">
                <template v-for="(category, categoryName) in filteredRules" :key="category.key">
                    <CategoryCard :name="categoryName" :sections="category.sections" :category-key="category.key" />
                </template>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.logo {
    @include size-36;
    @include p-4;

    &:hover {
        transform: translate(-2px, -2px);
    }
}

.cheatsheet {
    @include my-0;
    @include mx-auto;
    @include p-8;
    @include text-forest-green;
    @include bg-lime-green;

    &-header {
        @include mb-8;
        text-align: center;
        @include relative;
        @include flex;
        @include justify-center;
        @include items-center;

        .header-content {
            @include flex-1;
        }

        h1 {
            @include text-5xl;
            @include font-extrabold;
            @include mb-2;
            @include uppercase;
            letter-spacing: -1px;
        }

        p {
            @include text-forest-green;
            @include text-xl;
            @include font-semibold;
        }
    }
}

.config-section {
    @include my-8;
    text-align: center;

    .config-toggle {
        @include p-4;
        @include text-forest-green;
        @include bg-cream;
        @include border-4;
        @include border-solid;
        @include border-forest-green;
        @include rounded-none;
        @include font-semibold;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            transform: translate(-2px, -2px);
            box-shadow: 4px 4px 0;
        }
    }

    .config-editor {
        @include mt-4;
        @include p-4;
        @include bg-cream;
        @include border-4;
        @include border-solid;
        @include border-forest-green;

        .config-editor-header {
            @include flex;
            @include justify-between;
            @include items-center;
            @include mb-4;

            h3 {
                @include text-forest-green;
                @include text-2xl;
                @include font-bold;
                @include m-0;
            }

            .close-button {
                @include text-forest-green;
                background: none;
                @include border-none;
                @include text-4xl;
                @include font-semibold;
                cursor: pointer;
                @include p-0;
                @include leading-none;
                transition: all 0.2s;

                &:hover {
                    transform: scale(1.2);
                }
            }
        }

        p {
            @include text-forest-green;
            @include mb-4;
        }

        .config-editor-wrapper {
            @include mb-4;
            text-align: left;
        }

        .json-editor {
            @include mb-4;
        }

        .apply-config {
            @include p-2;
            @include px-4;
            @include text-cream;
            @include bg-forest-green;
            @include border-4;
            @include border-solid;
            @include border-forest-green;
            @include rounded-none;
            @include font-semibold;
            cursor: pointer;
            transition: all 0.2s;

            &:hover:not(:disabled) {
                transform: translate(-2px, -2px);
                box-shadow: 4px 4px 0;
            }

            &:disabled {
                @include opacity-50;
                cursor: not-allowed;
            }
        }
    }
}

.generated-partials {
    @include mt-12;

    h2 {
        @include text-5xl;
        @include font-extrabold;
        @include mb-6;
        @include text-forest-green;
        @include uppercase;
        letter-spacing: -1px;
    }

    .partials-grid {
        @include hidden;
    }
}

.categories-grid {
    @include grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    @include gap-8;
    @include w-full;
}

.search-container {
    @include mb-8;
    @include w-full;
    max-width: 600px;
    @include mx-auto;
}

.search-wrapper {
    @include relative;
    @include w-full;
}

.search-input {
    @include w-full;
    @include p-4;
    padding-right: 2.5rem;
    @include text-lg;
    @include rounded-none;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include bg-cream;
    @include text-forest-green;
    transition: all 0.2s;

    &:focus {
        outline: none;
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0;
    }

    &::placeholder {
        @include text-sage-green;
        @include opacity-70;
    }
}

.clear-button {
    @include absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    @include border-none;
    @include text-2xl;
    cursor: pointer;
    @include p-1;
    @include text-forest-green;
    @include opacity-70;
    transition: opacity 0.2s;

    &:hover {
        @include opacity-100;
    }
}
</style>
