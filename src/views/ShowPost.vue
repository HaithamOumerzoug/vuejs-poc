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
import { defineComponent, Ref, ref, onMounted , watch, computed } from 'vue';

import Post from '@/types/models/post';
import { useStore } from 'vuex';

export default defineComponent({
    props:['id'],
    setup(props){
        let store = useStore();

        let err: any = ref(null);
        
        onMounted(()=>{
            store.dispatch('post/getOnePost',{id: props.id}).catch(err=>err.value = err)
        });

        const onePost = computed(()=>{
            return store.getters['post/getOnePost'];
            
        });

        return {
            onePost,
            err
        }

    }
})
</script>
<style lang="">
    
</style>
