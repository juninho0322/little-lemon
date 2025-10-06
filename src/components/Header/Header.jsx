import { HeaderStyled, DesktopOnly } from "./Header.style";
import { Navbar } from "../NavBar/NavBar";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";


export const Header = () => {
  return (
    <HeaderStyled>
      <Logo $size="medium"/>  {/* Logo component */}
      <Navbar />  {/* Desktop nav */}
        <DesktopOnly>
            <Button $color="surface">Reserve a Table</Button> {/* Call to action button */}
        </DesktopOnly>
        <MobileMenu /> {/* new burger menu */}
    </HeaderStyled>
  );
};
