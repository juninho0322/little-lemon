// About.jsx
import { AboutStyle } from "./About.style";
import { AboutSwiper } from "./AboutSwiper";
import { Col } from "react-grid-system";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Bookings } from "../Bookings/Bookings";

export const About = () => {

  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <AboutStyle>
      <AboutSwiper />  {/* sits behind as the background */}
      <div className="content">
        <Col lg={6} md={6} sm={7} xs={12}>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <p>
            We are open for lunch and dinner 7 days a week.
          </p>
          <Button
            $color="var(--color-surface)"
            $margintop="20px"
            onClick={() => setBookingOpen(true)}
          >
            Reserve a Table
          </Button>
        </Col>

      </div>

      <Bookings
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        onSubmit={(data) => {
          console.log("Booking submitted:", data);
        }}
      />
    </AboutStyle>
  );
};
