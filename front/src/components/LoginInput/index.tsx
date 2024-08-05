import {Input, Label, ImgInput, ImgInputVisibility} from './style'

//imagens
import Email from '../../assets/email.png'
import Senha from '../../assets/senha.png'
import Visibility from '../../assets/visibility.png'

const LoginInput = () => {
    return (
        <div>
            <Label>
                <ImgInput src= {Email} alt="Icone de e-mail" />
                <Input placeholder='Digite seu...'>
                </Input>
            </Label>
            <Label>
                <ImgInput src= {Senha} alt="Icone de cadeado" />
                <Input type= 'password' placeholder='***********' />
                <ImgInputVisibility src= {Visibility} alt="Icone de visibilidade de senha" />
            </Label>
        </div>
    )
}

export default LoginInput