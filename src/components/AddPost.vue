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
import { defineComponent, Ref } from 'vue';
export default defineComponent({
    data(){
        return {
            title:'',
            body:'',
            error:'',
        }
    },
    methods:{
        createPost(){
            console.log("[INFO] Create post ,",this.title , this.body);
            const payload = {
                title : this.title,
                body  : this.body
            }
            if(payload.title === ''  || payload.body === ''){
                this.setError('Fields required.');
                return;
            }
            this.$emit('createPost',payload);
        },
        showForm(){
            this.$emit("show");
        },
        setError(msg:string){
            this.error = msg;
        }
    },
})
</script>
<style lang="">
    
</style>
