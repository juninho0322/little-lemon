// pages/news.jsx
import styled from "styled-components";
import { FoodCard } from "../components/FoodCard/FoodCard";
import { Col, Row } from "react-grid-system";
import { newsData } from "../data/newsData";

const HorizontalRow = styled(Row)`
  @media (max-width: 575px) {
    flex-wrap: nowrap !important;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;
  }
`;

export const News = ({ onAddToCart, onRemoveFromCart }) => (
  <HorizontalRow>
    {newsData.map((item, index) => (
      <Col xs={12} sm={6} md={6} lg={4} key={index}>
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
