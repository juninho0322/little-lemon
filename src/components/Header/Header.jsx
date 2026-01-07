import { HeaderStyled } from "./Header.style";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { CartIcon } from "../CartIcon/CartIcon";
import { Modal } from "../Modal/Modal.jsx";
import { useMemo, useState } from "react";
import { menuItems } from "../../data/menuData";

import {
  CartHeader,
  CartList,
  CartItem,
  CartImage,
  CartInfo,
  CartTitle,
  CartPrice,
  QtyControls,
  QtyValue,
  CartTotal,
  CartFooter,
} from "./HeaderCart.style";

export const Header = ({
  totalItems = 0,
  cart = {},
  onAddToCart,
  onRemoveFromCart,
  children,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cartLines = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const item = menuItems.find((x) => String(x.id) === String(id));
        if (!item) return null;
        return { ...item, qty };
      })
      .filter(Boolean);
  }, [cart]);

  const totalPrice = cartLines.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  return (
    <HeaderStyled>
      {children}

      <CartIcon count={totalItems} onClick={openCart} />
      <MobileMenu />

      <Modal open={isCartOpen}>
        <CartHeader>
          <h2>Your Cart</h2>
          <button onClick={closeCart}>✕</button>
        </CartHeader>

        {cartLines.length === 0 ? (
          <p>No items yet…</p>
        ) : (
          <>
            <CartList>
              {cartLines.map((item) => (
                <CartItem key={item.id}>
                  <CartImage src={item.imageSrc} alt={item.title} />

                  <CartInfo>
                    <CartTitle>{item.title}</CartTitle>
                    <CartPrice>
                      £{item.price} • Line: £
                      {(Number(item.price) * item.qty).toFixed(2)}
                    </CartPrice>
                  </CartInfo>

                  <QtyControls>
                    <button
                      onClick={() =>
                        onRemoveFromCart({
                          id: String(item.id),
                          quantity: 1,
                        })
                      }
                      disabled={item.qty === 0}
                    >
                      -
                    </button>

                    <QtyValue>{item.qty}</QtyValue>

                    <button
                      onClick={() =>
                        onAddToCart({
                          id: String(item.id),
                          quantity: 1,
                        })
                      }
                    >
                      +
                    </button>
                  </QtyControls>
                </CartItem>
              ))}
            </CartList>

            <CartTotal>
              <span>Total</span>
              <span>£{totalPrice.toFixed(2)}</span>
            </CartTotal>
          </>
        )}

        <CartFooter>
          <button onClick={closeCart} style={{ width: "100%" }}>
            Close
          </button>
        </CartFooter>
      </Modal>
    </HeaderStyled>
  );
};
