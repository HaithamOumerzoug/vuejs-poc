import Post from '@/types/models/post';
import { MutationTypes } from '../type-defs/mutation.type';

export const mutations = {

    [MutationTypes.SET_POSTS]( state: any , payload: Post[] ){
        state.posts = payload;
    },

    [MutationTypes.ADD_POST]( state: any , payload: Post ){
        state.posts.unshift(payload);
    },

    [MutationTypes.SET_POST]( state: any , payload: Post ){
        state.post = payload;
    },

    [MutationTypes.DELETE_POST]( state: any , payload: { id: number } ){
        state.posts.filter((post: Post)=>post.id!==payload.id);
    },
}