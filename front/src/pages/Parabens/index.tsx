import {ParabensDiv, TituloParabens, TextoParabens, DivBotao} from './style'
import BotaoVoltar from '../../components/BotaoVoltar'
//imagens
import ParabensImg from '../../assets/parabens.png'
import Ir from '../../assets/ir.png'

const Parabens = () => {
    return (
        <ParabensDiv>
            <div>
                <img src= {ParabensImg} alt="" />
            </div>
            <div>
                <TituloParabens>Parabéns, você conseguiu!</TituloParabens>
                <TextoParabens>  Bem vindo ao time de usuários e colaboradores da Elektro.</TextoParabens>
            </div>
            <DivBotao>
                <BotaoVoltar arrow= {Ir}/>
            </DivBotao>
        </ParabensDiv>
    )
}

export default Parabens