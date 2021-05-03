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
  }


  render(){
    return (
      <div className="App">
        <div className="Form">
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <input type="button" value="add"></input>
        </div>
        <div className="List">
        </div>
      </div>
    );
  }
}

export default App;
