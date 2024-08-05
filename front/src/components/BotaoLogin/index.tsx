import { useNavigate } from 'react-router-dom'
import {Botao} from './style'

const BotaoLogin = () => {

    const navigate = useNavigate()

    return (
        <Botao onClick={() => navigate('/login')}>
            Fazer login
        </Botao>
    )
}

export default BotaoLogin