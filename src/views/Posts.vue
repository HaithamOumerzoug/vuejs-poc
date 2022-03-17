<template lang="en">
    <div class="row">
        <div v-if="!isShow">
            <button 
                class="btn btn-success float-end mt-3"
                @click="showForm"
            >Add post</button>
        </div>
        <div v-else>
            <AddPost
                @createPost = "createOnePost($event)"
                @show = "showForm"
            />
        </div>
    </div>
    <div v-if="all_posts.length>0" class="row">
        <div v-for="post in all_posts" class="col-md-8 offset-2">
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
import { defineComponent, Ref } from 'vue';
import Post from '@/types/models/post';
import  PostComponent from '@/components/Post.vue';
import  AddPost from '@/components/AddPost.vue';
import { ref , onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    components:{
        PostComponent,
        AddPost
    },
    setup(){
        let isShow: Ref<boolean> = ref(false);
        let all_posts: Ref<Post[]> = ref([]);

        let store = useStore();

        onMounted(()=>{
            getPosts();
        })
        const getPosts = async ()=>{
            store.dispatch('post/getAllPost');
            // all_posts.value = store.getters['post/getPosts'];
            setTimeout(()=>{
                all_posts.value = store.getters['post/getPosts'];
            },2000)
            // console.log(store.getters['post/getPosts']);
        };
        const createOnePost = async (post:Post)=>{ 
            
        };
        const deleteOnePost = async (id:number)=>{
            
        };
        const showForm = ()=>{
            isShow.value=!isShow.value;
        }

        return{
            all_posts,
            isShow,
            getPosts,
            createOnePost,
            deleteOnePost,
            showForm
        }

    }
})
</script>
<style lang="">
    
</style>