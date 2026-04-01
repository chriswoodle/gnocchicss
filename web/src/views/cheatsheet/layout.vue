<script setup lang="ts">
import { ref } from 'vue';
import GitHubLogo from '@/assets/github.svg';
import packageJson from '../../../package.json';
</script>

<template>
    <div class="layout">
        <header class="header">
            <div class="header-content">
                <div class="version">v{{ packageJson.version }}</div>
                <a href="https://github.com/chriswoodle/gnocchicss" target="_blank" rel="noopener noreferrer" class="github-link">
                    <img :src="GitHubLogo" alt="GitHub" class="github-logo">
                </a>
            </div>
        </header>
        <router-view></router-view>
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
