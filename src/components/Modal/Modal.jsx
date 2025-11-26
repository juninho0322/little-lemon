import { ModalStyled } from "./Modal.style.jsx";

export const Modal = ({ open, children }) => {
  return <ModalStyled $open={open}>
            {children}
        </ModalStyled>;
};