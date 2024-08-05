import {DivProduto, DivImg, DivInfo} from './style'

//imagens
import Coracao from '../../assets/coracao.png'

type PropsProduto = {
    image: string;
    name: string;
    price: string;
}

const Produto = (props: PropsProduto) => {
    return (
        <DivProduto>
            <DivImg>
                <img src= {props.image} alt="Imagem do produto" />
            </DivImg>
            <DivInfo>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.price}</p>
                </div>
                <div>
                    <img src= {Coracao} alt="Icone de coração" />
                </div>
            </DivInfo>

        </DivProduto>
    )
}

export default Produto