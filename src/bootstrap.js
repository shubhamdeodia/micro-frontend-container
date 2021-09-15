import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthClient } from '@yoga/auth-utils'

const authClient = new AuthClient({
    realm: 'NuanceCustomers',
    clientId: 'test-client',
    url: 'https://mtl-neam-kc01.nuance.com:8443/auth/'
})

const renderApp = () => {
    ReactDOM.render(<App authClient={authClient}/>, document.querySelector('#root'));
}

authClient.init(renderApp)
