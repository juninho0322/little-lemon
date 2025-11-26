import { HeaderStyled } from "./Header.style";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { CartIcon } from "../CartIcon/CartIcon";
import { Modal } from "../Modal/Modal.jsx";
import { Overlay } from "../MobileMenu/MobileMenu.style"; // reuse your overlay
import { useState } from "react";

export const Header = ({ totalItems = 0, children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  
  return (
    <HeaderStyled>
      {children}

      {/* Cart icon that opens the cart modal */}
      <CartIcon count={totalItems} onClick={openCart} />

      {/* Mobile nav menu */}
      <MobileMenu />

      {/* Cart modal overlay + modal */}
      <Overlay $open={isCartOpen} onClick={closeCart} />

      <Modal open={isCartOpen}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Your Cart</h2>
          <button onClick={closeCart}>X</button>
        </div>

        {/* Example content – replace with your real cart */}
        <p>No items yet…</p>

        <button onClick={closeCart}>Close</button>
      </Modal>
    </HeaderStyled>
  );
};
