import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./thems/default";

import App from "./components/app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
