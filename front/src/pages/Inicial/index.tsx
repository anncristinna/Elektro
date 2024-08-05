import { InicialDiv, TextTitulo} from './style'
import LogoElektro from '../../assets/LogoElektro.png'
import { useEffect } from 'react'

const Inicial = () => {
    useEffect(() => {
        
    })
    return (
        <InicialDiv>
            <img src={LogoElektro} alt="Logo Elektro" />
            <TextTitulo>Elektro</TextTitulo>

        </InicialDiv>
    )
}

export default Inicial

