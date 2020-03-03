import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
