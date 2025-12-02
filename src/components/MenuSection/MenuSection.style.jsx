import { Row } from "react-grid-system";
import styled from "styled-components";

export const HorizontalRow = styled(Row)`
  @media (max-width: 575.45px) {
    flex-wrap: nowrap !important;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
`;