<script setup lang="ts">
import { type Rule } from '@gnocchicss/core';
import Subsection from './Subsection.vue';
import { ref } from 'vue';

interface Subsection {
    key: string;
    rules: Rule[];
}

interface Props {
    name: string;
    sectionKey: string;
    subsections: Record<string, Subsection>;
}

const props = defineProps<Props>();
const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="section" v-if="name" :class="{ 'is-open': isOpen }">
        <button class="section-header" @click="toggle">
            <span>{{ name }}</span>
            <span class="toggle-icon">
                {{ isOpen ? '▼' : '▶' }}
            </span>
        </button>
        <div class="section-content" :class="{ 'is-open': isOpen }">
            <template v-for="(subsection, subsectionName) in subsections" :key="subsection.key">
                <Subsection
                    :name="subsectionName"
                    :subsection-key="subsection.key"
                    :rules="subsection.rules"
                />
            </template>
        </div>
    </div>
    <template v-else>
        <template v-for="(subsection, subsectionName) in subsections" :key="subsection.key">
            <Subsection
                :name="subsectionName"
                :subsection-key="subsection.key"
                :rules="subsection.rules"
            />
        </template>
    </template>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.section {
    @include overflow-hidden;
    @include rounded-none;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include bg-cream;

    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px;
    }

    &.is-open {
        transform: none;
        box-shadow: none;
    }

    &-header {
        @include w-full;
        @include flex;
        @include justify-between;
        @include items-center;
        @include py-3;
        @include px-4;
        @include bg-sage-green;
        @include text-cream;
        cursor: pointer;
        transition: background-color 0.2s;
        @include font-bold;
        @include uppercase;
        letter-spacing: -0.5px;

        .toggle-icon {
            @include text-base;
            @include text-cream;
            @include font-extrabold;
        }
    }

    &-content {
        @include hidden;
        transition: all 0.3s ease-out;
        contain: content;

        &.is-open {
            @include block;
        }
    }
}
</style> 