import React, { Component } from "react";

class ToDo extends Component {
  handleClickDone = () => {
    const { toDo, onChangeList } = this.props;
    onChangeList(toDo);
  };

  handleClickDelete = () => {
    const { toDo, onDeleteList } = this.props;
    onDeleteList(toDo.id);
  };

  render() {
    const toDo = this.props.toDo;
    let claseImportant = toDo.important ? "body-important" : "body-pending";
    let claseDone = toDo.status !== "pendiente" ? "text-done" : "";
    let textoBoton =
      toDo.status === "pendiente"
        ? "Marcar cómo realizado"
        : "Aún está pendiente";
    return (
      <div className="col-md-3">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div
            className={`card-body d-flex flex-column align-items-start ${claseImportant}`}
          >
            <strong className="d-inline-block mb-2 text-primary">
              {toDo.status}
            </strong>
            <h3 className="mb-0">
              <a className={`text-dark ${claseDone}`}>{toDo.name}</a>
            </h3>
            <div className="mb-1 text-muted"> {toDo.date}</div>
            <button
              type="button"
              className="btn btn-outline-success left"
              onClick={this.handleClickDone}
            >
              {textoBoton}
            </button>
            <button
              type="button"
              className="btn btn-outline-danger right"
              onClick={this.handleClickDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ToDo;
