// About.jsx
import { AboutStyle } from "./About.style";
import { AboutSwiper } from "./AboutSwiper";
import { Col } from "react-grid-system";
import { Button } from "../Button/Button";

export const About = () => {
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
              <Button $color="surface" $margintop={"20px"}>Reserve a Table</Button> {/* Call to action button */}
            </Col>

        </div>
    </AboutStyle>
  );
};
