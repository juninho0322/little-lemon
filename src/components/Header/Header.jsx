import { HeaderStyled, DesktopOnly } from "./Header.style";
import { Navbar } from "../NavBar/NavBar";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { Logo } from "../Logo/Logo";
import { CartIcon } from "../CartIcon/CartIcon";



export const Header = () => {
  return (
    <HeaderStyled>
      <Logo $size="medium"/>  {/* Logo component */}
      <Navbar />  {/* Desktop nav */}
        <DesktopOnly>
            <CartIcon count={3}/>  {/* Cart icon with item count */}
        </DesktopOnly>
        <MobileMenu /> {/* new burger menu */}
    </HeaderStyled>
  );
};
