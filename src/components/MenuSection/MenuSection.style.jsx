import { Row } from "react-grid-system";
import styled from "styled-components";

export const HorizontalRow = styled(Row)`
  @media (max-width: 575.45px) {
    flex-wrap: nowrap !important;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
`
export const SwiperWrapper = styled.div`
  width: 100%;

  /* give space so slides sit between arrows */
  .swiper {
    padding: 0 36px;
    box-sizing: border-box;
  }

  /* arrows color */
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-secondary);
  }

  /* symmetric arrow positioning */
  .swiper-button-prev {
    left: 8px;
  }

  .swiper-button-next {
    right: 8px;
  }

  /* arrow icon size */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 22px;
  }
`
;