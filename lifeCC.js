import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router";

//import Passprops from "./compo.js"
import './App.css';

/*export default class App extends Component{
  Alert = ()=>{
    alert("Test One")
  }
  render(){
    return (<Passprops name="Hello" handleAlert={this.Alert}/>
    );
  }
}
class Passprops extends Component{

  render (){
  return (
    <div>
    <h1>!!!:{this.props.name}</h1>
    <button onClick={this.props.handleAlert}>Click</button>
    </div>
    )
  }
}

export default class TestState extends Component{
  constructor (probs){
    super(probs);
    this.state ={
      name: "",
      name2: "Test2",
      input: "",
        inputList:[
          {name:"SSD",price:1500},
          {name: "RAM",price:2000}
        ]
    };
  }
  change = ()=>{
    this.setState(
      {
        name: "New State",
        name2: "ก็บอกว่า New State ไง"
      }
    );
  }
  componentWillMount(){
    if(this.state.name === ""){
      this.setState({
        name: 'not value'
      })
    }
    else{ 
        this.setState({
          name: 'Hello'
        })
    }
  }
  componentWillReceiveProps(nextPorps){
    if(nextPorps.name !== this.props.name){
      this.setState({
        name: nextPorps.name
      
      })
      
    }
  }
  shouldComponentUpdate(nextPorps){
    if(nextPorps.name !== this.props.name){
      return true
    }
  }
componentWillUnmount(){
  window.removeEventListener('scroll',this.name,false);
}
  render (){
    return(
      <div>

    <h1>Item: {this.state.inputList[0].name} Price: {this.state.inputList[0].price}</h1>
    <h1>Item: {this.state.inputList[1].name} Price: {this.state.inputList[1].price}</h1>
    <hr/>

    <Passprops name={this.state.name}/>
    <Passprops name2={this.state.name2}/>

    <hr />
    <button onClick={this.change}>Change</button>
    </div>
    );
  }
}
class Passprops extends Component{

  render (){
  return (
    <div>
    <h1>!!! :   {this.props.name}</h1>
   
    </div>
    )
  }
}*/

export default class lifeCC extends Component{
    constructor(props){
      super(props);
      this.state = {
        count: 0,
        message: 'Clck Me'
      };
      console.log("Constructor Called");
    }
    /*componentWillUpdate(NewProps,NewState){
      console.log("Called before the render Method()");
      console.log("NewProps",NewProps);
      console.log("NewState",NewState);
    }
    componentDidUpdate(preProps,preState){
      console.log("Called before the render Method()");
      console.log("preProps",preProps);
      console.log("preState",preState);
    }*/
    onClick = () => {
      this.setState({
        count: this.state.count +1,
        message: "Clicked"
      });
    };
    render(){
      return(
        <div className="App bot" >
          <h5 >{this.state.count}</h5>
          <button onClick={this.onClick} >
            {this.state.message}
          </button>
          <h6 >
            <Logger time={this.state.count}/>
          </h6>
        </div>
      )
    }
  }
  
  class Logger extends Component {
    componentWillReceiveProps(NewProps){
      console.log("is Triggered",NewProps);
    }
    render(){
      return this.props.time;
    }
  }