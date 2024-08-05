import {DivBotaoVoltar} from './style'

type Props  = {
    arrow: string
}

const BotaoVoltar = (props: Props) => {
    return (
       <DivBotaoVoltar className="botaoVoltar">
        <img src= {props.arrow} alt="Icone de seta" />
       </DivBotaoVoltar>
    )
}

export default BotaoVoltar;