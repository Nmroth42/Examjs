import React, { Component } from "react";
// import "./Header.css";
import classes from "./Header.css";
class Header extends Component {
    render() {
        return (
         
            <div className={classes.upper_wrap}>
              <div className={classes.header}>{this.props.text} </div>
             
            </div>
            )
            }

}
export default Header;