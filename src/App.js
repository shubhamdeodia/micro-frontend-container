import React, { useEffect } from 'react';
import Header from './components/Header';
import MarketingApp from 'marketing/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import Config from "./config.json";
import { StylesProvider, createGenerateClassName } from '@mui/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: "mar",
});


// commit - 1
// commit - 3
// commit - 4
console.log(Config)

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
