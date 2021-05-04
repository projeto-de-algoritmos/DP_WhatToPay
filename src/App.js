import './App.css';
import ListItem from './components/ListItem.js'
import React, {Component} from 'react';

function max(a, b){
  return (a > b? a : b);
}

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
      },
      message: "",
      weight: 0,
    }

    this.addNewTasks = this.addNewTasks.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.knapsack = this.knapsack.bind(this)
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

  knapsack(){
    const tasks = Array.from(this.state.task_list)
    const n = tasks.length, W = this.state.weight

    let K = new Array(n+1);
    let i, w = Number();

    for (i = 0; i < K.length; i++) {
      K[i] = new Array(W+1)
      for (w = 0; w < W; w++){
        K[i][w] = -1;
      }
    }

    for (i = 0; i <= n; i++) {
      for (w = 0; w <= W; w++){
        if (i === 0 || w === 0)
          K[i][w] = 0
        else if (tasks[i-1].cost <= w) 
          K[i][w] = max(Number(K[i-1][w - tasks[i-1].cost]) + Number(tasks[i-1].value), K[i-1][w]);
        else
          K[i][w] = K[i-1][w];
      }
    }

    let best;
    let res = new Number(K[n][W]);
    res = K[n][W]
    best = []
    w = W

    for (i = n; res > 0 && i > 0; i--){
      console.log(res, w, tasks[i-1])
      if (res === K[i-1][w])
        continue
      else {
        best.push(tasks[i-1])
        res -= tasks[i-1].value
        w -= tasks[i-1].cost
      }
    }

    const task_list = Array.from(best)
    const message = "Knapsack feito"
    this.setState({task_list})
    this.setState({message})
  }

  render(){
    return (
      <div className="App">
        <h1>WhatToPay</h1>
        <div id="first-input">
          <input type="text" placeHolder="Dinheiro disponivel" onChange={(event) => this.setState({weight: event.target.value})}></input>
        </div>
        <div className="Form">
          <input type="text" placeHolder="Nome da tarefa" onChange={(event) => {this.setState({task: {...this.state.task, name: event.target.value}})}}></input> {/* Inserir o nome da conta*/}
          <input type="text" placeHolder="Valor de retorno" onChange={(event) => {this.setState({task: {...this.state.task, value: event.target.value}})}}></input> {/*Inserir valor de benefício*/}
          <input type="text" placeHolder="Custo da tarefa" onChange={(event) => {this.setState({task: {...this.state.task, cost: event.target.value}})}}></input> {/*Inserir custo da conta*/}
          <input type="button" value="ADICIONAR" onClick={() => this.addNewTasks(this.state.task)}></input>
        </div>
          {this.state.task_list.map(({id, name}, index) => (
            <ListItem
              key={id}
              value={name}
              onDelete={() => this.deleteTask(index)}
            />
          ))}
          <input type="button" onClick={() => this.knapsack()} value="KNAPSACK IT" id="knap"></input>
          <h4>{this.state.message}</h4>
      </div>
    );
  }
}

export default App;
