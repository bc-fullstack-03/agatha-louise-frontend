import { useEffect, useState } from 'react';
import api from '../../services/api';
import getAuthHeader from '../../services/auth';
import MainScreen from '../../components/MainScreen';
import Feed from '../../components/Feed';


function Home(){
    const [posts, setPosts] = useState([]);
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

    return (
        <div className='w-screen h-screen flex'>
            <MainScreen>
                <Feed posts={posts} />
            </MainScreen>
        </div>
    );

}

export default Home;