import React, {Component} from "react";
import "./ResultPage.css";
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import classes from "./ResultPage.css";
import TestServices from '../../services/TestsServices'
import {connect} from 'react-redux'
import ResultTestItem from "./ResultTestItem/ResultTestItem";
import Header from "../Header/Header";


class ResultPage extends Component {
   handleFinishG(event) {
    // this.props.onAddResultData(this.state.result)
    // console.log(this.props.resultData.arrayAnsw)
    // console.log(this.props.answers)
    console.log(this.state.result.arrayAnsw[0])
    
  }
  state = {
    result: {},
    arrayAnsw:undefined
    }
  componentDidMount() {
  // const jsonArrayResult = JSON.parse(JSON.stringify(this.props.resultData))
    // this.state.result = this.props.resultData
    // console.log('mount')
    // // Object.assign(this.state.result, this.props.resultData);
    // console.log(this.state.result )
    // console.log(this.props.resultData)


    // const jsonArrayAnswers = await this.props.answers
    // const buf = await TestServices.postAnswers(jsonArrayAnswers)
    // this.setState({result: buf.data})
    // this.state.result = buf.data
    // console.log('test mount')
    // console.log(jsonArrayAnswers)
    // console.log( this.state.result.countTasks)
    // this.props.onAddResultData(this.state.result)
    //  this.setState({result: buf.data})
    this.setState({result:  this.props.resultData})
    // this.setState({arrayAnsw: undefined})
    if (this.props.resultData.arrayAnsw !== undefined) {
  this.setState({arrayAnsw:   this.props.resultData.arrayAnsw.sort(function(a, b) {
      return parseFloat(a.number) - parseFloat(b.number);
      
      
  })})
}
     

    //  this.setState(
       
    //  )
    //  this.state.arrayAnsw = this.state.result.arrayAnsw
  
    window.scrollTo(0, 0);
     console.log('sdsdsd')
     console.log(this.state.result)
     console.log(this.state.arrayAnsw)
     if (this.state.arrayAnsw !== undefined ) {
       
     }
    // this.props.onAddResultData(buf.data)
 
  }
 resultMain = () => {
   
 }
results = () => { if  (this.state.arrayAnsw !== undefined) {return this.state.arrayAnsw.map((name, index)  => {
    return (
      <div className={classes.testBlock_wrapper}>
        {/* переделать */}
        <ResultTestItem
          text={name.text}
          var1={name.var1}
          var2={name.var2}
          var3={name.var3}
          number={name.number}
          chosenAnsw={name.chosenAnsw}
          rightAnsw={name.rightAnsw}/></div>
    // <li onClick={() => this.ClickTestHandler(index)}  key={name._id}> 
    // {name._id}, Test №{name.number}
    // </li>
   
    )
  } )} else {
    return (
    <div>It looks like your answers are empty.</div>
    )
  }
}
  
  render() {
    return (
   
      <div >
        <Header text='Result'/>
      
        <div className={classes.main_page}  >
        <div className={classes.main_container}> 
           <div   className={classes.main_item} > 

            <div className={classes.content} >

     <div  onClick={event => this.handleFinishG(event)} > </div>  
     {this.state.arrayAnsw !== undefined ?
     <div>
      <div className={classes.mainText}> Your result: {(this.state.result.countRigthAnsw / this.props.questions_length)*100}%<br/> </div> 
    
   
       
       </div>
      : null
    }  
    { this.results() }
   
    </div> 
      
            </div>
          </div>
        </div>
      </div>

    )
    
  }
}
function mapStateToProps(state) {
  // const {resultData} = state
  return {
  resultData:state.resultData,
  answers: state.answers,
  questions_length:state.questions_length
  }
   
 }
 const mapDispachToProps = dispatch => {
  return {
    onAddResultData: (data) => dispatch({ type: "ADD_RESULT", value: data }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(ResultPage);

