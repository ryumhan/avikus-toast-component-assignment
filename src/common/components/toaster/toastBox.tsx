import { ToastProps } from "~/common/hook/useToast/useToast.type";
import { TypoGraphy, GlobalColor } from "~/common/style";
import { ToastContainer, Toast, CloseBtn, ToastPositionType } from "./styled";

interface Props extends ToastProps {
  no: number;
  position: ToastPositionType;
  removeItemCallback: () => void;
}

const ToastBox = ({
  no,
  variant = "default",
  message,
  position,
  removeItemCallback,
  render,
}: Props) => {
  // if custom render exist
  if (render) {
    return (
      <ToastContainer position={position} stackNo={no}>
        {render()}
      </ToastContainer>
    );
  }
  // basic toast
  return (
    <ToastContainer position={position} stackNo={no}>
      <Toast type={variant}>
        <TypoGraphy type={"bold"} color={GlobalColor.black01} size={15}>
          {message}
        </TypoGraphy>
        <CloseBtn onClick={() => removeItemCallback()}>X</CloseBtn>
      </Toast>
    </ToastContainer>
  );
};

export default ToastBox;
