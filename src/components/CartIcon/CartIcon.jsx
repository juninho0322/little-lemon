import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { CartWrapper, CartCount, CartIconStyled } from "./CartIcon.style";

export const CartIcon = ({ count = 0 }) => {
  return (
    <CartWrapper>
      <CartIconStyled icon={faBasketShopping} size="2xl" />
      {count > 0 && <CartCount>{count}</CartCount>}
    </CartWrapper>
  );
};
