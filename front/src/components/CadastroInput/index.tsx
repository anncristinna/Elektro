import {Input, Label} from './style'

type PropsCadastro = {
    label: string;
    placeholder: string;
}

const CadastroInput = (props: PropsCadastro) => {
    return (
        <div>
            <Label htmlFor=""> {props.label}
                <Input type="text" placeholder={props.placeholder}/>
            </Label>
        </div>
    )
}

export default CadastroInput