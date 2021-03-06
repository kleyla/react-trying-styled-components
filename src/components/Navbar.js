import React, { useState } from "react";
import styled from "styled-components";

export const Navbar = () => {
  const [isOpen, setIOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#">
        Karen<span>Codes</span>
      </Logo>
      <Hamburger onClick={() => setIOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Our work</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Careers</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #468068;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #7b7fda;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #6a6ebc;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  & span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;
