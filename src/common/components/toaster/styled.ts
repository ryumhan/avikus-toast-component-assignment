import styled from "@emotion/styled";
import { Variant } from "~/common/hook/useToast/useToast.type";
import { GlobalColor, Horizontal } from "~/common/style";

const ToastBoxHeight = 50;
const StackMargin = 5;

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
  no: number;
}

interface ToastVariantProps {
  type: Variant;
}

export const ToastContainer = styled.div<ToastStyledProps>(
  ({ position = DEFAULT_POSITION, no }) => ({
    width: "100%",
    height: ToastBoxHeight + "px",
    position: "fixed",
    display: "flex",
    justifyContent: `${
      position.includes("center")
        ? "center"
        : position.includes("left")
        ? "flex-start"
        : "flex-end"
    }`,
    top: `${
      position.includes("top")
        ? `${no * ToastBoxHeight + StackMargin + 10}px`
        : "auto"
    }`,
    bottom: `${
      position.includes("bottom")
        ? `${no * ToastBoxHeight + StackMargin + 10}px`
        : "auto"
    }`,
    left: `${position.includes("left") ? "10px" : "auto"}`,
    right: `${position.includes("right") ? "10px" : "auto"}`,
    zIndex: "9999",
  })
);

export const Toast = styled(Horizontal)<ToastVariantProps>(({ type }) => ({
  alignItems: "center",
  backgroundColor: GlobalColor.normal,
  border: `${
    type === "default"
      ? `3px groove ${GlobalColor.black01}`
      : `3px solid ${GlobalColor.success}`
  }`,
  boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 10px",
  borderRadius: "5px",
  justifyContent: "space-between",
  marginBottom: "10px",
  padding: "10px 15px",
  width: "230px",
}));

export const CloseBtn = styled(Horizontal)`
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${GlobalColor.warning};
  }
`;
