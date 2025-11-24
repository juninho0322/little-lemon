import {FoodMenuNavStyled, FoodMenuNavItem} from "./FoodMenuNav.style";

export const FoodMenuNav = () => {
    const categories = ['News','Starters', 'Mains', 'Desserts', 'Drinks'];

    return (
        <FoodMenuNavStyled>
            {categories.map((category) => (
                <FoodMenuNavItem key={category}>
                    {category}
                </FoodMenuNavItem>
            ))}
        </FoodMenuNavStyled>
    )
}