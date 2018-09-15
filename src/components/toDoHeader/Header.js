import React, { Component } from "react";
import TitleToDo from "./TitleToDo";
import AddForm from "./AddForm";

class Header extends Component {
  handleCreateToDo = tarea => {
    this.props.toDoToContainer(tarea);
  };

  render() {
    return (
      <div className="col-md-12 px-0">
        <TitleToDo />
        <AddForm onCreateToDo={this.handleCreateToDo} />
      </div>
    );
  }
}
export default Header;
