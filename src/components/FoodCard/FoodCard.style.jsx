import styled from "styled-components";

export const FoodCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 1rem;
    background-color: var(--color-card-background);
`;

export const FoodCardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

export const FoodCardTitle = styled.h4`
    font-size: var(--fs-h4);
    color: var(--color-primary-text);
    margin: 0.5rem 0;
`;

export const FoodCardDescription = styled.p`
    font-size: var(--fs-body);
    color: var(--color-secondary-text);
    text-align: center;
`;      