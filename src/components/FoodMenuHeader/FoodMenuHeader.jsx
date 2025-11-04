import { FoodMenuHeaderStyled, FoodMenuTitle } from "./FoodMenuHeader.style";
import { Dropdown } from "../DropDown/DropDown";

export const FoodMenuHeader = () => {
    return (
        <FoodMenuHeaderStyled>
            <FoodMenuTitle>Order for delivery!</FoodMenuTitle>
        </FoodMenuHeaderStyled>
    )
};
