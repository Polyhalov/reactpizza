import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from 'components/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='reactpizza'>
      <App/>
    </BrowserRouter>
    </Provider>
    
  // </React.StrictMode>
);
