import React, { Component } from "react";
import ToDoContainer from "./components/ToDoContainer";

import "./App.css";

class App extends Component {
  state = {
    type: "all",
    toDos: [
      {
        id: Date.now(),
        name: "Terminar el laboratorio",
        status: "done",
        important: true,
        date: "15/09/2018"
      }
    ]
  };

  handleCreateToDo = tarea => {
    const allToDos = [...this.state.toDos, tarea];
    this.setState({
      toDos: allToDos
    });
  };

  handleDeleteToDo = id => {
    const allTodos = this.state.toDos.filter(tarea => tarea.id !== id);
    this.setState({
      toDos: allTodos
    });
  };

  handleChangeToDo = toDoEvent => {
    let changeStatus = toDoEvent.status === "pendiente" ? "done" : "pendiente";
    const allTodos = this.state.toDos.map(toDo => {
      if (toDo.id === toDoEvent.id) {
        toDo.status = changeStatus;
      }
      return toDo;
    });

    this.setState({
      toDos: allTodos
    });
  };

  handleFiltered = tipo => {
    const d = this.filterList(tipo);
    if (d) {
      this.setState({
        type: tipo
      });
    }
  };

  filterList = tipo => {
    return this.state.toDos.filter(element => {
      if (tipo === "all") {
        return element;
      } else if (element.status === tipo) {
        return element;
      }
    });
  };

  render() {
    return (
      <div className="App">
        <ToDoContainer
          toDos={this.filterList(this.state.type)}
          toDoCreateApp={this.handleCreateToDo}
          toDoDelete={this.handleDeleteToDo}
          toDoChange={this.handleChangeToDo}
          toDoFilter={this.handleFiltered}
          toFiltered={this.state.type}
        />
      </div>
    );
  }
}

export default App;
