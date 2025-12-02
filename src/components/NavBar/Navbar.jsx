import { NavbarStyled, NavList } from './Navbar.style';
import { NavbarItem } from './NavbarItem/NavbarItem';



export const Navbar = ( {children, $ignoreMQ, $paddingbottom} ) => {
  return (
    <NavbarStyled aria-label="Primary" $ignoreMQ={$ignoreMQ} $paddingbottom={$paddingbottom}>
        <NavList>
            {children}
        </NavList>
    </NavbarStyled>
  );
};

Navbar.NavbarItem = NavbarItem;
