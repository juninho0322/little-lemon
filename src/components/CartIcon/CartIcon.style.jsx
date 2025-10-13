import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const CartIconStyled = styled(FontAwesomeIcon)`
  color: var(--color-secondary-text);
  transition: color 0.3s ease;
    &:hover {
        transform: scale(1.15); /* 👈 makes icon slightly bigger */
`;

export const CartCount = styled.span`
  position: absolute;
  bottom: -6px;
  right: -6px;
  background: red;
  color: white;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 2px rgba(0,0,0,0.3);
`;
