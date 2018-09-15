import React, { Component } from "react";

class AddForm extends Component {
  inputRefText = React.createRef();
  inputRefDate = React.createRef();
  inputRefImportant = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const tarea = {
      id: Date.now(),
      name: this.inputRefText.current.value,
      date: this.inputRefDate.current.value,
      important: this.inputRefImportant.current.checked,
      status: "pendiente"
    };
    if (tarea.name !== "") {
      this.props.onCreateToDo(tarea);
      this.inputRefText.current.value = "";
      this.inputRefDate.current.value = "";
      this.inputRefImportant.current.checked = false;
    }
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputText" className="sr-only">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            name="inputText"
            id="inputText"
            ref={this.inputRefText}
            placeholder="Tarea por hacer"
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputDate" className="sr-only">
            Fecha
          </label>
          <input
            type="date"
            className="form-control"
            id="inputDate"
            ref={this.inputRefDate}
            name="inputDate"
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="inputImportant"
            ref={this.inputRefImportant}
          />
          <label className="form-check-label">Importante?</label>
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Confirmar
        </button>
      </form>
    );
  }
}

export default AddForm;
