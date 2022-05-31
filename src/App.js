import React, { useEffect } from 'react';
import Header from './components/Header';
import MarketingApp from 'marketing/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'con',
});



export default () => {

  useEffect(() => {
    fetch('./config.json"').then((res) => res.json()).then((data) => console.log(data))
  },[])

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
