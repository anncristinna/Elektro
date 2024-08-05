import {DivCadastro, CadastroImagem, CadastroTexto, BotaoDiv} from './style'

//componentes
import Botao from '../../components/Botao'
import Header from '../../components/Header'

//imagens
import cadastro from '../../assets/cadastro.png'
import { DivBotao } from '../ErroPesquisa/style'
import Voltar from '../../assets/voltar.png'
import Empty from '../../assets/empty.png'

const Cadastro = () => {
    return (
        <DivCadastro>
            <Header icon1= {Voltar} content='Cadastrar-se' icon2= {Empty}/>
            <CadastroImagem>
                <img src={cadastro} alt="" />
            </CadastroImagem>
            <CadastroTexto>
                Faça parte do nosso time. <br />
                Cadastre-se!
            </CadastroTexto>
            <BotaoDiv>
                <Botao content='Cadastre-se' color= "#2B2B2B"/>
            </BotaoDiv>
            <div>
                <a href="#">Já possui cadastro? Faça Login!</a>
            </div>

        </DivCadastro>
    )
}

export default Cadastro 