import styled from "styled-components";

export const CustomersWrapper = styled.section`
  padding: 3rem 0;
  text-align: center;
`;

export const SliderWrap = styled.div`
  margin-top: 2rem;

  .swiper {
    padding: 0 44px 40px;
  }

  .swiper-pagination {
    bottom: 0 !important;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-primary);
  }
`;

/**
 * ✅ IDENTICAL "card shell" to FoodCardStyled:
 * - same width/max-width/min-height
 * - same padding/border/radius/shadow
 * - same hover transform + shadow + border-color
 * - same mobile max-width + height + padding + margin + radius
 */
export const CustomerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;

  width: 90%;
  max-width: 340px;
  min-height: auto;

  padding: 1rem;
  background-color: var(--color-surface);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--color-primary);
  }

  @media (max-width: 575.75px) {
    max-width: 250px;
    padding: 0.75rem;
    margin: 0.4rem auto;
    border-radius: 12px;
  }
`;

/* Avatar behaves like your FoodCardImage: consistent size + nice crop */
export const Avatar = styled.img`
  width: 92px;
  height: 92px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.75rem;

  opacity: 0;
  animation: fadeIn 0.6s forwards ease-in-out;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (max-width: 575.75px) {
    width: 78px;
    height: 78px;
  }
`;

export const Name = styled.h4`
  font-family: var(--font-heading);
  font-size: var(--fs-h3);
  color: var(--color-secondary);
  margin: 0.5rem 0 0.35rem 0;
  text-align: center;
`;

export const StarsWrap = styled.div`
  color: gold;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
`;

/* Same “clamp text to 3 lines” vibe you used in FoodCardDescription */
export const Text = styled.p`
  font-size: 1rem;
  color: var(--color-secondary-text);
  text-align: center;
  flex-grow: 1;
  padding: 0 0.5rem;
  line-height: 1.45;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
