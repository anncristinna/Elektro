//componentes
import CadastroInput from "../../components/CadastroInput"
import ContainerLogo from "../../components/ContainerLogo"
import Botao from "../../components/Botao"
import Header from '../../components/Header'

//styled
import {DivContainerLogo, DivBotao, Div, TextContainer} from './style'

//imagens
import Seta from '../../assets/voltar.png'
import Empty from '../../assets/empty.png'
import { useNavigate } from "react-router-dom"


const Cadastro2 = () => {

    const navigate = useNavigate()

    return (
        <Div>
            <Header icon1= {Seta} content="Cadastrar-se" icon2= {Empty}/>
            <DivContainerLogo>  
                <ContainerLogo/>
                <TextContainer>ou</TextContainer>
            </DivContainerLogo>
            <form action="">
                <CadastroInput label="Nome" placeholder="Digite seu nome completo"/>
                <CadastroInput label="CPF" placeholder="Digite seu CPF"/>
                <CadastroInput label="Telefone" placeholder="Digite seu telefone"/>
                <CadastroInput label="E-mail" placeholder="Digite seu e-mail"/>
                <CadastroInput label="Senha" placeholder="Digite sua senha"/>
                <CadastroInput label="Confirme senha" placeholder="Confirme sua senha"/>
            </form>
            <DivBotao onClick={() => navigate('/parabens')}>
                <Botao content="Cadastrar-se" color="#2B2B2B"/>
            </DivBotao>
        </Div>
       
    )
}

export default Cadastro2 