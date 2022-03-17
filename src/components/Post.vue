<template lang="en">
    <div class="card my-3">
        <div class="card-body">
            <h1
                @click="show=!show"
                class="card-title"
            >{{ post.title }}</h1>
            <p 
                v-if="show"
                class="lead"
            >{{ post.body }}</p>
            <div class="my-3">
                <router-link :to="{name:'ShowPost' , params:{id:post.id}}"  class="btn btn-sm btn-info">Show</router-link>
                <a 
                    class="btn btn-sm btn-warning mx-2"
                >Edit</a>
                <a
                    class="btn btn-sm btn-danger mx-2" 
                    @click.prevent="deleteOnePost(post.id)"
                >Delete</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props:['post'],
    methods:{
        deleteOnePost(id:number){
            this.$emit('deletePost',id);
        }
    },
    data() {
        return {
            show:false,
        }
    },
})
</script>
<style lang="">
    
</style>
