// AboutSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import img15 from "../../assets/photos_about/15.jpg";
import img06 from "../../assets/photos_about/06.jpg";
import img11 from "../../assets/photos_about/11.jpg";
import img13 from "../../assets/photos_about/13.jpg";
import img14 from "../../assets/photos_about/14.jpg";

export const AboutSwiper = () => {
  return (
    <div className="bg-swiper">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={500}
        loop
        allowTouchMove={false}   // background only; set to true if you want swiping
      >
        <SwiperSlide><img src={img15} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img06} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img13} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img14} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};
