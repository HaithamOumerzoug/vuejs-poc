import Post from "@/types/models/post";

export interface PostSate {
    posts: Post[],
    post: Post,
    show: boolean
}