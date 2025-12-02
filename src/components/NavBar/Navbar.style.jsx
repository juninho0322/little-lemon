import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  gap: 1rem;

  padding-bottom: ${({ $paddingbottom }) =>
    $paddingbottom === "small" ? "0px" :
    $paddingbottom === "large" ? "1rem" :
    "5px"};

  /* Default media query (applies only if NOT overridden) */
  ${({ $ignoreMQ }) =>
    !$ignoreMQ &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `}
`;


export const NavList = styled.ul`
  display: flex;
  margin-left: auto;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 10px 14px;
  }
`;


