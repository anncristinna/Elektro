import {Div} from './style'

//imagens
import FaceImg from '../../assets/face.png'
import GoogleImg from '../../assets/google.png'

const ContainerLogo = () => {
    return (
        <Div>
            <img src= {FaceImg} alt="Logo do Facebook" />
            <img src= {GoogleImg} alt="Logo do Google" />
        </Div>
    )
}

export default ContainerLogo