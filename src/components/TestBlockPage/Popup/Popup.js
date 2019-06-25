import React from 'react';
import './Popup.css';
import classes from "./Popup.css";

class Popup extends React.Component {
  render() {
    return (
      <div  className={classes.popup} >
        <div className={classes.popup_inner}>
        <span  onClick={this.props.closePopup} className={classes.close_button} >&times;</span>
          <p>{this.props.text}</p>
          
       
        </div>
      </div>
    );
  }
}

export default Popup;