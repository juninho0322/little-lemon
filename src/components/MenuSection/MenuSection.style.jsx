
import styled from "styled-components";



export const SwiperWrapper = styled.div`
  width: 100%;

  /* Reserve space for pagination BELOW cards */
  .swiper {
    padding-bottom: 60px; /* 👈 space for dots */
    box-sizing: border-box;
  }

  /* Pagination container sits in the reserved space */
  .swiper-pagination {
    bottom: 5px;
    padding-top: 15px;
  }

  /* Pagination dots */
  .swiper-pagination-bullet {
    background: var(--color-secondary);
    opacity: 0.4;
    width: 8px;
    height: 8px;
    transition: all 0.2s ease;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-secondary); /* better contrast */
    opacity: 1;
    transform: scale(1.2);
  }
`;