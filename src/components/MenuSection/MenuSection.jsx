import { useEffect, useState } from "react";
import { Col } from "react-grid-system";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FoodCard } from "../FoodCard/FoodCard";
import { menuItems } from "../../data/menuData";
import { HorizontalRow } from "./MenuSection.style";

export const MenuSection = ({ category, onAddToCart, onRemoveFromCart }) => {
  const items = menuItems.filter((item) => item.category === category);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 575.45
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 575.45);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* 🔹 MOBILE → Swiper */
  if (isMobile) {
    return (
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={1.1}
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
    );
  }

  /* 🔹 TABLET / DESKTOP → Grid */
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
