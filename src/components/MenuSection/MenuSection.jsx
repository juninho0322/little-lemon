import { useEffect, useState } from "react";
import { Col } from "react-grid-system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FoodCard } from "../FoodCard/FoodCard";
import { menuItems } from "../../data/menuData";
import { HorizontalRow, SwiperWrapper } from "./MenuSection.style";

export const MenuSection = ({ category, onAddToCart, onRemoveFromCart }) => {
  const items = menuItems.filter((item) => item.category === category);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 575.45);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <SwiperWrapper>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <FoodCard
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                price={item.price}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    );
  }

  return (
    <HorizontalRow>
      {items.map((item) => (
        <Col xs={12} sm={6} md={6} lg={4} key={item.id}>
          <FoodCard
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
            price={item.price}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        </Col>
      ))}
    </HorizontalRow>
  );
};
