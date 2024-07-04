<template>
    <div class="container mx-auto">
        <header class="flex py-4 mx-3 items-center">
            <ArrowLeftIcon class="h-6 w-6 mr-3 cursor-pointer" @click="navigateHome" />
            <h1 class="text-3xl font-bold m-0">GitHub Users</h1>
        </header>
        <div v-if="isLoading" class="text-center mt-4">Loading...</div>
        <div v-if="error" class="text-center mt-4 text-red-500">{{ error }}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <UserCard v-for="user in data" :key="user.id" :user="user" @deleteUser="handleDeleteUser" />
        </div>
    </div>
    <VueQueryDevtools />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import UserCard from '@/components/UserCard.vue';
import { fetchGitHubUsers, GitHubUser } from '@/services/githubService';
import { useRouter } from 'vue-router';
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

export default defineComponent({
    components: { UserCard, ArrowLeftIcon, VueQueryDevtools },
    setup() {
        const router = useRouter();

        const { data, isLoading, error } = useQuery<{ data: GitHubUser[] }>({
            queryKey: ['users'],
            queryFn: fetchGitHubUsers,
            // staleTime: 5 * 60 * 1000
        });

        const queryClient = useQueryClient();

        const handleDeleteUser = (userId: number) => {
            queryClient.setQueryData(['users'], (prevData: any) => {
                const updatedData = prevData?.filter(user => user.id !== userId) || [];
                return updatedData;
            });
        };

        const navigateHome = () => {
            router.push('/');
        };

        return { data, isLoading, error, handleDeleteUser, navigateHome };
    },
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
