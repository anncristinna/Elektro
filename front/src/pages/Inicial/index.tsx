import { InicialDiv, TextTitulo} from './style'
import LogoElektro from '../../assets/LogoElektro.png'
import { useEffect, useState } from 'react'
import Home from '../Home'

const Inicial = () => {
    return (
        <InicialDiv>
            <img src={LogoElektro} alt="Logo Elektro" />
            <TextTitulo>Elektro</TextTitulo>

        </InicialDiv>
    )
}

export default Inicial

