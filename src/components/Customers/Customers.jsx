import { useRef, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { H3 } from "../H3/H3";
import { reviews } from "../../data/reviewData";
import { Button } from "../Button/Button";
import { ReviewModal } from "../Review/ReviewModal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const swiperRef = useRef(null);


  // ✅ store reviews created from modal
  const [userReviews, setUserReviews] = useState([]);

  // ✅ combine: newest user reviews first, then your fixed ones
  const allReviews = useMemo(() => {
    return [...userReviews, ...reviews];
  }, [userReviews]);

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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {allReviews.map((r, idx) => (
            <SwiperSlide key={r.createdAt ? `user-${r.createdAt}` : `fixed-${idx}`}>
              <CustomerCard>
                <Avatar
                  src={r.photoPreview || r.photo || "/images/user-placeholder.jpg"}
                  alt={r.name}
                />
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

      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        Give us a Review!
      </Button>

      <ReviewModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={(review) => {
          // ✅ add to slider
          setUserReviews((prev) => [review, ...prev]);

          // ✅ Jump to first slide (new review)
          setTimeout(() => {
            swiperRef.current?.slideTo(0);
          }, 100);

          // toast
          setShowThanks(true);
          setTimeout(() => setShowThanks(false), 2500);
        }}
      />

      {showThanks && <div className="review-toast">Thank you for your review! ⭐</div>}
    </CustomersWrapper>
  );
};
