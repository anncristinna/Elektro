import { HomeDiv, HeaderHome, InputHeader, TituloHome, DivImagem, SectionCategoria, TituloCategoria, RowCategorias, SectionProduto, RowProduto, TituloProduto } from "./style"

//imagens
import Menu from '../../assets/menu.png'
import Carrinho from '../../assets/carrinho.png'
import Logo from '../../assets/LogoElektrop.png'
import slide1 from '../../assets/slide1.png'
import Celular from '../../assets/celulares.png'
import Notebook from '../../assets/notebooks.png'
import Tablet from '../../assets/tablets.png'
import Perifericos from '../../assets/perifericos.png'
import TV from '../../assets/tvs.png'
import Acessorios from '../../assets/acessorios.png'
import Pc from '../../assets/pcs.png'
import Smartwatche from '../../assets/smatwatches.png'
import Celular1 from '../../assets/celular1.png'
import Celular2 from '../../assets/celular2.png'
import Televisao from '../../assets/televisao.png'
import Monitor from '../../assets/monitor.png'
import Iphone from '../../assets/iphone.png'
import Relogio from '../../assets/relogio.png'

//componentes
import Categoria from "../../components/Categoria"
import Produto from "../../components/Produto"
import FooterHome from '../../components/FooterHome'
import Footer from '../../components/Footer'
import HamburgerMenu from "../../components/MenuHamburger"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Inicial from "../Inicial"



const Home = () => {

    const [Splash, setSplash] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setSplash(false)
        }, 3000)
        return () => clearTimeout(timer)
    })

    const navigate = useNavigate()

    return (
        <HomeDiv>
            {Splash && (<Inicial/>)}
            <HeaderHome>
                <HamburgerMenu/>
                <InputHeader type="text" placeholder=" Encontrar na Elektro" />
                <img src= {Carrinho} alt="Icone de carrinho" />
            </HeaderHome>
            <TituloHome>
                <img src= {Logo} alt="Logo do site" />
                <h2>Bem vindo à Elektro!</h2>
            </TituloHome>
            <DivImagem>
                <img src= {slide1} alt="" />
            </DivImagem>
            
            <SectionCategoria>
                <TituloCategoria>Categorias Elektro</TituloCategoria>
                <RowCategorias>
                    <Categoria image= {Celular} content="Celulares"/>
                    <Categoria image= {Notebook} content="Notebooks"/>
                    <Categoria image= {Tablet} content="Tablests"/>
                    <Categoria image= {Perifericos} content="Periféricos"/>
                </RowCategorias>
                <RowCategorias>
                    <Categoria image= {TV} content="Tvs"/>
                    <Categoria image= {Acessorios} content="Acessórios"/>
                    <Categoria image= {Pc} content="PCs"/>
                    <Categoria image= {Smartwatche} content="Smartwatches"/>
                </RowCategorias>
            </SectionCategoria>
            <TituloProduto>Para você</TituloProduto>
            <SectionProduto>
                <RowProduto>
                    <Produto image={Celular1} name='Moto G60' price='R$800,00'/>
                    <Produto image={Celular2} name='Capa de celular' price='R$20,00'/>
                </RowProduto>
            </SectionProduto>
            <Footer/>
            <TituloProduto>Produtos em destaque</TituloProduto>
            <SectionProduto>
                <RowProduto>
                    <Produto image={Televisao} name='Smart TV' price='R$1400,00'/>
                    <Produto image={Monitor} name='Monitor' price='R$750,00'/>
                </RowProduto>
            </SectionProduto>
            <TituloProduto>Mais vendidos</TituloProduto>
            <SectionProduto>
                <RowProduto>
                    <Produto image={Iphone} name='Smartphone' price='R$3200,00'/>
                    <Produto image={Relogio} name='Smartwatch' price='R$900,00'/>
                </RowProduto>
            </SectionProduto>
            <FooterHome/>
        </HomeDiv>
    )
}

export default Home;