import MainScreen from '../../components/MainScreen';
import FriendsList from '../../components/FriendsList';


function Friends(){

    return (
        <div className='w-screen h-screen flex'>
            <MainScreen>
                <FriendsList />
            </MainScreen>
        </div>

    )

}

export default Friends;