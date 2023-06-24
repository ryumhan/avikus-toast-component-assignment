export type Variant = "success" | "default";

export type RenderFunctionType = () => React.ReactElement;

export interface IToastProps {
  variant?: Variant;
  message?: string;
  duration?: number;
  render?: RenderFunctionType;
}

export interface ToastContextType extends IToastProps {
  toast: (next: IToastProps) => void;
}

export type ToastFuncType = (props: IToastProps) => void;

export interface ToastProps extends IToastProps {
  toastId: number;
}
