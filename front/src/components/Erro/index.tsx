//imagens
import Erroimg from '../../assets/Error.png'

//styled
import {ErroDiv, Titulo, TextErro} from './style'

type PropsErro = {
    content: string;
}

const Erro = (props: PropsErro) => {
    return (
        <ErroDiv>
            <div>
                <Titulo>
                    Opsss...
                </Titulo>
            </div>
            <div>
                <img src= {Erroimg} alt="Imagem de erro 404" />
            </div>
            <TextErro>
                {props.content}
            </TextErro>

        </ErroDiv>
    )
}

export default Erro