import Post from '@/types/models/post';
import { MutationTypes } from '../type-defs/mutation.type';
import { PostSate } from '../type-defs/post-state';
import _ from 'lodash';

export const mutations = {

    [MutationTypes.SET_POSTS]( state: PostSate , payload: Post[] ){
        state.posts = payload;
    },

    [MutationTypes.ADD_POST]( state: PostSate , payload: Post ){
        state.posts.unshift(payload);
    },

    [MutationTypes.SET_POST]( state: PostSate , payload: Post ){
        state.post = payload;
    },

    [MutationTypes.DELETE_POST]( state: PostSate , payload: { id: number } ){
        console.log(payload);
        // state.posts.filter((post: Post)=>post.id!==payload.id);
        _.remove(state.posts,(post:Post)=>post.id===payload.id);
        console.log(state.posts.length);
        
    },

    [MutationTypes.SET_SHOW]( state: PostSate ){
        state.show=!state.show;
    },
}