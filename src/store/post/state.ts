export const  initialState = {
    posts:[],
    post :{
        id : 0,
        title : '',
        body : '',
        userId : ''
    }
}

export const state = {
    post : initialState.post,
    posts : initialState.posts
}