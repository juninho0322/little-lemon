import { ContainerStyled } from "../Container/Container.style";


export const Container = ({children}) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
};
