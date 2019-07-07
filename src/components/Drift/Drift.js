import React, { Component } from "react";
import classes from "./Drift.css";

class Drift extends Component {
  render() {
    return (
      <div className={classes.upper_wrap}>
        <div className={classes.header}>{this.props.text} </div>
      </div>
    );
  }
}
export default Drift;
