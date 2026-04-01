<script setup lang="ts">
</script>

<template>
    <div class="docs-layout">
        <div class="docs-container">
            <aside class="docs-sidebar">
                <div class="sidebar-header">
                    <router-link to="/" class="sidebar-logo">
                        <img src="@/assets/logo-shadow.png" alt="GnocchiCSS" class="sidebar-logo-img">
                    </router-link>
                </div>
                <nav class="sidebar-nav">
                    <router-link to="/docs" class="sidebar-link" exact-active-class="active">Getting Started</router-link>
                    <router-link to="/docs/cli" class="sidebar-link" active-class="active">CLI</router-link>
                    <router-link to="/docs/vite-plugin" class="sidebar-link" active-class="active">Vite Plugin</router-link>
                </nav>
                <div class="sidebar-links">
                    <router-link to="/cheatsheet" class="sidebar-link">Cheatsheet</router-link>
                    <a href="https://github.com/chriswoodle/gnocchicss" target="_blank" rel="noopener noreferrer" class="sidebar-link">GitHub</a>
                </div>
            </aside>
            <main class="docs-content">
                <router-view></router-view>
            </main>
        </div>
        <footer class="docs-footer">
            <div class="footer-content">
                <div class="copyright">&copy; {{ new Date().getFullYear() }} GnocchiCSS</div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.docs-layout {
    @include min-h-screen;
    @include flex;
    @include flex-col;
    @include bg-cream;
}

.docs-container {
    @include flex-1;
    @include flex;
    @include w-full;
}

.docs-sidebar {
    width: 260px;
    @include shrink-0;
    @include p-6;
    @include bg-forest-green;
    @include text-cream;
    @include flex;
    @include flex-col;
    @include sticky;
    @include top-0;
    @include h-screen;
    @include overflow-y-auto;

    .sidebar-header {
        @include mb-8;
    }

    .sidebar-logo {
        @include flex;
        @include items-center;
        @include no-underline;
    }

    .sidebar-logo-img {
        @include size-10;
        transition: transform 0.2s;

        &:hover {
            transform: translate(-2px, -2px);
        }
    }

    .sidebar-nav {
        @include flex;
        @include flex-col;
        @include gap-1;
        @include flex-1;
    }

    .sidebar-links {
        @include flex;
        @include flex-col;
        @include gap-1;
        @include border-t-2;
        @include border-solid;
        @include border-lime-green;
        @include pt-4;
        @include mt-4;
    }

    .sidebar-link {
        @include text-cream;
        @include no-underline;
        @include font-semibold;
        @include px-3;
        @include py-2;
        @include rounded-none;
        transition: all 0.15s;

        &:hover {
            @include bg-sage-green;
        }

        &.active {
            @include bg-lime-green;
            @include text-forest-green;
        }
    }
}

.docs-content {
    @include flex-1;
    min-width: 0;
    max-width: 1140px;
    @include p-8;
}

.docs-footer {
    @include p-4;
    @include bg-forest-green;
    @include text-cream;
    @include border-t-4;
    @include border-solid;
    @include border-lime-green;

    .footer-content {
        max-width: 1400px;
        @include mx-auto;
        text-align: center;
    }

    .copyright {
        @include font-semibold;
    }
}

@media (max-width: 768px) {
    .docs-container {
        @include flex-col;
    }

    .docs-sidebar {
        @include w-full;
        height: auto;
        @include static;
        @include flex-row;
        flex-wrap: wrap;
        @include items-center;
        @include p-4;
        @include gap-2;

        .sidebar-header {
            @include mb-0;
            @include mr-4;
        }

        .sidebar-nav {
            @include flex-row;
            flex-wrap: wrap;
            @include gap-1;
        }

        .sidebar-links {
            @include flex-row;
            border-top: none;
            @include border-l-2;
            @include border-solid;
            @include border-lime-green;
            @include pt-0;
            @include mt-0;
            @include pl-2;
            @include ml-2;
        }
    }

    .docs-content {
        @include p-4;
    }
}
</style>
