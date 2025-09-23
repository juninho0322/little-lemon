// Dropdown.jsx
import { useState } from "react";
import { DropdownWrapper, DropdownButton, DropdownList, DropdownItem } from "./DropDown.style";

export const Dropdown = ({ options = [] }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Menu ⬇");

  const handleSelect = (option) => {
    setSelected(option);   // store selected value
    setOpen(false);        // close dropdown
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setOpen((prev) => !prev)}>
        {selected}
      </DropdownButton>
      <DropdownList $open={open}>
        {options.map((option, id) => (
          <DropdownItem key={id} onClick={() => handleSelect(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
};
