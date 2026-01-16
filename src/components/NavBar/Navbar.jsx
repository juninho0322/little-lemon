import { NavbarStyled, NavList } from './Navbar.style';
import { NavbarItem } from './NavbarItem/NavbarItem';



export const Navbar = ( {children, $ignoreMQ, $paddingbottom, $gap} ) => {
  return (
    <NavbarStyled aria-label="Primary" $ignoreMQ={$ignoreMQ} $paddingbottom={$paddingbottom}>
        <NavList $gap={$gap}>
            {children}
        </NavList>
    </NavbarStyled>
  );
};

Navbar.NavbarItem = NavbarItem;
