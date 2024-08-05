import {DivMeus, Img} from './style'

type PropsMeus = {
    logo: string;
    content: string;
}

const Meus = (props: PropsMeus) => {
    return (
        <DivMeus>
            <Img src= {props.logo} alt="Logo" />
            {props.content}
        </DivMeus>
    )
}

export default Meus