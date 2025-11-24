import { HeaderStyled } from "./Header.style";
import { Navbar } from "../NavBar/NavBar";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { CartIcon } from "../CartIcon/CartIcon";

export const Header = ({ totalItems = 0 }) => {
  // this is just for debugging; you can remove later
  console.log("Header totalItems:", totalItems);

  return (
    <HeaderStyled>
      <Navbar />
      <CartIcon count={totalItems} />
      <MobileMenu />
    </HeaderStyled>
  );
};
