import { NavbarStyled, NavList, NavLinkStyled, NavWrapper } from './NavBar.style';
import { Logo } from "../Logo/Logo";


export const NavBar = ( ) => {
  return (
    <NavbarStyled aria-label="Primary">
      <NavWrapper>
        <Logo $size="medium" $paddingtop="large"/>
      </NavWrapper>
      <NavWrapper>
        <NavList>
          <li><NavLinkStyled href="#home" aria-current="page">Home</NavLinkStyled></li>
          <li><NavLinkStyled href="#about">About</NavLinkStyled></li>
          <li><NavLinkStyled href="#menu">Menu</NavLinkStyled></li>
          <li><NavLinkStyled href="#order-online">Order</NavLinkStyled></li>
          <li><NavLinkStyled href="#login">Login</NavLinkStyled></li>
        </NavList>
      </NavWrapper>
    </NavbarStyled>
  );
};
