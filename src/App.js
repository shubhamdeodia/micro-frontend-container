import React from "react";
import Header from "./components/Header";
import MarketingApp from "marketing/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp routePrefix="/marketing" />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
