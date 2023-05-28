import { UserCircle } from "@phosphor-icons/react";
import { Post } from "../../Model/Post";
import Heading from "../Heading";
import Text from "../Text";
import PostItem from "../PostItem";


interface FeedProps {
    posts: Post[];
}


function Feed ({ posts }: FeedProps) {
    console.log(posts)
    return (
        <div className="basis-5/6 overflow-y-auto scroll-smooth">
            <Heading className="border-b border-slate-400 mt-4">
                <Text size="lg" className="font-extrabold ml-5">
                    Página Inicial
                </Text>
                <div className="flex items-cente ml-5 my-4">
                    <UserCircle size={48} weight="light" className="text-slate-50" />
                    <Text className="font-extrabold ml-2">Fulano Silva</Text>
                </div>
            </Heading>
            <section>
                {posts &&
                posts.map((post: Post) => 
                    <PostItem post={post}/>
                )}
            </section>
        </div>
    );
}

export default Feed;