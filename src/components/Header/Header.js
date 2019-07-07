import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className={classes.main_container}>
        <div className={classes.main_item}>
          <Link className={classes.content} to={"/main"}>
            ExamJS
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
