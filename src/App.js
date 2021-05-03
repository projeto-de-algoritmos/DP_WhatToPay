import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    
    super(props)

    this.state = {
      task_list: [],
      task_name: "",
      task_value: "",
      task_cost: "",
    }

    this.addTaskList = this.addTaskList.bind(this)
  }

  addTaskList(){
    var task = {
      name: this.state.task_name,
      value: this.state.task_value,
      cost: this.state.task_cost
    }

    this.state.task_list.push(task)

    console.log(this.state.task_list)
  }

  render(){
    return (
      <div className="App">
        <div className="Form">
          <input type="text" onChange={(event) => {this.setState({task_name: event.target.value})}}></input>
          <input type="text" onChange={(event) => {this.setState({task_value: event.target.value})}}></input>
          <input type="text" onChange={(event) => {this.setState({task_cost: event.target.value})}}></input>
          <input type="button" value="add" onClick={() => this.addTaskList()}></input>
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
