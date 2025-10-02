import { HeaderStyled, Actions } from "./Header.style";
import { Navbar } from "../NavBar/NavBar";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { Logo } from "../Logo/Logo";


export const Header = () => {
  return (
    <HeaderStyled>
      <Logo size="medium"/>  {/* Logo component */}
      <Navbar />  {/* Desktop nav */}
      <Actions>
        <MobileMenu /> {/* new burger menu */}
      </Actions>
    </HeaderStyled>
  );
};
