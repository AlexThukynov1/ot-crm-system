<template>
    <div>
        <nuxt-link 
        to="item.url"
        v-for="item in MENU_DATA"
        :key="item.name"
        class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5 text-menu-link"
        >
        <Icon :name="item.icon" class="mr-3"/>
        <span>{{ item.name }}</span>
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
import {MENU_DATA} from './menu.data'
</script>