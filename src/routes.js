import React from 'react';
import { 
  BrowserRouter, 
  Route 
} from 'react-router-dom'; 
import {
  HOME
} from 'utils/constants';
import Home from 'modules/home';

function Routes() {
  return (
    <BrowserRouter>
      <Route path={HOME} exact component={Home}/>
    </BrowserRouter>
  );
}

export default Routes;
