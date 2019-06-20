import React from "react";
import classes from "./NavBar.css";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const navBar = (props) => {
  return (

    <div className={classes.navBar}>
      <Link to="/">
        <button >
          Main
        </button>
      </Link>

      <Link to="/">
        <button >
          Finish
        </button>
      </Link>

    </div>

  )
}
export default navBar;
