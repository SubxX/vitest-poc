const END_POINT = 'https://dummyjson.com/posts'
import axios from 'axios';

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number,
    tags: string[],
    reactions: number
}

export const getPosts = async (): Promise<Post[]> => {
    const { data } = await axios.get(END_POINT);
    return data?.posts ?? []
}