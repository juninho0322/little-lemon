import { NavbarItemStyled } from "./NavbarItem.style";

export const NavbarItem = ({ href, children }) => {

    return <NavbarItemStyled href={href}>{children}</NavbarItemStyled>;
};