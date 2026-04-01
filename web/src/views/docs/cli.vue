<script setup lang="ts">
import DocPage from './doc-page.vue';
import content from './content/cli.md?raw';
</script>

<template>
    <DocPage :content="content" title="CLI" />
</template>
