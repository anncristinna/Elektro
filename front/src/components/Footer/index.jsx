import Home from '../../assets/home.png'
import Chat from '../../assets/chat.png'
import Ring from '../../assets/ring.png'
import Profile from '../../assets/profile.png'

//componentes
import {DivFooter, ItemFooter} from './style'
import { useNavigate } from 'react-router-dom'


const Footer = () => {

    const navigate = useNavigate()

    return (
        <DivFooter>
            <ItemFooter>
                <img src= {Home} alt="Icone de home" onClick={() => navigate('/')}/>
                <p>Home</p>
            </ItemFooter>
            <ItemFooter>
                <img src= {Chat} alt="Icone de chat" />
                <p>Chat</p>
            </ItemFooter>
            <ItemFooter>
                <img src= {Ring} alt="Icone de avisos" />
                <p>Avisos</p>
            </ItemFooter>
            <ItemFooter>
                <img src= {Profile} alt="Icone de perfil" onClick={() => navigate('/meuperfilvisitante')}/>
                <p>Perfil</p>
            </ItemFooter>
        </DivFooter>
    )
}

export default Footer;