import { NavbarItemStyled } from "./NavbarItem.style";

export const NavbarItem = ({ onClick, children, $active }) => {
  return (
    <NavbarItemStyled onClick={onClick} $active={$active}>
      {children}
    </NavbarItemStyled>
  );
};
