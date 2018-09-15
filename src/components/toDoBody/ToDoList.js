import React, { Component } from "react";
import ToDo from "./ToDo";

class ToDoList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.toDos.length > 0
          ? this.renderList(this.props.toDos)
          : this.vacio()}
      </React.Fragment>
    );
  }

  handleDeleteItemList = id => {
    this.props.onDeleteContainer(id);
  };

  handleChangeItemList = toDo => {
    this.props.onChangeContainer(toDo);
  };

  vacio() {
    return <h2>Aún no ha agregado elementos</h2>;
  }

  renderList(toDos) {
    // Primero creamos la lista de list items
    const List = toDos.map(element => {
      return (
        <ToDo
          key={element.id}
          toDo={element}
          onDeleteList={this.handleDeleteItemList}
          onChangeList={this.handleChangeItemList}
        />
      );
    });
    return List;
  }
}

export default ToDoList;
