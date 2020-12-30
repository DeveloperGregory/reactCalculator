import React from "react"
import './App.css';

// A constant for the title
const Title = () => ({
  render(){
    return (<div id='title' className='text-center'>React Calculator App</div>)
  }
});

//The calculator component that holds all the state
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: "0",
      allowPeriod: true,
      newEq: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  //Clears the display when "AC" is clicked
  clearDisplay(){
    this.setState({display: "0", allowPeriod: true, newEq: false});
  }
  //Handles the user button clicks
  handleClick(input){
    let newDisplay = this.state.display;
    let usePeriod = this.state.allowPeriod;
    let resetEq = this.state.newEq;
    //checks to see if there was a math symbol previously and overrides it if a new one is inputted
    newDisplay = (/\+|\*|\//.test(newDisplay[newDisplay.length-1]) && /\+|\*|\//.test(input)) ? newDisplay.slice(0,newDisplay.length-1) : newDisplay;
    
    //resets the display if a number is pressed after a formula has been solved
    if(/[0-9]|\./.test(input) && resetEq){
      resetEq = false;
      newDisplay = "";
      usePeriod = true;
    }  

    //if the rest variable is true set it to false
    if(resetEq){
      resetEq = false;
    }

    //When the equals button is pressed do the calculations and set the variable resetEq to true
    if(input == '='){
      newDisplay = new Function('return ' + newDisplay)();
      input = "";
      resetEq = true;
    }
    
    //If multiple zeroes are attempted at the front of the equation prevent it
    if(this.state.display == "0"){
      if(input == '0'){
        input = "";
      }else{
        newDisplay = "";
      }
    //stops multiple decimals in same number
    }else if (input =='.'){
      if (this.state.allowPeriod){
        input = '.';
        usePeriod = false;
      }else{
        input = '';
        usePeriod = false;
      }
    //lets the state know that this is a new number
    }else if(/\+|\-|\*|\//.test(input)){
      usePeriod = true;
    }
    
    //sets the state for the component
    this.setState({display: newDisplay + input, allowPeriod: usePeriod, newEq: resetEq});
  }
  render(){
    return (<div id='calc-container' className='container'>
      <div className='row'>
        <div id='display' className='text-right col-sm-12'>{this.state.display}</div>
      </div>
      <div id='the-buttons' className='row'>
        <button id='clear' className='calc-buttons col-sm-9 red' onClick={this.clearDisplay}>AC</button>
        <button id='divide' className='calc-buttons col-sm-3 blue' onClick={() => {this.handleClick("/")}}><i class="fas fa-divide"></i></button>
        <button id='seven' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("7")}}>7</button>
        <button id='eight' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("8")}}>8</button>
        <button id='nine' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("9")}}>9</button>
        <button id='multiply' className='calc-buttons col-sm-3 blue' onClick={() => {this.handleClick("*")}}>X</button>
        <button id='four' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("4")}}>4</button>
        <button id='five' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("5")}}>5</button>
        <button id='six' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("6")}}>6</button>
        <button id='subtract' className='calc-buttons col-sm-3 blue' onClick={() => {this.handleClick("-")}}>-</button>
        <button id='one' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("1")}}>1</button>
        <button id='two' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("2")}}>2</button>
        <button id='three' className='calc-buttons col-sm-3' onClick={() => {this.handleClick("3")}}>3</button>
        <button id='add' className='calc-buttons col-sm-3 blue' onClick={() => {this.handleClick("+")}}>+</button>
        <button id='zero' className='calc-buttons col-sm-6'onClick={() => {this.handleClick("0")}}>0</button>
        <button id='decimal' className='calc-buttons col-sm-3' onClick={() => {this.handleClick(".")}}>.</button>
        <button id='equals' className='calc-buttons col-sm-3 blue' onClick={() => {this.handleClick("=")}}>=</button>
      </div>
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

