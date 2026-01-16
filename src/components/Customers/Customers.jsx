import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { H3 } from "../H3/H3";
import { reviews } from "../../data/reviewData";
import { Button } from "../Button/Button";
import { ReviewModal } from "../Review/ReviewModal";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";


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

  const [isModalOpen, setIsModalOpen] = useState(false); // 👈 modal state
  const [showThanks, setShowThanks] = useState(false);

  return (
    <CustomersWrapper>
      <H3 color="var(--color-primary)">What Our Clients Say</H3>

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
      {/* 👇 Open modal on click */}
      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        Give us a Review!
      </Button>

      {/* 👇 Modal */}
      <ReviewModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(review) => {
          console.log("New review:", review);
          setShowThanks(true);

          setTimeout(() => {
            setShowThanks(false);
          }, 2500);
        }}
      />
      {showThanks && (
        <div className="review-toast">
          Thank you for your review! ⭐
        </div>
      )}
    </CustomersWrapper>
  );
};
