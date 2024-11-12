import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/todos/reducer";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <ul className="list-group">
        {todos?.map((item) => (
          <TodoItem
            key={item.name}
            name={item.name}
            onDelete={() => dispatch(deleteTodo(item.id))}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
