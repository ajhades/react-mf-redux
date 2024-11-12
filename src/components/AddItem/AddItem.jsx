import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todos/reducer";

function AddItem() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const onChange = ({ target }) => {
    setName(target.value);
  };
  const handleAdd = (name) => {
    if (name.trim() === "") return;
    if (todos.some((todo) => todo.name === name)) return;
    dispatch(addTodo(name));
    setName("");
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Agregar Item"
        value={name}
        onChange={onChange}
      />
      <button className="btn btn-primary" onClick={() => handleAdd(name)}>
        Agregar
      </button>
    </>
  );
}

export default AddItem;
