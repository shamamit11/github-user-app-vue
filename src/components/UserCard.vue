<template>
    <div class="user-card max-w-sm rounded-md overflow-hidden shadow-lg m-4">
        <img class="w-full aspect-square object-fill" :src="user.avatar_url" :alt="user.login">
        <div class="px-3 py-3 flex items-center justify-between">
            <div class="font-bold text-md">{{ user.login }}</div>
            <button @click="handleDelete"
                class="delete-button bg-red-500 hover:bg-red-700 text-white py-2 px-2 rounded">
                <TrashIcon class="h-6 w-6 cursor-pointer" />
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TrashIcon } from '@heroicons/vue/24/solid';
import { GitHubUser } from '@/services/githubService';

export default defineComponent({
    props: {
        user: {
            type: Object as PropType<GitHubUser>,
            required: true,
        },
    },
    emits: ['deleteUser'],
    methods: {
        handleDelete() {
            this.$emit('deleteUser', this.user.id);
        },
    },
    components: {
        TrashIcon,
    },
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
