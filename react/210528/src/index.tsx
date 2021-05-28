import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import B from "./B";
import { NumProvider } from "./hooks/useNum";

ReactDOM.render(
  <React.StrictMode>
    <NumProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/b" component={B} exact />
        </Switch>
      </BrowserRouter>
    </NumProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
