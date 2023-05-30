import { useEffect, useState } from 'react';
import api from '../../services/api';
import { getAuthHeader, getProfile } from '../../services/auth';
import MainScreen from '../../components/MainScreen';
import Feed from '../../components/Feed';
import { Post } from '../../Model/Post';
import { likePost, unlikePost } from '../../services/Posts';


function Home(){
    const profile = getProfile();
    const [posts, setPosts] = useState<Post[]>([]);
    const authHeader = getAuthHeader();

    useEffect(() => {
        async function getPosts(){
            try{
                const { data } = await api.get("/feed", authHeader);
                setPosts(data);
            } catch (err){
                alert("Erro ao obter o Feed")
            }
        }

        getPosts();
    }, []);

    async function postCreated(post: Post) {
        try{
            const { data } = await api.get(`/posts/${post._id}`, authHeader);
            setPosts((posts) => [data, ...posts]);
        } catch (err){
            alert("Erro ao tentar obter post salvo")
        }

    }
    
    async function handleLike(postId: string){
        const[post, ...rest] = posts.filter((post) => post._id === postId )

        try {

            if (post && !post.likes.includes(profile)){
                const newPost = await likePost(post, profile);
                changePosts(newPost);
            } else {
                const newPost = await unlikePost(post, profile);
                changePosts(newPost);
            }

        }catch (err) {
            alert("Erro ao dar like.");
        }
    }

    function changePosts(newPost: Post){
        setPosts((posts) => {
            const index = posts.indexOf(newPost);
            posts[index] = newPost;
            return [...posts];
        });
    }

    return (
        <div className='w-screen h-screen flex'>
            <MainScreen postCreated={postCreated}>
                <Feed posts={posts} handleLike={handleLike} />
            </MainScreen>
        </div>
    );

}

export default Home;