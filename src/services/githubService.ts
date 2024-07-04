import axios from 'axios';

export interface GitHubUser {
    id: number;
    login: string;
    avatar_url: string;
}

export const fetchGitHubUsers = async (): Promise<GitHubUser[]> => {
    const response = await axios.get<GitHubUser[]>('https://api.github.com/users');
    return response.data.slice(0, 10);
};