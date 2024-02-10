<template>
    
<section 
        class="grid"
        style="min-height:100vh"
    >
        <ot-sidebar/>
        <div>
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
import otSidebar from '~/components/ot-sidebar.vue';

</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
}
</style>