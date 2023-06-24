import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyleWrapper from "~/global-styles";
import App from "~/App";
import Toaster from "~/common/components/toaster";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyleWrapper />
    <Toaster position={"bottom-right"}>
      <App />
    </Toaster>
  </React.StrictMode>
);
