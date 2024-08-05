import {ErroPesquisaDiv, Titulo, TextErro, DivBotao } from './style'

//imagens
import Seta from '../../assets/voltar.png'

//componentes
import BotaoVoltar from '../../components/BotaoVoltar'
import Footer from '../../components/Footer'

//imagens
import Error from '../../assets/Error.png'

const ErroPesquisa = () => {
    return (
        <ErroPesquisaDiv>
            <div>
                <Titulo>
                    Opsss...
                </Titulo>
            </div>
            <div>
                <img src= {Error} alt="Imagem de Erro 404" />
            </div>
            <TextErro>Infelizmente, parece que não encontramos o produto desejado.</TextErro>
            <DivBotao>
                <BotaoVoltar arrow= {Seta}/>
            </DivBotao>
            <Footer/>
        </ErroPesquisaDiv>
    )
}

export default ErroPesquisa;