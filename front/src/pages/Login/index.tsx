//componentes
import LoginInput from "../../components/LoginInput"
import Header from "../../components/Header"
import Botao from "../../components/Botao"
import ContainerLogo from "../../components/ContainerLogo"

//imagens
import Voltar from '../../assets/voltar.png'
import Empty from  '../../assets/empty.png'
import LogoElektro from '../../assets/LogoElektro.png'

//styled
import {DivLogin, Img, ASenha, DivSenha, DivBotao, DivContainerLogo, TextContainer, TextCadastro} from './style'


const Login = () => {
   return (
    <DivLogin>
        <Header icon1= {Voltar} content="Entrar" icon2= {Empty}/>
        <Img src= {LogoElektro} alt="Logo Elektro" />
        <LoginInput/>
        <DivSenha>
            <ASenha href="#">Esqueci minha senha</ASenha>
        </DivSenha>
        <DivBotao>
            <Botao content="Entrar" color="#2B2B2B"/>
        </DivBotao>
        <DivContainerLogo>
            <TextContainer>ou</TextContainer>
            <ContainerLogo/>
        </DivContainerLogo>
        <TextCadastro href="#">Não possui cadastro? Cadastre-se!</TextCadastro>
    </DivLogin>
   )
}

export default Login