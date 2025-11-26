import styled, { keyframes } from "styled-components";

/* Slide-down full menu */
const slideDown = keyframes`
  from { transform: translateY(-4%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`;


export const ModalStyled = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #fff;
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  padding: 20px;
  animation: ${slideDown} 150ms ease-out;
`;


