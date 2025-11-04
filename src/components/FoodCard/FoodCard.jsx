import { FoodCardImage, FoodCardDescription, FoodCardStyled, FoodCardTitle } from "./FoodCard.style";

export const FoodCard = ({ title, description, imageSrc }) => {
    return (
        <FoodCardStyled>
            <FoodCardImage src={imageSrc} alt={title} />
            <FoodCardTitle>{title}</FoodCardTitle>
            <FoodCardDescription>{description}</FoodCardDescription>
        </FoodCardStyled>
    )
}