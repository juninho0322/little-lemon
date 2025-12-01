import { NavbarStyled, NavList } from './Navbar.style';
import { NavbarItem } from './NavbarItem/NavbarItem';



export const Navbar = ( {children, $ignoreMQ} ) => {
  return (
    <NavbarStyled aria-label="Primary" $ignoreMQ={$ignoreMQ}>
        <NavList>
            {children}
        </NavList>
    </NavbarStyled>
  );
};

Navbar.NavbarItem = NavbarItem;
