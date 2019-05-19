import React from "react";
import "./MainPage.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TestsPage = () => {
  return (


   
    <div class="TestsPage">
 
    choose a test:<br/>

    <Link to="/quiz">
   <button >
  Choose a test
   </button>
   </Link>

    </div>

  )
}
export default TestsPage;
