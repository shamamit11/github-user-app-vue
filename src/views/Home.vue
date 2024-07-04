<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <img :src="logo" alt="PP Co. Logo" class="w-32 h-32">
        <button @click="navigateToUsers" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Users</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import logo from '@/assets/vue.svg';

export default defineComponent({
    setup() {
        const router = useRouter();
        const navigateToUsers = () => {
            router.push({ name: 'Users' });
        };
        return { navigateToUsers, logo };
    },
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>