import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const navBar = (props) => {
  return (

    <div class="navBar">
     <Link to="/">
   <button >
  Choose a test
   </button>
   </Link>

  
   <button >
   Finish the test
   </button>
  



    </div>

  )
}
export default navBar;
