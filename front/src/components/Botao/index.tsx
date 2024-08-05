import {BotaoDiv} from './style'

type Props = {
    content: string;
    color: string;
}

const Botao = (props: Props) => {
    return (
        <BotaoDiv color = {props.color}>
            {props.content}
        </BotaoDiv>
    )
}

export default Botao

