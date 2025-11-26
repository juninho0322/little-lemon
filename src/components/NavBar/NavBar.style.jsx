import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;             /* lets nav grow in the middle */
  min-width: 220px;           /* avoids collapsing too small on wrap */

    @media (max-width: 700px) {
    display: none;   /* hide the nav completely */
  }
`;

export const NavWrapper = styled.div`
  margin-right: auto;  /* push to the left */

`;

export const NavList = styled.ul`
  display: flex;
  margin-left: auto;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 10px 14px;
  }
`;

export const NavLinkStyled = styled.a`
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
