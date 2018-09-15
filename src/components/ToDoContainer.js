import React, { Component } from "react";
import Header from "./toDoHeader/Header";
import ToDoList from "./toDoBody/ToDoList";

class ToDoContainer extends Component {
  handleClickFilter = event => {
    event.preventDefault();
    this.props.toDoFilter(event.target.dataset.ptype);
  };

  toDoToCreateContainer = tarea => {
    this.props.toDoCreateApp(tarea);
  };

  handleDeleteItemContainer = id => {
    this.props.toDoDelete(id);
  };

  handleChangeItemContainer = toDo => {
    this.props.toDoChange(toDo);
  };

  render() {
    let filteredActive = this.props.toFiltered;
    let all = "";
    let done = "";
    let pending = "";
    const classActive = "filtered--selected";

    if (filteredActive === "all") {
      all = classActive;
    } else if (filteredActive === "done") {
      done = classActive;
    } else {
      pending = classActive;
    }
    return (
      <div className="container">
        <header className="blog-header py-3" />

        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <Header toDoToContainer={this.toDoToCreateContainer} />
        </div>

        <main role="main" className="container">
          <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
              <a
                className={`p-2 text-muted ${all}`}
                data-ptype="all"
                onClick={this.handleClickFilter}
              >
                ALL
              </a>
              <a
                className={`p-2 text-muted ${pending}`}
                data-ptype="pendiente"
                onClick={this.handleClickFilter}
              >
                TO DO
              </a>
              <a
                className={`p-2 text-muted ${done}`}
                data-ptype="done"
                onClick={this.handleClickFilter}
              >
                DONE
              </a>
            </nav>
          </div>

          <div className="row mb-2">
            <ToDoList
              toDos={this.props.toDos}
              handleSubmit={this.handleSubmit}
              onDeleteContainer={this.handleDeleteItemContainer}
              onChangeContainer={this.handleChangeItemContainer}
            />
          </div>
        </main>
      </div>
    );
  }
}
export default ToDoContainer;
