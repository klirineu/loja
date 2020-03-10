import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./auth/index";

import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
import A_s from "./pages/a_s/a_s";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/a_s" component={A_s} />
    </Switch>
  );
}
