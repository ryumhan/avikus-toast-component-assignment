import { ToastProps } from "~/common/hook/useToast/useToast.type";
import CommonButton from "../common-button";
import useToast from "~/common/hook/useToast";

interface Props {
  title: string;
  toastProps: ToastProps;
}

const CommonToastButton = ({
  title,
  toastProps,
}: Props): React.ReactElement => {
  const toast = useToast();

  return (
    <CommonButton
      title={title}
      width={240}
      height={45}
      onClick={() => toast({ ...toastProps })}
    />
  );
};

export default CommonToastButton;
