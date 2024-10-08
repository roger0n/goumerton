import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';



const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media (min-width: 768px) {
    padding: 20px 0px;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #ff6347;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const MenuLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 60px;
    right: 0px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px;
    border-radius: 10px;
    z-index: 999;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

const MenuItem = styled.li`
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 0;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <Logo>GourmetOn</Logo>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <MenuLinks isOpen={isOpen}>
      <MenuItem>
  <Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>
    Início
  </Link>
</MenuItem>

<MenuItem>
  <Link to="apresentacao" smooth={true} duration={500} onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>
    Apresentação
  </Link>
</MenuItem>

<MenuItem>
  <Link to="funcionalidades" smooth={true} duration={500} onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>
    Funcionalidades
  </Link>
</MenuItem>

<MenuItem>
  <Link to="depoimentos" smooth={true} duration={500} onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>
    Depoimentos
  </Link>
</MenuItem>

<MenuItem>
  <Link to="contato" smooth={true} duration={500} onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>
    Contato
  </Link>
</MenuItem>
      </MenuLinks>
    </Navbar>
  );
};

export default Menu;
