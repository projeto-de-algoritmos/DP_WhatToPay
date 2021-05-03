import './App.css';
import ListItem from './components/ListItem.js'
import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    
    super(props)

    this.state = {
      task_list: [],
      task: {
        id: 0,
        name: "",
        value: 0,
        cost: 0,
      }
    }

    this.addNewTasks = this.addNewTasks.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  addNewTasks(task){
    const task_list = Array.from(this.state.task_list);
    task_list.push({...task, id: this.state.task_list.length});
    this.setState({task_list});
  }

  deleteTask(index){
    const task_list = Array.from(this.state.task_list);
    task_list.splice(index, 1)
    this.setState({task_list})
  }

  render(){
    return (
      <div className="App">
        <div className="Form">
          <input type="text" onChange={(event) => {this.setState({task: {...this.state.task, name: event.target.value}})}}></input>
          <input type="text" onChange={(event) => {this.setState({task: {...this.state.task, value: event.target.value}})}}></input>
          <input type="text" onChange={(event) => {this.setState({task: {...this.state.task, cost: event.target.value}})}}></input>
          <input type="button" value="add" onClick={() => this.addNewTasks(this.state.task)}></input>
          {this.state.task_list.map(({id, name}, index) => (
            <ListItem
              key={id}
              value={name}
              onDelete={() => this.deleteTask(index)}
            />
          ))}
        </div>
        <div className="List">
        </div>
      </div>
    );
  }
}

export default App;
