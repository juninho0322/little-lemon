import { NavbarStyled, NavList, NavLink, NavWrapper } from './NavBar.style';
import { Logo } from "../Logo/Logo";

export const Navbar = () => {
  return (
    <NavbarStyled aria-label="Primary">
      <NavWrapper>
        <Logo $size="medium" $paddingtop="large"/>
      </NavWrapper>
      <NavWrapper>
        <NavList>
          <li><NavLink href="#home" aria-current="page">Home</NavLink></li>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#menu">Menu</NavLink></li>
          <li><NavLink href="#order-online">Order</NavLink></li>
          <li><NavLink href="#login">Login</NavLink></li>
        </NavList>
      </NavWrapper>
    </NavbarStyled>
  );
};
