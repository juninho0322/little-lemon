import { useState } from "react";
import {
  DropdownWrapper,
  DropdownButton,
  DropdownList,
  DropdownItem,
  IconWrap,
} from "./DropDown.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faRightFromBracket, // (logout)
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";


const ICONS = {
  Profile: faUser,
  Settings: faCog,
  Logout: faRightFromBracket,
};

export const Dropdown = ({ options = [] }) => {
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(null);

  // Build items with an icon per known label (fallback: no icon)
  const items = options.map((label) => ({
    label,
    icon: ICONS[label] ?? null,
  }));

 const handleSelect = (item) => {
    setSelectedLabel(item.label);
    setOpen(false);
  };

const selectedIcon = selectedLabel ? ICONS[selectedLabel] : null;

return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setOpen((prev) => !prev)}>
        {selectedIcon && (
          <IconWrap>
            <FontAwesomeIcon icon={selectedIcon} />
          </IconWrap>
        )}
        <span>{selectedLabel || "Menu"}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </DropdownButton>

      <DropdownList $open={open}>
        {items.map((item) => (
          <DropdownItem key={item.label} onClick={() => handleSelect(item)}>
            {item.icon && (
              <IconWrap>
                <FontAwesomeIcon icon={item.icon} />
              </IconWrap>
            )}
            <span>{item.label}</span>
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
};
