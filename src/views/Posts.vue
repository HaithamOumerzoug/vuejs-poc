<template lang="en">
    <div class="row">
        <div v-if="!isShow">
            <button 
                class="btn btn-success float-end mt-3"
                @click="showForm"
            >Add post</button>
        </div>
        <div v-else>
            <AddPost/>
        </div>
    </div>
    <div v-if="posts.length>0" class="row">
        <div v-for="post in posts" class="col-md-8 offset-2">
            <PostComponent 
                :post="post" 
                @deletePost="deleteOnePost($event)"
            />
        </div>
    </div>
    <div v-else class="spinner-grow text-primary mt-5" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <router-view></router-view>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import  PostComponent from '@/components/Post.vue';
import  AddPost from '@/components/AddPost.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    components:{
        PostComponent,
        AddPost
    },
    setup(){
        let store = useStore();


        onMounted(()=>{
            store.dispatch('post/getAllPost');
        })

        const posts = computed(()=>{
            return store.getters['post/getPosts'];
        });
        const deleteOnePost = async (id:number)=>{
            console.log(`[INFO] Delete post  id : { ${id} }`);
            store.dispatch('post/deletePost',{id});
        };
        const showForm = ()=>{
            store.dispatch('post/setShow');
        }

        const isShow = computed(()=>{
            return store.getters['post/getShow'];
        })

        return{
            posts,
            isShow,
            deleteOnePost,
            showForm
        }

    }
})
</script>
<style lang="">
    
</style>