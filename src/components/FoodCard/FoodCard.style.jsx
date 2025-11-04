import styled from "styled-components";

export const FoodCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 2rem;
    justify-content: center;
`;

export const FoodCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-secondary-text);
    border-radius: 8px;
    padding: 1rem;
    background-color: var(--color-card-background);
`;

export const FoodCardImage = styled.img`
  width: 100%;
  height: 200px; /* fixed height for all cards */
  object-fit: cover; /* fills the box and crops overflow */
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