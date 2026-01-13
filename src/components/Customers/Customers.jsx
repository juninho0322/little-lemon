import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { reviews } from "../../data/reviewData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  CustomersWrapper,
  SliderWrap,
  CustomerCard,
  Avatar,
  Name,
  Text,
  StarsWrap,
} from "./Customers.style";


export const Customers = () => {
  return (
    <CustomersWrapper>
      <h2>What Our Clients Say</h2>

      <SliderWrap>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {reviews.map((r, idx) => (
            <SwiperSlide key={idx}>
              <CustomerCard>
                <Avatar src={r.photo} alt={r.name} />
                <Name>{r.name}</Name>

                <StarsWrap aria-label={`${r.rating} out of 5 stars`}>
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </StarsWrap>

                <Text>{r.text}</Text>
              </CustomerCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrap>
    </CustomersWrapper>
  );
};
