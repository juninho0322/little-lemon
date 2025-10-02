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

  //items takes your original options array (just strings) and transforms it into a new array of objects, where each object has:
  const items = options.map((label) => ({
    label,
    icon: ICONS[label] ?? null,
  }));

  //When an item is selected from the dropdown,
  //handleSelect updates the selectedLabel state with the label of the chosen item and closes the dropdown by setting open to false.
 const handleSelect = (item) => {
    setSelectedLabel(item.label);
    setOpen(false);
  };

//The computed value selectedIcon checks if there's a selectedLabel.
//If there is, it looks up the corresponding icon in the ICONS object. If no label is selected, selectedIcon will be null.
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
