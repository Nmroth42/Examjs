import React, {Component} from "react";
import "./MainPage.css";
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import classes from "./MainPage.css";
import SongsService from '../../services/TestsServices'

class TestsPage extends Component {
  state = {
    tests: []
  }
  
  async componentDidMount() {
    // axios.get('http://localhost:8080/api/tests').then(res => {   console.log(res)
    // })
    const testsbuf = (await SongsService.getTests()).data;
    this.setState({tests: testsbuf})
    console.log(testsbuf)
  }
  ClickTestHandler = (testIndex) => {
    const tests = this.state.tests;
    console.log(tests[testIndex]._id)
    
  }
  showAlert  = () => {
    alert("Im an alert");
  }

  namesList = () => this.state.tests.map((name, index)  => {
    return (
      <Link to={'/quiz/' + name._id}>
    <li onClick={() => this.ClickTestHandler(index)}  key={name._id}> 
    {name._id}, Test №{name.number}
    </li>
    </Link>
    )
   
  })
  render() {
    return (
     
      
        <div className={classes.main_page}  >
        <div className={classes.main_container}> 
           <div   className={classes.main_item} > 

            <div className={classes.content} >

        choose a test:<br/> {/* <div>{tests}</div> */}
        
      
         <ul className={classes.test_chose_wrapper} >{ this.namesList() }</ul>
            </div>
          </div>
        </div>
      </div>

    )
    
  }
}
export default TestsPage;
