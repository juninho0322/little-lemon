import { NavbarStyled, NavList, NavLink } from './NavBar.style';


export const Navbar = () => {
  return (
    <NavbarStyled aria-label="Primary">
      <NavList>
        <li><NavLink href="#home" aria-current="page">Home</NavLink></li>
        <li><NavLink href="#about">About</NavLink></li>
        <li><NavLink href="#menu">Menu</NavLink></li>
        <li><NavLink href="#order-online">Order</NavLink></li>
        <li><NavLink href="#login">Login</NavLink></li>
      </NavList>
    </NavbarStyled>
  );
};
