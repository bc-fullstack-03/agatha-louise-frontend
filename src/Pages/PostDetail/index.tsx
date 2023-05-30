import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Post } from "../../Model/Post";
import { getAuthHeader, getProfile } from '../../services/auth';
import MainScreen from "../../components/MainScreen";
import PostDetailItem from "../../components/PostDetailItem";


function PostDetail() {

    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState<Post>();

    useEffect(() => {
        async function getPostDatail (){
            try {
                const { data } = await api.get(`/posts/${postId}`, getAuthHeader());
                setPostDetail(data);
            } catch (err){
                alert("Erro ao tentar obter os detalhes do post.")
            }
        }
        getPostDatail();
    }, []);

    return (
        <MainScreen>
            {postDetail && <PostDetailItem postDetail={postDetail} setPostDetail={setPostDetail} />}
        </MainScreen>
    );
}

export default PostDetail;