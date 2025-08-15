<script setup>
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
    <PageHeader />
    <main class="main-content">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
</template>

<style scoped>
.main-content {
    padding-top: 80px;
    /* Ajustez selon la hauteur de votre header */
    min-height: calc(100vh - 80px);
}

/* Animation douce entre les pages */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>