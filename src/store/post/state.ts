export const  initialState = {
    posts:[],
    post :{
        id : 0,
        title : '',
        body : '',
        userId : ''
    },
    show:false
}

export const state = {
    post : initialState.post,
    posts : initialState.posts,
    show: initialState.show
}