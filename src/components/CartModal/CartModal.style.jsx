import styled from "styled-components";

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const CartList = styled.div`
  display: grid;
  gap: 12px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const CartImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const CartInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CartTitle = styled.div`
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CartPrice = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;


export const CartTotal = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const CartFooter = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
