<script setup lang="ts">
import DocPage from './doc-page.vue';
import content from './content/getting-started.md?raw';
</script>

<template>
    <DocPage :content="content" title="Getting Started" />
</template>
