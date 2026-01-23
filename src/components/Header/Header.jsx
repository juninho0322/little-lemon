import { HeaderStyled } from "./Header.style";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { CartIcon } from "../CartIcon/CartIcon";
import { Modal } from "../Modal/Modal.jsx";
import { CartModal } from "../CartModal/CartModal.jsx";

export const Header = ({
  totalItems = 0,
  cart = {},
  onAddToCart,
  onRemoveFromCart,
  children,
  isCartOpen,
  onOpenCart,
  onCloseCart,
}) => {
  return (
    <HeaderStyled>
      {children}

      {/* Cart icon */}
      <CartIcon count={totalItems} onClick={onOpenCart} />

      {/* Mobile menu */}
      <MobileMenu onOpenCart={onOpenCart} />

      {/* Cart modal */}
      <Modal open={isCartOpen}>
        <CartModal
          cart={cart}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          onClose={onCloseCart}
        />
      </Modal>
    </HeaderStyled>
  );
};
