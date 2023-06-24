import emotionReset from "emotion-reset";
import { css, Global } from "@emotion/react";
import { GlobalColor } from "~/common/style";

const GlobalStyle = css`
  ${emotionReset}

  * {
    font-family: SpoqaHanSansNeo !important;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    background-color: ${GlobalColor.globalBackground};
    width: 100%;
    height: 100%;
  }
`;

const GlobalStyleWrapper = (): React.ReactElement => {
  return <Global styles={GlobalStyle} />;
};

export default GlobalStyleWrapper;
