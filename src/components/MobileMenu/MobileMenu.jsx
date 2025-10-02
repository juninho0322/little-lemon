import { useState, useEffect } from "react";
import {
  MobileOnly,
  BurgerButton,
  Overlay,
  Sheet,
  SheetTopBar,
  MenuList,
  MenuLink,
} from "./MobileMenu.style";


import { Logo } from "../Logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const MobileMenu = () => {
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

      <Overlay $open={open} onClick={() => setOpen(false)} />

      <Sheet $open={open}>
        <SheetTopBar>
          <BurgerButton onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </BurgerButton>
        </SheetTopBar>

        <MenuList>
          <Logo size="medium" paddingbottom="large"/>
          <li><MenuLink href="#home" onClick={() => setOpen(false)}>Home</MenuLink></li>
          <li><MenuLink href="#about" onClick={() => setOpen(false)}>About</MenuLink></li>
          <li><MenuLink href="#menu" onClick={() => setOpen(false)}>Menu</MenuLink></li>
          <li><MenuLink href="#reservations" onClick={() => setOpen(false)}>Reservations</MenuLink></li>
          <li><MenuLink href="#order-online" onClick={() => setOpen(false)}>Order Online</MenuLink></li>
          <li><MenuLink href="#login" onClick={() => setOpen(false)}>Login</MenuLink></li>
        </MenuList>
      </Sheet>
    </MobileOnly>
  );
};
