import styled from "styled-components";

/* Only show on mobile */
export const MobileOnly = styled.div`
  position: relative;           /* allows absolute children */
  display: flex;
  align-items: center;
  justify-content: center;      /* centers the logo */
  width: 100%;
  padding: 0 16px;              /* optional, to give some breathing room */

  @media (min-width: 768px) {
    display: none;
  }
`;



export const BurgerButton = styled.button`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;

  position: absolute;
  right: 5px;    /* 👈 burger on the LEFT */

`;

/* Fullscreen overlay */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgba(10, 0, 0, 0.5);
  display: ${({ $open }) => ($open ? "block" : "none")};
`;



export const SheetTopBar = styled.div`
  display: flex;

`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 24px 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  text-align: center;
`;

export const MenuLink = styled.a`
  padding: 14px 12px;
  text-decoration: none;
  color: var(--color-primary-text);
  &:hover {
    border-bottom: 2px solid var(--color-primary);
    font-weight: 600;
    font-size: 1.1rem;
  }
`;





