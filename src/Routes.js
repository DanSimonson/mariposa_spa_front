import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Create from "./Create";
import Message from "./Message";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={Create} />
        <Route path="/message" exact component={Message} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
