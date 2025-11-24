// FoodCard.jsx
import { useState } from "react";
import {
  FoodCardStyled,
  FoodCardImage,
  FoodCardTitle,
  FoodCardDescription,
  FoodCardFooter,
  FoodCardPrice,
  FoodCardActions,
  QtyControl,
  QtyButton,
  QtyValue
} from "./FoodCard.style";

export const FoodCard = ({
  title,
  description,
  imageSrc,
  price,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [qty, setQty] = useState(0);

  const handleIncrease = () => {
    const newQty = qty + 1;
    setQty(newQty);

    if (onAddToCart) {
      onAddToCart({
        title,
        price,
        quantity: 1, // always add 1
      });
    }
  };

  const handleDecrease = () => {
    if (qty > 0) {
      const newQty = qty - 1;
      setQty(newQty);

      if (onRemoveFromCart) {
        onRemoveFromCart({
          title,
          quantity: 1, // always remove 1
        });
      }
    }
  };

  return (
    <FoodCardStyled>
      <FoodCardImage src={imageSrc} alt={title} />
      <FoodCardTitle>{title}</FoodCardTitle>
      <FoodCardDescription>{description}</FoodCardDescription>

      <FoodCardFooter>
        {price && <FoodCardPrice>£{price}</FoodCardPrice>}

        <FoodCardActions>
          <QtyControl>
            <QtyButton onClick={handleDecrease} disabled={qty === 0}>
              -
            </QtyButton>

            <QtyValue>{qty}</QtyValue>

            <QtyButton onClick={handleIncrease}>
              +
            </QtyButton>
          </QtyControl>
        </FoodCardActions>
      </FoodCardFooter>
    </FoodCardStyled>
  );
};
