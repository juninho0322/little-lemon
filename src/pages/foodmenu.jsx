// pages/FoodMenu.jsx
import { MenuSection } from "../components/MenuSection/MenuSection";

export const FoodMenu = ({ category, onAddToCart, onRemoveFromCart }) => {
  return (
    <MenuSection
      category={category}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  );
};
