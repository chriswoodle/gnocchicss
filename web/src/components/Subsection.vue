<script setup lang="ts">
import { type Rule } from '@gnocchicss/core';
import { ref } from 'vue';

interface Props {
    name: string;
    subsectionKey: string;
    rules: Rule[];
}

const props = defineProps<Props>();
const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="subsection" v-if="name">
        <button class="subsection-header" @click="toggle">
            <span>{{ name }}</span>
            <span class="toggle-icon">
                {{ isOpen ? '▼' : '▶' }}
            </span>
        </button>
        <div class="subsection-content" :class="{ 'is-open': isOpen }" v-if="isOpen">
            <div v-for="rule in rules" :key="rule.name" class="rule-item">
                <span class="rule-name">{{ rule.name }}</span>
                <span class="rule-value">{{ rule.rule }}</span>
            </div>
        </div>
    </div>
    <template v-else>
        <div v-for="rule in rules" :key="rule.name" class="rule-item">
            <span class="rule-name">{{ rule.name }}</span>
            <span class="rule-value">{{ rule.rule }}</span>
        </div>
    </template>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.subsection {
    @include my-2;
    @include mx-4;
    @include overflow-hidden;
    @include rounded-none;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include bg-cream;

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
        @include font-semibold;

        &:hover {
            @include bg-sage-green;
            @include text-cream;
        }

        .toggle-icon {
            @include text-sm;
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

.rule-item {
    @include flex;
    @include flex-col;
    @include gap-2;
    @include p-4;
    @include bg-cream;
    margin-top: -4px;

    .rule-name {
        font-family: monospace;
        @include font-bold;
        @include text-terracotta;
        @include text-lg;
    }

    .rule-value {
        font-family: monospace;
        @include text-base;
        @include text-sage-green;
        @include font-medium;
    }
}
</style> 