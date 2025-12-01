import styled from "styled-components";
import logo from "../../assets/Logo.png";

export const Logo = styled.img.attrs({
  src: logo,
  alt: "Little Lemon",
})`
  width: auto;
  align-self: center;

  height: ${({ $size }) =>
    $size === "medium" ? "50px" :
    $size === "large" ? "100px" :
    "25px"}; /* default small */

    padding-bottom: ${({ $paddingbottom }) =>
    $paddingbottom === "small" ? "0px" :
    $paddingbottom === "large" ? "15px" :
    "5px"};

    padding-top: ${({ $paddingtop }) =>
    $paddingtop === "small" ? "0px" :
    $paddingtop === "large" ? "15px" :
    "5px"};

    
`;
