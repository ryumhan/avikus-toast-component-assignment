export type Variant = "success" | "default";

export type RenderFunctionType = () => React.ReactElement;

export interface ToastProps {
  variant?: Variant;
  message?: string;
  duration?: number;
  render?: RenderFunctionType;
}

export interface ToastContextType extends ToastProps {
  toast: (next: ToastProps) => void;
}

export type ToastFuncType = (props: ToastProps) => void;

export interface ToastStackProps extends ToastProps {
  toastId: number;
}
