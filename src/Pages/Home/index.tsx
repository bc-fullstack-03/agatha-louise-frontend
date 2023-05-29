import { useEffect, useState } from 'react';
import api from '../../services/api';
import getAuthHeader from '../../services/auth';
import MainScreen from '../../components/MainScreen';
import Feed from '../../components/Feed';
import { Post } from '../../Model/Post';


function Home(){
    const user = localStorage.getItem("user") || ""
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

    function postCreated(post: Post) {
        post = {
            ...post,
            profile: {
                name: user,
            },
        };

        setPosts((posts) => [post, ...posts]);
    }

    return (
        <div className='w-screen h-screen flex'>
            <MainScreen postCreated={postCreated}>
                <Feed posts={posts} />
            </MainScreen>
        </div>
    );

}

export default Home;