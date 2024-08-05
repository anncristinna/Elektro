import {Footer, ImgDiv, Img} from './style'

//imagens
import Facebook from '../../assets/facebooklogo.png'
import Instagram from '../../assets/instalogo.png'
import Tiktok from '../../assets/tiktoklogo.png'
import X from '../../assets/xlogo.png'
import Linkedin from '../../assets/linkedinlogo.png'

const FooterHome = () => {
    return (
        <Footer>
            <p>Siga-nos nas redes sociais!</p>
            <ImgDiv>
                <Img src= {Facebook} alt="Logo do facebook" />
                <Img src= {Instagram} alt="Logo do instagram" />
                <Img src= {Tiktok} alt="Logo do Tiktok" />
                <Img src= {X} alt="Logo do X" />
                <Img src= {Linkedin} alt="Logo do LinkedIn" />
            </ImgDiv>
        </Footer>
    )
}

export default FooterHome