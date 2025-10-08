// About.style.jsx
import styled from "styled-components";

// (Optional) keep a static image as a fallback if JS/Swiper fails
import fallbackImg from "../../assets/photos_about/14.jpg";

export const AboutStyle = styled.section`
  position: relative;
  overflow: hidden;
  padding: 20px;
  min-height: 40vh;
  color: white;

  /* Fallback background if Swiper doesn't load */
  background-image: url(${fallbackImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Gradient overlay above the slideshow for readability */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.6));
    pointer-events: none;  /* let clicks pass through if you show arrows/bullets */
    z-index: 1;
  }

  /* Content goes above overlay */
  .content {
    position: relative;
    z-index: 2;
  }

  /* Background Swiper fills the section behind everything */
  .bg-swiper {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  /* Make Swiper truly fill the section height */
  .bg-swiper .swiper,
  .bg-swiper .swiper-wrapper,
  .bg-swiper .swiper-slide {
    height: 100%;
  }

  /* Slides act like background images */
  .bg-swiper img {
    width: 100%;
    height: 100%;
    object-fit: cover;   /* no stretching */
    display: block;
  }

  h2 {
    font-size: var(--fs-h2);
    font-family: var(--font-display);
    color: var(--color-primary);
  }
  h3 {
    font-size: var(--fs-h3);
    font-family: var(--font-display);
    color: var(--color-secondary-on);
  }
`;
