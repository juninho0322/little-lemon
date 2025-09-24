import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px; /* icon + label spacing */
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  width: 180px;
  display: ${({ $open }) => ($open ? "block" : "none")};
  z-index: 10;
`;

export const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #eee;
  }
`;

/* Keeps icons aligned and a consistent size */
export const IconWrap = styled.span`
  display: inline-flex;
  line-height: 1;
`;
