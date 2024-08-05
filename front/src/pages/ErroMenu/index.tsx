//styled
import {DivMenu, DivBotao, DivBotaoLogin} from './style'

//components
import Erro from "../../components/Erro"
import Botao from '../../components/Botao'
import Footer from '../../components/Footer'
import BotaoLogin from '../../components/BotaoLogin'

const ErroMenu = () => {
    return (
        <DivMenu>
            <Erro content="Infelizmente, parece que você ainda não está logado."/>
            <DivBotao>
                <Botao content='Cadastrar' color='#2B2B2B'/>
            </DivBotao>
            <DivBotaoLogin><BotaoLogin/></DivBotaoLogin>
            <Footer/>
        </DivMenu>
    )
}

export default ErroMenu