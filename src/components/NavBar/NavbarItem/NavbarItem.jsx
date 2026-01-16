import { NavbarItemStyled } from "./NavbarItem.style";

export const NavbarItem = ({ children, href, $active, onClick, }) => {
  // If it has href -> render as anchor (scroll)
  if (href) {
    return (
      <NavbarItemStyled as="a" href={href} $active={$active} >
        {children}
      </NavbarItemStyled>
    );
  }

  // Otherwise -> normal button (categories)
  return (
    <NavbarItemStyled
      as="button"
      type="button"
      onClick={onClick}
      $active={$active}
    >
      {children}
    </NavbarItemStyled>
  );
};
