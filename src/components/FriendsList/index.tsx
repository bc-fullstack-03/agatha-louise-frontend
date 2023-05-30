import { useEffect, useState } from 'react';
import Heading from "../Heading";
import { UserCircle } from "@phosphor-icons/react";
import Text from "../Text";
import Button from "../Button";
import api from "../../services/api";
import { getAuthHeader, getProfile } from '../../services/auth';


interface Profile {
    _id: string;
    name: string;
    following: string[];
    followers: string[];
}


function FriendsList () {

    const authHeader = getAuthHeader();
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const myProfileId = getProfile();

    useEffect(() => {
        async function getProfiles() {
            try {
                const { data } = await api.get("/profiles", authHeader)
                setProfiles(data);
            } catch(err) {
                alert("Erro ao tentar obter os perfid")
            }
        }

        getProfiles();
    }, []);

    async function handleFollow (profileId: string) {
        
        try{    
            await api.post(`/profiles/${profileId}/follow`, null, authHeader);
            
            setProfiles((profiles) => {
               const newProfiles = profiles.map(profile => {
                   
                    if(profile._id === profileId) {
                        !profile.followers.includes(myProfileId) && 
                            profile.followers.push(myProfileId);
                    }

                   return profile;
                });
                return[... newProfiles];
            });
        } catch (err) {
            alert ("Erro ao tentar seguir perfil.")
        }
    }

    return (
        <div className="basis-5/6 overflow-y-auto scroll-smooth">
            <Heading className="border-b border-slate-400 mt-4 mb-4">
                <Text size="lg" className="font-extrabold ml-5">
                    Amigos
                </Text>
            </Heading>
            <ul>
                {profiles && 
                profiles.map ((profile) => (
                    <li className="flex flex-col my-5 ml-5 w-full max-w-sm" key={profile._id}>
                        <div className="flex items-center">
                            <UserCircle size={48} weight='thin' className='text-slate-50'/>
                            <Text className="ml-2 font-extrabold">{profile.name}</Text>
                        </div>
                        <div className="flex items-center ml-2">
                            <Text>{profile.followers.length > 0 && 
                                `${profile.followers.length} seguidores`}
                            </Text>
                        </div>
                        <div className="flex items-center ml-2">
                            <Text>{profile.following.length > 0 &&
                                `Seguindo ${profile.following.length} perfis`}
                            </Text>
                        </div>
                        <Button 
                            className="my-2" 
                            onClick={() => handleFollow(profile._id) }
                            disabled={profile.followers.includes(myProfileId)}
                        >
                            Seguir
                        </Button>
                    </li>
                ))}
                </ul>
        </div>

    );
}

export default FriendsList;