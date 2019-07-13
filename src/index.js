import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TestBlock from "./components/TestBlockPage/TestBlock";
import MainPage from "./components/MainPage/MainPage";
import ResultPage from "./components/ResultPage/ResultPage";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/index";
import {
  BrowserRouter,
  Route,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/result" component={ResultPage} />
      <Route path="/quiz/:id" component={TestBlock} />
      <Route exact path="/" render={() => <Redirect to="/main" />} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
