<template>
    <aside 
        class="px-5 py-8 bg-sidebar h-full relative w-full"
    >
        <nuxt-link 
            class="mb-10 block"
            to="/">
            <NuxtImg
                src="/logo.svg"
                alt="Logo"
                width="120px"
                class="mx-auto"
            />
        </nuxt-link>
        <button 
            class="absolute top-2 right-3 transition-colors hover:text-primary"
        >
            <Icon name="line-md:logout" size="22px"/>
        </button>
        <LayoutMenu/>
    </aside>
</template>

<script setup lang="ts">


</script>

<style scoped>

</style>