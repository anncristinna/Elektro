import styled from 'styled-components'

export const HomeDiv = styled.div `
    background-color: #f5f5f5;
`

export const HeaderHome = styled.header `
    background-color: #2B2B2B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px 20px 32px;
    border-radius: 0px 0px 18px 18px;
`

export const InputHeader = styled.input `
    border-radius: 16px;
    border: 0px 0px 1px 0px;
    padding: 8px 16px 8px 16px;
    color: black;
`

export const TituloHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 4.5%;
    font-family: 'Russo One';
    color: #FF8F0E;
    font-weight: 300;
    font-size: 1rem;
`
export const DivImagem = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`
export const SectionCategoria = styled.section `
    border-top: 1px solid grey;
    width: 90vw;
    margin: 20px auto;
`

export const TituloCategoria = styled.text `
    display: block;
    margin-top: 20px;
    margin-left: 7px;
    font-size: 1rem;
    font-weight: 600;
    color: black;
    font-family: 'Montserrat', sans-serif;

`
export const TituloProduto = styled.text `
    display: block;
    margin-top: 20px;
    margin-left: 25px;
    font-size: 1rem;
    font-weight: 600;
    color: black;
    font-family: 'Montserrat', sans-serif;
`

export const RowCategorias = styled.div `
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
`
export const SectionProduto = styled.section `
    border-top: 1px solid grey;
    max-width: 90%;
    margin: 6% auto;
`
export const RowProduto = styled.div `
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`