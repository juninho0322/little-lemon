import { useState, useEffect } from "react";
import {
  MobileOnly,
  BurgerButton,
  SheetTopBar,
  MenuList,
  MenuLink,

} from "./MobileMenu.style";

import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../Modal/Modal.jsx";

export const MobileMenu = ({ children }) => {
  const [open, setOpen] = useState(false);

  // prevent background scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "");
    }
  }, [open]);

  return (
    <MobileOnly>
      <BurgerButton onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </BurgerButton>
      <Logo $size="medium"/>
      <Modal open={open}>
        <SheetTopBar>
          {children}
          <BurgerButton onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </BurgerButton>
        </SheetTopBar>
        <Logo $size="medium" $paddingbottom="large" />
        <MenuList>
          <li><MenuLink href="#home" onClick={() => setOpen(false)}>Home</MenuLink></li>
          <li><MenuLink href="#about" onClick={() => setOpen(false)}>About</MenuLink></li>
          <li><MenuLink href="#menu" onClick={() => setOpen(false)}>Menu</MenuLink></li>
          <li><MenuLink href="#order-online" onClick={() => setOpen(false)}>Order</MenuLink></li>
          <li><MenuLink href="#login" onClick={() => setOpen(false)}>Login</MenuLink></li>
        </MenuList>
        <Button $color="surface" $margintop="50px" onClick={() => setOpen(false)}>Reserve a Table</Button>
      </Modal>
    </MobileOnly>
  );
};
