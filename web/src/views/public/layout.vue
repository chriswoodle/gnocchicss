<script setup lang="ts">
import { ref } from 'vue';
import GitHubLogo from '@/assets/github.svg';
import packageJson from '../../../package.json';
</script>

<template>
    <div class="layout">
        <div class="layout-content">
            <router-view></router-view>
        </div>
        <footer class="footer">
            <div class="footer-content">
                <div class="copyright">© {{ new Date().getFullYear() }} GnocchiCSS</div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.layout {
    @include min-h-screen;
    @include flex;
    @include flex-col;
    @include bg-lime-green;
}

.layout-content {
    @include flex-1;
}

.header {
    @include p-4;
    @include bg-lime-green;
    @include text-forest-green;
    @include border-b-4;
    @include border-solid;
    @include border-forest-green;

    .header-content {
        @include mx-auto;
        max-width: 1200px;
        @include flex;
        @include justify-end;
        @include items-center;
        @include gap-4;
    }

    .version {
        @include font-semibold;
    }

    .github-link {
        @include p-2;
    }

    .github-logo {
        @include size-6;
    }
}

.footer {
    @include mt-auto;
    @include p-4;
    @include bg-lime-green;
    @include text-forest-green;
    @include border-t-4;
    @include border-solid;
    @include border-forest-green;

    .footer-content {
        @include mx-auto;
        max-width: 1200px;
        text-align: center;
    }

    .copyright {
        @include font-semibold;
    }
}
</style>
