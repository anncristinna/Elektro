import {DivCategoria} from './style'

type PropsCategoria = {
    image: string;
    content: string;
}

const Categoria = (props: PropsCategoria) => {
    return (
        <DivCategoria>
            <img src= {props.image} alt="Imagem do produto" />
            <p>{props.content}</p>
        </DivCategoria>
    )
}

export default Categoria