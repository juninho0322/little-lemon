import styled from "styled-components";

export const FoodMenuNavStyled = styled.nav`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 2rem;
  overflow-x: auto;

  /* When hovering the nav, unhighlight the first item
     ONLY if the first item itself is not hovered */
  &:hover button:first-child:not(:hover) {
    background: var(--color-surface);
    font-weight: 400;
  }
`;

export const FoodMenuNavItem = styled.button`
  background: var(--color-surface);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: var(--fs-body);
  color: var(--color-primary-text);
  cursor: pointer;
  transition: background 0.3s, font-weight 0.3s;

  /* Default “active” for the first one */
  &:first-child {
    background: var(--color-primary);
    font-weight: 600;
  }

  /* Hover effect (temporarily overrides default) */
  &:hover,
  &:focus-visible {
    background: var(--color-primary);
    font-weight: 600;
  }
`;
