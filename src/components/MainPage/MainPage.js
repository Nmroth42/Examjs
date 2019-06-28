import React, { Component } from "react";
import "./MainPage.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import classes from "./MainPage.css";
import TestServices from "../../services/TestsServices";
import Header from "../Header/Header";

class TestsPage extends Component {
  state = {
    tests: []
  };

  async componentDidMount() {
    // axios.get('http://localhost:8080/api/tests').then(res => {   console.log(res)
    // })
    const testsbuf = (await TestServices.getTests()).data;
    this.setState({ tests: testsbuf });
    // console.log(this.props.location.pathname);
    console.log(testsbuf);
  }
  // ClickTestHandler = testIndex => {
  //   const tests = this.state.tests;
  //   console.log(tests[testIndex]._id);
  // };
  // showAlert = () => {
  //   alert("Im an alert");
  // };

  namesList = () =>
    this.state.tests.map((name, index) => {
      return (
        // onClick={() => this.ClickTestHandler(index)}
        <li key={name._id}>
          <Link to={"/quiz/" + name._id}>
            {/* {name._id}, Test №{name.number} */} test 1
          </Link>
        </li>
      );
    });
  render() {
    return (
      <div>
          <Header text='Choose a test'/>
        <div className={classes.main_wrap}>
          <div className={classes.main_container}>
            <div className={classes.main_item}>
              <div className={classes.content}>
              
              
               
                JavaScript in web technologies
                <br />
                <ul className={classes.test_chose_wrapper}>
                  {this.namesList()}
                </ul>
                Vue.js
                <br />
                <ul className={classes.test_chose_wrapper}>
                  {this.namesList()}
                </ul>
                React.js
                <ul className={classes.test_chose_wrapper}>
                  {this.namesList()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TestsPage;
