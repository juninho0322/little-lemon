// components/MenuSection/MenuSection.jsx
import { Col } from "react-grid-system";
import { FoodCard } from "../FoodCard/FoodCard";
import { menuItems } from "../../data/menuData";
import { HorizontalRow } from "./MenuSection.style";



export const MenuSection = ({ category, onAddToCart, onRemoveFromCart }) => {
  const items = menuItems.filter((item) => item.category === category);

  return (
    <HorizontalRow>
      {items.map((item) => (
        <Col xs={12} sm={6} md={6} lg={4} key={item.id}>
          <FoodCard
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            price={item.price}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        </Col>
      ))}
    </HorizontalRow>
  );
};
