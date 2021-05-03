import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    
    super(props)

    this.state = {
      task_list: [],
      task: {
        name: "",
        value: 0,
        cost: 0,
      }
    }
  }

  

  render(){
    return (
      <div className="App">
        <div className="Form">
          <input type="text" onChange={(event) => {this.setState({task: {...this.state.task, name: event.target.value}})}}></input>
          <input type="text" onChange={(event) => {this.setState({task: {...this.state.task, value: event.target.value}})}}></input>
          <input type="text" onChange={(event) => {this.setState({task: {...this.state.task, cost: event.target.value}})}}></input>
          <input type="button" value="add" onClick={() => {
              this.state.task_list.push(this.state.task)
              console.log(this.state.task_list)
            }}></input>
          <h4>{this.state.task_name}</h4>
          <h4>{this.state.task_value}</h4>
          <h4>{this.state.task_cost}</h4>
        </div>
        <div className="List">
        </div>
      </div>
    );
  }
}

export default App;
