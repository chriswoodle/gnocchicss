<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

interface MasonryItem {
    [key: string]: any;
}

const props = defineProps<{
    items: [string, MasonryItem][];
}>();

const distributedItems = ref<[string, MasonryItem][][]>([[], [], []]);
const columnCount = ref(3);

const updateColumnCount = () => {
    if (window.innerWidth <= 500) {
        columnCount.value = 1;
    } else if (window.innerWidth <= 900) {
        columnCount.value = 2;
    } else {
        columnCount.value = 3;
    }
};

const updateLayout = () => {
    // Reset distributed items
    distributedItems.value = Array(columnCount.value).fill([]).map(() => []);
    
    // Distribute items evenly across columns
    props.items.forEach((item, index) => {
        const columnIndex = index % columnCount.value;
        distributedItems.value[columnIndex].push(item);
    });
};

// Watch for changes in items
watch(() => props.items, () => {
    nextTick(() => {
        console.log('items changed');
        updateLayout();
    });
}, { deep: true });

// Handle window resize
const handleResize = () => {
    updateColumnCount();
    updateLayout();
};

onMounted(() => {
    updateColumnCount();
    window.addEventListener('resize', handleResize);
    nextTick(() => {
        updateLayout();
    });
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div class="masonry-grid">
        <div class="masonry-column" v-for="(columnItems, index) in distributedItems" :key="index">
            <slot :items="columnItems" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.masonry-grid {
    @include flex;
    @include gap-8;
    @include w-full;
}

.masonry-column {
    @include flex-1;
    @include flex;
    @include flex-col;
    @include gap-8;
}

.masonry-item {
    @include w-full;
    break-inside: avoid;
}
</style> 