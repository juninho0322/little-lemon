import { HeaderStyled } from "./Header.style";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { CartIcon } from "../CartIcon/CartIcon";
import { Modal } from "../Modal/Modal.jsx";
import { useMemo, useState } from "react";
import { menuItems } from "../../data/menuData";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button/Button.jsx";

import {
  CartHeader,
  CartList,
  CartItem,
  CartImage,
  CartInfo,
  CartTitle,
  CartPrice,
  CartTotal,
  CartFooter,
} from "../CartModal/CartModal.style.jsx";

import  {
  QtyControl,
  QtyButton,
  QtyValue,
} from "../FoodCard/FoodCard.style.jsx";


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
          <FontAwesomeIcon icon={faXmark} onClick={closeCart} />
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
                    £{Number(item.price).toFixed(2)} • Total: £
                      {(Number(item.price) * item.qty).toFixed(2)}
                    </CartPrice>
                  </CartInfo>

                  <QtyControl>
                    <QtyButton
                      onClick={() =>
                        onRemoveFromCart({
                          id: String(item.id),
                          quantity: 1,
                        })
                      }
                      disabled={item.qty === 0}
                    >
                      -
                    </QtyButton>

                    <QtyValue>{item.qty}</QtyValue>

                    <QtyButton
                      onClick={() =>
                        onAddToCart({
                          id: String(item.id),
                          quantity: 1,
                        })
                      }
                    >
                      +
                    </QtyButton>
                  </QtyControl>
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
          <Button onClick={closeCart} $color={"--color-secondary"} $width={"8rem"}>
            Checkout
          </Button>
          <Button onClick={closeCart} $color={"--color-secondary"} $width={"8rem"}>
            Log In
          </Button>
        </CartFooter>
      </Modal>
    </HeaderStyled>
  );
};
