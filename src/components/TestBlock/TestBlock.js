import React from "react";
import "./TestBlock.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TestItem from "./TestItem/TestItem";
import NavBar from "./NavBar/NavBar";
import ScrollButton from "./ScrollToTopBtn/Btn";



const TestBlock = (props) => {
  return (

    <div className="TestBlock">
      <NavBar/>
   <div className="testBlock_wrapper">

<TestItem
  question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
imperdiet lacinia nisi ut iaculis. Morbi vulputate ipsum sit amet
sem posuere tincidunt. Nullam ullamcorper eu magna nec scelerisque.
Nullam mattis blandit nulla quis aliquet. Etiam placerat, enim sit
amet molestie ullamcorper, odio augue condimentum tellus, vitae
finibus ex purus id lectus. Sed eu interdum ex, nec cursus nulla.
Etiam convallis lacus nec nulla varius finibus. Proin diam mi,
varius sit amet lobortis non, tristique nec ligula."
  answ1="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas imperdiet lacinia nisi ut iaculis. Morbi vulputate ipsum sit amet sem
posuere tincidunt. Nullam ullamcorper eu magna nec scelerisque. Nullam mattis blandit
nulla quis aliquet. Etiam placerat, enim sit amet molestie ullamcorper, odio augue
 condimentum tellus, vitae finibus ex purus id lectus."
  answ2="lacinia nisi ut iaculis. Morbi vulputate ipsum sit amet sem
posuere tincidunt. Nullam ullamcorper eu magna nec scelerisque. Nullam mattis blandit
nulla quis aliquet. Etiam placerat, enim sit amet molestie ullamcorper, odio augue
 condimentum tellus, vitae finibus ex purus id lectus."
  answ3=" Nullam mattis blandit
nulla quis aliquet. Etiam placerat, enim sit amet molestie ullamcorper, odio augue
 condimentum tellus, vitae finibus ex purus id lectus."
    taskId="1"
/></div>
  <div className="testBlock_wrapper">
<TestItem
  question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
imperdiet lacinia nisi ut iaculis. Morbi vulputate ipsum sit amet
sem posuere tincidunt."
  answ1="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Maecenas imperdiet lacinia nisi ut iaculis. Morbi vulputate ipsum sit amet sem
posuere tincidunt. Nullam ullamcorper eu magna nec scelerisque. Nullam mattis blandit
nulla quis aliquet. Etiam placerat, enim sit amet molestie ullamcorper, odio augue
 condimentum tellus, vitae finibus ex purus id lectus."
  answ2="lacinia nisi ut iaculis. Morbi vulputate ipsum sit amet sem
posuere tincidunt. Nullam ullamcorper eu magna nec scelerisque. Nullam mattis blandit
nulla quis aliquet. Etiam placerat, enim sit amet molestie ullamcorper, odio augue
 condimentum tellus, vitae finibus ex purus id lectus."
  answ3=" Nullam mattis blandit
nulla quis aliquet. Etiam placerat, enim sit amet molestie ullamcorper, odio augue
 condimentum tellus, vitae finibus ex purus id lectus."
 taskId="2"
/>
  </div>

    <div class="btn-bottom">

   <ScrollButton scrollStepInPx="40" delayInMs="16.66"/>
   </div>

    </div>

  )
}
export default TestBlock;