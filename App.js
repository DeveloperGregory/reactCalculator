import React from "react"
import './App.css';


const Title = () => ({
  render(){
    return (<div id='title' className='text-center'>React Calculator App</div>)
  }
});

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  clearDisplay(){
    this.setState({display: ""});
  }
  handleClick(input){
    let newDisplay = ''
    if(input == '='){
      newDisplay = new Function('return ' + this.state.display)();
      input = "";
    }else if (this.state.display == 0 && input == 0){
      input ="";
    }else{
      newDisplay = this.state.display;
    }
    this.setState({display: newDisplay + input})
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

