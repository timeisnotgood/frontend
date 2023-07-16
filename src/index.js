import React from 'react';
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store'



const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <App/>
);
