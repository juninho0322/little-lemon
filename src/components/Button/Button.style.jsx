import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: ${({ $background }) => $background || "var(--color-secondary)"};
  color: ${({ $color }) => $color || "var(--color-surface)"};
  margin-top: ${({ $margintop }) => $margintop || "0"};
  width: ${({ $width }) => $width || "auto"};

  border: ${({ $borderColor }) =>
    $borderColor ? `1px solid ${$borderColor}` : "none"};
  border-radius: 8px;

  padding: 10px 15px;
  font-size: 1rem;
  font-weight: ${({ $fontWeight }) => $fontWeight || 500};
  cursor: pointer;
  align-self: center;

  /* 👇 Hover only if $hover is passed */
  ${({ $hover }) =>
    $hover &&
    `
    &:hover,
    &:focus {
      color: var(--color-primary);
      border-color: var(--color-primary);
      outline: none;
    }
  `}
`;
