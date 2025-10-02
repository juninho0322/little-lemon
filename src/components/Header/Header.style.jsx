import styled from "styled-components";


export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;    /* logo — nav — actions */
  gap: 16px;
  height: 72px;                      /* fixed height looks nicer than 10vh */
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.07);
  background: #fff;

  @media (max-width: 768px) {
    flex-wrap: wrap;                 /* allow wrapping on small screens */
    height: auto;
    padding: 12px 16px;
  }
`;


export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
