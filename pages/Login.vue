<template>
    <div class="flex items-center justify-center min-h-screen w-full">
        <div class="rounded bg-sidebar w-1/4 p-5">
            <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

            <form action="">
                <OtInput
                    placeholder="Email"
                    type="email"
                    class="mb-3"
                    v-model="email"
                />
                <OtInput
                    placeholder="Password"
                    type="password"
                    class="mb-3"
                    v-model="pass"
                />
                <OtInput
                    placeholder="Login"
                    type="text"
                    class="mb-3"
                    v-model="login"
                />
                <div class="flex items-center justify-center gap-5">
                    <OtButton type="button">Login</OtButton>
                    <OtButton type="button">Register</OtButton>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const email = ref('');
const pass = ref('');
const login = ref('')
useHead({
    title: 'Login'
})
</script>
