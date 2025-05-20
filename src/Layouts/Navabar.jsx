import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1;
  backdrop-filter: blur(3px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageLogo = styled.h2`
  font-size: 30px;
  font-family: sans-serif;
  font-weight: bolder;
  color: Tomato;
  margin-left: 5%;
`;

const Navi = styled.nav`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    text-align: center;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;
    transition: right 0.3s ease;
  }
`;

const NaviItems = styled.li`
  list-style: none;
  pddding: 0 20px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 40px;
  font-size: 20px;
  font-family: Verdana;
  margin-left: 30px;
  font-weight: 500;
  color: white;
  transition: all 0.6s ease;
  cursor: pointer;
  &:hover {
    color: #696e6a;
    text-decoration: underline;
  }
`;
const MenuToggle = styled.div`
  display: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    margin-right: 5%;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <ImageLogo>Cafesito</ImageLogo>

        <MenuToggle onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuToggle>

        <Navi open={menuOpen}>
          <NaviItems>
            <StyledLink to="/home" onClick={() => setMenuOpen(false)}>
              Home
            </StyledLink>
          </NaviItems>
          <NaviItems>
            <StyledLink to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </StyledLink>
          </NaviItems>
          <NaviItems>
            <StyledLink to="/story" onClick={() => setMenuOpen(false)}>
              Stories
            </StyledLink>
          </NaviItems>
          <NaviItems>
            <StyledLink to="/contact" onClick={() => setMenuOpen(false)}>
              Find Us
            </StyledLink>
          </NaviItems>
        </Navi>
      </NavContainer>
    </>
  );
};

export default Navbar;
