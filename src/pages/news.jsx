import { FoodCard } from "../components/FoodCard/FoodCard";
import { Col, Row } from "react-grid-system";
import  { newsData }  from "../data/newsData";

export const News = () => (
  <Row>
    {newsData.map((item, index) => (
      <Col lg={4} key={index}>
        <FoodCard
          title={item.title}
          imageSrc={item.imageSrc}
          description={item.description}
        />
      </Col>
    ))}
  </Row>
);