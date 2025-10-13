import styled, { keyframes } from "styled-components";

/* Only show on mobile */
export const MobileOnly = styled.div`
  @media (min-width: 700.91px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  margin-left: auto;
`;

/* Fullscreen overlay */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(10, 0, 0, 0.5);
  display: ${({ $open }) => ($open ? "block" : "none")};
`;

/* Slide-down full menu */
const slideDown = keyframes`
  from { transform: translateY(-4%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`;

export const Sheet = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #fff;
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  padding: 20px;
  animation: ${slideDown} 150ms ease-out;
`;

export const SheetTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: between;
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




