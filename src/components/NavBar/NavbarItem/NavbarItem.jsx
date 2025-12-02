import { NavbarItemStyled } from "./NavbarItem.style";

export const NavbarItem = ({ onClick, children }) => {
  return (
    <NavbarItemStyled onClick={onClick}>
      {children}
    </NavbarItemStyled>
  );
};
