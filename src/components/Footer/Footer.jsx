import { FooterStyle } from "./Footer.style";

export const Footer = () => {
  return (
    <FooterStyle>
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
    </FooterStyle>
  );
}