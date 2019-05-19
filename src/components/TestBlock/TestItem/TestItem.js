import React from "react";
import "./TestItem.css";

const testBlock = (props) => {
  return (
    <div className="test_block">
    <p>
    {props.question}
    </p>

    <form action="">

    <div className="r0">
    <input type="radio" id={props.taskId+'_answ1'} className="Input" name="answer" value="male"/>
    <label for={props.taskId+'_answ1'}>{props.answ1}</label>
    <br/>
    </div>

    <div className="r0">
    <input type="radio"  id={props.taskId+'_answ2'} className="Input" name="answer" value="female"/>
    <label for={props.taskId+'_answ2'}>{props.answ2}</label>
    <br/>
    </div>

    <div className="r0">
    <input type="radio"  id={props.taskId+'_answ3'} className="Input" name="answer" value="other"/>
    <label for={props.taskId+'_answ3'}>{props.answ3}</label>
    <br/>
    </div>
 
    </form>
    </div>
  )
}

export default testBlock;
