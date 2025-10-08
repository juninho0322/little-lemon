// About.jsx
import { AboutStyle } from "./About.style";
import { AboutSwiper } from "./AboutSwiper";
import { Col } from "react-grid-system";

export const About = () => {
  return (
    <AboutStyle>
      <AboutSwiper />  {/* sits behind as the background */}
        <div className="content">
          <Col lg={8} md={8} sm={8} xs={12}>
              <h2>About Little Lemon</h2>
              <h3>Chicago</h3>
              <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
              </p>
              <p>
              We are open for lunch and dinner 7 days a week.
              </p>
            </Col>
        </div>
    </AboutStyle>
  );
};
