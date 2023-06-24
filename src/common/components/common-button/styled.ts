import styled from "@emotion/styled";
import { GlobalColor } from "~/common/style";

export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  border: 0.5px solid ${GlobalColor.black01};
  box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${GlobalColor.globalBackground};
    opacity: 0.5;
  }
`;
