<template lang="en">
    <div v-if="onePost" class="col-md-8 offset-2 my-5">
        <h1>{{ onePost.title }}</h1>
        <p>{{ onePost.body }}</p>
    </div>
    <div v-else-if="loading" class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else-if="err" class="alert alert-dismissible alert-danger my-3">
        <button type="button" class="btn-close" data-bs-dismiss="alert" @click="showForm"></button>
        <strong>{{ err }}</strong>
    </div>
    <div v-else></div>
    
</template>
<script lang="ts">
import { defineComponent, Ref, ref, onMounted , watch } from 'vue';

import Post from '@/types/models/post';
import { useStore } from 'vuex';

export default defineComponent({
    props:['id','show'],
    setup(props){
        let store = useStore();

        let onePost: Ref<Post> | any = ref();
        let err: any = ref(null);
        let loading: Ref<boolean> = ref(false);
        onMounted(()=>{
            loading.value=true;
            loadPost(); 
        });

        const loadPost = async ()=>{
            store.dispatch('post/getOnePost',{id: props.id});

            setTimeout(()=>{
                onePost.value = store.getters['post/getOnePost'];
            },2000);
            console.log(onePost);
            
        }

        watch(err , ()=>{
            if(err.value){
                setTimeout(()=>{
                    err.value=null;
                },2000)
            }
        })

        return {
            onePost,
            err,
            loading
        }

    }
})
</script>
<style lang="">
    
</style>
