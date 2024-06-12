import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ChannelContextProvider } from "./contexts/ChannelContext";

ReactDOM.render(
  <React.StrictMode>
    <ChannelContextProvider>
      <App />
    </ChannelContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
