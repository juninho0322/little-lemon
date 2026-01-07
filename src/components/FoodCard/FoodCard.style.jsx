import styled from "styled-components";

export const FoodCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
`;

export const FoodCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;

  width: 90%;          /* 🔹 let the Col define the width */
  max-width: 340px;     /* 🔹 but don’t grow bigger than 340px */
  min-height: 340px;
  margin-bottom: 2rem;

  padding: 1rem;
  background-color: var(--color-surface);
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.08);

  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.12);
    border-color: var(--color-primary);
  }

  @media (max-width: 575.75px) {
    max-width: 250px;
    height: 360px; 
    padding: 0.75rem;
    margin: 0.4rem auto;        /* 🔹 tighter spacing */
    border-radius: 12px;
}
`;



export const FoodCardFooter = styled.div`
  height: 48px; 
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FoodCardPrice = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-secondary);
`;


export const FoodCardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;

  /* Soft fade-in effect */
  opacity: 0;
  animation: fadeIn 0.6s forwards ease-in-out;

  @keyframes fadeIn {
    to { opacity: 1; }
  }

    @media (max-width: 575.75px) {
    height: 140px;   /* 🔹 much more compact */
    border-radius: 10px;
  }
`;

export const FoodCardTitle = styled.h4`
  font-family: var(--font-heading);
  font-size: var(--fs-h3);
  color: var(--color-secondary);
  margin: 1rem 0 0.5rem 0;
  text-align: center;
`;

export const FoodCardDescription = styled.p`
  font-size: 1rem;
  color: var(--color-secondary-text);
  text-align: center;
  flex-grow: 1;
  padding: 0 0.5rem;
  line-height: 1.45;

   display: -webkit-box;
  -webkit-line-clamp: 3;      /* 🔥 max lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// Wrapper for qty + button group
export const FoodCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Qty pill
export const QtyControl = styled.div`
  display: flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.1);
  background: rgba(0,0,0,0.02);
  overflow: hidden;
`;

// - and + buttons
export const QtyButton = styled.button`
  border: none;
  background: transparent;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  background: var(--color-se);

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

// Number in the middle
export const QtyValue = styled.span`
  min-width: 24px;
  text-align: center;
  font-weight: 500;
  font-size: 0.95rem;

`;


export const HorizontalScroll = styled.div`
  @media (max-width: 700px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 0.5rem;

    /* hide scrollbar (optional) */
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
`;

