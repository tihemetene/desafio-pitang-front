import React from 'react';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home,
    visible: false,
  },
  ];
  
  const Routes = () => (
    <div>
        <BrowserRouter />
    </div>
  );

  export default Routes;
  