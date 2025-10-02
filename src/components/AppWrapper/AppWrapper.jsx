import { AppWrapperStyled } from "./AppWrapper.style";
import { Row } from "react-grid-system";

export const AppWrapper = ({ children }) => (
  <AppWrapperStyled fluid>
    <Row align="start">
      {children}
    </Row>
  </AppWrapperStyled>
);
