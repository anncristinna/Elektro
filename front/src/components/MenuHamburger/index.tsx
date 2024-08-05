import React, { useState } from "react"
import { MenuIcon, MenuContainer, LiSair } from "./styled"

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <MenuIcon onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuContainer isOpen={isOpen}>
        <ul>
          <li>Editar dados</li>
          <li>Meus pedidos</li>
          <li>Meus produtos</li>
          <li>Meu carrinho</li>
          <LiSair onClick={closeMenu}>Sair</LiSair>
        </ul>
      </MenuContainer>
    </>
  );
};

export default HamburgerMenu

