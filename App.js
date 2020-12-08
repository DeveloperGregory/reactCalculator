import React from "react"
import './App.css';


const Title = () => ({
  render(){
    return (<div id='title' className='text-center'>React Calculator App</div>)
  }
});

class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formula : ""
    }
  }
  render(){
    return (<div id='display' className='text-center'></div>)
  }
}

class EntryBtns extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div id='the-buttons' className='row'>
      <button id='clear' className='calc-buttons col-sm-9'>AC</button>
      <button id='divide' className='calc-buttons col-sm-3'><i class="fas fa-divide"></i></button>
      <button id='seven' className='calc-buttons col-sm-3'>7</button>
      <button id='eight' className='calc-buttons col-sm-3'>8</button>
      <button id='nine' className='calc-buttons col-sm-3'>9</button>
      <button id='multiply' className='calc-buttons col-sm-3'>X</button>
      <button id='four' className='calc-buttons col-sm-3'>4</button>
      <button id='five' className='calc-buttons col-sm-3'>5</button>
      <button id='six' className='calc-buttons col-sm-3'>6</button>
      <button id='subtract' className='calc-buttons col-sm-3'>-</button>
      <button id='one' className='calc-buttons col-sm-3'>1</button>
      <button id='two' className='calc-buttons col-sm-3'>2</button>
      <button id='three' className='calc-buttons col-sm-3'>3</button>
      <button id='add' className='calc-buttons col-sm-3'>+</button>
      <button id='zero' className='calc-buttons col-sm-6'>0</button>
      <button id='decimal' className='calc-buttons col-sm-3'>.</button>
      <button id='equals' className='calc-buttons col-sm-3'>=</button>
    </div>)
  }
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div id='calc-container' className='container'>
      <Display />
      <EntryBtns />
    </div>)
  }
}


function App() {
  return (<div>
    <Title />
    <Calculator />
  </div>
    
  );
}

export default App;
