import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestBlock from './components/TestBlockPage/TestBlock';
import MainPage from './components/MainPage/MainPage';
import ResultPage from './components/ResultPage/ResultPage';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { createStore } from "redux";
import store from './store/index'
import { BrowserRouter as Router, Route, Link , Switch, Redirect} from 'react-router-dom';


ReactDOM.render( <Provider store={store}><Router>   
                     <Route  exact path='/main' component={MainPage} />
                     <Route  exact path='/result' component={ResultPage} />
                     <Route  path='/quiz/:id' component={TestBlock} />
                     <Route exact path="/" render={() => (<Redirect to="/main" />)} /> 
                 </Router></Provider>,
                document.getElementById('root'));
serviceWorker.unregister();
