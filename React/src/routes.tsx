import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

/* import Intro from './pages/Intro'; */
import Home from './pages/Home';

const Routes = () => {
  return(
    <BrowserRouter>
      {/* <Route component={Intro} path="/" exact/> */}
      <Route component={Home} path="/" exact/>
    </BrowserRouter>
  );
}

export default Routes;