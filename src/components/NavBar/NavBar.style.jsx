import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;             /* lets nav grow in the middle */
  min-width: 220px;           /* avoids collapsing too small on wrap */

    @media (max-width: 851px) {
    display: none;   /* hide the nav completely */
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
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
  color: #333;
  text-decoration: none;
  font-weight: 500;
  line-height: 1;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background 120ms ease-in-out;

  &:hover,
  &:focus-visible {
    background: rgba(0,0,0,0.06);
    outline: none;
  }

  &[aria-current="page"] {
    text-decoration: none;
  }
`;
