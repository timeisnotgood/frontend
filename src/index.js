import React from 'react';
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store'
import { Auth0Provider } from '@auth0/auth0-react';




const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <App/>
)