import ApiService from '../api-service';
import { Ref, ref } from 'vue'
import Post from '@/types/models/post';

class PostApi {

    async getAllPosts(){
        const apiService = await ApiService.getInstance();
        return await apiService.get('/posts');
    }

    async getOnePost(id : number){
        const apiService = await ApiService.getInstance();
        return apiService.get(`/posts/${id}`);
    }

    async createPost(post:  Post){
        const apiService = await ApiService.getInstance();
        return apiService.post(`/posts`,post);
    }

    async deletePost(id: number){
        const apiService = await ApiService.getInstance();
        return apiService.delete(`/posts/${id}`);
    }
}

export default new PostApi();