import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { CartWrapper, CartCount, CartIconStyled } from "./CartIcon.style";

export const CartIcon = ({ count, onClick }) => {
  return (
    <CartWrapper
      onClick={onClick}
      aria-label="Open cart"
    >
      <CartIconStyled icon={faBasketShopping} size="2xl" />
      {count > 0 && <CartCount>{count}</CartCount>}
    </CartWrapper>
  );
};
