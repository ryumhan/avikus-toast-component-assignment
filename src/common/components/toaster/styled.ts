import styled from "@emotion/styled";
import { Variant } from "~/common/hook/useToast/useToast.type";
import { GlobalColor, Horizontal } from "~/common/style";

const ToastBoxHeight = 50;
const StackMargin = 6;

export const DEFAULT_POSITION = "bottom-right";

export type ToastPositionType =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastStyledProps {
  position?: ToastPositionType;
  stackNo: number;
}

interface ToastVariantProps {
  type: Variant;
}

/**
 * ToastContainer can be located as position input user passed
 * using stackNo, toast element is displayed with little margin
 */
export const ToastContainer = styled.div<ToastStyledProps>(
  ({ position = DEFAULT_POSITION, stackNo }) => ({
    zIndex: "999",
    width: "100%",
    height: ToastBoxHeight + "px",
    display: "flex",
    position: "fixed",
    top: `${
      position.includes("top")
        ? `${stackNo * ToastBoxHeight + StackMargin + 10}px`
        : "auto"
    }`,
    bottom: `${
      position.includes("bottom")
        ? `${stackNo * ToastBoxHeight + StackMargin + 10}px`
        : "auto"
    }`,
    left: `${position.includes("left") ? "10px" : "auto"}`,
    right: `${position.includes("right") ? "10px" : "auto"}`,
    justifyContent: `${
      position.includes("center")
        ? "center"
        : position.includes("left")
        ? "flex-start"
        : "flex-end"
    }`,
  })
);

export const Toast = styled(Horizontal)<ToastVariantProps>(({ type }) => ({
  padding: "10px 15px",
  width: "230px",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: GlobalColor.normal,
  marginBottom: "10px",
  borderRadius: "5px",
  boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 10px",
  border: `${
    type === "default"
      ? `3px groove ${GlobalColor.black01}`
      : `3px solid ${GlobalColor.success}`
  }`,
}));

export const CloseBtn = styled(Horizontal)`
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${GlobalColor.warning};
  }
`;
