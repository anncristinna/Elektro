import {HeaderDiv, TextTitulo, Button} from './style'

type PropsHeader = {
    icon1: string;
    content: string;
    icon2: string;
}

const Header = (props: PropsHeader) => {
    return (
        <HeaderDiv>
            <Button>
                <img src= {props.icon1} alt="Icone" />
            </Button>
            <TextTitulo>
                {props.content}
            </TextTitulo>
            <Button>
                <img src= {props.icon2} alt="Icone" />
            </Button>
        </HeaderDiv>
    )
}

export default Header