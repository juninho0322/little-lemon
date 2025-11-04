import {
  FoodCardContainer,
  FoodCardStyled,
  FoodCardImage,
  FoodCardTitle,
  FoodCardDescription,
} from "./FoodCard.style.jsx";

export const FoodCard = ({ title, description, imageSrc }) => {
    return (
        <FoodCardContainer>
            <FoodCardStyled>
                <FoodCardTitle>{title}</FoodCardTitle>
                <FoodCardImage src={imageSrc} alt={title} />
                <FoodCardDescription>{description}</FoodCardDescription>
            </FoodCardStyled>
        </FoodCardContainer>
    )
}