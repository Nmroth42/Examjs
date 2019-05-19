import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestBlock from './components/TestBlock/TestBlock';
import MainPage from './components/MainPage/MainPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link , Switch} from 'react-router-dom';
ReactDOM.render( <Router>   
                     <Route  exact path='/' component={MainPage} />
                     <Route  path='/quiz' component={TestBlock} />
                 </Router>,
                document.getElementById('root'));
serviceWorker.unregister();
