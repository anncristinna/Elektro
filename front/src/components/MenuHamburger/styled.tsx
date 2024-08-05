import styled from "styled-components";



export const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    width: 100%;
    height: 3px;
    background-color: white;
  }
`;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: ${({ isOpen }) => (isOpen ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none")};
  transition: left 0.4s ease;

  ul {
    list-style: none;
    padding: 20px;

    li {
      margin: 10px 0;
      font-size: 18px;
      border-bottom: 1px solid grey;
      padding: 10px;
      color: #2B2B2B;
      font-size: 1rem;
      font-family: 'Montserrat';
      font-weight: 500;
    }
  }
`
export const LiSair = styled.li `
    border: none;
    position: absolute;
    bottom: 10%;
`
