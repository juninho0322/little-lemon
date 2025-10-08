import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${({$background}) => $background ? `var(--color-primary)` : 'var(--color-secondary)'};
  color: ${({ $color = "primary" }) => `var(--color-${$color}, var(--color-surface))`};
  margin-top: ${({ $margintop }) => ($margintop ? $margintop : "0")};
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  align-self: center;

  &:hover,
  &:focus {
    color: var(--color-primary);
    outline: none;
  }
`

