import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${({$background}) => $background ? `var(--color-primary)` : 'var(--color-secondary)'};
  color: ${({ $color = "primary" }) => `var(--color-${$color}, var(--color-surface))`};
  margin-top: ${({ $margintop = "10px" }) => $margintop};
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 120ms ease-in-out;
  align-self: center;

  &:hover,
  &:focus {
    color: var(--color-primary);
    outline: none;
  }
`

