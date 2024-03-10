import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));


//provider is used to link our react code with redux

root.render(
 
  <BrowserRouter>
  <Provider  store={store}>
      <App />
      <Toaster></Toaster>
  </Provider>
</BrowserRouter>
 
);

