import { createContext } from "react";

import { DEFAULT_POSITION, ToastPositionType } from "./styled";
import { ToastContextType } from "~/common/hook/useToast/useToast.type";
import useToastStack from "~/common/hook/useToastStack";

export const ToastContext = createContext<ToastContextType | null>(null);

interface Props {
  children: React.ReactElement;
  position?: ToastPositionType;
}

const Toaster = ({ position = DEFAULT_POSITION, children }: Props) => {
  const [ToastStackComponent, toastStackProps, addToastCallback] =
    useToastStack(position);

  return (
    <ToastContext.Provider
      value={{
        ...toastStackProps,
        toast: addToastCallback,
      }}
    >
      <>
        {/* toast stack */}
        {ToastStackComponent}

        {/* pages */}
        {children}
      </>
    </ToastContext.Provider>
  );
};

export default Toaster;
