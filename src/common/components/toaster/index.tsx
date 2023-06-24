import { createContext, useCallback, useState } from "react";

import { DEFAULT_POSITION, ToastPositionType } from "./styled";
import {
  IToastProps,
  ToastContextType,
  ToastProps,
} from "~/common/hook/useToast/useToast.type";

import ToastBox from "./toastBox";

export const ToastContext = createContext<ToastContextType | null>(null);

interface Props {
  children: React.ReactElement;
  position?: ToastPositionType;
}

const Toaster = ({ position = DEFAULT_POSITION, children }: Props) => {
  const [toastPropList, setToast] = useState<ToastProps[]>([]);

  const removeToastCallback = useCallback((selectId: number) => {
    setToast((prev) => prev.filter((_) => _.toastId !== selectId));
  }, []);

  const addToastCallback = useCallback(
    ({
      duration = 3000,

      ...next
    }: IToastProps) => {
      const toastId = new Date().getTime();
      setToast((prev) => prev.concat({ ...next, toastId }));

      setTimeout(() => {
        removeToastCallback(toastId);
      }, duration);
    },

    [removeToastCallback]
  );

  return (
    <ToastContext.Provider
      value={{
        ...toastPropList,
        toast: addToastCallback,
      }}
    >
      <>
        {/* toast stack */}
        {toastPropList.map((toastProps, idx) => (
          <ToastBox
            {...toastProps}
            key={"toast" + idx + toastProps.message}
            no={idx}
            position={position}
            removeItemCallback={() => removeToastCallback(idx)}
          />
        ))}

        {/* pages */}
        {children}
      </>
    </ToastContext.Provider>
  );
};

export default Toaster;
