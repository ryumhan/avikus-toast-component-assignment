import { StyledButton } from "./styled";

interface Props {
  width?: number;
  height?: number;
  title: string;
  onClick: () => void;
}

const CommonButton = ({ width = 230, height = 53, title, onClick }: Props) => {
  return (
    <StyledButton
      style={{ width: width + "px", height: height + "px" }}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};

export default CommonButton;
