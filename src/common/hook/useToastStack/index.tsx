import { useState, useCallback, useMemo } from "react";
import ToastBox from "~/common/components/toaster/toastBox";
import { ToastStackProps, ToastProps } from "../useToast/useToast.type";
import { ToastPositionType } from "~/common/components/toaster/styled";

type ReturnType = [
  React.ReactElement[],
  ToastStackProps[],
  (props: ToastProps) => void
];

const useToastStack = (position: ToastPositionType): ReturnType => {
  const [toastStackProps, setToast] = useState<ToastStackProps[]>([]);
  // remove Toast using click or time over
  const removeToastCallback = useCallback((selectId: number) => {
    // filter and remove
    setToast((prev) => prev.filter((_) => _.toastId !== selectId));
  }, []);

  // append the toast to current list at specific position user passed
  const addToastCallback = useCallback(
    ({ duration = 3000, ...next }: ToastProps) => {
      const toastId = new Date().getTime(); // make id
      setToast((prev) => prev.concat({ ...next, toastId }));
      //set display duration
      setTimeout(() => {
        removeToastCallback(toastId);
      }, duration);
    },

    [removeToastCallback]
  );
  // create ToastStackComponent
  const ToastStacks = useMemo(
    () =>
      toastStackProps.map((toastProps, idx) => (
        <ToastBox
          {...toastProps}
          key={"toast" + idx + toastProps.message}
          no={idx}
          position={position}
          removeItemCallback={() => removeToastCallback(toastProps.toastId)}
        />
      )),
    [position, toastStackProps, removeToastCallback]
  );

  return [ToastStacks, toastStackProps, addToastCallback];
};

export default useToastStack;
