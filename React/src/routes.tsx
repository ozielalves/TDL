import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Intro} path="/" exact />
      <Route component={Home} path="/home" />
      <Route component={Register} path="/register" />
      <Route component={Login} path="/login" />
    </BrowserRouter>
  );
};

export default Routes;
