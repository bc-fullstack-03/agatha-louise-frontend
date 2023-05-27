import logo_menu from '../../assets/logo_menu.svg';
import Text from '../Text';
import { House } from '@phosphor-icons/react'


function Menu () {
    return ( 
        <div className="basis-1/6 border-r border-slate-400 ml-4 pt-4">
            <div className='flex items-center ml-4'>
                <img src={logo_menu} alt="Logo Menu" />
                <Text className='font-extrabold ml-4'>Parrot</Text>
            </div>

            <ul className='pr-2'>
                <li className='mt-5'>
                    <div className='flex items-center px-4 rounded-full hover:bg-sky-400 ml-2'>
                        <House size={48} className='text-slate-50' weight="fill"></House>
                        <Text className='font-extrabold ml-4'>Página Inicial</Text>
                    </div>
                </li>
            </ul>
        </div>
    
    );
}

export default Menu;