<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Logo from '@/assets/logo-shadow.png'

useHead({
    title: 'GnocchiCSS - A utility-first SASS framework',
    meta: [
        { name: 'description', content: 'Type Checking and Extensible CSS solution for modern web apps' },
    ],
})
</script>

<template>
    <div class="home">
        <!-- Navigation Header -->
        <nav class="nav-header">
            <div class="nav-content">
                <router-link to="/" class="nav-logo">
                    <img src="@/assets/logo-shadow.png" alt="GnocchiCSS Logo" class="nav-logo-img">
                </router-link>
                <div class="nav-links">
                    <router-link to="/docs" class="nav-link">Docs</router-link>
                    <router-link to="/cheatsheet" class="nav-link">Cheatsheet</router-link>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <img src="@/assets/logo-shadow.png" alt="GnocchiCSS Logo" class="logo">
                <h1 class="title">
                    Gnocchi<span class="highlight">CSS</span>
                </h1>
                <p class="description">
                    A utility-first SASS framework for modern web apps.
                    Type Checking and Extensible by design.
                </p>
                <div class="cta-buttons">
                    <router-link to="/docs" class="btn primary">Get Started</router-link>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <h2>Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="icon">🔒</div>
                    <h3>Compile-time Checking</h3>
                    <p>Catch errors instantly with powerful compile-time validation.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">🎨</div>
                    <h3>Extensible</h3>
                    <p>Customize every detail, from colors to spacing, with a flexible, developer-friendly API.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">🚀</div> 
                    <h3>Adopt Incrementally</h3>
                    <p>Seamlessly integrate into existing Sass projects.</p>
                </div>
            </div>
        </section>

        <!-- GitHub Section -->
        <section class="github">
            <div class="github-content">
                <h2>Open Source</h2>
                <p>GnocchiCSS is open source and available on GitHub. Join our community of developers!</p>
                <a href="https://github.com/chriswoodle/gnocchicss" target="_blank" rel="noopener noreferrer" class="github-link">
                    <span class="github-icon">📦</span>
                    View on GitHub
                </a>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use 'gnocchicss' as *;

.home {
    @include my-0;
    @include mx-auto;
    @include p-8;
    @include text-forest-green;
    @include bg-lime-green;
}

.logo {
    @include size-36;
    @include p-4;
    transition: transform 0.2s;

    &:hover {
        transform: translate(-2px, -2px);
    }
}

.hero {
    @include mb-16;
    text-align: center;
    @include relative;
    @include flex;
    @include justify-center;
    @include items-center;

    &-content {
        @include flex-1;
    }
}

.title {
    @include text-7xl;
    @include font-extrabold;
    @include mb-4;
    @include uppercase;
    letter-spacing: -2px;
    @include text-forest-green;

    .highlight {
        @include text-forest-green;
    }
}

.description {
    @include text-forest-green;
    @include text-xl;
    @include font-semibold;
    max-width: 600px;
    @include mx-auto;
    @include mb-8;
}

.cta-buttons {
    @include flex;
    @include gap-4;
    @include justify-center;
}

.btn {
    @include p-4;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include rounded-none;
    @include text-lg;
    @include font-semibold;
    cursor: pointer;
    @include no-underline;
    transition: all 0.2s;

    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 4px 4px 0 var(--forest-green);
    }

    &.primary {
        @include text-cream;
        @include bg-forest-green;
    }

    &.secondary {
        @include text-forest-green;
        @include bg-cream;
    }
}

.features {
    @include mt-16;

    h2 {
        @include text-5xl;
        @include font-extrabold;
        @include mb-8;
        @include text-forest-green;
        @include uppercase;
        letter-spacing: -1px;
        text-align: center;
    }
}

.feature-grid {
    @include grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    @include gap-8;
    max-width: 1200px;
    @include mx-auto;
}

.feature-card {
    @include p-6;
    @include bg-cream;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include rounded-none;
    transition: transform 0.2s;

    &:hover {
        transform: translate(-4px, -4px);
        box-shadow: 8px 8px 0 var(--forest-green);
    }

    .icon {
        @include text-5xl;
        @include mb-4;
    }

    h3 {
        @include text-2xl;
        @include mb-4;
        @include text-forest-green;
        @include font-bold;
    }

    p {
        @include text-forest-green;
        @include leading-relaxed;
    }
}

.nav-header {
    @include py-4;
    @include px-8;
    @include mb-8;
}

.nav-content {
    max-width: 1200px;
    @include mx-auto;
    @include flex;
    @include justify-between;
    @include items-center;
}

.nav-logo {
    @include flex;
    @include items-center;
    @include no-underline;

    .nav-logo-img {
        @include size-10;
        transition: transform 0.2s;

        &:hover {
            transform: translate(-2px, -2px);
        }
    }
}

.nav-links {
    @include flex;
    @include gap-4;
}

.nav-link {
    @include text-forest-green;
    @include py-2;
    @include px-4;
    @include no-underline;
    @include font-semibold;
    @include relative;
    transition: all 0.2s;

    &::after {
        content: '';
        @include absolute;
        @include bottom-0;
        @include left-0;
        @include w-full;
        height: 2px;
        @include bg-forest-green;
        transform: scaleX(0);
        transition: transform 0.2s;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    &.router-link-active {
        @include border-b-4;
        @include border-solid;
        @include border-forest-green;
    }
}

.github {
    @include mt-16;
    text-align: center;
    @include py-16;
    @include px-8;

    &-content {
        max-width: 800px;
        @include mx-auto;
    }

    h2 {
        @include text-5xl;
        @include font-extrabold;
        @include mb-4;
        @include text-forest-green;
        @include uppercase;
        letter-spacing: -1px;
    }

    p {
        @include text-forest-green;
        @include text-xl;
        @include mb-8;
    }
}

.github-link {
    @include inline-flex;
    @include items-center;
    @include gap-2;
    @include p-4;
    @include border-4;
    @include border-solid;
    @include border-forest-green;
    @include rounded-none;
    @include text-forest-green;
    @include bg-cream;
    @include text-lg;
    @include font-semibold;
    @include no-underline;
    transition: all 0.2s;

    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 4px 4px 0 var(--forest-green);
    }

    .github-icon {
        @include text-2xl;
    }
}

@media (max-width: 768px) {
    .home {
        @include p-4;
    }

    .title {
        @include text-5xl;
    }

    .feature-grid {
        @include grid-cols-1;
    }

    .cta-buttons {
        @include flex-col;
        @include gap-4;
    }

    .nav-header {
        @include p-4;
    }

    .nav-content {
        @include flex-col;
        @include gap-4;
    }

    .nav-links {
        @include w-full;
        @include justify-center;
    }
}
</style>
