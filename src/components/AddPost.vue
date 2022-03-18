<template lang="en">
    
    <form
        class="col-md-6 offset-3 my-4"
        @submit.prevent="createPost"
    >
        <div class="mb-3">
            <label 
                for="title" 
                class="form-label"
            >Title</label>
            <input 
                type="text" 
                class="form-control" 
                v-model="title" 
                id="title"
                @change="setError('')"
                aria-describedby="emailHelp"
                required
            >
        </div>
        <div class="mb-3">
            <label f
                or="body" 
                class="form-label"
            >Body</label>
            <textarea 
                type="text" 
                class="form-control" 
                v-model="body"
                @change="setError('')"
                id="body"
                required
            />
            <div v-if=" error!='' " class="text-danger">
                {{ error }}
            </div>
        </div>
        <button 
            class="btn btn-primary mx-3" 
            type="submit"
        >Submit</button>

        <button 
            class="btn btn-danger" 
            @click.prevent="showForm"
        >Close</button>
    </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import Post from '@/types/models/post';
export default defineComponent({
    data(){
        return {
            title:'',
            body:'',
            error:'',
        }
    },
    methods:{
        ...mapActions('post',['createOnePost','setShow']),

        createPost(){
            const payload: Post = {
                title:this.title,
                body: this.body
            }
            console.log("[INFO] Create post ,",this.title , this.body);

            if(payload.title === ''  || payload.body === ''){
                this.setError('Fields required.');
                return;
            }
            this.createOnePost(payload);
            this.setShow();
        },
        showForm(){
            // this.$emit("show");
            this.setShow();
        },
        setError(msg:string){
            this.error = msg;
        }
    },
})
</script>
<style lang="">
    
</style>
