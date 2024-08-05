import {Div, MainDiv, DivBotoes, MeusDiv} from './style'

//imagens
import Seta from '../../assets/ir.png'
import Dados from '../../assets/dados.png'
import Config from '../../assets/config.png'
import LogoElektro from '../../assets/LogoElektrop.png'
import SemPerfil from '../../assets/SemPerfil.png'
import Produtos from '../../assets/produtos.png'
import Coracao from '../../assets/coracao.png'
import Carrinho from '../../assets/carrinhopreto.png'
import Cupom from '../../assets/cupom.png'
import Chat from '../../assets/chatpreto.png'

//componentes
import Meus from "../../components/Meus"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Botao from "../../components/Botao"

const MeuPerfilVisitante = () => {
    return (
        <Div>
            <Header icon1={LogoElektro} content="" icon2= {Config}/>
            <MainDiv>
                <img src= {SemPerfil} alt="Sem foto de perfil" />
                <DivBotoes>
                    <Botao content='Entrar' color= '#2B2B2B'/>
                    <Botao content='Cadastrar' color='#2B2B2B'/>
                </DivBotoes>
                <MeusDiv>
                    <Meus logo={Dados} content="Meus dados"/>
                    <Meus logo={Produtos} content="Meus produtos"/>
                    <Meus logo={Coracao} content="Meus favoritos"/>
                    <Meus logo={Carrinho} content="Meu carrinho"/>
                    <Meus logo={Cupom} content="Meus cupons"/>
                    <Meus logo={Chat} content="Meus chats"/>
                </MeusDiv>
            </MainDiv>
            <Footer/>
        </Div>
    )
}

export default MeuPerfilVisitante