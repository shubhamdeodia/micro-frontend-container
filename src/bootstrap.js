import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import kcService from "./KcService";

kcService.initKeycloak(() =>
  ReactDOM.render(<App />, document.getElementById("root"))
);
