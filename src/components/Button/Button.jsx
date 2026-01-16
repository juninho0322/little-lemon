import { ButtonStyled } from "./Button.style";

export const Button = ({
  children,
  onClick,
  type = "button",
  $color,
  $background,
  $margintop,
  $width,
  $borderColor,
  $hover
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      $color={$color}
      $background={$background}
      $margintop={$margintop}
      $width={$width}
      $borderColor={$borderColor}
      $hover={$hover}
    >
      {children}
    </ButtonStyled>
  );
};
