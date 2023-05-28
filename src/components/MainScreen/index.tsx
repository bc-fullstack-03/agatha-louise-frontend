import Menu from '../../components/Menu';
import { ReactNode } from 'react';

interface MainScreenProps {
    children: ReactNode
}

function MainScreen(props: MainScreenProps){

    return (
        <div className='w-screen h-screen flex'>
            <Menu />
            {props.children}
        </div>
    )

}

export default MainScreen;