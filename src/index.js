import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import store, { history } from "./store.js";
import App from "./components/app.js";
import About from "./components/about.js";

console.log("react-redux-router-webpack-template");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
