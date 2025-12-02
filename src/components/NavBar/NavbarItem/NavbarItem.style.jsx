import styled from "styled-components";

export const NavbarItemStyled = styled.button`
  all: unset;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 8px;
  color: var(--color-primary-text);

  &:hover,
  &:focus-visible {
    background: var(--color-primary);
    font-weight: 600;
  }
`;
