import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
})


export default ({authClient}) => {
  
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header authClient={authClient} />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
