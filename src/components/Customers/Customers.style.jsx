import styled from "styled-components";

export const CustomersWrapper = styled.section`
  padding: 3rem 0;
  text-align: center;
  margin: 0 auto;
`;

export const SliderWrap = styled.div`
  margin-top: 2rem;

  /* ✅ Give room for shadow + hover and avoid clipping */
  .swiper {
    padding: 16px 44px 24px; /* top + bottom breathing room */
    overflow: visible;       /* IMPORTANT: show shadow/hover */
  }

  /* ✅ Keep slide heights consistent */
  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    padding: 12px 0; /* ✅ space above/below each card */
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-primary);
  }
`;

export const CustomerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto; /* center within slide */
  width: 90%;
  max-width: 340px;

  /* ✅ Consistent height, but not “cut” */
  min-height: 240px;


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
    border-radius: 12px;
  }
`;

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

export const Text = styled.p`
  font-size: 1rem;
  color: var(--color-secondary-text);
  text-align: center;
  flex-grow: 1;
  padding: 0 0.5rem;
  line-height: 1.45;

  /* ✅ kill default <p> margins so heights are consistent */
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
