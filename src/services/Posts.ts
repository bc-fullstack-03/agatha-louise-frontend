import api from './api';
import { getAuthHeader } from './auth';
import { Post } from '../Model/Post';


async function likePost(post: Post, profile: string): Promise<Post> {
    api.post(`/posts/${post._id}/like`, null, getAuthHeader());
    return like(post, profile)
}

function like(post: Post, profile: string){
    post.likes.push(profile);
    return post;
}

async function unlikePost(post: Post, profile: string): Promise<Post> {
    api.post(`/posts/${post._id}/unlike`, null, getAuthHeader());
    return unlikePost(post, profile)
}

function unlike(post: Post, profile: string){
    const index = post.likes.indexOf(profile);
    post.likes.splice(index, 1);
    return post;
}

export { likePost, unlikePost };