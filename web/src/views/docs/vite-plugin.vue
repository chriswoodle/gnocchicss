<script setup lang="ts">
import DocPage from './doc-page.vue';
import content from './content/vite-plugin.md?raw';
</script>

<template>
    <DocPage :content="content" title="Vite Plugin" />
</template>
