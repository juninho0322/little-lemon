import styled from "styled-components";

export const NavbarItemStyled = styled.a`
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