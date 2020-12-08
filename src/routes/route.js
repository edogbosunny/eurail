import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../component/home';
import * as redux from 'react-redux'



import store from '../store';

export const routes = () => (

  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  </ Provider>
);

export default routes;