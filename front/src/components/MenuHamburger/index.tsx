import React, { useState } from "react"
import { MenuIcon, MenuContainer, LiSair, LiUser } from "./styled"
import { useNavigate } from "react-router-dom";

//imagem
import User from '../../assets/user.png'

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navigate = useNavigate()

  return (
    <>
      <MenuIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuContainer isOpen={isOpen}>
        <ul>
          <LiUser onClick={() => navigate('/meuperfilvisitante')}>
            <img src= {User} alt="Icone de usuário" />
            Usuário
          </LiUser>
          <li onClick={() => navigate('/erromenu')}>Editar dados</li>
          <li onClick={() => navigate('/erromenu')}>Meus pedidos</li>
          <li onClick={() => navigate('/erromenu')}>Meus produtos</li>
          <li onClick={() => navigate('/erromenu')}>Meu carrinho</li>
          <LiSair onClick={closeMenu}>Sair</LiSair>
        </ul>
      </MenuContainer>
    </>
  );
};

export default HamburgerMenu

