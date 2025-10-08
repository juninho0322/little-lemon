import styled from "styled-components";


export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;    /* logo — nav — actions */
  height: 72px;                      /* fixed height looks nicer than 10vh */
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.5);
  background: var(--color-surface);


`;

export const DesktopOnly = styled.div`
  @media (max-width: 800px) {
    display: none;

  }
`;



