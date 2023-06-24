import { useContext } from "react";
import { ToastContextType, ToastFuncType } from "./useToast.type";
import { ToastContext } from "~/common/components/toaster";

const useToast = (): ToastFuncType => {
  const { toast } = useContext(ToastContext) as ToastContextType;
  return toast;
};

export default useToast;
