import { useEffect } from 'react';
import api from '../../services/api';
import getAuthHeader from '../../services/auth';
import Menu from '../../components/Menu';
import Feed from '../../components/Feed';


function Home(){

    const authHeader = getAuthHeader();

    useEffect(() => {
        async function getPosts(){
            try{
                const { data } = await api.get("/feed", authHeader);
                console.log(data)
            } catch (err){
                alert("Erro ao obter o Feed")
            }
        }

        getPosts();

    }, [authHeader]);

    return (
        <div className='w-screen h-screen flex'>
            <Menu />
            <Feed />
        </div>

    )

}

export default Home;