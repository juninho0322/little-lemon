import { ButtonStyled } from "./Button.style";

export const Button = ({ children, onClick, type = "button", $color, $margintop}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} $color={$color} $margintop={$margintop}>
      {children}
    </ButtonStyled>
  );
}