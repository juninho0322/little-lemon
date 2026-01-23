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
import { Bookings } from "../Bookings/Bookings.jsx";

export const MobileMenu = ({ children, onOpenCart }) => {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

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
      <Logo $size="medium" $marginright="large" />
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
          <li>
            <MenuLink
              href="#order-online"
              onClick={(e) => {
                e.preventDefault();   // stop scrolling
                setOpen(false);       // close sheet
                onOpenCart?.();       // open cart modal
              }}
            >
              Order
            </MenuLink>
          </li>
          <li><MenuLink href="#login" onClick={() => setOpen(false)}>Login</MenuLink></li>
        </MenuList>
        <Button $margintop="50px" $background={"var(--color-primary)"} $color={"var(--color-primary-text)"} $fontWeight={700} onClick={() => setBookingOpen(true)}>Reserve a Table</Button>
        <Bookings
          open={bookingOpen}
          onClose={() => setBookingOpen(false) || setOpen(false)}
          onSubmit={(data) => {
            console.log("Booking submitted:", data);
          }}
        />
      </Modal>
    </MobileOnly>
  );
};
