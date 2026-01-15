import { H3styled } from "./H3.style";

export const H3 = ( {children, color} ) => {
    return <H3styled color={color}>{children}</H3styled>;
}