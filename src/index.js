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
  HashRouter,
  Route,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/result" component={ResultPage} />
      <Route path="/quiz/:id" component={TestBlock} />
      {/* <HashRouter path="/" render={() => <Redirect to="/" />} /> */}
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
