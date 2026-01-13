// FoodCard.jsx
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
  id,
  title,
  description,
  imageSrc,
  price,
  qty = 0,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const handleIncrease = () => {
    onAddToCart?.({ id: String(id), quantity: 1 });
  };

  const handleDecrease = () => {
    if (qty > 0) onRemoveFromCart?.({ id: String(id), quantity: 1 });
  };

  return (
    <FoodCardStyled>
      <FoodCardImage src={imageSrc} alt={title} />
      <FoodCardTitle>{title}</FoodCardTitle>
      <FoodCardDescription>{description}</FoodCardDescription>

      <FoodCardFooter>
        {price && <FoodCardPrice>£{Number(price).toFixed(2)}</FoodCardPrice>}

        <FoodCardActions>
          <QtyControl>
            <QtyButton onClick={handleDecrease} disabled={qty === 0}>-</QtyButton>
            <QtyValue>{qty}</QtyValue>
            <QtyButton onClick={handleIncrease}>+</QtyButton>
          </QtyControl>
        </FoodCardActions>
      </FoodCardFooter>
    </FoodCardStyled>
  );
};
