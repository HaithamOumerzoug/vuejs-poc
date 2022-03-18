import Post from '@/types/models/post';
import { ActionContext }  from "vuex";
import PostApi from '@/api/post/post';
import { PostSate } from '../type-defs/post-state';

export const actions = {

    // Get all posts
    getAllPost({ commit }:ActionContext<PostSate,any>){
        new Promise((resolve,reject)=>{
            PostApi.getAllPosts().then(res=>{
                const posts = res.data;
                commit('SET_POSTS',posts);
                resolve(res);
            }).catch(err=>{
                console.log("error :",err,err.status);
                reject(err);
            })
        })
    },

    // Get one post by id
    getOnePost( { commit }: ActionContext<PostSate , any> , payload:{ id :number} ){
        new Promise((resolve,reject)=>{
            PostApi.getOnePost(payload.id).then(res=>{
                const post = res.data;
                commit('SET_POST',post);
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        });
    },

    // Create post
    createOnePost( { commit }: ActionContext<PostSate,any> , payload:Post ){
        new Promise((resolve,reject)=>{
            PostApi.createPost(payload).then(res=>{
                const post = res.data;
                commit('ADD_POST',post);
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        });
    },

    // Delete post
    deletePost( { commit }: ActionContext<PostSate,any> , payload:{ id: number } ){
        new Promise((resolve,reject)=>{
            PostApi.deletePost(payload.id).then(res=>{
                commit('DELETE_POST',payload);
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        });
    },

    setShow( { commit } : ActionContext<PostSate,any> ){
        commit('SET_SHOW');
    }
}
