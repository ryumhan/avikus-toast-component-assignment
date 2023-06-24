import styled from "@emotion/styled";
import { GlobalColor, Horizontal, Vertical } from "~/common/style";

export const ExampleContainer = styled(Vertical)`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonGroupContainer = styled(Horizontal)``;

export const CustomWarningToast = styled(Horizontal)`
  align-items: center;
  background-color: ${GlobalColor.normal};
  border: dashed red 1px;
  justify-content: center;
  width: 300px;
`;
