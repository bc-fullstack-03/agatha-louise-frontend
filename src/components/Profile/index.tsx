import { useNavigate } from "react-router-dom";
import Heading from "../Heading";
import { UserCircle } from "@phosphor-icons/react";
import Text from "../Text";
import Button from "../Button";

function Profile () {

    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    function handleLogout () {
        localStorage.clear()
        navigate("/")
    }

    return (
        <div className="basis-5/6">
            <div>
                <Heading className="border-b border-slate-400 mt-4 mb-4" >
                    <Text size="lg" className="font-extrabold ml-5">
                        Perfil
                    </Text>
                    <div className="ml-5 my-4 w-full max-w-sm">
                        <div className="flex items-center flex-1 my-4">
                            <UserCircle size={48} weight="light" />
                            <Text className="font-extrabold ml-2">{user}</Text>
                        </div>
                    </div>
                    <Button onClick={handleLogout}>Sair</Button>
                </Heading>
            </div>
        </div>
    );
}

export default Profile;