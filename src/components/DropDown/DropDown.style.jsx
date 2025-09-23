import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  width: 150px;
  display: ${({ $open }) => ($open ? "block" : "none")};
`;

export const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;