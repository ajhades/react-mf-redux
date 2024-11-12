import React from "react";

function TodoItem({ name, onDelete }) {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <span className="mx-2">{name}</span>
      <button className="btn btn-danger" onClick={onDelete}>
        eliminar
      </button>
    </div>
  );
}

export default TodoItem;
