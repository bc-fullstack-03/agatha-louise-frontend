import Profile from '../../components/Profile';
import MainScreen from '../../components/MainScreen';


function ProfilePage(){

    return (
        <div className='w-screen h-screen flex'>
            <MainScreen>
                <Profile />
            </MainScreen>
        </div>
    );
}

export default ProfilePage;