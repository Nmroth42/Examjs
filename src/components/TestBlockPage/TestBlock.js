import React, {Component, useState, useContext, createContext} from "react";
import classes from "./TestBlock.css";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TestItem from "./TestItem/TestItem";
import NavBar from "./NavBar/NavBar";
import ScrollButton from "./ScrollToTopBtn/Btn";
import TestServices from '../../services/TestsServices'
// import AnswerDataProvider from './AnswerDataContext'
import {connect} from 'react-redux'


class TestBlock extends Component {
  state = {
    questions: []
  }

  //  val = useContext(AnswerDataContext)
  
  async componentDidMount() {
    this.props.clearAnswers()
    console.log(this.props);
   console.log(this.props.match.params.id);
   if (this.props.match.params.id) {
    const questions = (await TestServices.getQuestions(this.props.match.params.id)).data;
    this.setState({questions: questions})
    console.log(questions)

    this.props.onAddQuestionsLength(this.state.questions.length)
   }
  }
  questions = () => this.state.questions.map((name, index)  => {
    
   
    return (
      
      <div className={classes.testBlock_wrapper}>
        {/* переделать */}
          
        <TestItem
          index={index + 1}
          question={name.text}
          answ1={name.var1}
          answ2={name.var2}
          answ3={name.var3}
          taskId={name._id}/></div>
    // <li onClick={() => this.ClickTestHandler(index)}  key={name._id}> 
    // {name._id}, Test №{name.number}
    // </li>
   
    )
   
   
  })

render() {
  return (
     
    <div className={classes.TestBlock}>
    
<div className={classes.main_container}> 

<div   className={classes.main_item} > 

   
      <NavBar/>
      
      { this.questions() }
     

      <div className={classes.btn_bottom}>

        <ScrollButton scrollStepInPx="40" delayInMs="16.66"/>
      </div>

    </div>

    </div>
        </div>
      

  )
  }
}
const mapDispachToProps = dispatch => {
  return {
    onAddQuestionsLength: (data) => dispatch({ type: "ADD_CURRENT_QUEST_LENGTH", value: data }),
    clearAnswers: () => dispatch({ type: "CLEAR_ANSWER", }),
  };
};
// function locationHashChanged() {
//   if (location.hash === '#cool-feature') {
//     console.log("You're visiting a cool feature!");
//   }
// }
// window.addEventListener("hashchange", function() {console.log(this.location.hash)});
// window.onhashchange = locationHashChanged;
export default connect(null, mapDispachToProps)(TestBlock);