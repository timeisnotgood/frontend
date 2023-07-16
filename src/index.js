import React from 'react';
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store'
import { Auth0Provider } from '@auth0/auth0-react';





const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain="timeisnotgood.us.auth0.com"
    clientId="IJWybPBP4vvwaqGLHOK3ynXlgFUrswGA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App/>
  </Auth0Provider>
);
