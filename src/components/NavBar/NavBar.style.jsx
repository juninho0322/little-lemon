import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;             /* lets nav grow in the middle */
  min-width: 220px;           /* avoids collapsing too small on wrap */

    @media (max-width: 700px) {
    display: none;   /* hide the nav completely */
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 10px 14px;
  }
`;

export const NavLink = styled.a`
  color: var(--color-primary-text);
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background 120ms ease-in-out;

  &:hover,
  &:focus-visible {
    background: var(--color-primary);
    font-weight: 600;
  }

  &[aria-current="page"] {
    text-decoration: none;
  }
`;
