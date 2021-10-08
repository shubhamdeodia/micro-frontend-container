import React from "react";
import Header from "./components/Header";
import MarketingApp from "marketing/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Todo from "./Todo";
import kcService from "./KcService";
const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Todo kcService={kcService} />
          <MarketingApp routePrefix="/marketing" />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
