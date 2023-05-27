import AuthForm, { Auth } from "../../components/AuthForm";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";


interface UserToken {
    profile: string;
    user: string;
}


function Login() {

    const navigate = useNavigate();

    async function handleRegister(auth: Auth) {
        try {
            const { data } = await api.post("/security/login", auth);
            const decodedToken = jwtDecode(data.accessToken) as  UserToken;
            localStorage.setItem("profile", decodedToken.profile);
            localStorage.setItem("user", decodedToken.user);
            localStorage.setItem("accessToken", data.accessToken);

            navigate("/home")
        } catch (err){
            alert("Erro na criação do usuário")
        }
    }

    return <AuthForm 
                authFormTitle="Faça o login e começe a usar!"
                submitFormButtonText="Entrar"
                routeName="/signup"
                submitFormButtonAction={() => {}}
            />
}

export default Login;